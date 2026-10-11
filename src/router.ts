import { useEffect, useState } from "react";

// Hash routes (#/wiki), so the site works on a static host with no server rules.
export type Route = "home" | "wiki" | "ledger" | "notes" | "antiloki";
const ROUTES: Route[] = ["home", "wiki", "ledger", "notes", "antiloki"];
export function parse(hash: string): Route {
  const p = hash.replace(/^#\/?/, "").split(/[/?]/)[0] as Route;
  return (ROUTES as string[]).includes(p) ? p : "home";
}
export const href = (r: Route) => (r === "home" ? "#/" : `#/${r}`);
export function useRoute(): Route {
  const [r, setR] = useState<Route>(() => parse(location.hash));
  useEffect(() => {
    const on = () => { setR(parse(location.hash)); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return r;
}
