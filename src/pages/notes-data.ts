// NOTES TO MY PAST SELF, newest first. Every one of them is something that actually happened.
export const notes: { date: string; title: string; text: string }[] = [
  { date: "2026-10-11", title: "a fresh install should be fresh",
    text: "the installer asked 'delete the application data?' and i said yes, and it deleted the application and kept the data. so my 'from scratch' test ran on a machine that remembered me, fondly. an uninstall that keeps your data is a hotel that keeps your luggage. fix: make the checkbox mean what it says. then write the reset script you should have written first." },
  { date: "2026-10-11", title: "0.5 is the first version",
    text: "0.1.x was the test period. i have since decided that nobody is allowed to look at 0.1.x. the first usable version is 0.5, it has a name (tyr, the god who kept his word at the price of a hand), and the rule for the name is that a result should say only what it can show." },
  { date: "2026-10-10", title: "a payment company said no",
    text: "the first payment company refused me because i live in brazil. the second one said yes. i would like the first one to know that i am thriving. (i am thriving in spirit, and in a currency of my choosing: dollars.)" },
  { date: "2026-09-27", title: "the moat is the subscriptions you already pay for",
    text: "decided that day: antiloki does not sell you tokens, it drives the ai tools you already subscribe to. the router, which had been tuned for the cheapest model, had to be argued out of it. by then the benchmark harness had seventeen known traps, which is a lot of traps for something called a harness." },
  { date: "2026-09-21", title: "the out-of-memory killer is always right",
    text: "my terminal closed itself three times in one day. it was the out-of-memory killer, and every time it had a point: i was compiling a rust test binary with a test binary. now every build runs inside a memory cap, two jobs at a time, and i read the log before i get angry." },
  { date: "2026-10-11", title: "a number that says 100% over 6 runs is six runs",
    text: "the router told me, with a straight face, that one combination was '100% over 6 runs'. six runs is not a track record, it is a coincidence with a percentage sign. the table now shows how sure it is, next to how good it thinks it is. mostly it is not very sure." },
].sort((a, b) => b.date.localeCompare(a.date));
