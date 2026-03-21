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
  <section id="education" className="py-12 md:py-16">
    <SectionHeading>education</SectionHeading>
    <div className="space-y-8 mt-8">
      {EDUCATION.map((e) => (
        <div key={e.institution} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground">
            {e.institution}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {e.program} | {e.period}
            {e.detail ? ` | ${e.detail}` : ""}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
