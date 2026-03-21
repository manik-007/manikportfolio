import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ARTICLES = [
  {
    title: "top 5 books you should read if you are a college student",
    link: "https://medium.com/@manik23265/top-5-books-you-should-read-if-you-are-a-college-student-099a134acacc",
  },
  {
    title: "have you ever felt that you wasted your time?",
    link: "https://medium.com/@manik23265/have-you-ever-felt-that-you-wasted-your-time-9b6ec3fec6c9",
  },
  {
    title: "have you decided on your career path?",
    link: "https://medium.com/@manik23265/have-you-decided-on-your-career-path-1909972cbd52",
  },
];

const Articles = () => (
  <section id="articles" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-3xl mx-auto text-center">
      <SectionHeading>articles</SectionHeading>
      <div className="space-y-6">
        {ARTICLES.map((a) => (
          <a
            key={a.link}
            href={a.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 py-6 border-b border-border hover:border-foreground transition-colors text-left"
          >
            <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-muted-foreground transition-colors leading-snug">
              {a.title}
            </h3>
            <span className="shrink-0 text-muted-foreground group-hover:text-foreground transition-colors">
              <ArrowUpRight size={20} />
            </span>
          </a>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        read more on{" "}
        <a
          href="https://medium.com/@manik23265"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          medium
        </a>
      </p>
    </div>
  </section>
);

export default Articles;
