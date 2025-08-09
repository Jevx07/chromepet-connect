import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cpu, Zap, Cog, Radio, Wrench } from "lucide-react";

const departments = [
  {
    icon: Cpu,
    name: "Computer Engineering",
    description: "Advanced computing, software development, AI, and data science programs preparing students for the digital future.",
    highlights: ["Software Development", "AI & Machine Learning", "Web Technologies", "Database Systems"],
    color: "primary",
    students: "450+"
  },
  {
    icon: Zap,
    name: "Electrical & Electronics",
    description: "Power systems, control engineering, and electronics with hands-on experience in modern laboratories.",
    highlights: ["Power Systems", "Control Engineering", "Renewable Energy", "Industrial Automation"],
    color: "accent",
    students: "380+"
  },
  {
    icon: Radio,
    name: "Electronics & Communication",
    description: "Communication systems, signal processing, and embedded systems for the telecommunications industry.",
    highlights: ["Communication Systems", "VLSI Design", "Embedded Systems", "Signal Processing"],
    color: "secondary",
    students: "420+"
  },
  {
    icon: Cog,
    name: "Mechanical Engineering",
    description: "Design, manufacturing, and automation technologies with state-of-the-art workshop facilities.",
    highlights: ["CAD/CAM", "Manufacturing", "Automation", "Thermal Engineering"],
    color: "primary",
    students: "500+"
  },
  {
    icon: Wrench,
    name: "Basic Engineering",
    description: "Foundation courses in mathematics, physics, chemistry, and engineering drawing for all disciplines.",
    highlights: ["Engineering Mathematics", "Physics Lab", "Chemistry Lab", "Engineering Drawing"],
    color: "accent",
    students: "All Students"
  }
];

export function Departments() {
  return (
    <section id="departments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
            Academic Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Departments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical education across multiple engineering disciplines 
            with industry-aligned curriculum and modern facilities.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {departments.map((dept, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 border-0 bg-gradient-card overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      dept.color === 'primary' ? 'bg-primary/10' :
                      dept.color === 'accent' ? 'bg-accent/10' :
                      'bg-secondary/10'
                    }`}
                  >
                    <dept.icon 
                      className={`w-6 h-6 ${
                        dept.color === 'primary' ? 'text-primary' :
                        dept.color === 'accent' ? 'text-accent' :
                        'text-secondary'
                      }`} 
                    />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {dept.students}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {dept.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {dept.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.highlights.map((highlight, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs border-muted-foreground/30"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5 mt-4"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-hero border-0 p-8 text-center shadow-glow">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Engineering Journey?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl">
              Explore our admission process and find the perfect program that matches your interests and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground"
              >
                View Admission Process
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-white/10"
              >
                Download Prospectus
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}