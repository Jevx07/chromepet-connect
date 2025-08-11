import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cpu, Zap, Cog, Radio, Wrench, Calendar, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const departments = [
  {
    icon: Cpu,
    name: "Computer Science Engineering",
    description: "Computer Engineering Course was started in the year 1995-1996, with an intake of 60 students. Focus on software development, programming, and computer systems.",
    highlights: ["Software Development", "Programming", "Computer Systems", "Web Technologies"],
    color: "primary",
    students: "60",
    established: "1995-96",
    duration: "3 Years / 2 Years (Lateral)",
    subjects: ["Programming in C", "Data Structures", "Computer Networks", "Database Management", "Web Development", "Software Engineering"]
  },
  {
    icon: Radio,
    name: "Electronics & Communication Engineering",
    description: "Electronics and Communication Engineering Course was started in the year 1992-93, with an intake of 60 students. Specializing in digital electronics and communication systems.",
    highlights: ["Communication Systems", "Digital Electronics", "Signal Processing", "VLSI Design"],
    color: "secondary",
    students: "60",
    established: "1992-93",
    duration: "3 Years / 2 Years (Lateral)",
    subjects: ["Electronic Devices", "Digital Electronics", "Communication Systems", "Microprocessors", "Signal Processing", "VLSI Design"]
  },
  {
    icon: Cog,
    name: "Mechanical Engineering",
    description: "Mechanical Engineering Course was started in the year 2014, with an intake of 60 students. Focus on manufacturing, automation, and mechanical systems.",
    highlights: ["Manufacturing", "CAD/CAM", "Automation", "Thermal Engineering"],
    color: "primary",
    students: "60",
    established: "2014",
    duration: "3 Years / 2 Years (Lateral)",
    subjects: ["Engineering Mechanics", "Thermodynamics", "Machine Design", "Manufacturing Technology", "CAD/CAM", "Industrial Automation"]
  },
  {
    icon: Zap,
    name: "Electrical & Electronics Engineering",
    description: "Electrical and Electronics Engineering Course was started in the year 1992, with an intake of 60 students. Specializing in power systems and electronics.",
    highlights: ["Power Systems", "Control Engineering", "Electronics", "Industrial Automation"],
    color: "accent",
    students: "60",
    established: "1992",
    duration: "3 Years / 2 Years (Lateral)",
    subjects: ["Electrical Machines", "Power Systems", "Control Systems", "Power Electronics", "Industrial Drives", "Renewable Energy"]
  },
  {
    icon: Wrench,
    name: "Basic Engineering",
    description: "Basic Engineering provides foundational knowledge in mathematics, physics, chemistry, and basic engineering principles for all engineering students.",
    highlights: ["Mathematics", "Physics", "Chemistry", "Engineering Drawing"],
    color: "secondary",
    students: "All Students",
    established: "1992-93",
    duration: "Foundation Course",
    subjects: ["Engineering Mathematics", "Engineering Physics", "Engineering Chemistry", "Engineering Drawing", "Workshop Technology", "Basic Electronics"]
  }
];

const Departments = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
              Academic Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our <span className="text-secondary">Departments</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technical education across multiple engineering disciplines 
              with industry-aligned curriculum and modern facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Core Subjects:</h4>
                    <div className="space-y-1">
                      {dept.subjects.slice(0, 3).map((subject, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                          <BookOpen className="w-3 h-3" />
                          {subject}
                        </div>
                      ))}
                      {dept.subjects.length > 3 && (
                        <div className="text-xs text-muted-foreground">
                          +{dept.subjects.length - 3} more subjects
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5 mt-4"
                    asChild
                  >
                    <Link to={`/departments/${dept.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Department Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-card border-0 text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">300+</h3>
              <p className="text-muted-foreground">Total Annual Intake</p>
            </Card>
            <Card className="bg-gradient-card border-0 text-center p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">5</h3>
              <p className="text-muted-foreground">Specialized Departments</p>
            </Card>
            <Card className="bg-gradient-card border-0 text-center p-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">50+</h3>
              <p className="text-muted-foreground">Course Modules</p>
            </Card>
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
    </div>
  );
};

export default Departments;