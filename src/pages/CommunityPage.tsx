import { useEffect } from "react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/sections/SectionHeading";

const COMMUNITY_ROLES = [
  {
    org: "girls leading tech",
    role: "builder",
    period: "june 2024 – present",
    highlight: "3300+ members across 900+ colleges and 25+ indian states",
    stats: ["55+ mentorship sessions", "15k+ followers", "700+ hackers at global ai buildathon", "1700+ hackers at hackaura"],
    description: "founded from a whatsapp group of 5 girls into a thriving pan-india women-in-tech movement. featured speakers from google, amazon, microsoft, uber, flipkart, and more.",
  },
  {
    org: "cmx",
    role: "cmx connect host",
    period: "june 2024 – present",
    highlight: "410+ members | 2 global spotlight features in cmx newsletter",
    stats: ["10+ virtual events", "330+ registrations for empowerher", "best cmx director of the month"],
    description: "hosted events featuring top community managers, devrels, and founders. recognized globally as youngest cmx director worldwide.",
  },
  {
    org: "lamit club",
    role: "founding lead",
    period: "apr 2024 – jan 2025",
    highlight: "300-member web3 community",
    stats: ["5-day bootcamp (296 registrations)", "230+ orientation sign-ups", "5 speaker sessions"],
    description: "built and scaled a web3 community with speaker sessions, interaction calls, offline gatherings, and a rebranding initiative.",
  },
  {
    org: "shebuilds",
    role: "organizer",
    period: "oct 2024 – apr 2025",
    highlight: "hackemon — 36-hour pokémon-themed hackathon",
    stats: ["55%+ sponsor response rate", "14 co-organizers", "10+ community partners"],
    description: "spearheaded sponsorship and outreach for hackathons and code & connect meetups across delhi and noida.",
  },
];

const VOLUNTEERING = [
  { org: "cncf jalandhar", role: "organizer", highlight: "panel discussions & argo cd sessions" },
  { org: "google cloud", role: "arcade facilitator", highlight: "1200+ members, 550+ participants" },
  { org: "thm cgc", role: "marketing", highlight: "cyber security seminars & social strategy" },
  { org: "tpg chandigarh", role: "community lead", highlight: "starknet roadshow & road to devcon (110+ registrations)" },
  { org: "socrates global", role: "partnerships lead", highlight: "4,000+ users in 2 weeks" },
  { org: "hack for bloom", role: "partnerships lead", highlight: "sponsor outreach & community growth" },
  { org: "ibw", role: "volunteer", highlight: "brainstorming & community posts" },
  { org: "web3 conf goa", role: "partnership team", highlight: "5+ sponsor outreach" },
  { org: "hackarcode", role: "partnership lead", highlight: "10+ sponsor outreach" },
  { org: "kotlinconf", role: "content writer", highlight: "social media content & on-site volunteering" },
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

const VolunteerItem = ({ org, role, highlight }: { org: string; role: string; highlight: string }) => (
  <div className="border border-border rounded-lg p-4 hover:border-foreground/20 transition-colors">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
      <h3 className="font-serif text-base font-semibold text-foreground">{org}</h3>
      <span className="text-xs text-muted-foreground">{role}</span>
    </div>
    <p className="text-sm text-muted-foreground mt-1">{highlight}</p>
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
          <SectionHeading>community contributions</SectionHeading>
          <div className="space-y-5 mt-8">
            {COMMUNITY_ROLES.map((c) => (
              <CommunityCard key={c.org} {...c} />
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading>volunteering</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {VOLUNTEERING.map((v) => (
                <VolunteerItem key={v.org} {...v} />
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
