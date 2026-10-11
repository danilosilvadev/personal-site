// EVERYTHING YOU WILL WANT TO CHANGE LIVES HERE. The components only draw what this file says; edit the words, links and lists and the page follows.
// Links set to "#" are placeholders: fill them in or delete the entry.

export type Link = { label: string; href: string; pinned?: boolean };
export type Social = { kind: "x" | "youtube" | "github" | "email"; href: string };
export type Video = { title: string; blurb: string; href: string; thumb?: string };

export const content = {
  name: "danilo",
  avatar: "", // e.g. "/me.jpg" (put the file in /public). Empty draws a circle with the first letter of your name.
  bio: [
    "i'm danilo, from brazil. i build ",
    { text: "antiloki", href: "https://antiloki.com" },
    ": a desktop app that puts a team of ai agents to work on the subscriptions you already pay for, and checks their work before it reaches you.",
  ] as (string | { text: string; href: string })[],
  socials: [
    { kind: "x", href: "#" },
    { kind: "youtube", href: "#" },
    { kind: "github", href: "https://github.com/" },
    { kind: "email", href: "mailto:hello@example.com" },
  ] as Social[],
  projects: {
    links: [
      { label: "antiloki", href: "https://antiloki.com", pinned: true },
      { label: "project two", href: "#" },
      { label: "project three", href: "#" },
    ] as Link[],
    callout: { text: "is in early access: free for 14 days, then a one-time licence.", link: { label: "pricing", href: "https://antiloki.com/#pricing" }, bold: "antiloki" },
  },
  subscribe: {
    title: "get a note when i ship something.",
    sub: "one email now and then. no spam.",
    fine: "you can leave any time.",
    action: "", // your email service's form URL. Empty = the box says it is not connected yet instead of pretending.
  },
  reading: [
    { label: "a book you recommend", href: "#" },
    { label: "another one", href: "#" },
    { label: "a post you wrote", href: "#" },
  ] as Link[],
  photos: { items: [] as { src: string; alt: string }[], placeholders: 6, all: "#" }, // add { src: "/photos/1.jpg", alt: "…" } entries
  note: {
    date: "2026-10-11",
    text: "the first version that is actually usable is not the one with the most features. it is the one that says only what it can show.",
    href: "#",
  },
  videos: [
    { title: "a demo of antiloki", blurb: "one task, three agents, and the checks before it lands.", href: "#" },
    { title: "how it is built", blurb: "what runs on your machine and what never leaves it.", href: "#" },
  ] as Video[],
  footer: "© 2026 danilo",
};
