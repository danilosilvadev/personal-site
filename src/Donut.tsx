import { ORDER, STATUS, type Status } from "./ledger";

/** A donut of the ledger with the avatar letter in the hole. */
export function Donut({ counts, letter }: { counts: Record<Status, number>; letter: string }) {
  const total = ORDER.reduce((a, s) => a + counts[s], 0) || 1;
  const R = 90, C = 2 * Math.PI * R;
  let off = 0;
  return (
    <svg viewBox="0 0 240 240" width="240" height="240" role="img" aria-label="share of repos by rating" className="donut">
      <g transform="rotate(-90 120 120)">
        {ORDER.map((s) => {
          const len = (counts[s] / total) * C;
          const el = <circle key={s} cx="120" cy="120" r={R} fill="none" stroke={STATUS[s].color} strokeWidth="46" strokeDasharray={`${len} ${C - len}`} strokeDashoffset={-off} />;
          off += len;
          return el;
        })}
      </g>
      <circle cx="120" cy="120" r="58" fill="#1c1c1c" stroke="#111" strokeWidth="4" />
      <text x="120" y="138" textAnchor="middle" fontSize="52" fontWeight="800" fill="#e8e8e8" fontFamily="inherit">{letter}</text>
    </svg>
  );
}
