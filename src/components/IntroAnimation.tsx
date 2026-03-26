import { useState, useEffect } from "react";

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0); // 0=line1, 1=line2, 2=fadeout

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2000);
    const t2 = setTimeout(() => setPhase(2), 4000);
    const t3 = setTimeout(onComplete, 4800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center px-6 transition-opacity duration-700 ${phase === 2 ? "opacity-0" : "opacity-100"}`}
    >
      <p
        className={`font-serif text-lg sm:text-2xl md:text-3xl text-foreground text-center max-w-2xl leading-relaxed transition-opacity duration-700 ${phase >= 0 ? "opacity-100" : "opacity-0"}`}
      >
        Hi, I'm so happy to see that you came to see my small space on the internet :)
      </p>
      <p
        className={`font-serif text-base sm:text-xl md:text-2xl italic text-muted-foreground text-center mt-6 transition-opacity duration-700 ${phase >= 1 ? "opacity-100" : "opacity-0"}`}
      >
        Happy Exploring about me ^_^
      </p>
    </div>
  );
};

export default IntroAnimation;
