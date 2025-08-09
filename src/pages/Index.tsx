import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Departments } from "@/components/sections/Departments";
import { Admissions } from "@/components/sections/Admissions";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Departments />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
