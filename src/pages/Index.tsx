import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhatIDo from "@/components/sections/WhatIDo";
import Education from "@/components/sections/Education";
import Articles from "@/components/sections/Articles";
import Podcasts from "@/components/sections/Podcasts";
import Community from "@/components/sections/Community";
import WallOfLove from "@/components/sections/WallOfLove";
import Recommendations from "@/components/sections/Recommendations";
import Connect from "@/components/sections/Connect";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <Hero />
    <About />
    <WhatIDo />
    <Education />
    <Articles />
    <Podcasts />
    <Community />
    <WallOfLove />
    <Recommendations />
    <Connect />
    <Footer />
  </div>
);

export default Index;
