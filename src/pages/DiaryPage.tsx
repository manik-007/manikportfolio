import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SectionHeading from "@/components/sections/SectionHeading";
import { BookOpen, MapPin, Wrench, Heart, Music, Utensils, Gamepad2, Sparkles } from "lucide-react";

const SECTIONS = [
  {
    title: "Interests",
    icon: Sparkles,
    description: "Things that spark Manik's curiosity — from community building to emerging tech.",
    items: [] as string[],
  },
  {
    title: "Hobbies",
    icon: Gamepad2,
    description: "What Manik enjoys doing in his free time.",
    items: [] as string[],
  },
  {
    title: "Places I Have Been To",
    icon: MapPin,
    description: "Cities, events, and venues Manik has explored.",
    items: [] as string[],
  },
  {
    title: "Favourite Articles",
    icon: BookOpen,
    description: "Articles and reads that left a lasting impression.",
    items: [] as string[],
  },
  {
    title: "Bookshelf",
    icon: BookOpen,
    description: "Books Manik has read or is currently reading.",
    items: [] as string[],
  },
  {
    title: "Tools I Use Daily",
    icon: Wrench,
    description: "Software, apps, and tools that power Manik's everyday workflow.",
    items: [] as string[],
  },
  {
    title: "Happy Moments",
    icon: Heart,
    description: "Memories and milestones that made Manik smile.",
    items: [] as string[],
  },
  {
    title: "Favourite Food & Beverages",
    icon: Utensils,
    description: "Comfort food, go-to snacks, and favourite drinks.",
    items: [] as string[],
  },
  {
    title: "Music & Podcasts I Love",
    icon: Music,
    description: "Playlists, artists, and podcasts on repeat.",
    items: [] as string[],
  },
];

const DiaryPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <main className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Manik's Diary</SectionHeading>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A personal corner of the internet — a living document of interests, travels, tools, and the little things that make life meaningful. More content coming soon!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="border border-border rounded-lg p-6 bg-card hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={20} className="text-primary" />
                  <h3 className="font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                {s.items.length > 0 ? (
                  <ul className="mt-4 space-y-1">
                    {s.items.map((item, i) => (
                      <li key={i} className="text-sm text-foreground">• {item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-xs italic text-muted-foreground/60">Content coming soon...</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default DiaryPage;
