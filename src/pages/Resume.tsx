import Nav from "@/components/sections/Nav";
import Education from "@/components/sections/Education";
import WorkExperience from "@/components/sections/WorkExperience";
import Certifications from "@/components/sections/Certifications";
import Recommendations from "@/components/sections/Recommendations";
import Footer from "@/components/sections/Footer";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-6 print:hidden">
            <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2">
              <Printer size={16} />
              print / download pdf
            </Button>
          </div>
          <WorkExperience />
          <Education />
          <Certifications />
          <Recommendations />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
