import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhatIDo from "@/components/sections/WhatIDo";
import Articles from "@/components/sections/Articles";
import Podcasts from "@/components/sections/Podcasts";
import Awards from "@/components/sections/Awards";
import WallOfLove from "@/components/sections/WallOfLove";
import Connect from "@/components/sections/Connect";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <Hero />
    <About />
    <WhatIDo />
    <Articles />
    <Podcasts />
    <Awards />
    <WallOfLove />
    <Connect />
    <Footer />
  </div>
);

export default Index;
