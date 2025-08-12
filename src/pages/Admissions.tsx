import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { 
  FileText, 
  Calendar, 
  Users, 
  CheckCircle, 
  Download, 
  BookOpen,
  GraduationCap,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const admissionSteps = [
  {
    step: "1",
    title: "Check Eligibility",
    description: "Ensure you meet the minimum qualification requirements for your desired course.",
    icon: CheckCircle
  },
  {
    step: "2",
    title: "Fill Application",
    description: "Complete the online application form with accurate personal and academic details.",
    icon: FileText
  },
  {
    step: "3",
    title: "Submit Documents",
    description: "Upload all required documents including mark sheets and certificates.",
    icon: Download
  },
  {
    step: "4",
    title: "Merit List",
    description: "Check the merit list publication and your admission status online.",
    icon: Users
  },
  {
    step: "5",
    title: "Counseling",
    description: "Attend counseling session for course and college allocation.",
    icon: BookOpen
  },
  {
    step: "6",
    title: "Admission Confirmation",
    description: "Complete the admission process by paying fees and document verification.",
    icon: GraduationCap
  }
];

const eligibilityCriteria = [
  {
    course: "Diploma Engineering (3 Years)",
    qualification: "SSLC (10th) or equivalent",
    minMarks: "35% in Mathematics and Science",
    ageLimit: "17-25 years"
  },
  {
    course: "Diploma Engineering (Lateral Entry)",
    qualification: "HSC (12th) with Mathematics, Physics, Chemistry",
    minMarks: "50% in 12th standard",
    ageLimit: "17-25 years"
  },
  {
    course: "Post Diploma",
    qualification: "Diploma in relevant Engineering field",
    minMarks: "50% in Diploma",
    ageLimit: "No age limit"
  }
];

const importantDates = [
  { event: "Application Start Date", date: "May 1, 2024" },
  { event: "Last Date to Apply", date: "June 30, 2024" },
  { event: "Merit List Publication", date: "July 15, 2024" },
  { event: "Counseling Starts", date: "July 20, 2024" },
  { event: "Classes Commence", date: "August 1, 2024" }
];

const requiredDocuments = [
  "SSLC/10th Standard Mark Sheet and Certificate",
  "HSC/12th Standard Mark Sheet and Certificate (for lateral entry)",
  "Transfer Certificate from last attended institution",
  "Community Certificate (if applicable)",
  "Income Certificate (for fee concession)",
  "Passport size photographs (6 copies)",
  "Aadhar Card copy",
  "Migration Certificate (if from other state board)"
];

const Admissions = () => {
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
              Join Our Institution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Admissions <span className="text-secondary">2024-25</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards a successful engineering career. 
              Apply now for our comprehensive diploma programs.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground mr-4">
                Apply Online Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-white/10">
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
              Step by Step Guide
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Admission <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Follow these simple steps to secure your admission in our prestigious institution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
              Requirements
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Eligibility <span className="text-primary">Criteria</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <Card key={index} className="bg-gradient-card border-0 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {criteria.course}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Qualification</p>
                        <p className="text-sm text-muted-foreground">{criteria.qualification}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Minimum Marks</p>
                        <p className="text-sm text-muted-foreground">{criteria.minMarks}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Age Limit</p>
                        <p className="text-sm text-muted-foreground">{criteria.ageLimit}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates & Documents */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Important Dates */}
            <div>
              <div className="mb-8">
                <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
                  Timeline
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Important <span className="text-primary">Dates</span>
                </h2>
              </div>
              <Card className="bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {importantDates.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-primary" />
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

            {/* Required Documents */}
            <div>
              <div className="mb-8">
                <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
                  Documentation
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Required <span className="text-primary">Documents</span>
                </h2>
              </div>
              <Card className="bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {requiredDocuments.map((doc, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{doc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Admission <span className="text-primary">Helpdesk</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">044 22650765</p>
                <p className="text-sm text-muted-foreground mt-2">Mon - Fri, 9:00 AM - 5:00 PM</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">admissions@gptcchromepet.edu.in</p>
                <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground">GPTC Chromepet</p>
                <p className="text-sm text-muted-foreground mt-2">Chennai, Tamil Nadu</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;