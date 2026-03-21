import { useEffect } from "react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/sections/SectionHeading";

const COMMUNITY_ROLES = [
  {
    org: "girls leading tech",
    role: "builder",
    period: "june 2024 – present",
    bullets: [
      "founded girls leading tech from a whatsapp group of 5 girls into a thriving community of 3300+ members across 900+ colleges and 25+ indian states.",
      "built and managed a 15-member core team, driving operations, events, partnerships, and growth strategy.",
      "hosted 55+ mentorship sessions, 5 coffee chats, 4 glt spotlights, 20 twitter spaces, and several unique initiatives, including contests, \"how to crack\" series, valentine's week, and empowerher on international women's day, and yoga day special session.",
      "collaborated with leading women-in-tech platforms like shecancode and featured speakers from google, amazon, microsoft, uber, flipkart, infosys, sap, salesforce and more.",
      "grew digital presence to 15k+ followers, 3.5k+ substack and 1.7k+ luma subscribers, and 20k+ youtube views with 1300 subscribers.",
      "organised global ai buildathon, a 8 hr virtual hackathon with 57k+ impressions, 700+ hackers, and 81 ai projects addressing un sustainable development goals.",
      "organised ml cohort 1.0, a month-long initiative to educate and provide mentorship to girls in ai. we had daily challenges and project spotlights. with over 1,100 applications from 7+ countries, 600+ mentees joined us, and around 400 projects were created through learning from 8 mentors and attending exclusive 11 mentorship sessions.",
      "organised hackaura, a 24-hour virtual hackathon powered by 14 sponsors and supported by 45+ community partners. with 1700+ hackers joining us, 150+ projects have been made across 3 tracks: ai, web3 & open innovation. 20 podcasts, 4 quizzes, 3 workshops, 1 gaming activity have been conducted in 24hr livestream along the hackathon to engage the hackers.",
    ],
  },
  {
    org: "cmx",
    role: "cmx connect host",
    period: "june 2024 – present",
    bullets: [
      "hosted 10+ virtual events on bevy featuring top community managers, devrels, and founders; topics included web3, devrel, ar, diversity, and community building.",
      "grew the cmx chapter to 410+ members, with 2 global spotlight features in the cmx newsletter among 75+ chapters worldwide.",
      "led flagship events like empowerher in collaboration with girls leading tech, attracting 330+ registrations, one of the highest among cmx chapters.",
      "recognized globally as best cmx director of the month, most promising debut, and youngest cmx director worldwide for one consecutive year.",
    ],
  },
  {
    org: "lamit club",
    role: "founding lead",
    period: "apr 2024 – jan 2025",
    bullets: [
      "built and scaled a 300-member web3 community, organizing 5 speaker sessions, 8 interaction calls, 6 offline gatherings, and 1 seminar.",
      "led high-impact events including a 5-day bootcamp (296 registrations), orientation (230+ sign-ups, 130+ attendees), and a logo competition (103 entries, 60 submissions) for club rebranding.",
      "facilitated strategic growth by conducting regular team meetings to brainstorm and implement community initiatives.",
    ],
  },
  {
    org: "shebuilds",
    role: "organizer",
    period: "oct 2024 – apr 2025",
    bullets: [
      "spearheaded sponsorship efforts for hackemon, a 36-hour pokémon-themed hackathon; collaborated with 14 co-organizers and led 9 volunteers.",
      "designed the sponsorship deck and pitched to 15+ leads at bscon (iit delhi), securing follow-up interest from all; initiated venue partnerships.",
      "conducted outreach to 40+ potential sponsors, achieving a 55%+ response rate.",
      "led outreach and sponsorship for code & connect meetups (delhi & noida), managing a 10-member volunteer team.",
      "secured interviewcake and jetbrains as in-kind sponsors, and onboarded her dao as the title sponsor.",
      "managed attendee forms and community partnerships, onboarding 10+ partners and identifying city leads for chennai, bangalore, lucknow, and nagpur.",
    ],
  },
];

