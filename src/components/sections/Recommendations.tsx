import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const RECS = [
  {
    name: "Dr. Aayushi Gautam",
    title: "Assistant Professor | PhD | Computer Vision | Deep Learning | Image Processing",
    linkedin: "https://www.linkedin.com/in/dr-aayushi-gautam-7a2b25165/",
    date: "November 24, 2025",
    relation: "Manik's Teacher",
    text: "I am pleased to recommend Manik, one of my brightest and most dedicated students. From the very beginning, he has stood out for his strong technical skills, sharp problem-solving abilities, and an impressive curiosity for learning. Over time, I have had the privilege of watching Manik grow, mature, and gain remarkable confidence in his approach. His ability to understand complex concepts, apply them effectively, and continuously refine his work sets him apart from his peers. He is proactive, hardworking, and consistently pushes himself to deliver high-quality results. Manik's professionalism, clarity of thought, and willingness to take on challenges make him an asset to any team. I am confident that he will continue to excel in every role he takes up.",
  },
  {
    name: "Bhawna Chauhan",
    title: "Founder SheBuilds | GitHub Campus Expert",
    linkedin: "https://www.linkedin.com/in/connectbhawna/",
    date: "December 19, 2025",
    relation: "Worked with Manik on the same team",
    text: "It was a pleasure working with Manik across multiple initiatives, from hosting community meetups to organizing a full-scale hackathon. He brings a rare combination of hands-on execution and clear strategic thinking — always knowing what needs to be done and how to get it done. Manik is exceptionally hardworking, dependable and proactive. He consistently takes ownership, handles complexity calmly, and ensures everything runs smoothly, even under tight timelines. His ability to coordinate teams, manage logistics, and keep momentum high makes him a strong asset to any ecosystem or community-led initiative.",
  },
  {
    name: "Dr. Kapil Mehta",
    title: "Professor & Head, Department of Emerging Technologies, Ph.D (CSE, Cyber Security)",
    linkedin: "https://www.linkedin.com/in/dr-kapil-mehta-72476089/",
    date: "December 23, 2025",
    relation: "Managed Manik directly",
    text: "I've had the pleasure of knowing Manik professionally and personally, and I can confidently say he brings dedication, creativity, and a strong growth mindset to every challenge he takes on. Manik is proactive in learning, quick to adapt in complex environments, and consistently approaches projects with enthusiasm and integrity. I've seen Manik contribute meaningfully to discussions and deliver work that reflects high standards — like he worked as an active coordinator for managing GDG events. Any team would benefit from Manik's positive attitude, continuous drive to improve, and commitment to excellence.",
  },
  {
    name: "Harpreet Kaur",
    title: "Soft Skills & Personality Development Trainer | Campus to Corporate Coach",
    linkedin: "https://www.linkedin.com/in/kaurharpreet191095/",
    date: "February 26, 2026",
    relation: "Manik's Teacher",
    text: "I had the opportunity to teach Manik during his B.Tech, and he has consistently been one of the most diligent and proactive students in the cohort. I have seen his growth from the initial stages of consciously practicing his skills to achieving impressive heights, especially in communication. His transformation into a confident and articulate communicator reflects discipline, consistency, and a strong growth mindset. He is responsible, engaged, and always willing to put in the effort required to improve. I'm confident he will add value wherever he goes.",
  },
];

const RecCard = ({ r }: { r: typeof RECS[0] }) => {
  const [expanded, setExpanded] = useState(false);
  const preview = r.text.slice(0, 120) + "...";

  return (
    <blockquote className="border border-border rounded-lg p-4 sm:p-6">
      <p className="font-serif text-sm italic text-foreground leading-relaxed mb-3">
        "{expanded ? r.text : preview}"
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-3"
      >
        {expanded ? "Show less" : "Read more"}
        <ChevronDown size={14} className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </button>
      <footer>
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-sans text-sm font-semibold text-foreground">{r.name}</p>
          <a href={r.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <p className="font-sans text-xs text-muted-foreground break-words">{r.title}</p>
        <p className="font-sans text-xs text-muted-foreground mt-0.5">{r.relation}, {r.date}</p>
      </footer>
    </blockquote>
  );
};

const Recommendations = () => (
  <section id="recommendations" className="py-12 md:py-16">
    <div className="text-center">
      <SectionHeading>Recommendations</SectionHeading>
      <div className="space-y-6 text-left">
        {RECS.map((r) => (
          <RecCard key={r.name} r={r} />
        ))}
      </div>
      <div className="mt-8">
        <a
          href="https://forms.gle/4HmEmcESEF1eFqyi6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          Recommend Me
        </a>
      </div>
    </div>
  </section>
);

export default Recommendations;
