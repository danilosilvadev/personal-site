import { href } from "../router";
import { all, counts, quietYears, rated, PRIVATE_REPOS, SNAPSHOT_DATE } from "../ledger";

const cn = <sup className="cn"><a href="#cn" title="this claim needs a source">[citation needed]</a></sup>;
const ref = (n: number) => <sup className="ref"><a href={`#r${n}`}>[{n}]</a></sup>;

const sections = [
  ["early", "Early life and education"], ["early-repos", "Early repositories (2016 to 2019)"], ["quiet", "The quiet years"],
  ["books", "Books, a motorhome and a poem (2026)"], ["antiloki", "antiloki (2026 to present)"], ["method", "Working method and views"],
  ["personal", "Personal life"], ["see", "See also"], ["refs", "References"],
] as const;

export function Wiki() {
  const c = counts();
  const first = [...rated].sort((a, b) => a.created.localeCompare(b.created))[0];
  const quiet = quietYears();
  const lately = rated.filter((r) => r.status === "alive" || r.status === "new").length;
  const mid = rated.filter((r) => r.created >= "2017-01-01" && r.created < "2020-01-01").length;
  const lit = ["margem", "ocenaculo", "o-inquilino-tour", "chale-literario"].map((n) => all.find((r) => r.name === n)).filter(Boolean);
  return (
    <div className="wiki">
      <a className="back" href={href("home")}>← back to the normal website</a>
      <div className="wk-meta">danilosilvadev.github.io · encyclopedic profile · last updated 11 October 2026</div>
      <h1 className="wk-title">Danilo Silva</h1>
      <p className="wk-sub">Brazilian software developer and, by his own public ledger, a prolific starter of repositories</p>

      <aside className="infobox">
        <div className="ib-pic"><span>d</span></div>
        <div className="ib-cap">Danilo Silva</div>
        <table><tbody>
          <tr><th>Born</th><td>[date missing] {cn}</td></tr>
          <tr><th>Nationality</th><td>Brazilian</td></tr>
          <tr><th>Occupation</th><td>Software developer</td></tr>
          <tr><th>Years active</th><td>2016 to present</td></tr>
          <tr><th>Known for</th><td>antiloki</td></tr>
          <tr><th>Notable work</th><td>antiloki 0.5 "Tyr" (2026); margem (2026)</td></tr>
          <tr><th>Website</th><td><a href="https://danilosilvadev.github.io/personal-site/">danilosilvadev.github.io</a></td></tr>
        </tbody></table>
      </aside>

      <p><b>Danilo Jose Paiva Domingos da Silva</b> (born {cn}) is a Brazilian software developer.{ref(1)} He is the founder and sole developer of <b>antiloki</b>, a desktop application that runs a team of AI agents on the subscriptions its user already pays for.{ref(2)} Since 2016 he has created {all.length - 1} public repositories on GitHub,{ref(3)} of which {lately} (about {Math.round((lately / all.length) * 100)} per cent) have been touched in the thirty to one hundred and twenty days before this article was last updated.{ref(4)}</p>
      <p>He publishes a running ledger of what became of each repository, rated by a script, and has written that "a few of them are still going".{ref(4)} He also keeps {PRIVATE_REPOS} private repositories, which he has declined to discuss.</p>

      <nav className="toc"><b>Contents</b>
        <ol>{sections.map(([id, t]) => <li key={id}><a href={`#${id}`}>{t}</a></li>)}</ol>
      </nav>

      <h2 id="early">Early life and education</h2>
      <p>Silva was born in Brazil.{cn} Nothing further is known about his early life, education or the first time he read a stack trace and felt nothing.{cn}</p>

      <h2 id="early-repos">Early repositories (2016 to 2019)</h2>
      <p>His earliest surviving public repository, <i>{first.name}</i>, dates from {first.created.slice(0, 4)}.{ref(3)} Between 2017 and 2019 he created {mid} further public repositories, many of them the product of online courses (the ledger rates these "homework" and counts {c.homework} of them across his career).{ref(4)} A few, such as <i>rxreactjs</i> ("a simple alternative to redux using only 2 functions"), suggest he already believed he could do it simpler.</p>

      <h2 id="quiet">The quiet years</h2>
      <p>{quiet.length ? <>He created no public repositories in {quiet.join(", ")}.{ref(3)} </> : <>He created at least one public repository every year.{ref(3)} </>}The ledger rates {c.abandoned} repositories as <i>abandoned</i>, meaning only that they have been quiet for months or years; the rating is made by a script and is not an assessment of their merits, which are, in several cases, considerable.{ref(4)}</p>

      <h2 id="books">Books, a motorhome and a poem (2026)</h2>
      <p>In autumn 2026 he published a cluster of projects that have little to do with AI agents: {lit.map((r, i) => <span key={r!.name}>{i ? (i === lit.length - 1 ? ", and " : ", ") : ""}<i>{r!.name}</i> (“{r!.desc}”)</span>)}.{ref(3)} The motorhome's landing page remains, at the time of writing, his only project to have been built in order to sell a vehicle.</p>

      <h2 id="antiloki">antiloki (2026 to present)</h2>
      <p>The engine of antiloki was begun on 28 July 2026.{ref(2)} It is built with Rust and Tauri, with screens in React, and drives AI tools the user already has, among them Claude, Codex, Cursor, Gemini and Grok, rather than selling access to a model.{ref(2)} Its first usable version, 0.5, was published on 10 October 2026 under the name <i>Tyr</i>, after the Norse god who kept his oath at the price of a hand.{ref(5)} It includes 1,186 measured benchmark runs as defaults for every user.{ref(5)} A free fourteen-day trial is followed by a one-time licence.{ref(2)}</p>
      <p>Silva has written that a result should say only what it can show.{ref(6)}</p>

      <h2 id="method">Working method and views</h2>
      <p>His build machine's out-of-memory killer closed his terminal three times on 21 September 2026; the killer's reasoning has not been disputed.{ref(6)} He has since run every build inside a memory cap.{ref(6)} He has written that an installer which is asked to delete your data should delete your data.{ref(6)}</p>

      <h2 id="personal">Personal life</h2>
      <p>{cn} {cn} {cn}</p>

      <h2 id="see">See also</h2>
      <ul>
        <li><a href={href("ledger")}>The ledger</a>, every public repository and what became of it</li>
        <li><a href={href("notes")}>Notes to my past self</a></li>
        <li><a href={href("antiloki")}>antiloki</a></li>
      </ul>

      <h2 id="refs">References</h2>
      <ol className="refs">
        <li id="r1"><a href="https://github.com/danilosilvadev">github.com/danilosilvadev</a>. GitHub.</li>
        <li id="r2"><a href="https://antiloki.com">antiloki.com</a>. antiloki.</li>
        <li id="r3">Snapshot of the public, non-fork repositories of the account, taken {SNAPSHOT_DATE}.</li>
        <li id="r4"><a href={href("ledger")}>"how many repos have i abandoned so far"</a>. The ledger. Rated by script.</li>
        <li id="r5"><a href="https://antiloki.com/releases.html">antiloki releases</a>. antiloki.</li>
        <li id="r6"><a href={href("notes")}>"notes to my past self"</a>. This website.</li>
        <li id="cn"><i>[citation needed]</i>: the author is aware.</li>
      </ol>
    </div>
  );
}
