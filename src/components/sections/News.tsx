import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Download, ExternalLink, Clock } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Exam Schedule",
    description: "October 2024 Time Table is now available for download",
    date: "2024-10-01",
    category: "Examination",
    link: "/October-2024 Time Table.pdf",
    type: "download"
  },
  {
    id: 2,
    title: "Exam Results",
    description: "Exam Result: Awaited - Check DTE Tamil Nadu official website",
    date: "2024-09-15",
    category: "Results",
    link: "http://dte.tn.gov.in/",
    type: "external"
  },
  {
    id: 3,
    title: "Examination Pattern",
    description: "2023 Scheme examination pattern is now in effect",
    date: "2024-08-20",
    category: "Academic",
    type: "info"
  }
];

const currentEvents = [
  {
    title: "APPLICATION FIRST YEAR-ONLINE",
    period: "2025-2026",
    link: "https://tnpoly.in/",
    description: "Online applications for first year admission"
  },
  {
    title: "APPLICATION LATERAL (SECOND) YEAR-ONLINE", 
    period: "2025-2026",
    link: "https://tnpoly.in/",
    description: "Online applications for lateral entry admission"
  }
];

export function News() {
  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
            Latest Updates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            News & 
            <span className="text-primary block">Announcements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, examination schedules, results, and important announcements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-primary" />
              Latest News
            </h3>
            <div className="space-y-6">
              {newsItems.map((item) => (
                <Card key={item.id} className="border-0 shadow-medium hover:shadow-strong transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <CardTitle className="text-xl text-foreground">
                          {item.title}
                        </CardTitle>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    {item.link && (
                      <Button 
                        variant={item.type === "download" ? "default" : "outline"}
                        size="sm"
                        className="w-fit"
                        asChild
                      >
                        <a 
                          href={item.link} 
                          target={item.type === "external" ? "_blank" : "_self"}
                          rel={item.type === "external" ? "noopener noreferrer" : undefined}
                        >
                          {item.type === "download" && <Download className="w-4 h-4 mr-2" />}
                          {item.type === "external" && <ExternalLink className="w-4 h-4 mr-2" />}
                          {item.type === "download" ? "Download" : "View Details"}
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Events */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Current Events
            </h3>
            <div className="space-y-4">
              {currentEvents.map((event, index) => (
                <Card key={index} className="border-0 shadow-medium hover:shadow-strong transition-all duration-300">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {event.period}
                    </Badge>
                    <h4 className="font-bold text-foreground mb-2 text-sm">
                      {event.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      {event.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Apply Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
              
              {/* Quick Links Card */}
              <Card className="border-0 shadow-medium bg-gradient-hero">
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary-foreground mb-4">
                    Quick Links
                  </h4>
                  <div className="space-y-2">
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="w-full justify-start bg-white/10 text-primary-foreground hover:bg-white/20"
                      asChild
                    >
                      <a href="http://dte.tn.gov.in/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        DTE Tamil Nadu
                      </a>
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="w-full justify-start bg-white/10 text-primary-foreground hover:bg-white/20"
                      asChild
                    >
                      <a href="https://tnpoly.in/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        TN Polytechnic
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}