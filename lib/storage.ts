const KEY = "promptmaster-ai-demo";

export type SavedDemoState = {
  lastPrompt: string;
  lastMode: string;
  lastCompare: string[];
};

export const defaultDemoState: SavedDemoState = {
  lastPrompt: "",
  lastMode: "analyze",
  lastCompare: []
};

export function readDemoState(): SavedDemoState {
  if (typeof window === "undefined") return defaultDemoState;

  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return defaultDemoState;

    const parsed = JSON.parse(raw) as Partial<SavedDemoState>;
    return {
      lastPrompt: parsed.lastPrompt ?? "",
      lastMode: parsed.lastMode ?? "analyze",
      lastCompare: Array.isArray(parsed.lastCompare) ? parsed.lastCompare : []
    };
  } catch {
    return defaultDemoState;
  }
}

export function writeDemoState(next: SavedDemoState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(next));
}
