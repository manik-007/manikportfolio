import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  {
    text: "great to connect manik and to learn about all the good work you're doing in your community.",
    person: "desmond john",
    role: "founder of vibe guide ventures",
  },
  {
    text: "working with manik is always a pleasure and a huge inspiration!",
    person: "aashi raghuvanshi",
    role: "agentic ai & automation engineer",
  },
];

const WallOfLove = () => (
  <section id="testimonials" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-3xl mx-auto text-center">
      <SectionHeading>wall of love</SectionHeading>
      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t) => (
          <blockquote
            key={t.person}
            className="border border-border rounded-lg p-8 md:p-10 bg-card text-center"
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

export default WallOfLove;
