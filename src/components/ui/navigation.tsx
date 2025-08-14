import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, GraduationCap, BookOpen, Users, Phone, Download, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

const navigationItems = [
  {
    title: "About",
    href: "/about",
    icon: GraduationCap
  },
  {
    title: "Departments",
    href: "/departments",
    icon: BookOpen
  },
  {
    title: "Staff",
    href: "/staff",
    icon: Users
  },
  {
    title: "Admissions",
    href: "/admissions",
    icon: Users
  },
  {
    title: "Academics",
    href: "/academics",
    icon: Calendar
  },
  {
    title: "Contact",
    href: "#contact",
    icon: Phone
  }
];

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">GPTC Chromepet</h1>
              <p className="text-sm text-muted-foreground -mt-1">Government Polytechnic</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative"
              >
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                  asChild
                >
                  <Link to={item.href}>
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.title}
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-hero hover:opacity-90 transition-opacity">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                 {navigationItems.map((item) => (
                   <Button
                     key={item.title}
                     variant="ghost"
                     className="w-full justify-start text-left"
                     asChild
                   >
                     <Link to={item.href}>
                       <item.icon className="w-4 h-4 mr-3" />
                       {item.title}
                     </Link>
                   </Button>
                 ))}
                <Button className="bg-gradient-hero mt-4">
                  Apply Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}