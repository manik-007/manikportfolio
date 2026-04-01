import { useState, useEffect } from "react";

const PRELOAD_IMAGES = [
  "https://media.licdn.com/dms/image/v2/D5622AQGUtglwImzBzQ/feedshare-shrink_480/feedshare-shrink_480/0/1721922851065?e=1776902400&v=beta&t=HBai5J05pclpH-zjRYVdNy6c44Ndv4PDDA4PhKoqthw",
  "https://media.licdn.com/dms/image/v2/D5622AQGKaWcJrIfDKg/feedshare-shrink_480/B56ZyGAHzlJMAo-/0/1771774705098?e=1776902400&v=beta&t=F2CQHXQ6sA_YwT4vJ53qQv9LwfoyLEn5JlG95upP-Ec",
  "https://media.licdn.com/dms/image/v2/D5622AQG5xz-vkW9n7g/feedshare-shrink_480/B56Zu9Ijw2H4As-/0/1768404697777?e=1776902400&v=beta&t=dfCYADoICpuIxGPdl-cX-6bFCg9X3J6wPRaSQDw-9KQ",
  "https://media.licdn.com/dms/image/v2/D5622AQHBND3A3gDoFQ/feedshare-shrink_480/B56ZqK9VIVHAAY-/0/1763267937254?e=1776902400&v=beta&t=8coUkKiE_qUKv9VbBrrL6Pw1xGoI9zccYySdp-4u4jQ",
  "https://media.licdn.com/dms/image/v2/D5622AQHRthflrvexEQ/feedshare-shrink_480/B56ZtwNODNJ8AY-/0/1767114086260?e=1776902400&v=beta&t=DsZfkqDm6PpuLqm0HE98M3R2_RJ6CBeBKO-jtGPMZqM",
  "https://media.licdn.com/dms/image/v2/D5622AQFbwSk-DJx-Lg/feedshare-shrink_480/B56ZpaNEqGHYAY-/0/1762450002578?e=1776902400&v=beta&t=fxOg_D8tVxtsZg6vSLFrTA_hg2Hmslm05-_KtV7r0do",
];

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Preload images during intro animation
    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

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
