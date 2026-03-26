import { useEffect } from "react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/sections/SectionHeading";

const TESTIMONIALS = [
  {
    text: "You are one of my favourite seniors and the one whom I admire the most. I love how you are so down to earth and humble even after achieving so much. You make sure that nobody is left out and I feel that's the best quality you have. Your nature to help everyone is awesome. The way you encourage and motivate everyone to try new things increases the confidence of people. Your ability to communicate clearly and connect with people anytime, anywhere shines you out from others.",
    person: "Divanshi Arora",
    linkedin: "https://www.linkedin.com/in/divanshi-arora-541829373",
  },
  {
    text: "Working with Manik Bhaiya has been one of the most defining parts of my college journey. More than just a community founder, he has been a mentor who genuinely pushes people to discover their potential. What sets him apart is not just his leadership, but his ability to see capability in others even before they see it in themselves. He constantly encourages growth, challenges comfort zones, and creates an environment where learning feels natural and exciting. Personally, I've learned a lot under his guidance — from taking initiative to thinking beyond the obvious. His influence has helped me become more confident, proactive, and open to opportunities. He doesn't just build communities; he builds people. And that impact stays far beyond any project or role. Grateful to have learned from him.",
    person: "Swagita Parida",
    linkedin: "https://www.linkedin.com/in/swagita-parida-876b54303",
  },
  {
    text: "I really appreciate the way you manage and engage the community. Your communication is clear, supportive, and always makes people feel heard and valued. You create a positive and welcoming environment, which makes a big difference. Your consistency and dedication truly stand out — great work!",
    person: "Shravani Kasurde",
    linkedin: "",
  },
  {
    text: "I have closely observed his work in building a global girls-in-tech community that actively addresses the gap in guidance and opportunities. Through hackathons, mentorship, and engaging events, he has created a platform where girls from different backgrounds can learn, connect, and grow. What stands out is his ability to not just organize events, but to create real impact by enabling access and fostering a strong support network. His work is genuinely helping bridge the gap for many aspiring women in technology.",
    person: "Gungun Goel",
    linkedin: "https://www.linkedin.com/in/gungun-goel-05154426a",
  },
  {
    text: "It is rare to find a senior who balances intellectual depth with such genuine kindness. As the founder of Letz Connect community, Manik bhaiya has been the best guide I could have asked for. He doesn't just lead projects; he leads with a heart of gold that makes every junior feel valued and heard. His energy is always positive, approachable, and incredibly supportive. Whether he is sharing his expertise or just offering a word of encouragement, his impact is evident in how he uplifts everyone around him. If you are looking for a leader who brings both a brilliant mind and an inclusive spirit to the table, Manik bhaiya is that person. Truly an apple of everyone's eye and a mentor who makes the journey so much better for all of us.",
    person: "Shruti Sharma",
    linkedin: "https://www.linkedin.com/in/shruti-sharma-81a079369",
  },
  {
    text: "Thanks to the universe who gave me a senior like you. From the very first conversation, it was clear that you are someone who is not only approachable but also genuinely kind and supportive. What I truly admire about you is your positive attitude and the way you carry yourself — calm, confident, and always willing to help others. In every interaction, whether it's guiding students, participating in events, or simply motivating others, you bring clarity and encouragement. You have this natural ability to make people feel comfortable, even if it's their first time talking to you. Your work reflects your dedication and leadership. You don't just focus on your own growth but you actively create opportunities for others to learn and improve. One of your biggest strengths is staying positive without letting pressure show, which is truly inspiring.",
    person: "Prabhjot Kaur",
    linkedin: "https://www.linkedin.com/in/prabhjot-kaur-138b44364",
  },
  {
    text: "I participated in the Christmas Hackathon 2025, and Manik was one of the most supportive people throughout the entire journey. In every session, he was always there to guide and encourage everyone. He made sure that all participants were comfortable and actually getting the best out of the hackathon experience. What I really appreciated was how patiently he solved every query, no matter how small or big. He never made anyone feel stuck or ignored. Even after the hackathon, in the group, whenever I share my blogs, he takes the time to read them and respond so thoughtfully. His feedback always feels genuine and comes straight from the heart, which is really motivating. People like Manik truly make a difference. His support and encouragement mean a lot.",
    person: "Hirva Jobanputra",
    linkedin: "https://www.linkedin.com/in/hirva-jobanputra-607b78310",
  },
  {
    text: "Manik is one of those rare people who genuinely understands others and lifts them up without expecting anything in return.",
    person: "Jashan Aneja",
    linkedin: "https://www.linkedin.com/in/jashan-aneja-306b04231/",
  },
  {
    text: "Good guy, very humble and very charismatic.",
    person: "Jay Koranga",
    linkedin: "",
  },
  {
    text: "Balanced. Focused. Outreacher. Enthusiastic. Leader. Admirable. Calm & Composed. Volunteer. Event Manager.",
    person: "Jashan Bansal",
    linkedin: "https://www.linkedin.com/in/jashan-bansal-02309b317",
  },
  {
    text: "You have taught us so much over the last 5 years and provided an environment or platform where we all learn something from one another. Along with being a student yourself, you treat us like a mentor, a big brother, and a true friend. These past five years have been an incredible journey. Building an environment where everyone feels comfortable learning and growing together is the greatest achievement we could have. In this process of teaching and learning, we've all gained so much from one another. Working together, learning from mistakes, and offering constant support is what makes us a true community. Whether as a mentor, a big brother, or a friend, your goal has always been to focus on our collective growth. Maintaining this atmosphere will always be the priority moving forward. You are a very kind natured person to all of us.",
    person: "Sweta Sharma",
    linkedin: "https://www.linkedin.com/in/sweta-sharma-659b89317",
  },
  {
    text: "I believe you have had great experiences and your ability to share them is awesome too. The communities you created and maintain are awesome too. You deserve a great life.",
    person: "Ranvir Singh",
    linkedin: "https://www.linkedin.com/in/ranvir-singh-5ba59736b",
  },
  {
    text: "You're genuinely one of the most hardworking and well-spoken people I know — and your smile just makes it even better.",
    person: "Krishanu Mishra",
    linkedin: "https://www.linkedin.com/in/krishanu-mishra-aa531b276",
  },
  {
    text: "It was great connecting with Manik and learning about all the good work he's doing in his community.",
    person: "Desmond John",
    role: "Founder of Vibe Guide Ventures",
    linkedin: "https://www.linkedin.com/in/desmond-john/",
  },
  {
    text: "Working with Manik is always a pleasure and a huge inspiration.",
    person: "Aashi Raghuvanshi",
    role: "Agentic AI & Automation Engineer",
    linkedin: "https://www.linkedin.com/in/aashi-raghuwanshi/",
  },
  {
    text: "Manik's enthusiasm throughout the event was incredible — from registrations to vlogging. He's truly an all-rounder!",
    person: "Shatakshi Bhardwaj",
    role: "UI/UX Designer",
    linkedin: "https://www.linkedin.com/in/shatakshi-bhardwaj-445295281/",
  },
  {
    text: "I truly admire the work Manik does. Keep it up!",
    person: "Sakshi Agarwal",
    role: "Aspiring Data Scientist",
    linkedin: "https://www.linkedin.com/in/sakshi-agarwal-3900ba255/",
  },
  {
    text: "Manik is the most amazing person I have ever met.",
    person: "Vishal Prakash Maurya",
    role: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/vishalprakash0202/",
  },
  {
    text: "I loved learning about Girls in Tech and all the amazing work Manik is doing to make opportunities more accessible to young Indian women. We share so many cross-overs — I hope we can collaborate in the future!",
    person: "Lina Orozco Munera",
    role: "VMC RAC Member",
    linkedin: "https://www.linkedin.com/in/linaorozcom/",
  },
  {
    text: "Manik's journey is truly inspiring. Stories like his motivate me to work harder and aim to be part of GDG someday.",
    person: "Shashank Joshi",
    role: "Machine Learning Enthusiast",
    linkedin: "https://www.linkedin.com/in/shashankjoshi/",
  },
  {
    text: "Manik is a pro multi-tasker and a truly gem of a person. Kudos to his vision towards empowering girls!",
    person: "Catherine Infanta",
    role: "Harvard Aspire Leader",
    linkedin: "https://www.linkedin.com/in/catherine-infanta-/",
  },
  {
    text: "Manik's work is truly inspiring! Big shoutout for building something so impactful. I've had the privilege of watching the community grow and thrive.",
    person: "Samridhi Gupta",
    role: "Google WE Scholar",
    linkedin: "https://www.linkedin.com/in/samridhi-gupta08/",
  },
  {
    text: "Manik's dedication and passion are truly inspiring. It's amazing to see them in action!",
    person: "Simran Nagekar",
    role: "Game Experience Designer",
    linkedin: "https://www.linkedin.com/in/simransn/",
  },
  {
    text: "Manik is doing fantastic and praiseworthy work!",
    person: "Adyasha Das",
    role: "Google WE Scholar",
    linkedin: "https://www.linkedin.com/in/adyashadas04/",
  },
  {
    text: "It was great meeting Manik at the bootcamp. His energy is truly inspiring — I'm excited to see the amazing things he'll do next!",
    person: "Shradha Gurjar",
    role: "Aspiring Project Manager",
    linkedin: "https://www.linkedin.com/in/shradha-gurjar/",
  },
  {
    text: "Manik has the most amazing enthusiasm I have ever seen. It was great meeting him!",
    person: "Tanu Singh",
    role: "Blockchain Developer",
    linkedin: "https://www.linkedin.com/in/tanusingh/",
  },
];

const WallOfLovePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Wall of Love</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
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
                    {"role" in t && t.role && (
                      <p className="font-sans text-xs text-muted-foreground">{t.role}</p>
                    )}
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WallOfLovePage;
