import { ArrowUpRight, Mail, Youtube, Instagram, Github, Linkedin, Twitter, Menu, X } from "lucide-react";
import { useState } from "react";
import profileImg from "@/assets/profile.jpg";
import empowerherImg from "@/assets/empowerher.jpg";

const NAV_LINKS = [
  { label: "Articles", href: "#articles" },
  { label: "Podcasts", href: "#podcasts" },
  { label: "Meetups", href: "#meetups" },
  { label: "Wall of Love", href: "#testimonials" },
  { label: "Connect", href: "#connect" },
];

const SOCIALS = [
  { icon: Youtube, href: "https://www.youtube.com/@themanikdiaries", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/manik.3000", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/themanikdiaries", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mrmanik/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/manik-007", label: "GitHub" },
];

const ARTICLES = [
  {
    title: "Top 5 books you should read if you are a college student",
    link: "https://medium.com/@manik23265/top-5-books-you-should-read-if-you-are-a-college-student-099a134acacc",
  },
  {
    title: "Have you ever felt that you wasted your time?",
    link: "https://medium.com/@manik23265/have-you-ever-felt-that-you-wasted-your-time-9b6ec3fec6c9",
  },
  {
    title: "Have you decided on your career path?",
    link: "https://medium.com/@manik23265/have-you-decided-on-your-career-path-1909972cbd52",
  },
];

const PODCASTS = [
  {
    title: "3C's of DevRel — Content, Code & Community",
    guest: "Haimantika Mitra",
    guestRole: "DevRel at Digital Ocean",
    guestLinkedIn: "https://www.linkedin.com/in/haimantika-mitra/",
    youtube: "https://youtu.be/3w7z3bgiGN0?si=iGN1YmmHUmKTtHDC",
  },
  {
    title: "How to Build Communities that Matter",
    guest: "Deepak Kumar",
    guestRole: "Founder C3 Universe",
    guestLinkedIn: "https://www.linkedin.com/in/deepak910k/",
    youtube: "https://youtu.be/asmVCEOZGzM?si=Ev9xpo6R9uM8hBBb",
  },
];

const TESTIMONIALS = [
  {
    text: "Great to connect Manik and to learn about all the good work you're doing in your community.",
    person: "Desmond John",
    role: "Founder of Vibe Guide Ventures",
  },
  {
    text: "Working with Manik is always a pleasure and a huge inspiration!",
    person: "Aashi Raghuvanshi",
    role: "Agentic AI & Automation Engineer",
  },
];

const HYPHENATES = ["Builder", "Creator", "Educator", "Podcaster", "Public Speaker", "Leader", "Writer", "Traveller"];

// Navigation
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-xl font-semibold tracking-tight text-foreground">
          Manik
        </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-4 pt-2 space-y-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// Hero
const Hero = () => (
  <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
      {/* Photo */}
      <div className="shrink-0">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
          <img src={profileImg} alt="Manik" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Text */}
      <div className="text-center md:text-left">
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
          Manik
        </h1>
        <p className="font-serif text-xl md:text-2xl italic text-muted-foreground mb-6 max-w-lg">
          "I build for impact and bring people together."
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
          {HYPHENATES.map((h, i) => (
            <span
              key={h}
              className="text-xs font-sans font-medium tracking-widest uppercase text-muted-foreground"
            >
              {h}{i < HYPHENATES.length - 1 && <span className="ml-2 text-border">·</span>}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-start gap-4">
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
    </div>
  </section>
);

// Section heading
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12 tracking-tight">
    {children}
  </h2>
);

// Articles
const Articles = () => (
  <section id="articles" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto">
      <SectionHeading>Articles</SectionHeading>
      <div className="space-y-6">
        {ARTICLES.map((a) => (
          <a
            key={a.link}
            href={a.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 py-6 border-b border-border hover:border-foreground transition-colors"
          >
            <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-muted-foreground transition-colors leading-snug">
              {a.title}
            </h3>
            <span className="shrink-0 mt-1 text-muted-foreground group-hover:text-foreground transition-colors">
              <ArrowUpRight size={20} />
            </span>
          </a>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        Read more on{" "}
        <a
          href="https://medium.com/@manik23265"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Medium
        </a>
      </p>
    </div>
  </section>
);

// Podcasts
const Podcasts = () => (
  <section id="podcasts" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto">
      <SectionHeading>Podcasts</SectionHeading>
      <div className="grid md:grid-cols-2 gap-8">
        {PODCASTS.map((p) => (
          <div
            key={p.title}
            className="border border-border rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow bg-card"
          >
            <h3 className="font-serif text-lg md:text-xl font-medium text-foreground mb-3 leading-snug">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-1">
              with{" "}
              <a
                href={p.guestLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground transition-colors"
              >
                {p.guest}
              </a>
            </p>
            <p className="text-xs text-muted-foreground mb-6">{p.guestRole}</p>
            <a
              href={p.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              <Youtube size={16} />
              Watch on YouTube
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Meetups
const Meetups = () => (
  <section id="meetups" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto">
      <SectionHeading>Meetups & Events</SectionHeading>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-lg overflow-hidden border border-border">
          <img
            src={empowerherImg}
            alt="EmpowerHer 2025"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
        <div>
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-muted-foreground">
            Organised
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2 mb-4">
            EmpowerHer 2025
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            A 5-hour long virtual conference featuring women leaders with 2 decades of experience to
            empower girls in tech.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Wall of Love
const WallOfLove = () => (
  <section id="testimonials" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto">
      <SectionHeading>Wall of Love</SectionHeading>
      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t) => (
          <blockquote
            key={t.person}
            className="border border-border rounded-lg p-8 md:p-10 bg-card"
          >
            <span className="font-serif text-5xl text-border leading-none select-none">"</span>
            <p className="font-serif text-lg italic text-foreground leading-relaxed -mt-4 mb-6">
              {t.text}
            </p>
            <footer>
              <p className="font-sans text-sm font-semibold text-foreground">{t.person}</p>
              <p className="font-sans text-xs text-muted-foreground">{t.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

// Connect
const Connect = () => (
  <section id="connect" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto text-center">
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

// Footer
const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} Manik. All rights reserved.</p>
      <p className="font-serif italic">Built with ❤️</p>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <Hero />
    <Articles />
    <Podcasts />
    <Meetups />
    <WallOfLove />
    <Connect />
    <Footer />
  </div>
);

export default Index;
