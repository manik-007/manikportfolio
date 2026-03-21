import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "4,000", label: "girls in glt" },
  { value: "50", label: "events organised" },
  { value: "∞", label: "growth mindset" },
];

const About = () => (
  <section id="about" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-3xl mx-auto text-center">
      <span className="text-xs font-sans font-medium tracking-widest text-muted-foreground uppercase">
        about
      </span>
      <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mt-4 mb-4 leading-tight">
        i bring growth{" "}
        <span className="italic text-foreground">wherever i go.</span>
      </h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed mt-8 text-base md:text-lg text-left md:text-center">
        <p>
          hey, i'm manik — a builder, community architect, and growth catalyst based in india. i believe the most powerful thing you can do is build things that matter and surround yourself with people who push you forward.
        </p>
        <p>
          from organising grassroots events to hosting my own podcast, from writing on linkedin and medium to building one of india's most vibrant communities for women in tech — everything i do comes from one place: genuine care for people and relentless drive to create impact.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-12">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-serif text-3xl md:text-4xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs font-sans font-medium tracking-widest text-muted-foreground uppercase mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
