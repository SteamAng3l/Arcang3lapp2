import { Router, type IRouter } from "express";
import { sql, eq } from "drizzle-orm";
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
import { detectCategory, categoryMessages, categories } from "../lib/verse-categories";

const router: IRouter = Router();

router.post("/verse", async (req, res): Promise<void> => {
  const parsed = GetVerseBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Por favor escribe un problema o situación." });
    return;
  }

  const { problem } = parsed.data;

  if (!problem || problem.trim() === "") {
    res.status(400).json({ error: "Por favor escribe un problema o situación." });
    return;
  }

  const category = detectCategory(problem);

  const rows = await db
    .select()
    .from(versesTable)
    .where(eq(versesTable.category, category))
    .orderBy(sql`RANDOM()`)
    .limit(1);

  if (rows.length === 0) {
    res.status(404).json({ error: "No se encontró un versículo para esa categoría." });
    return;
  }

  const row = rows[0];
  const message = categoryMessages[category] ?? categoryMessages["esperanza"];

  res.json(
    GetVerseResponse.parse({
      detected_category: row.category,
      message,
      verse_reference: row.verseReference,
      verse_text: row.verseText,
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

router.get("/verse/random", async (_req, res): Promise<void> => {
  const rows = await db
    .select()
    .from(versesTable)
    .orderBy(sql`RANDOM()`)
    .limit(1);

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
