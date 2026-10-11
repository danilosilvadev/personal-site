import { Donut } from "../Donut";
import { byYear, breathing, counts, all, ORDER, PRIVATE_REPOS, SNAPSHOT_DATE, STATUS, rated } from "../ledger";
import { href } from "../router";

export function Ledger() {
  const c = counts();
  const total = all.length;
  const pct = (n: number) => Math.round((n / total) * 100);
  return (
    <div className="narrow">
      <a className="back" href={href("home")}>← back</a>
      <div className="crumb"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" /></svg><span><i>danilosilvadev/</i>ledger</span></div>
      <h1 className="big">how many repos have i abandoned so far</h1>
      <p className="meta">{total} projects · {c.abandoned} abandoned · {c.alive + c.new} breathing · ~{breathing(c)}% hit rate</p>
      <p className="lead">this is every public repository i have created since 2016 (plus antiloki, whose repos are private), rated by a script that looks only at when each one was made and when i last touched it. it does not know what i meant. the main lesson: some of them were never going to be fine, and a few of them are still going. (there are also {PRIVATE_REPOS} other private repos, which stay private for reasons of dignity.)</p>

      <div className="donutrow">
        <Donut counts={c} letter="d" />
        <ul className="legend">
          {ORDER.map((s) => <li key={s}><i style={{ background: STATUS[s].color }} />{STATUS[s].label} <span>{c[s]} ({pct(c[s])}%)</span></li>)}
        </ul>
      </div>

      <h3 className="tl-head">the timeline <span>({total})</span></h3>
      <ol className="timeline">
        {byYear().map((y) => (
          <li key={y.year} className="year">
            <div className="yl">{y.year}</div>
            <ul>
              {y.items.map((r) => (
                <li key={r.name}>
                  <i className="dot" style={{ background: STATUS[r.status].color }} />
                  <div>
                    <div className="line">{r.home ? <a href={r.home}>{r.name}</a> : r.name} <span className="badge" style={{ color: STATUS[r.status].color, background: STATUS[r.status].color + "22" }}>{STATUS[r.status].label}</span></div>
                    <p>{r.desc || "no description. a mystery, even to me."} <em>created {r.created} · last pushed {r.pushed}</em></p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="method">
        <h3>how it is rated</h3>
        <p>by script, in this order, from the dates on the repo (a snapshot of {SNAPSHOT_DATE}); the first rule that fits wins:</p>
        <ol>
          {(["homework", "new", "alive", "stand", "abandoned"] as const).map((s) => <li key={s}><i style={{ background: STATUS[s].color }} /> <b>{STATUS[s].label}</b>: {STATUS[s].rule}</li>)}
        </ol>
        <p>so "alive" only means i touched it lately, not that anyone uses it. {rated.filter((r) => r.status === "abandoned").length} repos will be annoyed to hear that.</p>
      </div>
    </div>
  );
}
