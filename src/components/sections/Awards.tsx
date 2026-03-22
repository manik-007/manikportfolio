import SectionHeading from "./SectionHeading";
import { Award } from "lucide-react";

const AWARDS = [
  "CMX Director of the Month",
  "CMX — Most Promising Director Debut",
  "STEM Educator Award Winner",
];

const Awards = () => (
  <section id="awards" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-3xl mx-auto text-center">
      <SectionHeading>Awards & Honors</SectionHeading>
      <div className="flex flex-col items-center gap-4 mt-8">
        {AWARDS.map((a) => (
          <div key={a} className="flex items-center gap-3">
            <Award size={18} className="text-muted-foreground shrink-0" />
            <span className="text-sm sm:text-base text-foreground">{a}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
