import { useState } from "react";
import { content as c } from "./content";
import { SocialIcon } from "./icons";

function Avatar() {
  if (c.avatar) return <img className="avatar" src={c.avatar} alt={c.name} />;
  return <div className="avatar initial" role="img" aria-label={c.name}>{c.name.slice(0, 1)}</div>;
}

function Subscribe() {
  const [note, setNote] = useState(c.subscribe.fine);
  return (
    <div className="subscribe">
      <p><b>{c.subscribe.title}</b><br />{c.subscribe.sub}</p>
      <form
        action={c.subscribe.action || undefined}
        method="post"
        onSubmit={(e) => { if (!c.subscribe.action) { e.preventDefault(); setNote("this box is not connected to an email service yet."); } }}
      >
        <input type="email" name="email" placeholder="you@example.com" aria-label="Your email" required />
        <button type="submit">subscribe</button>
      </form>
      <small>{note}</small>
    </div>
  );
}

export function App() {
  return (
    <main>
      <header>
        <Avatar />
        <h1>{c.name}</h1>
        <ul className="social" aria-label="Elsewhere">{c.socials.map((s) => <li key={s.kind}><SocialIcon {...s} /></li>)}</ul>
        <p className="bio">{c.bio.map((p, i) => typeof p === "string" ? p : <a key={i} href={p.href}>{p.text}</a>)}</p>
      </header>

      <section aria-labelledby="projects">
        <h2 id="projects">projects</h2>
        <div className="links">{c.projects.links.map((l) => <a key={l.label} href={l.href}>{l.pinned ? "📌 " : ""}{l.label}</a>)}</div>
        <div className="callout"><b>{c.projects.callout.bold}</b> {c.projects.callout.text} <a href={c.projects.callout.link.href}>{c.projects.callout.link.label} →</a></div>
      </section>

      <section><Subscribe /></section>

      <section aria-labelledby="reading">
        <h2 id="reading">reading</h2>
        <ul className="list">{c.reading.map((l) => <li key={l.label}><a href={l.href}><span>{l.label}</span><span>→</span></a></li>)}</ul>
      </section>

      <section aria-labelledby="photos">
        <h2 id="photos">photos</h2>
        <div className="gallery">
          {c.photos.items.length
            ? c.photos.items.map((p) => <figure key={p.src}><img src={p.src} alt={p.alt} /></figure>)
            : Array.from({ length: c.photos.placeholders }, (_, i) => <figure key={i}>photo</figure>)}
        </div>
        <a className="more" href={c.photos.all}>view all →</a>
      </section>

      <section aria-labelledby="latest">
        <h2 id="latest">latest note</h2>
        <div className="note">
          <time dateTime={c.note.date}>{c.note.date}</time>
          <blockquote>{c.note.text}</blockquote>
          <a href={c.note.href}>read the rest →</a>
        </div>
      </section>

      <section aria-labelledby="watch">
        <h2 id="watch">watch</h2>
        <div className="cards">
          {c.videos.map((v) => (
            <a className="card" key={v.title} href={v.href}>
              <div className="thumb">{v.thumb ? <img src={v.thumb} alt="" /> : "thumbnail"}</div>
              <div className="body"><h3>{v.title}</h3><p>{v.blurb}</p><span className="go">watch →</span></div>
            </a>
          ))}
        </div>
      </section>

      <footer>{c.footer}</footer>
    </main>
  );
}
