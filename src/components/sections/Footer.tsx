import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Youtube,
  Instagram
} from "lucide-react";

const quickLinks = [
  { title: "About College", href: "#about" },
  { title: "Departments", href: "#departments" },
  { title: "Admissions", href: "#admissions" },
  { title: "Academic Calendar", href: "#calendar" },
  { title: "Student Portal", href: "#portal" },
  { title: "Faculty", href: "#faculty" }
];

const importantLinks = [
  { title: "DOTE Tamil Nadu", href: "#" },
  { title: "Anna University", href: "#" },
  { title: "Government of Tamil Nadu", href: "#" },
  { title: "AICTE", href: "#" },
  { title: "National Academic Depository", href: "#" },
  { title: "Grievance Portal", href: "#" }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* College Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">GPTC Chromepet</h3>
                <p className="text-muted-foreground">Government Polytechnic College</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Empowering students with quality technical education and innovative learning 
              experiences since 1999. Building tomorrow's engineers and technologists.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Address</p>
                  <p className="text-muted-foreground text-sm">
                    Government Polytechnic College<br />
                    Chromepet, Chennai - 600044<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground text-sm">+91 44 2222 3333</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">info@gptcchromepet.edu.in</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-foreground font-medium">Office Hours</p>
                  <p className="text-muted-foreground text-sm">Mon - Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Important Links</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* Bottom Footer */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 Government Polytechnic College Chromepet. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Affiliated to Directorate of Technical Education, Tamil Nadu
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground mr-2">Follow us:</p>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}