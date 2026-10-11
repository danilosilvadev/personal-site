import { ORDER, STATUS, type Status } from "./ledger";

export function Bar({ counts }: { counts: Record<Status, number> }) {
  const total = ORDER.reduce((a, s) => a + counts[s], 0) || 1;
  return (
    <div className="bar" aria-hidden="true">
      {ORDER.map((s) => <i key={s} style={{ flex: counts[s] / total, background: STATUS[s].color }} title={`${STATUS[s].label}: ${counts[s]}`} />)}
    </div>
  );
}
