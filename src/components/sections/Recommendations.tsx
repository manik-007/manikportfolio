import SectionHeading from "./SectionHeading";

const RECS = [
  {
    name: "dr. aayushi gautam",
    title: "assistant professor | phd | computer vision | deep learning | image processing",
    linkedin: "https://www.linkedin.com/in/dr-aayushi-gautam-7a2b25165/",
    date: "november 24, 2025",
    relation: "manik's teacher",
    text: "i am pleased to recommend manik, one of my brightest and most dedicated students. from the very beginning, he has stood out for his strong technical skills, sharp problem-solving abilities, and an impressive curiosity for learning. over time, i have had the privilege of watching manik grow, mature, and gain remarkable confidence in his approach. his ability to understand complex concepts, apply them effectively, and continuously refine his work sets him apart from his peers. he is proactive, hardworking, and consistently pushes himself to deliver high-quality results. manik's professionalism, clarity of thought, and willingness to take on challenges make him an asset to any team. i am confident that he will continue to excel in every role he takes up.",
  },
  {
    name: "bhawna chauhan",
    title: "founder shebuilds | github campus expert",
    linkedin: "https://www.linkedin.com/in/connectbhawna/",
    date: "december 19, 2025",
    relation: "worked with manik on the same team",
    text: "it was a pleasure working with manik across multiple initiatives, from hosting community meetups to organizing a full-scale hackathon. he brings a rare combination of hands-on execution and clear strategic thinking — always knowing what needs to be done and how to get it done. manik is exceptionally hardworking, dependable and proactive. he consistently takes ownership, handles complexity calmly, and ensures everything runs smoothly, even under tight timelines. his ability to coordinate teams, manage logistics, and keep momentum high makes him a strong asset to any ecosystem or community-led initiative.",
  },
  {
    name: "dr. kapil mehta",
    title: "professor & head — department of emerging technologies, ph.d (cse — cyber security)",
    linkedin: "#",
    date: "december 23, 2025",
    relation: "managed manik directly",
    text: "i've had the pleasure of knowing manik professionally and personally, and i can confidently say he brings dedication, creativity, and a strong growth mindset to every challenge he takes on. manik is proactive in learning, quick to adapt in complex environments, and consistently approaches projects with enthusiasm and integrity. i've seen manik contribute meaningfully to discussions and deliver work that reflects high standards — like he worked as an active coordinator for managing gdg events. any team would benefit from manik's positive attitude, continuous drive to improve, and commitment to excellence.",
  },
  {
    name: "harpreet kaur",
    title: "soft skills & personality development trainer | campus to corporate coach",
    linkedin: "#",
    date: "february 26, 2026",
    relation: "manik's teacher",
    text: "i had the opportunity to teach manik during his b.tech, and he has consistently been one of the most diligent and proactive students in the cohort. i have seen his growth from the initial stages of consciously practicing his skills to achieving impressive heights, especially in communication. his transformation into a confident and articulate communicator reflects discipline, consistency, and a strong growth mindset. he is responsible, engaged, and always willing to put in the effort required to improve. i'm confident he will add value wherever he goes.",
  },
];

const Recommendations = () => (
  <section id="recommendations" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-3xl mx-auto text-center">
      <SectionHeading>recommendations</SectionHeading>
      <div className="space-y-10 text-left">
        {RECS.map((r) => (
          <blockquote key={r.name} className="border border-border rounded-lg p-8">
            <p className="font-serif text-base italic text-foreground leading-relaxed mb-6">
              "{r.text}"
            </p>
            <footer className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-sans text-sm font-semibold text-foreground">{r.name}</p>
                  {r.linkedin !== "#" && (
                    <a href={r.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  )}
                </div>
                <p className="font-sans text-xs text-muted-foreground">{r.title}</p>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">{r.relation} · {r.date}</p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Recommendations;
