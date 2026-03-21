import SectionHeading from "./SectionHeading";

const EXPERIENCE = [
  {
    company: "BlockOn Ventures",
    role: "",
    period: "sept 2025 – present",
    type: "contract | part-time | remote | malaysia",
    bullets: [
      "handled the partnerships, sponsorships, and on-ground operations for 8 exclusive events happening under india blockchain month 2025 during eth global india week.",
      "outreached to 300+ partners via social media.",
    ],
  },
  {
    company: "ProPeers",
    role: "community manager",
    period: "sept 2024 – oct 2024",
    type: "internship | remote | delhi",
    bullets: [
      "spearheaded outreach to 20+ colleges, driving 2,000+ user growth.",
      "designed the ProPeersX Lead Program structure to scale the community & user base.",
    ],
  },
  {
    company: "Association of Cyber Security",
    role: "community manager",
    period: "dec 2023 – aug 2024",
    type: "internship | remote | chandigarh",
    bullets: [
      "organized 10 security talks with an average attendance of 50+ participants each.",
      "led email marketing campaigns, boosting event visibility and engagement.",
      "recruited and managed a core team of 6, conducting interviews and onboarding.",
    ],
  },
];

const WorkExperience = () => (
  <section id="experience" className="py-12 md:py-16">
    <SectionHeading>work experience</SectionHeading>
    <div className="space-y-8 mt-8">
      {EXPERIENCE.map((e) => (
        <div key={e.company} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground">
              {e.role ? `${e.role} | ${e.company}` : e.company}
            </h3>
            <span className="text-sm text-muted-foreground whitespace-nowrap">{e.period}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{e.type}</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            {e.bullets.map((b, i) => (
              <li key={i} className="text-sm text-foreground leading-relaxed">{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default WorkExperience;
