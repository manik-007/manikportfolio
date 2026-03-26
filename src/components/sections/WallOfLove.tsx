import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  {
    text: "You are one of my favourite seniors and the one whom I admire the most. I love how you are so down to earth and humble even after achieving so much. You make sure that nobody is left out and I feel that's the best quality you have.",
    person: "Divanshi Arora",
    linkedin: "https://www.linkedin.com/in/divanshi-arora-541829373",
  },
  {
    text: "Working with Manik Bhaiya has been one of the most defining parts of my college journey. More than just a community founder, he has been a mentor who genuinely pushes people to discover their potential.",
    person: "Swagita Parida",
    linkedin: "https://www.linkedin.com/in/swagita-parida-876b54303",
  },
  {
    text: "I have closely observed his work in building a global girls-in-tech community that actively addresses the gap in guidance and opportunities. His work is genuinely helping bridge the gap for many aspiring women in technology.",
    person: "Gungun Goel",
    linkedin: "https://www.linkedin.com/in/gungun-goel-05154426a",
  },
  {
    text: "It is rare to find a senior who balances intellectual depth with such genuine kindness. As the founder of Letz Connect community, Manik bhaiya has been the best guide I could have asked for.",
    person: "Shruti Sharma",
    linkedin: "https://www.linkedin.com/in/shruti-sharma-81a079369",
  },
];

const WallOfLove = () => {
  const navigate = useNavigate();

  return (
    <section id="testimonials" className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading>Wall of Love</SectionHeading>
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
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
        <button
          onClick={() => navigate("/wall-of-love")}
          className="mt-8 inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          See All Testimonials
        </button>
      </div>
    </section>
  );
};

export default WallOfLove;
