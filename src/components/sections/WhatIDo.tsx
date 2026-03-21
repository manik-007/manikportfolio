const CARDS = [
  {
    title: "build products",
    description:
      "i turn ideas into tangible products and experiences — from side projects to full-scale platforms that solve real problems for real people.",
  },
  {
    title: "grow communities",
    description:
      "i build tribes, not audiences. from zero to thousands — i create communities where people genuinely belong and grow together.",
  },
  {
    title: "create content",
    description:
      "writing on medium & linkedin, podcasting, and producing videos on youtube — sharing stories, ideas, and lessons along the way.",
  },
];

const WhatIDo = () => (
  <section id="whatido" className="py-20 md:py-28 px-6 border-t border-border bg-background">
    <div className="max-w-4xl mx-auto">
      <span className="text-xs font-sans font-medium tracking-widest text-muted-foreground uppercase">
        what i do
      </span>
      <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mt-4 mb-14 leading-tight">
        building at the intersection of{" "}
        <span className="italic bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          people, products & purpose.
        </span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
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
