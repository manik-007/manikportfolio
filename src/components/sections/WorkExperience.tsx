import SectionHeading from "./SectionHeading";

const EXPERIENCE = [
  {
    company: "BlockOn Ventures",
    role: "Business Development Manager",
    period: "Sept 2025 – Present",
    type: "Contract | Part-time | Remote | Malaysia",
    bullets: [
      "Handled the partnerships, sponsorships, and on-ground operations for 8 exclusive events happening under India Blockchain Month 2025 during ETH Global India Week.",
      "Outreached to 300+ partners via social media.",
    ],
  },
  {
    company: "ProPeers",
    role: "Community Manager",
    period: "Sept 2024 – Oct 2024",
    type: "Internship | Remote | Delhi",
    bullets: [
      "Spearheaded outreach to 20+ colleges, driving 2,000+ user growth.",
      "Designed the ProPeersX Lead Program structure to scale the community & user base.",
    ],
  },
  {
    company: "Association of Cyber Security",
    role: "Community Manager",
    period: "Dec 2023 – Aug 2024",
    type: "Internship | Remote | Chandigarh",
    bullets: [
      "Organized 10 security talks with an average attendance of 50+ participants each.",
      "Led email marketing campaigns, boosting event visibility and engagement.",
      "Recruited and managed a core team of 6, conducting interviews and onboarding.",
    ],
  },
];

const WorkExperience = () => (
  <section id="experience" className="py-12 md:py-16">
    <SectionHeading>Work Experience</SectionHeading>
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
