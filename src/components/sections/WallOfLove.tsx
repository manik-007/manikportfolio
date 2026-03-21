import { useState } from "react";
import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  {
    text: "great to connect manik and to learn about all the good work you're doing in your community.",
    person: "desmond john",
    role: "founder of vibe guide ventures",
    linkedin: "https://www.linkedin.com/in/desmondjohn/",
  },
  {
    text: "working with you is always a pleasure and a huge inspiration, manik!",
    person: "aashi raghuvanshi",
    role: "agentic ai & automation engineer",
    linkedin: "https://www.linkedin.com/in/aashiraghuvanshi/",
  },
  {
    text: "loved your enthusiasm throughout the event, from registrations to vlogging. an all rounder if i must say",
    person: "shatakshi bhardwaj",
    role: "ui/ux designer",
    linkedin: "https://www.linkedin.com/in/shatakshibhardwaj/",
  },
  {
    text: "i love the work that you do",
    person: "sakshi agarwal",
    role: "aspiring data scientist",
    linkedin: "https://www.linkedin.com/in/sakshiagarwal/",
  },
  {
    text: "you are the most amazing guy i have ever met.",
    person: "vishal prakash maurya",
    role: "full stack developer",
    linkedin: "https://www.linkedin.com/in/vishalprakashmaurya/",
  },
  {
    text: "i loved learning more about girls in tech and all the amazing work you are doing to make opportunities more accessible to indian young women. i also loved all the cross-overs we have. i hope we can collaborate in the future!",
    person: "lina orozco munera",
    role: "vmc rac member",
    linkedin: "https://www.linkedin.com/in/linaorozco/",
  },
  {
    text: "truly inspiring journey, manik bhaiya. stories like yours really motivate me to work harder and aim to be part of gdg someday. looking forward to learning, growing, and contributing to the amazing community just like you did.",
    person: "shashank joshi",
    role: "machine learning enthusiast",
    linkedin: "https://www.linkedin.com/in/shashankjoshi/",
  },
  {
    text: "pro multi-tasker for real! kudos to you and your vision towards empowering girls, manik! you are truly a gem of a person!",
    person: "catherine infanta",
    role: "harvard aspire leader",
    linkedin: "https://www.linkedin.com/in/catherineinfanta/",
  },
  {
    text: "truly inspiring, manik! i've had the privilege of watching this community grow and thrive — a big shoutout to you for building something so impactful.",
    person: "samridhi gupta",
    role: "google we scholar",
    linkedin: "https://www.linkedin.com/in/samridhi-gupta08/",
  },
  {
    text: "truly inspiring to see your dedication and passion in action!",
    person: "simran nagekar",
    role: "game experience designer",
    linkedin: "https://www.linkedin.com/in/simrannagekar/",
  },
  {
    text: "you are doing fantastic work. whatever you are doing is praiseworthy",
    person: "adyasha das",
    role: "google we scholar",
    linkedin: "https://www.linkedin.com/in/adyashadas/",
  },
  {
    text: "it was great meeting you at the bootcamp. your energy was inspiring, and i enjoyed our interaction. excited to see the amazing things you'll do next!!",
    person: "shradha gurjar",
    role: "aspiring project manager",
    linkedin: "https://www.linkedin.com/in/shradhagurjar/",
  },
  {
    text: "never seen such a human with such great enthusiasm. you're amazing, manik — it was great meeting you.",
    person: "tanu singh",
    role: "blockchain developer",
    linkedin: "https://www.linkedin.com/in/tanusingh/",
  },
];

const INITIAL_COUNT = 4;

const WallOfLove = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, INITIAL_COUNT);

  return (
    <section id="testimonials" className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading>wall of love</SectionHeading>
        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((t) => (
            <blockquote
              key={t.person}
              className="border border-border rounded-lg p-8 bg-card text-left"
            >
              <span className="font-serif text-4xl text-border leading-none select-none">"</span>
              <p className="font-serif text-base italic text-foreground leading-relaxed -mt-2 mb-5">
                {t.text}
              </p>
              <footer className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">{t.person}</p>
                  <p className="font-sans text-xs text-muted-foreground">{t.role}</p>
                </div>
                {t.linkedin && (
                  <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
        {!showAll && TESTIMONIALS.length > INITIAL_COUNT && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-8 inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            see all testimonials
          </button>
        )}
      </div>
    </section>
  );
};

export default WallOfLove;
