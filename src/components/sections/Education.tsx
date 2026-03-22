import SectionHeading from "./SectionHeading";

const EDUCATION = [
  {
    institution: "Aspire Institute",
    period: "March 2025 – May 2025",
    program: "Leadership Development Program",
  },
  {
    institution: "Chandigarh Group of Colleges Landra, Punjab",
    period: "2023 – 2027",
    program: "B.Tech Computer Science Engineering",
    detail: "CGPA — 7.83",
  },
  {
    institution: "Police DAV Public School",
    period: "2021 – 2023",
    program: "CBSE — Non Medical (Physics, Chemistry, Maths, Music)",
    detail: "Percentage — 90%",
  },
  {
    institution: "Bell Toll Public High School",
    period: "2008 – 2021",
    program: "ICSE — Science",
    detail: "Percentage — 91%",
  },
];

const Education = () => (
  <section id="education" className="py-12 md:py-16">
    <SectionHeading>Education</SectionHeading>
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
