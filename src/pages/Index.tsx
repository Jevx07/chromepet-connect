import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Departments } from "@/components/sections/Departments";
import { Admissions } from "@/components/sections/Admissions";
import { News } from "@/components/sections/News";
import { Academics } from "@/components/sections/Academics";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Departments />
        <News />
        <Academics />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
