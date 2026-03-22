import SectionHeading from "./SectionHeading";

const CERTS = [
  {
    category: "Community",
    items: [
      "Community Building & Management by The Community Collective",
      "Community Automation Course by The Community Collective",
      "The Community Playbook by CMX",
      "Anyone Can Build a Community by The Community Man",
    ],
  },
  {
    category: "Technical",
    items: [
      "Blockchain Fundamentals",
      "Full Stack Web Development by Apna College",
      "Google AI Essentials",
      "Google Professional Cyber Security Certificate",
    ],
  },
];

const Certifications = () => (
  <section id="certifications" className="py-12 md:py-16">
    <SectionHeading>Certifications</SectionHeading>
    <div className="space-y-8 mt-8">
      {CERTS.map((c) => (
        <div key={c.category}>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{c.category}</h3>
          <ul className="list-disc list-inside space-y-1">
            {c.items.map((item) => (
              <li key={item} className="text-sm text-foreground leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Certifications;
