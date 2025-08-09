import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, FileText, CreditCard, Users, ArrowRight } from "lucide-react";

const admissionSteps = [
  {
    step: "01",
    title: "Check Eligibility",
    description: "Verify your academic qualifications and eligibility criteria for your desired course.",
    icon: CheckCircle
  },
  {
    step: "02", 
    title: "Online Application",
    description: "Fill out the comprehensive application form with your personal and academic details.",
    icon: FileText
  },
  {
    step: "03",
    title: "Document Upload",
    description: "Submit required documents including certificates, photos, and other supporting materials.",
    icon: Users
  },
  {
    step: "04",
    title: "Fee Payment",
    description: "Complete the application process by paying the required fees through our secure portal.",
    icon: CreditCard
  }
];

const importantDates = [
  { event: "Application Opens", date: "June 1, 2024", status: "active" },
  { event: "Last Date to Apply", date: "July 15, 2024", status: "upcoming" },
  { event: "Merit List Publication", date: "July 25, 2024", status: "upcoming" },
  { event: "Counseling Begins", date: "August 1, 2024", status: "upcoming" },
  { event: "Classes Commence", date: "August 15, 2024", status: "upcoming" }
];

export function Admissions() {
  return (
    <section id="admissions" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
            Join Our Community
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Admission <span className="text-primary">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start your journey towards becoming a skilled engineer. Our streamlined admission 
            process makes it easy to join our prestigious institution.
          </p>
        </div>

        {/* Admission Steps */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            How to Apply
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="relative bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-primary/20 absolute top-4 right-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Important Dates */}
          <Card className="bg-gradient-card border-0 shadow-medium">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Calendar className="w-6 h-6 text-primary mr-3" />
                <CardTitle className="text-2xl font-bold text-foreground">
                  Important Dates
                </CardTitle>
              </div>
              <p className="text-muted-foreground">
                Mark your calendar with these key admission deadlines
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {importantDates.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
                  <div>
                    <h4 className="font-semibold text-foreground">{item.event}</h4>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                  <Badge 
                    variant={item.status === 'active' ? 'default' : 'secondary'}
                    className={item.status === 'active' ? 'bg-accent text-accent-foreground' : ''}
                  >
                    {item.status === 'active' ? 'Active' : 'Upcoming'}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-gradient-hero border-0 p-8 text-center shadow-glow">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to Apply?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Start your application now and secure your seat in our prestigious programs.
              </p>
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground w-full"
              >
                Start Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left h-auto py-3"
                  >
                    <FileText className="w-5 h-5 mr-3 text-primary" />
                    <div>
                      <div className="font-medium">Download Prospectus</div>
                      <div className="text-sm text-muted-foreground">Complete course information</div>
                    </div>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left h-auto py-3"
                  >
                    <Users className="w-5 h-5 mr-3 text-accent" />
                    <div>
                      <div className="font-medium">Contact Admissions</div>
                      <div className="text-sm text-muted-foreground">Get personalized guidance</div>
                    </div>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left h-auto py-3"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary" />
                    <div>
                      <div className="font-medium">Eligibility Calculator</div>
                      <div className="text-sm text-muted-foreground">Check your qualification</div>
                    </div>
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