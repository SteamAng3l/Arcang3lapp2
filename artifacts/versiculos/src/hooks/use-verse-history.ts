const HISTORY_PREFIX = "arcangel_hist_";
const MAX_HISTORY = 200;

/** Read stored verse IDs for a given key (category slug or "random"). */
export function getHistory(key: string): number[] {
  try {
    const raw = localStorage.getItem(`${HISTORY_PREFIX}${key}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Add a verse ID to the history for a given key. Caps at MAX_HISTORY. */
export function addToHistory(key: string, verseId: number): void {
  try {
    const current = getHistory(key);
    if (current.includes(verseId)) return;
    const updated = [...current, verseId].slice(-MAX_HISTORY);
    localStorage.setItem(`${HISTORY_PREFIX}${key}`, JSON.stringify(updated));
  } catch {
    // Silently ignore quota errors
  }
}

/** Get all stored verse IDs across every category (for pre-call dedup). */
export function getAllHistory(): number[] {
  const ids: number[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k?.startsWith(HISTORY_PREFIX)) {
      try {
        const p = JSON.parse(localStorage.getItem(k) ?? "[]");
        if (Array.isArray(p)) ids.push(...p);
      } catch {}
    }
  }
  return [...new Set(ids)];
}

/** Clear history for a given key. */
export function clearHistory(key: string): void {
  try {
    localStorage.removeItem(`${HISTORY_PREFIX}${key}`);
  } catch {
    // ignore
  }
}
