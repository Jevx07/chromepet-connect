import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatedNavBar } from "@/components/ui/animated-navbar";
import { Home, GraduationCap, BookOpen, Users, Calendar, Phone, Camera, UserCheck } from "lucide-react";
import Index from "./pages/Index";
import Staff from "./pages/Staff";
import Departments from "./pages/Departments";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/Gallery";
import Committee from "./pages/Committee";
import NotFound from "./pages/NotFound";
import BasicEngineering from "./pages/department-details/BasicEngineering";
import ComputerScience from "./pages/department-details/ComputerScience";
import ElectricalAndElectronics from "./pages/department-details/ElectricalAndElectronics";
import ElectronicsAndCommunication from "./pages/department-details/ElectronicsAndCommunication";
import MechanicalEngineering from "./pages/department-details/MechanicalEngineering";
import Contact from "./pages/Contact";
import Placement from "./pages/Placement";
import AntiDrugs from "./pages/committee/AntiDrugs";
import AntiRagging from "./pages/committee/AntiRagging";
import InnovationCouncil from "./pages/committee/InnovationCouncil";
import InternalComplaints from "./pages/committee/InternalComplaints";
import QualityAssurance from "./pages/committee/QualityAssurance";
import StudentGrievance from "./pages/committee/StudentGrievance";
import WomenEmpowerment from "./pages/committee/WomenEmpowerment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedNavBar items={[
          { name: "Home", url: "/", icon: Home },
          { name: "Admission", url: "/admission", icon: GraduationCap },
          { name: "Departments", url: "/departments", icon: BookOpen },
          { name: "Staff", url: "/staff", icon: Users },
          { name: "Gallery", url: "/gallery", icon: Camera },
          { name: "Committee", url: "/committee", icon: UserCheck },
          { name: "Contact", url: "/contact", icon: Phone },
          { name: "Placement", url: "/placement", icon: GraduationCap },
        ]} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/admission" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/departments/basic-engineering" element={<BasicEngineering />} />
          <Route path="/departments/computer-science" element={<ComputerScience />} />
          <Route path="/departments/electrical-electronics" element={<ElectricalAndElectronics />} />
          <Route path="/departments/electronics-communication" element={<ElectronicsAndCommunication />} />
          <Route path="/departments/mechanical-engineering" element={<MechanicalEngineering />} />
          <Route path="/committee/anti-drugs" element={<AntiDrugs />} />
          <Route path="/committee/anti-ragging" element={<AntiRagging />} />
          <Route path="/committee/innovation-council" element={<InnovationCouncil />} />
          <Route path="/committee/internal-complaints" element={<InternalComplaints />} />
          <Route path="/committee/quality-assurance" element={<QualityAssurance />} />
          <Route path="/committee/student-grievance" element={<StudentGrievance />} />
          <Route path="/committee/women-empowerment" element={<WomenEmpowerment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/placement" element={<Placement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
