import { Mail, Youtube, Instagram, Github, Linkedin, Twitter, MessageCircle, Send, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";

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

const Connect = () => (
  <section id="connect" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-3xl mx-auto text-center">
      <SectionHeading>Let's Connect</SectionHeading>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
        Got an idea, a collaboration, or just want to say hello? I'd love to hear from you.
      </p>
      <a
        href="mailto:manik.officialwork@gmail.com"
        className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
      >
        <Mail size={16} />
        manik.officialwork@gmail.com
      </a>
      <div className="flex items-center justify-center gap-5 mt-10">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={s.label}
          >
            <s.icon size={20} />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Connect;
