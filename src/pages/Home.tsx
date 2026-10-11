import { Bar } from "../Bar";
import { all, breathing, counts, PRIVATE_REPOS } from "../ledger";
import { href } from "../router";
import { notes } from "./notes-data";
import { useState } from "react";

const NAME = "danilo silva";
const GITHUB = "https://github.com/danilosilvadev";

const projects: { pin?: boolean; name: string; what: string; href: string }[] = [
  { pin: true, name: "antiloki", what: "ai agent team, on your subscriptions", href: "#/antiloki" },
  { pin: true, name: "minemylead", what: "landing page", href: "https://minemylead.com" },
  { name: "margem", what: "classics, three languages side by side", href: "https://github.com/danilosilvadev/margem" },
  { name: "o cenáculo", what: "classics, annotated in the margin", href: "https://github.com/danilosilvadev/ocenaculo" },
  { name: "vista sobre rodas", what: "a motorhome that chooses its view", href: "https://vistasobrerodas.com/" },
  { name: "o inquilino", what: "a poem as embroidered plates", href: "https://github.com/danilosilvadev/o-inquilino-tour" },
];

const writing = [
  { title: "how a merge is made", what: "how antiloki picks which ai plans and which one writes", href: "https://antiloki.com/blog/how-a-merge-is-made.html" },
  { title: "every run, with the scripts", what: "the benchmark runs behind the numbers", href: "https://antiloki.com/blog/every-run.html" },
];

// EDIT: put real screenshots in /public/shots and set src. Until then these are labelled placeholders.
const shots = ["screenshot (1)(final)", "it worked once", "oom killer, 3 of 3", "0.1.x (do not open)", "the bench table", "works on my machine"];

function Subscribe() {
  const [note, setNote] = useState("0-3 emails a year. unsubscribe anytime.");
  return (
    <form className="sub" onSubmit={(e) => { e.preventDefault(); setNote("this box is not connected to an email service yet. (it is also a promise i have not kept.)"); }}>
      <div className="row"><input type="email" placeholder="your email" aria-label="your email" required /><button type="submit">subscribe</button></div>
      <small>{note}</small>
    </form>
  );
}

export function Home() {
  const c = counts();
  return (
    <>
      <header className="head">
        <div className="avatar" role="img" aria-label={NAME}>d</div>
        <div>
          <h1>{NAME} <span className="icons">
            <a href={GITHUB} aria-label="github" title="github"><svg viewBox="0 0 24 24"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" /></svg></a>
            <a href={href("wiki")} aria-label="wiki" title="my wikipedia page (yes, i wrote it)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9.5" /><ellipse cx="12" cy="12" rx="4" ry="9.5" /><path d="M2.5 12h19M4 7h16M4 17h16" /></svg></a>
          </span></h1>
          <p className="tag">brazilian dev. builds ai agent teams, apps for old books and a landing page for a motorhome. has opinions about subscriptions. out-of-memory killer's favourite customer.</p>
        </div>
      </header>

      <section>
        <h2>things i'm working on // things i've built</h2>
        <ul className="plist">
          {projects.map((p) => (
            <li key={p.name}><a href={p.href}>{p.pin ? <span className="pin">📌</span> : <span className="pin" />}<b>{p.name}</b> <span className="what">({p.what})</span> <span className="arr">→</span></a></li>
          ))}
        </ul>
      </section>

      <a className="card ledger" href={href("ledger")}>
        <div className="top"><span>how many repos have i abandoned so far</span><span className="arr">→</span></div>
        <Bar counts={c} />
        <div className="stats">{all.length} projects · {c.abandoned} abandoned · {c.alive + c.new} breathing · ~{breathing(c)}% hit rate · + {PRIVATE_REPOS} private ones i won't name</div>
      </a>

      <section>
        <h2>get an email from me 0-3 times a year when i ship something or have something to warn you about</h2>
        <Subscribe />
      </section>

      <section>
        <h2>things i've written</h2>
        <ul className="plist wide">
          {writing.map((w) => <li key={w.title}><a href={w.href}><b>{w.title}</b> <span className="what">— {w.what}</span> <span className="arr end">→</span></a></li>)}
        </ul>
      </section>

      <section>
        <h2>images on my computer in a folder named "works on my machine"</h2>
        <div className="strip">{shots.map((s, i) => <figure key={s} style={{ background: `hsl(${(i * 47) % 360} 18% 22%)` }}><figcaption>{s}</figcaption></figure>)}</div>
        <a className="small" href="#/notes">view all notes →</a>
      </section>

      <section>
        <h2>notes to my past self, for anyone about to start a build</h2>
        <a className="card note" href={href("notes")}>
          <p>{notes[0].text}</p>
          <small>#{notes.length} · {notes[0].date} · read the rest →</small>
        </a>
      </section>

      <section>
        <h2>latest release</h2>
        <ul className="media">
          <li><a href="https://antiloki.com/releases.html"><div className="thumb">⚡</div><div><b>antiloki 0.5.3 "tyr"</b><span>a full onboarding: it asks what you subscribe to, finds the tools, tests each one.</span></div><span className="arr">→</span></a></li>
        </ul>
      </section>
    </>
  );
}
