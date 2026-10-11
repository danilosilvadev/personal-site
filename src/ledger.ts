// THE LEDGER: every public repo, rated by a script from its own dates. No feelings involved, and that is the joke.
import { repos, SNAPSHOT_DATE, PRIVATE_REPOS, type Repo } from "./repos";

export type Status = "alive" | "new" | "stand" | "homework" | "abandoned";
export const STATUS: Record<Status, { label: string; color: string; rule: string }> = {
  alive: { label: "alive", color: "#22c55e", rule: "pushed to in the last 120 days" },
  stand: { label: "one-day stand", color: "#f59e0b", rule: "created and last pushed within a day of each other" },
  abandoned: { label: "abandoned", color: "#ef4444", rule: "none of the above, and quiet for months or years" },
  homework: { label: "homework", color: "#a855f7", rule: "a course, a kata, a todo list or a test" },
  new: { label: "new", color: "#3b82f6", rule: "created in the last 30 days: too early to tell" },
};
export const ORDER: Status[] = ["alive", "stand", "abandoned", "homework", "new"];

// antiloki lives in private repositories, so it is added by hand (the first commit of its engine is 2026-07-28).
const ANTILOKI: Repo = { name: "antiloki", desc: "a desktop app that runs a team of ai agents on the subscriptions you already pay for. 0.5 is the first usable version.", created: "2026-07-28", pushed: SNAPSHOT_DATE, home: "https://antiloki.com" };

const day = (d: string) => Date.parse(d + "T00:00:00Z") / 86_400_000;
const HOMEWORK = /grider|graphql|learning|_test|test$|react_2019|codewars|titanic|todolist|create-react-app|mock/i;

/** Rates a repo from its dates and its name. Pure. */
export function rate(r: Repo, today = SNAPSHOT_DATE): Status {
  if (HOMEWORK.test(r.name)) return "homework";
  if (day(today) - day(r.created) <= 30) return "new";
  if (day(today) - day(r.pushed) <= 120) return "alive";
  if (day(r.pushed) - day(r.created) <= 1) return "stand";
  return "abandoned";
}

export const all: Repo[] = [...repos, ANTILOKI].sort((a, b) => b.created.localeCompare(a.created));
export const rated = all.map((r) => ({ ...r, status: rate(r) }));

export function counts(list = rated): Record<Status, number> {
  const c: Record<Status, number> = { alive: 0, new: 0, stand: 0, homework: 0, abandoned: 0 };
  for (const r of list) c[r.status]++;
  return c;
}
/** share of repos that are still breathing (alive or new), as a whole percent. */
export function breathing(c = counts()): number {
  const total = Object.values(c).reduce((a, b) => a + b, 0);
  return total ? Math.round(((c.alive + c.new) / total) * 100) : 0;
}
export function byYear(list = rated): { year: string; items: typeof rated }[] {
  const m = new Map<string, typeof rated>();
  for (const r of list) { const y = r.created.slice(0, 4); m.set(y, [...(m.get(y) ?? []), r]); }
  return [...m.entries()].sort((a, b) => b[0].localeCompare(a[0])).map(([year, items]) => ({ year, items }));
}
/** the years between the first repo and now in which no public repo was created. */
export function quietYears(list = rated): string[] {
  const years = new Set(list.map((r) => r.created.slice(0, 4)));
  const first = Math.min(...list.map((r) => +r.created.slice(0, 4))), last = +SNAPSHOT_DATE.slice(0, 4);
  const out: string[] = [];
  for (let y = first; y <= last; y++) if (!years.has(String(y))) out.push(String(y));
  return out;
}
export { PRIVATE_REPOS, SNAPSHOT_DATE };
