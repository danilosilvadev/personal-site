import { href } from "../router";

const does = [
  { icon: "🧭", h: "picks the right ai for the job", t: "it drives the tools you already pay for (claude, codex, cursor, gemini, grok) and routes each task to the one that has been measured best at it." },
  { icon: "🔍", h: "checks before it lands", t: "tests, gates and a confidence reading, so 'done' means something. it will tell you when it is not sure." },
  { icon: "📒", h: "ships its own benchmarks", t: "1,186 measured runs come with it as the starting point; yours add on top and the screen says which are which." },
  { icon: "🧑‍🤝‍🧑", h: "a team of agents and one human", t: "no people to coordinate. the agents have roles, the human has the last word." },
];
const stack: [string, string][] = [
  ["engine", "rust"], ["desktop", "tauri"], ["screens", "react + vite"], ["ai", "your own subscriptions"],
  ["payments", "creem (after one company said no)"], ["hardware", "an arch linux box that has been oom-killed"],
];

export function Antiloki() {
  return (
    <div className="narrow">
      <a className="back" href={href("home")}>← back</a>
      <div className="hero2">
        <div className="logo">⚡</div>
        <div>
          <h1>antiloki ⚡</h1>
          <p className="sub">a desktop app that runs a team of ai agents on the subscriptions you already pay for.</p>
          <p className="fine">yes, it checks its own work. it has to: i don't.</p>
        </div>
      </div>
      <p className="lead2">antiloki isn't a chatbot. it plans, writes, tests and checks, using the ai tools already installed on your computer, and it keeps its own record of which combination does which kind of work best. first usable version: 0.5, "tyr".</p>
      <p className="dim">like a cowork, but with an x-ray and a sense of shame.</p>

      <h2>what it does</h2>
      <div className="grid2">{does.map((d) => <div className="card pad" key={d.h}><b>{d.icon} {d.h}</b><p>{d.t}</p></div>)}</div>

      <h2>tech stack</h2>
      <dl className="stack">{stack.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>

      <a className="card pad linkcard" href="https://antiloki.com"><b>antiloki.com</b><p>download it. it is free for 14 days, and then it is a one-time licence.</p></a>
      <a className="card pad linkcard" href="https://antiloki.com/blog/"><b>the antiloki blog</b><p>how a merge is made, and every run with the scripts.</p></a>
      <p className="small">see the <a href="https://antiloki.com/releases.html">releases →</a></p>
    </div>
  );
}
