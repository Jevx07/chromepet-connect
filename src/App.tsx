import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatedNavBar } from "@/components/ui/animated-navbar";
import { Home, GraduationCap, BookOpen, Users, Calendar, Phone } from "lucide-react";
import Index from "./pages/Index";
import About from "./pages/About";
import Staff from "./pages/Staff";
import Departments from "./pages/Departments";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import NotFound from "./pages/NotFound";
import BasicEngineering from "./pages/department-details/BasicEngineering";
import ComputerScience from "./pages/department-details/ComputerScience";
import ElectricalAndElectronics from "./pages/department-details/ElectricalAndElectronics";
import ElectronicsAndCommunication from "./pages/department-details/ElectronicsAndCommunication";
import MechanicalEngineering from "./pages/department-details/MechanicalEngineering";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedNavBar items={[
          { name: "Home", url: "/", icon: Home },
          { name: "About", url: "/about", icon: GraduationCap },
          { name: "Departments", url: "/departments", icon: BookOpen },
          { name: "Staff", url: "/staff", icon: Users },
          { name: "Academics", url: "/academics", icon: Calendar },
          { name: "Contact", url: "#contact", icon: Phone },
        ]} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/departments/basic-engineering" element={<BasicEngineering />} />
          <Route path="/departments/computer-science" element={<ComputerScience />} />
          <Route path="/departments/electrical-electronics" element={<ElectricalAndElectronics />} />
          <Route path="/departments/electronics-communication" element={<ElectronicsAndCommunication />} />
          <Route path="/departments/mechanical-engineering" element={<MechanicalEngineering />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
