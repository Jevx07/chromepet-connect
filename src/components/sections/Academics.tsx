import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock, Award, Download, ExternalLink } from "lucide-react";

const academicFeatures = [
  {
    icon: BookOpen,
    title: "2023 Scheme",
    description: "Updated curriculum following the latest 2023 examination scheme approved by the Tamil Nadu Government"
  },
  {
    icon: Clock,
    title: "Flexible Duration",
    description: "3-year regular course and 2-year lateral entry program for diploma holders"
  },
  {
    icon: Users,
    title: "Small Batch Size",
    description: "Limited intake of 60 students per department ensuring personalized attention"
  },
  {
    icon: Award,
    title: "Government Recognized",
    description: "All courses are approved by AICTE and affiliated with the Directorate of Technical Education, Tamil Nadu"
  }
];

const downloadableResources = [
  {
    title: "Examination Time Table",
    description: "October 2024 examination schedule",
    file: "October-2024 Time Table.pdf",
    type: "PDF"
  },
  {
    title: "Academic Calendar",
    description: "Complete academic year calendar with important dates",
    file: "#",
    type: "PDF"
  },
  {
    title: "Syllabus - 2023 Scheme",
    description: "Updated syllabus for all departments",
    file: "#",
    type: "PDF"
  }
];

export function Academics() {
  return (
    <section id="academics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
            Academic Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Academic
            <span className="text-primary block">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our academic programs are designed to provide comprehensive technical education 
            with industry-relevant curriculum and practical learning approach
          </p>
        </div>

        {/* Academic Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {academicFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Course Structure */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Course Structure
            </h3>
            
            <div className="space-y-6">
              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center">
                    <Badge variant="secondary" className="mr-3">3 Years</Badge>
                    Regular Course
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">First Year</span>
                      <span className="text-foreground font-medium">Basic Engineering + Core Subjects</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Second Year</span>
                      <span className="text-foreground font-medium">Advanced Topics + Practicals</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Third Year</span>
                      <span className="text-foreground font-medium">Specialization + Project Work</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center">
                    <Badge variant="outline" className="mr-3">2 Years</Badge>
                    Lateral Entry
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Direct admission to second year for diploma holders and ITI graduates with relevant qualifications.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Second Year</span>
                      <span className="text-foreground font-medium">Advanced Topics + Practicals</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Third Year</span>
                      <span className="text-foreground font-medium">Specialization + Project Work</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Downloads & Resources */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Academic Resources
            </h3>
            
            <div className="space-y-4 mb-8">
              {downloadableResources.map((resource, index) => (
                <Card key={index} className="border-0 shadow-medium hover:shadow-strong transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {resource.title}
                          </h4>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {resource.description}
                        </p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="ml-4"
                        asChild
                      >
                        <a href={resource.file} download>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* External Links */}
            <Card className="border-0 shadow-medium bg-gradient-hero">
              <CardHeader>
                <CardTitle className="text-xl text-primary-foreground">
                  External Academic Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    variant="secondary" 
                    className="w-full justify-start bg-white/10 text-primary-foreground hover:bg-white/20"
                    asChild
                  >
                    <a href="http://dte.tn.gov.in/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Directorate of Technical Education, TN
                    </a>
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full justify-start bg-white/10 text-primary-foreground hover:bg-white/20"
                    asChild
                  >
                    <a href="https://tnpoly.in/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Tamil Nadu Polytechnic Portal
                    </a>
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full justify-start bg-white/10 text-primary-foreground hover:bg-white/20"
                    asChild
                  >
                    <a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      AICTE Official Website
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}