import { useEffect } from "react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/sections/SectionHeading";

const COMMUNITY_ROLES = [
  {
    org: "Girls Leading Tech",
    role: "Builder",
    period: "June 2024 – Present",
    highlight: "3,300+ members across 900+ colleges and 25+ Indian states",
    stats: ["55+ Mentorship Sessions", "15K+ Followers", "700+ Hackers at Global AI Buildathon", "1,700+ Hackers at HackAura"],
    description: "Founded from a WhatsApp group of 5 girls into a thriving pan-India women-in-tech movement. Featured speakers from Google, Amazon, Microsoft, Uber, Flipkart, and more.",
  },
  {
    org: "CMX",
    role: "CMX Connect Host",
    period: "June 2024 – Present",
    highlight: "410+ members | 2 global spotlight features in CMX Newsletter",
    stats: ["10+ Virtual Events", "330+ Registrations for EmpowerHer", "Best CMX Director of the Month"],
    description: "Hosted events featuring top community managers, DevRels, and founders. Recognized globally as youngest CMX Director worldwide.",
  },
  {
    org: "Lamit Club",
    role: "Founding Lead",
    period: "Apr 2024 – Jan 2025",
    highlight: "300-member Web3 community",
    stats: ["5-Day Bootcamp (296 Registrations)", "230+ Orientation Sign-ups", "5 Speaker Sessions"],
    description: "Built and scaled a Web3 community with speaker sessions, interaction calls, offline gatherings, and a rebranding initiative.",
  },
  {
    org: "SheBuilds",
    role: "Organizer",
    period: "Oct 2024 – Apr 2025",
    highlight: "Hackemon — 36-hour Pokémon-themed hackathon",
    stats: ["55%+ Sponsor Response Rate", "14 Co-organizers", "10+ Community Partners"],
    description: "Spearheaded sponsorship and outreach for hackathons and Code & Connect meetups across Delhi and Noida.",
  },
];

const VOLUNTEERING = [
  {
    org: "CNCF Jalandhar",
    role: "Organizer",
    bullets: [
      "Organized 'Introduction to CNCF' online panel discussion and 'Introducing Argo CD + Getting Involved' featuring Christian, Head of Community at Akuity.",
      "Designed promotional posters and digital assets for events and speaker sessions to drive engagement and participation.",
    ],
  },
  {
    org: "Google Cloud",
    role: "Arcade Facilitator",
    bullets: [
      "Built and nurtured a community of 1,200+ members, enrolling 550+ participants into the Arcade Program.",
      "Achieved the 2nd milestone and successfully completed the program, driving engagement and structured community growth.",
    ],
  },
  {
    org: "THM CGC",
    role: "Marketing",
    bullets: [
      "Led event promotion, speaker outreach, and crafted effective social media strategies to grow chapter presence across platforms.",
      "Contributed to organizing key seminars including the Inaugural Seminar on Cyber Threat Intelligence & Ethical Hacking and Cyber101.",
    ],
  },
  {
    org: "TPG Chandigarh",
    role: "Community Lead",
    bullets: [
      "Organized the Starknet India Roadshow, a 2-day in-person event hosted at Antier Solutions.",
      "Led end-to-end planning and execution of Road to Devcon at Chandigarh University, achieving 110+ registrations and 70+ attendees.",
      "Managed the official Twitter account, driving online engagement and community visibility.",
    ],
  },
  {
    org: "Socrates Global",
    role: "Partnerships Lead",
    bullets: [
      "Reached out to 60+ leads and pitched Socrates Global to potential partners and users.",
      "Contributed to the acquisition of 4,000+ unique users within 2 weeks through strategic outreach efforts.",
    ],
  },
  {
    org: "Hack for Bloom",
    role: "Partnerships Lead",
    bullets: [
      "Outreached to sponsors including Hive, GeeksforGeeks, Outdefine, and HackQuest for potential partnerships.",
      "Provided practical growth strategies to organize, scale, and strengthen the community structure.",
      "Curated a targeted list of sponsor leads to streamline outreach and partnership efforts.",
    ],
  },
  {
    org: "IBW",
    role: "Volunteer",
    bullets: [
      "Actively participated in brainstorming and engaged in community & social posts.",
    ],
  },
  {
    org: "Web3 Conf Goa",
    role: "Partnership Team",
    bullets: [
      "Outreached to 5+ potential sponsors to secure partnerships and support for community initiatives.",
    ],
  },
  {
    org: "HackArCode",
    role: "Partnership Lead",
    bullets: [
      "Outreached to 10+ potential sponsors to secure partnerships and support for community initiatives.",
    ],
  },
  {
    org: "KotlinConf",
    role: "Content Writer",
    bullets: [
      "Wrote social media content for KotlinConf, contributing to increased engagement and growth across platforms.",
      "Volunteered on-site, managing crowd flow, handling the community lounge, maintaining discipline, unpacking swag, and assisting attendees with navigation during the conference.",
    ],
  },
];

const CommunityCard = ({ org, role, period, highlight, stats, description }: {
  org: string; role: string; period?: string; highlight: string;
  stats?: string[]; description?: string;
}) => (
  <div className="border border-border rounded-lg p-5 sm:p-6 hover:border-foreground/20 transition-colors">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
      <div>
        <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">{org}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{role}{period ? ` · ${period}` : ""}</p>
      </div>
    </div>
    <p className="text-sm font-medium text-foreground mb-2">{highlight}</p>
    {description && (
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
    )}
    {stats && stats.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {stats.map((s) => (
          <span key={s} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
            {s}
          </span>
        ))}
      </div>
    )}
  </div>
);

const VolunteerCard = ({ org, role, bullets }: { org: string; role: string; bullets: string[] }) => (
  <div className="border border-border rounded-lg p-4 sm:p-5 hover:border-foreground/20 transition-colors">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
      <h3 className="font-serif text-base font-semibold text-foreground">{org}</h3>
      <span className="text-xs text-muted-foreground">{role}</span>
    </div>
    <ul className="list-disc list-outside pl-4 space-y-1">
      {bullets.map((b, i) => (
        <li key={i} className="text-sm text-muted-foreground leading-relaxed">{b}</li>
      ))}
    </ul>
  </div>
);

const CommunityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Community Contributions</SectionHeading>
          <div className="space-y-5 mt-8">
            {COMMUNITY_ROLES.map((c) => (
              <CommunityCard key={c.org} {...c} />
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading>Volunteering</SectionHeading>
            <div className="space-y-4 mt-8">
              {VOLUNTEERING.map((v) => (
                <VolunteerCard key={v.org} {...v} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;
