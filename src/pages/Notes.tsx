import { href } from "../router";
import { notes } from "./notes-data";

export function Notes() {
  return (
    <div className="narrow">
      <a className="back" href={href("home")}>← back</a>
      <p className="site">danilosilvadev.github.io/personal-site</p>
      <h1 className="big">notes to my past self, for anyone about to start a build</h1>
      <p className="meta">a journal of things that went wrong in a way worth writing down. newest first.</p>
      {notes.map((n, i) => (
        <article className="entry" key={n.title}>
          <div className="eh"><span>#{notes.length - i}</span><span>{n.date}</span></div>
          <h3>{n.title}</h3>
          <p>{n.text}</p>
        </article>
      ))}
      <p className="small dim">keep building. more notes when something breaks.</p>
    </div>
  );
}
