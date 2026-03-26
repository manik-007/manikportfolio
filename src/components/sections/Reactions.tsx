import { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";

const REACTIONS = [
  { key: "grateful", label: "Grateful", symbol: "♡" },
  { key: "happy", label: "Happy", symbol: "☺" },
  { key: "inspired", label: "Inspired", symbol: "★" },
  { key: "motivated", label: "Motivated", symbol: "▲" },
  { key: "amazed", label: "Amazed", symbol: "◆" },
];

const getCount = (key: string) => {
  try {
    return parseInt(localStorage.getItem(`reaction_${key}`) || "0", 10);
  } catch {
    return 0;
  }
};

const Reactions = () => {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [voted, setVoted] = useState<string | null>(null);

  useEffect(() => {
    const initial: Record<string, number> = {};
    REACTIONS.forEach((r) => {
      initial[r.key] = getCount(r.key);
    });
    setCounts(initial);

    // Clear all old counts
    const hasCleared = localStorage.getItem("reactions_cleared_v2");
    if (!hasCleared) {
      REACTIONS.forEach((r) => localStorage.removeItem(`reaction_${r.key}`));
      localStorage.removeItem("reaction_voted");
      localStorage.setItem("reactions_cleared_v2", "1");
      REACTIONS.forEach((r) => {
        initial[r.key] = 0;
      });
      setCounts({ ...initial });
    }

    setVoted(localStorage.getItem("reaction_voted"));
  }, []);

  const handleClick = (key: string) => {
    if (voted) return;
    const next = (counts[key] || 0) + 1;
    localStorage.setItem(`reaction_${key}`, String(next));
    localStorage.setItem("reaction_voted", key);
    setCounts((prev) => ({ ...prev, [key]: next }));
    setVoted(key);
  };

  return (
    <section className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading>How Does My Space Make You Feel?</SectionHeading>
        <p className="text-sm text-muted-foreground mb-10 max-w-xl mx-auto">
          Thank you for visiting my little corner of the internet. Click a reaction to let me know how you feel!
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {REACTIONS.map((r) => (
            <button
              key={r.key}
              onClick={() => handleClick(r.key)}
              disabled={!!voted}
              className={`flex flex-col items-center gap-1.5 sm:gap-2 border rounded-xl px-4 sm:px-6 py-3 sm:py-5 transition-all min-w-[80px] sm:min-w-[100px] ${
                voted === r.key
                  ? "border-foreground bg-accent/50"
                  : voted
                  ? "border-border opacity-50 cursor-not-allowed"
                  : "border-border hover:border-foreground/30 hover:bg-accent/50 active:scale-95"
              }`}
            >
              <span className="text-3xl font-serif text-foreground">{r.symbol}</span>
              <span className="text-xs font-medium text-foreground">{r.label}</span>
              <span className="text-lg font-bold font-serif text-foreground">{counts[r.key] || 0}</span>
            </button>
          ))}
        </div>
        {voted && (
          <p className="text-xs text-muted-foreground mt-6">Thank you for your reaction!</p>
        )}
      </div>
    </section>
  );
};

export default Reactions;
