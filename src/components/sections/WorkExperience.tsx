import SectionHeading from "./SectionHeading";

const EXPERIENCE = [
  {
    company: "BlockOn Ventures",
    role: "business development manager",
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
    <div className="space-y-10 mt-8">
      {EXPERIENCE.map((e) => (
        <div key={e.company}>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
            {e.company}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {e.role} | {e.period} | {e.type}
          </p>
          <ul className="mt-4 space-y-2 list-disc list-outside pl-5">
            {e.bullets.map((b, i) => (
              <li key={i} className="text-sm text-foreground leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default WorkExperience;
