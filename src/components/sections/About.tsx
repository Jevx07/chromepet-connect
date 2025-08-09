import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Target, Heart, Award, Users, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Academic Excellence",
    description: "Consistently ranked among top polytechnic colleges in Tamil Nadu with outstanding academic performance."
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Experienced and qualified faculty members committed to providing quality education and mentorship."
  },
  {
    icon: Lightbulb,
    title: "Industry Connect",
    description: "Strong partnerships with leading industries ensuring practical learning and job opportunities."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
            About Our Institution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Shaping Tomorrow's
            <span className="text-primary block">Engineers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Government Polytechnic College, Chromepet-Chennai (Formerly Institute of Road Transport Polytechnic College, Chennai) 
            was started by the Institute of Road Transport, Taramani in the year 1992-93. Three Polytechnics in Chennai, Bargur, 
            and Tirunelveli were started with the idea of imparting Technical Education to the wards of the Transport Corporation employees. 
            The Polytechnic functions in the campus with an area of 17.35 acres.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be a premier institution of technical education, producing competent and 
                ethical engineers who can meet the challenges of the rapidly evolving 
                technological landscape and contribute to national development.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide quality technical education through innovative teaching methods, 
                industry collaboration, and continuous improvement in curriculum to develop 
                skilled professionals ready for global challenges.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-8">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">32+</div>
              <div className="text-primary-foreground/80">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">6</div>
              <div className="text-primary-foreground/80">Registered Students (in thousands)</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">4</div>
              <div className="text-primary-foreground/80">Engineering Departments</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">17.35</div>
              <div className="text-primary-foreground/80">Acres Campus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}