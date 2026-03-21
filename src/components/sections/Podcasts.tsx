import { Youtube, ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const PODCASTS = [
  {
    title: "community building: fireside chat with shivam garg",
    guest: "shivam garg",
    guestRole: "devrel at outdefine",
    guestLinkedIn: "https://www.linkedin.com/in/meshivamgarg/",
    youtube: "https://youtu.be/V9zuwxcllvo?si=RbticcMyoTICUE8B",
  },
  {
    title: "fireside chat with aditya oberai",
    guest: "aditya oberai",
    guestRole: "devrel at appwrite",
    guestLinkedIn: "https://www.linkedin.com/in/adityaoberai1/",
    youtube: "https://youtu.be/gubnl5rnkIM?si=_XnYhSVFqXFwKcci",
  },
  {
    title: "college, communities & web3",
    guest: "khushi panwar",
    guestRole: "women techmaker ambassador",
    guestLinkedIn: "https://www.linkedin.com/in/smilewithkhushi/",
    youtube: "https://youtu.be/jsWSU3ren3M?si=ZQyBjyv6NuaCeM8G",
  },
  {
    title: "the state of community building careers in india, opportunities and challenges",
    guest: "puja duseja",
    guestRole: "meta certified community manager",
    guestLinkedIn: "https://www.linkedin.com/in/puja-duseja10/",
    youtube: "https://youtu.be/OM4pom2jkec?si=JnUSJo2no7Jc5e5x",
  },
  {
    title: "the art of organising virtual hackathons",
    guest: "pradeepto sarkar",
    guestRole: "founder of namespace",
    guestLinkedIn: "https://www.linkedin.com/in/pradeeptosarkar/",
    youtube: "https://youtu.be/9hTkWEePXlc?si=HU9TYzE4qc79Mk7z",
  },
  {
    title: "managing programs and scaling communities",
    guest: "lakshit pant",
    guestRole: "program manager at microsoft",
    guestLinkedIn: "https://www.linkedin.com/in/laxitpant/",
    youtube: "https://youtu.be/D_-4vUGppQ4?si=tHnFuMN8mzsnQDE_",
  },
  {
    title: "ar, community & diversity",
    guest: "chhavi garg",
    guestRole: "founder, bharatxr",
    guestLinkedIn: "https://www.linkedin.com/in/chhavigg/",
    youtube: "https://youtu.be/asmVCEOZGzM?si=K9mqkhTybPPxQEI-",
  },
  {
    title: "building tech communities",
    guest: "bhawna chauhan",
    guestRole: "founder, shebuilds",
    guestLinkedIn: "https://www.linkedin.com/in/connectbhawna/",
    youtube: "https://youtu.be/LwLbsQ4UN1A?si=Qu1rFIVUM-of_aRw",
  },
  {
    title: "she started coding at the age of 11",
    guest: "aarushi chottani",
    guestRole: "author",
    guestLinkedIn: "https://www.linkedin.com/in/aarushi-chottani-80b861322/",
    youtube: "https://youtu.be/UQJ5XhurFbw?si=zB-tWfoEDyh3xF-m",
  },
  {
    title: "from topper to amazon future engineer scholar",
    guest: "siddhi gupta",
    guestRole: "afe scholar",
    guestLinkedIn: "https://www.linkedin.com/in/siddhiguptas/",
    youtube: "https://youtu.be/l2ysqBR6yHI?si=2QSStVRDbZEzw7tC",
  },
  {
    title: "from application to acceptance: naina's harvard wecode story",
    guest: "naina modi",
    guestRole: "harvard wecode scholar",
    guestLinkedIn: "https://www.linkedin.com/in/naina-modi-145209322/",
    youtube: "https://youtu.be/fERcXjig4jM?si=AxpzPxAQHQDTLejt",
  },
  {
    title: "from student to harvard hpair delegate",
    guest: "samridhi gupta",
    guestRole: "google we scholar",
    guestLinkedIn: "https://www.linkedin.com/in/samridhi-gupta08/",
    youtube: "https://youtu.be/Yx5jibuU5hg?si=rAVCvBkizRqXj7Nd",
  },
  {
    title: "3c's of devrel — content, code & community",
    guest: "haimantika mitra",
    guestRole: "devrel at digital ocean",
    guestLinkedIn: "https://www.linkedin.com/in/haimantika-mitra/",
    youtube: "https://youtu.be/3w7z3bgiGN0?si=iGN1YmmHUmKTtHDC",
  },
  {
    title: "how to build communities that matter",
    guest: "deepak kumar",
    guestRole: "founder c3 universe",
    guestLinkedIn: "https://www.linkedin.com/in/deepak910k/",
    youtube: "https://youtu.be/asmVCEOZGzM?si=Ev9xpo6R9uM8hBBb",
  },
];

const Podcasts = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? PODCASTS : PODCASTS.slice(0, 3);

  return (
    <section id="podcasts" className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading>podcasts</SectionHeading>
        <div className="space-y-4">
          {visible.map((p) => (
            <div
              key={p.youtube}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 border-b border-border py-5 text-center md:text-left"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-base md:text-lg font-medium text-foreground leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  with{" "}
                  <a
                    href={p.guestLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    {p.guest}
                  </a>
                  <span className="mx-2">·</span>
                  {p.guestRole}
                </p>
              </div>
              <a
                href={p.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                <Youtube size={16} />
                watch
              </a>
            </div>
          ))}
        </div>
        {!showAll && PODCASTS.length > 3 && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            see all
            <ChevronDown size={16} />
          </button>
        )}
      </div>
    </section>
  );
};

export default Podcasts;
