import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "4,000", label: "members" },
  { value: "pan india", label: "reach" },
  { value: "women", label: "in tech focus" },
];

const Community = () => (
  <section id="community" className="py-20 md:py-28 px-6 border-t border-border bg-foreground text-primary-foreground">
    <div className="max-w-4xl mx-auto">
      <span className="text-xs font-sans font-medium tracking-widest opacity-60 uppercase">
        the community i am building
      </span>
      <h2 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
        girls leading tech
      </h2>
      <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-2xl mb-10">
        a 4000-girl-strong movement across india, building a future where every girl in tech feels seen, supported, and unstoppable. glt is where ambition meets sisterhood.
      </p>
      <div className="flex flex-wrap gap-12 mb-10">
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="font-serif text-2xl md:text-3xl font-bold">{s.value}</p>
            <p className="text-xs font-sans font-medium tracking-widest opacity-60 uppercase mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          href="https://chat.whatsapp.com/example"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-primary-foreground text-foreground hover:opacity-90 transition-opacity"
        >
          join the community
        </a>
        <a
          href="#connect"
          className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
        >
          learn more
        </a>
      </div>
    </div>
  </section>
);

export default Community;
