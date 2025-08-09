import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cpu, Zap, Cog, Radio, Wrench } from "lucide-react";

const departments = [
  {
    icon: Cpu,
    name: "Computer Science Engineering",
    description: "Computer Engineering Course was started in the year 1995-1996, with an intake of 60 students. Focus on software development, programming, and computer systems.",
    highlights: ["Software Development", "Programming", "Computer Systems", "Web Technologies"],
    color: "primary",
    students: "60",
    established: "1995-96",
    duration: "3 Years / 2 Years (Lateral)"
  },
  {
    icon: Radio,
    name: "Electronics & Communication Engineering",
    description: "Electronics and Communication Engineering Course was started in the year 1992-93, with an intake of 60 students. Specializing in digital electronics and communication systems.",
    highlights: ["Communication Systems", "Digital Electronics", "Signal Processing", "VLSI Design"],
    color: "secondary",
    students: "60",
    established: "1992-93",
    duration: "3 Years / 2 Years (Lateral)"
  },
  {
    icon: Cog,
    name: "Mechanical Engineering",
    description: "Mechanical Engineering Course was started in the year 2014, with an intake of 60 students. Focus on manufacturing, automation, and mechanical systems.",
    highlights: ["Manufacturing", "CAD/CAM", "Automation", "Thermal Engineering"],
    color: "primary",
    students: "60",
    established: "2014",
    duration: "3 Years / 2 Years (Lateral)"
  },
  {
    icon: Zap,
    name: "Electrical & Electronics Engineering",
    description: "Electrical and Electronics Engineering Course was started in the year 1992, with an intake of 60 students. Specializing in power systems and electronics.",
    highlights: ["Power Systems", "Control Engineering", "Electronics", "Industrial Automation"],
    color: "accent",
    students: "60",
    established: "1992",
    duration: "3 Years / 2 Years (Lateral)"
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
                    Intake: {dept.students}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {dept.name}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Est. {dept.established}</span>
                  <span>•</span>
                  <span>{dept.duration}</span>
                </div>
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