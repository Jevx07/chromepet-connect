import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { 
  BookOpen, 
  Calendar, 
  Award, 
  Clock,
  Users,
  GraduationCap,
  FileText,
  Lightbulb,
  Target,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const academicPrograms = [
  {
    title: "Diploma in Engineering",
    duration: "3 Years",
    type: "Full Time",
    description: "Comprehensive 3-year diploma program covering fundamental and advanced engineering concepts.",
    features: ["Theory & Practical", "Industry Projects", "Internship", "Modern Labs"]
  },
  {
    title: "Lateral Entry Diploma",
    duration: "2 Years",
    type: "Direct Second Year",
    description: "Direct admission to second year for 12th standard students with PCM background.",
    features: ["Advanced Curriculum", "Specialized Training", "Industry Exposure", "Project Work"]
  },
  {
    title: "Post Diploma",
    duration: "1 Year",
    type: "Specialization",
    description: "Advanced specialization programs for diploma holders in specific engineering domains.",
    features: ["Specialized Knowledge", "Research Projects", "Industry Collaboration", "Career Advancement"]
  }
];

const curriculumFeatures = [
  {
    icon: BookOpen,
    title: "Industry-Aligned Curriculum",
    description: "Our curriculum is designed in consultation with industry experts to meet current market demands."
  },
  {
    icon: Lightbulb,
    title: "Practical Learning",
    description: "Emphasis on hands-on learning through well-equipped laboratories and workshop training."
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Maintained student-teacher ratio ensures personalized attention and better learning outcomes."
  },
  {
    icon: Target,
    title: "Skill Development",
    description: "Focus on developing both technical skills and soft skills for holistic personality development."
  }
];

const assessmentMethods = [
  "Continuous Internal Assessment",
  "Semester End Examinations",
  "Project-Based Evaluation",
  "Practical Examinations",
  "Industrial Training Assessment",
  "Viva Voce Examinations"
];

const academicCalendar = [
  { event: "Semester Begins", date: "August 1st" },
  { event: "Mid-Semester Exams", date: "September 15-20" },
  { event: "Semester End Exams", date: "November 15-30" },
  { event: "Winter Break", date: "December 20 - January 5" },
  { event: "Even Semester Begins", date: "January 8th" },
  { event: "Annual Technical Fest", date: "February 15-17" },
  { event: "Final Exams", date: "May 1-15" },
  { event: "Summer Internship", date: "May 20 - July 15" }
];

const Academics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
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
              Academic Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Academic <span className="text-secondary">Programs</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technical education with industry-relevant curriculum, 
              modern teaching methodologies, and hands-on learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
              Our Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Academic <span className="text-primary">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from our diverse range of engineering programs designed to prepare you for a successful career.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {academicPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {program.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <div className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center text-primary hover:text-primary hover:bg-primary/5 mt-4"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
              Our Approach
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Curriculum <span className="text-primary">Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-0 bg-gradient-card text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Calendar */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Assessment Methods */}
            <div>
              <div className="mb-8">
                <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
                  Evaluation
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Assessment <span className="text-primary">Methods</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our comprehensive assessment system ensures fair evaluation of student performance across multiple parameters.
                </p>
              </div>
              <Card className="bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {assessmentMethods.map((method, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary">{index + 1}</span>
                        </div>
                        <span className="text-foreground font-medium">{method}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Academic Calendar */}
            <div>
              <div className="mb-8">
                <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
                  Timeline
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Academic <span className="text-primary">Calendar</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Stay updated with important academic dates and events throughout the year.
                </p>
              </div>
              <Card className="bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {academicCalendar.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-accent" />
                          <span className="font-medium text-foreground">{item.event}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {item.date}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Statistics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
              Our Achievements
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Academic <span className="text-primary">Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">95%</h3>
                <p className="text-muted-foreground">Pass Percentage</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">85%</h3>
                <p className="text-muted-foreground">Placement Rate</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">1:15</h3>
                <p className="text-muted-foreground">Faculty-Student Ratio</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">50+</h3>
                <p className="text-muted-foreground">Course Modules</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;