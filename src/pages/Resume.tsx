import Nav from "@/components/sections/Nav";
import Education from "@/components/sections/Education";
import Recommendations from "@/components/sections/Recommendations";
import Footer from "@/components/sections/Footer";

const Resume = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <div className="pt-24 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Education />
        <Recommendations />
      </div>
    </div>
    <Footer />
  </div>
);

export default Resume;
