import { useRoute } from "./router";
import { Home } from "./pages/Home";
import { Wiki } from "./pages/Wiki";
import { Ledger } from "./pages/Ledger";
import { Notes } from "./pages/Notes";
import { Antiloki } from "./pages/Antiloki";

export function App() {
  const r = useRoute();
  return (
    <main className={r === "wiki" ? "wide" : ""} data-route={r}>
      {r === "home" && <Home />}
      {r === "wiki" && <Wiki />}
      {r === "ledger" && <Ledger />}
      {r === "notes" && <Notes />}
      {r === "antiloki" && <Antiloki />}
    </main>
  );
}
