import SectionHeading from "./SectionHeading";

const EDUCATION = [
  {
    institution: "aspire institute",
    period: "march 2025 – may 2025",
    program: "leadership development program",
  },
  {
    institution: "chandigarh group of colleges landra, punjab",
    period: "2023 – 2027",
    program: "btech computer science engineering",
    detail: "cgpa — 7.83",
  },
  {
    institution: "police dav public school",
    period: "2021 – 2023",
    program: "cbse — non medical (physics, chemistry, maths, music)",
    detail: "percentage — 90%",
  },
  {
    institution: "bell toll public high school",
    period: "2008 – 2021",
    program: "icse — science",
    detail: "percentage — 91%",
  },
];

const Education = () => (
  <section id="education" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-3xl mx-auto text-center">
      <SectionHeading>education</SectionHeading>
      <div className="space-y-10 text-left">
        {EDUCATION.map((e) => (
          <div key={e.institution} className="border-l-2 border-border pl-6">
            <p className="text-xs font-sans font-medium tracking-widest text-muted-foreground uppercase">
              {e.period}
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mt-1">
              {e.institution}
            </h3>
            <p className="text-base text-muted-foreground mt-1">{e.program}</p>
            {e.detail && (
              <p className="text-sm font-medium text-foreground mt-1">{e.detail}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
