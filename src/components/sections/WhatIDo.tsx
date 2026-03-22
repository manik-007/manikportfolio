const CARDS = [
  {
    title: "Build Products",
    description:
      "I turn ideas into tangible products and experiences — from side projects to full-scale platforms that solve real problems for real people.",
  },
  {
    title: "Grow Communities",
    description:
      "I build tribes, not audiences. From zero to thousands — I create communities where people genuinely belong and grow together.",
  },
  {
    title: "Create Content",
    description:
      "Writing on Medium & LinkedIn, podcasting, and producing videos on YouTube — sharing stories, ideas, and lessons along the way.",
  },
];

const WhatIDo = () => (
  <section id="whatido" className="py-20 md:py-28 px-6 border-t border-border bg-background">
    <div className="max-w-4xl mx-auto text-center">
      <span className="text-xs font-sans font-medium tracking-widest text-muted-foreground uppercase">
        What I Do
      </span>
      <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mt-4 mb-14 leading-tight">
        Building at the intersection of{" "}
        <span className="italic text-foreground">
          people, products & purpose.
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="bg-background rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIDo;