const VOLUNTEERING = [
  {
    org: "cncf jalandhar",
    role: "organizer",
    bullets: [
      "organized \"introduction to cncf\" online panel discussion and \"introducing argo cd + getting involved\" featuring christian, head of community at akuity.",
      "designed promotional posters and digital assets for events and speaker sessions to drive engagement and participation.",
    ],
  },
  {
    org: "google cloud",
    role: "google cloud arcade facilitator",
    bullets: [
      "built and nurtured a community of 1200+ members, enrolling 550+ participants into the arcade program.",
      "achieved the 2nd milestone and successfully completed the program, driving engagement and structured community growth.",
    ],
  },
  {
    org: "thm cgc",
    role: "marketing",
    bullets: [
      "led event promotion, speaker outreach, and crafted effective social media strategies to grow chapter presence across platforms.",
      "contributed to organizing key seminars including the inaugural seminar on cyber threat intelligence & ethical hacking and cyber101.",
    ],
  },
  {
    org: "tpg chandigarh",
    role: "community lead",
    bullets: [
      "organized the starknet india roadshow, a 2-day in-person event hosted at antier solutions.",
      "led end-to-end planning and execution of road to devcon at chandigarh university, achieving 110+ registrations and 70+ attendees.",
      "managed the official twitter account, driving online engagement and community visibility.",
    ],
  },
  {
    org: "socrates global",
    role: "partnerships lead",
    bullets: [
      "reached out to 60+ leads and pitched socrates global to potential partners and users.",
      "contributed to the acquisition of 4,000+ unique users within 2 weeks through strategic outreach efforts.",
    ],
  },
  {
    org: "hack for bloom",
    role: "partnerships lead",
    bullets: [
      "outreached to sponsors including hive, geeksforgeeks, outdefine, and hackquest for potential partnerships.",
      "provided practical growth strategies to organize, scale, and strengthen the community structure.",
      "curated a targeted list of sponsor leads to streamline outreach and partnership efforts.",
    ],
  },
  {
    org: "ibw",
    role: "volunteer",
    bullets: [
      "actively participated in brainstorming and engaged in community & social posts.",
    ],
  },
  {
    org: "web3 conf goa",
    role: "partnership team",
    bullets: [
      "outreached to 5+ potential sponsors to secure partnerships and support for community initiatives.",
    ],
  },
  {
    org: "hackarcode",
    role: "partnership lead",
    bullets: [
      "outreached to 10+ potential sponsors to secure partnerships and support for community initiatives.",
    ],
  },
  {
    org: "kotlinconf",
    role: "content writer",
    bullets: [
      "wrote social media content for kotlinconf, contributing to increased engagement and growth across platforms.",
      "volunteered on-site, managing crowd flow, handling the community lounge, maintaining discipline, unpacking swag, and assisting attendees with navigation during the conference.",
    ],
  },
];

const RoleCard = ({ org, role, period, bullets }: { org: string; role: string; period?: string; bullets: string[] }) => (
  <div>
    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">{org}</h3>
    <p className="text-sm text-muted-foreground mt-1">
      {role}{period ? ` | ${period}` : ""}
    </p>
    <ul className="mt-4 space-y-2">
      {bullets.map((b, i) => (
        <li key={i} className="flex gap-3 text-sm text-foreground leading-relaxed">
          <span className="text-muted-foreground mt-1.5 shrink-0">•</span>
          <span>{b}</span>
        </li>
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
          <SectionHeading>community contributions</SectionHeading>
          <div className="space-y-10 mt-8">
            {COMMUNITY_ROLES.map((c) => (
              <RoleCard key={c.org} {...c} />
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading>volunteering</SectionHeading>
            <div className="space-y-10 mt-8">
              {VOLUNTEERING.map((v) => (
                <RoleCard key={v.org} org={v.org} role={v.role} bullets={v.bullets} />
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
