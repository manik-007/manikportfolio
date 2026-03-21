import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "4,000", label: "members" },
  { value: "pan india", label: "reach" },
  { value: "women", label: "in tech focus" },
];

const Community = () => (
  <section id="community" className="py-20 md:py-28 px-6 border-t border-border bg-background">
    <div className="max-w-4xl mx-auto text-center">
      <span className="text-xs font-sans font-medium tracking-widest text-muted-foreground uppercase">
        the community i am building
      </span>
      <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6 leading-tight">
        girls leading tech
      </h2>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
        a 4000-girl-strong movement across india, building a future where every girl in tech feels seen, supported, and unstoppable. glt is where ambition meets sisterhood.
      </p>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-10">
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="font-serif text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs font-sans font-medium tracking-widest text-muted-foreground uppercase mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <a
        href="https://www.linkedin.com/company/girlsleadingtech/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
      >
        learn more
      </a>
    </div>
  </section>
);

export default Community;
