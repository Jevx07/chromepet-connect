import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Target, Eye, Award, Users, Building, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-4">
            <Button variant="ghost" asChild className="text-primary-foreground/80 hover:text-primary-foreground">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
              About Our Institution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Government Polytechnic <span className="text-secondary">Chromepet</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Established with a vision to provide quality technical education, 
              GPTC Chromepet has been a beacon of excellence in engineering education since its inception.
            </p>
          </div>
        </div>
      </section>

      {/* College History */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
                Our Heritage
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of <span className="text-primary">Excellence</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Institute of Road Transport Polytechnic College, Chennai was started by the Institute of Road 
                  Transport, Taramani in the year 1992-93. Our institution has been committed to providing 
                  quality technical education that meets industry standards.
                </p>
                <p>
                  Over the years, we have evolved to become one of the premier polytechnic institutions in Tamil Nadu, 
                  producing skilled engineers who contribute significantly to various industries across the nation.
                </p>
                <p>
                  Our strategic location in Chromepet, Chennai, provides students with excellent connectivity and 
                  access to industrial opportunities, making us an ideal choice for technical education.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-card border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">30+</h3>
                      <p className="text-sm text-muted-foreground">Years of Excellence</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">5000+</h3>
                      <p className="text-sm text-muted-foreground">Alumni Network</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Building className="w-8 h-8 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">5</h3>
                      <p className="text-sm text-muted-foreground">Departments</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">100%</h3>
                      <p className="text-sm text-muted-foreground">Placement Support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
              Our Guiding Principles
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vision & <span className="text-primary">Mission</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-0 overflow-hidden group hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading institution in technical education, fostering innovation and excellence 
                  while nurturing competent engineers who contribute to the technological advancement of 
                  our nation and society at large.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 overflow-hidden group hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality technical education with industry-relevant curriculum, state-of-the-art 
                  facilities, and experienced faculty, empowering students with knowledge, skills, and ethical 
                  values for successful careers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
              World-Class Facilities
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Modern <span className="text-primary">Infrastructure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our campus features state-of-the-art laboratories, modern classrooms, and comprehensive 
              facilities designed to enhance the learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Laboratories",
                description: "Well-equipped labs with latest equipment and technology for hands-on learning experience.",
                icon: Building
              },
              {
                title: "Digital Classrooms",
                description: "Smart classrooms with multimedia facilities for interactive and engaging learning sessions.",
                icon: GraduationCap
              },
              {
                title: "Library & Resources",
                description: "Comprehensive library with technical books, journals, and digital resources for research.",
                icon: Award
              },
              {
                title: "Workshop Facilities",
                description: "Fully equipped workshops for practical training in various engineering disciplines.",
                icon: Building
              },
              {
                title: "Computer Centers",
                description: "Advanced computer labs with latest software and high-speed internet connectivity.",
                icon: GraduationCap
              },
              {
                title: "Hostel Facilities",
                description: "Comfortable accommodation facilities for outstation students with all basic amenities.",
                icon: Users
              }
            ].map((facility, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <facility.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;