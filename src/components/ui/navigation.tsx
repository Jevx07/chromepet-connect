import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, GraduationCap, BookOpen, Users, Phone, Download, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "About",
    href: "#about",
    icon: GraduationCap,
    submenu: [
      { title: "College History", href: "#history" },
      { title: "Vision & Mission", href: "#vision" },
      { title: "Administration", href: "#administration" },
      { title: "Infrastructure", href: "#infrastructure" }
    ]
  },
  {
    title: "Departments",
    href: "#departments",
    icon: BookOpen,
    submenu: [
      { title: "Basic Engineering", href: "#basic-engineering" },
      { title: "Computer Engineering", href: "#computer-engineering" },
      { title: "Electrical & Electronics", href: "#electrical" },
      { title: "Electronics & Communication", href: "#ece" },
      { title: "Mechanical Engineering", href: "#mechanical" }
    ]
  },
  {
    title: "Admissions",
    href: "#admissions",
    icon: Users
  },
  {
    title: "Academics",
    href: "#academics",
    icon: Calendar
  },
  {
    title: "Downloads",
    href: "#downloads",
    icon: Download
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
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">GPTC Chromepet</h1>
              <p className="text-sm text-muted-foreground -mt-1">Government Polytechnic</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "text-foreground hover:text-primary hover:bg-primary/5 transition-colors",
                    activeDropdown === item.title && "bg-primary/5 text-primary"
                  )}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                  {item.submenu && <ChevronDown className="w-3 h-3 ml-1" />}
                </Button>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg shadow-medium z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
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
                  <div key={item.title} className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left"
                    >
                      <item.icon className="w-4 h-4 mr-3" />
                      {item.title}
                    </Button>
                    {item.submenu && (
                      <div className="ml-7 space-y-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
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