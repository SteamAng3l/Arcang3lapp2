import { Router, type IRouter } from "express";
import { sql, eq, notInArray } from "drizzle-orm";
import { db, versesTable } from "@workspace/db";
import {
  GetVerseBody,
  GetVerseResponse,
  GetCategoriesResponseItem,
  GetCategoriesResponse,
  GetRandomVerseResponse,
  GetVerseStatsResponseItem,
  GetVerseStatsResponse,
} from "@workspace/api-zod";
import {
  detectCategory,
  categoryMessages,
  categories,
  extractKeywords,
  enrichKeywords,
  scoreVerse,
  isJudgmentVerse,
  FEATURED_VERSES,
} from "../lib/verse-categories";

const router: IRouter = Router();

/**
 * Finds the most relevant verse for a user's problem text.
 * Supports excluded_ids to implement no-repeat logic.
 */
async function findBestVerse(
  problem: string,
  category: string,
  excludedIds: number[] = []
): Promise<{ id: number; category: string; verseReference: string; verseText: string } | null> {
  let allInCategory = await db
    .select()
    .from(versesTable)
    .where(eq(versesTable.category, category));

  if (allInCategory.length === 0) return null;

  // Apply no-repeat filter — if all are excluded, reset and use all
  let pool = excludedIds.length > 0
    ? allInCategory.filter((v) => !excludedIds.includes(v.id))
    : allInCategory;

  if (pool.length === 0) {
    // All verses in this category have been shown → reset
    pool = allInCategory;
  }

  // Exclude judgment/punishment passages
  const comforting = pool.filter((v) => !isJudgmentVerse(v.verseText));
  const safePool = comforting.length > 0 ? comforting : pool;

  // Build enriched search patterns
  const keywords = extractKeywords(problem);
  const patterns = enrichKeywords(keywords);

  // Score and select
  const scored = safePool.map((v) => ({
    ...v,
    score: scoreVerse(v.verseText, patterns),
  }));

  const maxScore = Math.max(...scored.map((v) => v.score));

  if (maxScore > 0) {
    const topGroup = scored.filter((v) => v.score === maxScore);
    const chosen = topGroup[Math.floor(Math.random() * topGroup.length)];
    return {
      id: chosen.id,
      category: chosen.category,
      verseReference: chosen.verseReference,
      verseText: chosen.verseText,
    };
  }

  // score=0 for all → use the featured "classic" verse for this category
  const featuredRef = FEATURED_VERSES[category];
  if (featuredRef) {
    // First try to find featured in the filtered pool
    const featured =
      safePool.find((v) => v.verseReference === featuredRef) ??
      allInCategory.find((v) => v.verseReference === featuredRef);
    if (featured) {
      return {
        id: featured.id,
        category: featured.category,
        verseReference: featured.verseReference,
        verseText: featured.verseText,
      };
    }
  }

  // Last resort: random from safe pool
  const rand = safePool[Math.floor(Math.random() * safePool.length)];
  return rand
    ? { id: rand.id, category: rand.category, verseReference: rand.verseReference, verseText: rand.verseText }
    : null;
}

router.post("/verse", async (req, res): Promise<void> => {
  const parsed = GetVerseBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Por favor escribe un problema o situación." });
    return;
  }

  const { problem, excluded_ids } = parsed.data;

  if (!problem || problem.trim() === "") {
    res.status(400).json({ error: "Por favor escribe un problema o situación." });
    return;
  }

  const detectedCategory = detectCategory(problem);
  const excludedIds = (excluded_ids ?? []).map(Number).filter((n) => !isNaN(n));
  const verse = await findBestVerse(problem.trim(), detectedCategory, excludedIds);

  if (!verse) {
    res.status(404).json({ error: "No se encontró un versículo para esa situación." });
    return;
  }

  const message = categoryMessages[verse.category] ?? categoryMessages["esperanza"];

  res.json(
    GetVerseResponse.parse({
      detected_category: verse.category,
      message,
      verse_reference: verse.verseReference,
      verse_text: verse.verseText,
      verse_id: verse.id,
    })
  );
});

router.get("/categories", async (req, res): Promise<void> => {
  const counts = await db
    .select({
      category: versesTable.category,
      count: sql<number>`COUNT(*)::int`,
    })
    .from(versesTable)
    .groupBy(versesTable.category);

  const countMap = Object.fromEntries(counts.map((r) => [r.category, r.count]));

  const result = categories.map((cat) =>
    GetCategoriesResponseItem.parse({
      category: cat.name,
      label: cat.label,
      verse_count: countMap[cat.name] ?? 0,
    })
  );

  res.json(GetCategoriesResponse.parse(result));
});

router.get("/verse/random", async (req, res): Promise<void> => {
  // Parse excluded_ids from comma-separated query string: ?excluded_ids=1,2,3
  const rawExcluded = typeof req.query.excluded_ids === "string" ? req.query.excluded_ids : "";
  const excludedIds = rawExcluded
    .split(",")
    .map((s) => parseInt(s.trim(), 10))
    .filter((n) => !isNaN(n) && n > 0);

  let rows;
  if (excludedIds.length > 0) {
    rows = await db
      .select()
      .from(versesTable)
      .where(notInArray(versesTable.id, excludedIds))
      .orderBy(sql`RANDOM()`)
      .limit(1);

    // If all verses are excluded, reset and pick any
    if (rows.length === 0) {
      rows = await db
        .select()
        .from(versesTable)
        .orderBy(sql`RANDOM()`)
        .limit(1);
    }
  } else {
    rows = await db
      .select()
      .from(versesTable)
      .orderBy(sql`RANDOM()`)
      .limit(1);
  }

  if (rows.length === 0) {
    res.status(404).json({ error: "No se encontraron versículos." });
    return;
  }

  const row = rows[0];
  const message = categoryMessages[row.category] ?? categoryMessages["esperanza"];

  res.json(
    GetRandomVerseResponse.parse({
      detected_category: row.category,
      message,
      verse_reference: row.verseReference,
      verse_text: row.verseText,
      verse_id: row.id,
    })
  );
});

router.get("/verse/stats", async (_req, res): Promise<void> => {
  const rows = await db
    .select({
      category: versesTable.category,
      count: sql<number>`COUNT(*)::int`,
    })
    .from(versesTable)
    .groupBy(versesTable.category)
    .orderBy(versesTable.category);

  res.json(GetVerseStatsResponse.parse(rows));
});

export default router;
