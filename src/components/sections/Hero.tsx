import { Youtube, Instagram, Github, Linkedin, Twitter, MessageCircle, Send, Calendar } from "lucide-react";
import profileImg from "@/assets/profile-bw.jpg";

const SOCIALS = [
  { icon: Youtube, href: "https://www.youtube.com/@themanikdiaries", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/manik.3000", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/themanikdiaries", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mrmanik/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/manik-007", label: "GitHub" },
  { icon: MessageCircle, href: "https://discord.com/users/manik2619", label: "Discord" },
  { icon: Send, href: "https://t.me/manik_explorer", label: "Telegram" },
  { icon: Calendar, href: "https://calendly.com/manik_/discussion", label: "Calendly" },
];

const HYPHENATES = ["Builder", "Creator", "Educator", "Podcaster", "Public Speaker", "Leader", "Writer", "Traveller"];

const Hero = () => (
  <>
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
          Manik
        </h1>
        <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-muted-foreground mb-6 sm:mb-8 max-w-2xl px-2">
          "I build for impact and bring people together."
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2">
          {HYPHENATES.map((h, i) => (
            <span
              key={h}
              className="text-xs sm:text-sm font-sans font-medium tracking-widest text-muted-foreground"
            >
              {h}{i < HYPHENATES.length - 1 && <span className="ml-2 sm:ml-3 text-border">·</span>}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={s.label}
            >
              <s.icon size={20} className="sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
    <section className="px-4 sm:px-6 pb-16 sm:pb-24 md:pb-32">
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] md:w-[36rem] md:h-[36rem] overflow-hidden border border-border shadow-lg">
          <img src={profileImg} alt="Manik" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  </>
);

export default Hero;
