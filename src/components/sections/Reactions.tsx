import { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";

const REACTIONS = [
  { key: "grateful", label: "Grateful", emoji: "🙏" },
  { key: "happy", label: "Happy", emoji: "😊" },
  { key: "inspired", label: "Inspired", emoji: "✨" },
  { key: "motivated", label: "Motivated", emoji: "🔥" },
  { key: "amazed", label: "Amazed", emoji: "🤩" },
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

  useEffect(() => {
    const initial: Record<string, number> = {};
    REACTIONS.forEach((r) => {
      initial[r.key] = getCount(r.key);
    });
    setCounts(initial);
  }, []);

  const handleClick = (key: string) => {
    const next = (counts[key] || 0) + 1;
    localStorage.setItem(`reaction_${key}`, String(next));
    setCounts((prev) => ({ ...prev, [key]: next }));
  };

  return (
    <section className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading>How Does My Space Make You Feel?</SectionHeading>
        <p className="text-sm text-muted-foreground mb-10 max-w-xl mx-auto">
          Thank you for visiting my little corner of the internet. Click a reaction to let me know how you feel!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {REACTIONS.map((r) => (
            <button
              key={r.key}
              onClick={() => handleClick(r.key)}
              className="flex flex-col items-center gap-2 border border-border rounded-xl px-6 py-5 hover:border-foreground/30 hover:bg-accent/50 transition-all active:scale-95 min-w-[100px]"
            >
              <span className="text-3xl">{r.emoji}</span>
              <span className="text-xs font-medium text-foreground">{r.label}</span>
              <span className="text-lg font-bold font-serif text-foreground">{counts[r.key] || 0}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reactions;
