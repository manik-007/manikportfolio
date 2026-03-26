import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const EDUCATION = [
  {
    institution: "McKinsey & Company",
    period: "Oct 2025 – Dec 2025",
    program: "McKinsey Forward Learning Programme — Fellow",
    detail: "Learned frameworks like APR, EPIC, SMART and how to be more adaptable, resilient while communicating effectively for impact.",
    link: "https://www.mckinsey.com/",
  },
  {
    institution: "The Community Collective",
    period: "2024 – 2025",
    program: "Community Building & Leadership Programme",
    detail: "Secured full scholarship of $6,000 to be a part of Cohort 6, Cohort 7 and Chaos Pilot Program among 100+ candidates worldwide.",
    link: "https://thecommunitycollective.co/",
  },
  {
    institution: "Aspire Institute",
    period: "March 2025 – May 2025",
    program: "Leadership Development Program",
    link: "https://www.aspireleaders.org/",
  },
  {
    institution: "Chandigarh Group of Colleges Landran, Punjab",
    link: "https://www.cgc.edu.in/",
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
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground inline-flex items-center gap-2">
            {e.link ? (
              <a href={e.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                {e.institution} <ExternalLink size={14} />
              </a>
            ) : e.institution}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {e.program} | {e.period}
          </p>
          {e.detail && <p className="text-sm text-muted-foreground mt-1">{e.detail}</p>}
        </div>
      ))}
    </div>
  </section>
);

export default Education;
