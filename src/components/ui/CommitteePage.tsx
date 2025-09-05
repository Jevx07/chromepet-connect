import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Download, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/sections/Footer";

interface Member {
  name: string;
  designation: string;
  role: string;
  phone?: string;
  email?: string;
}

interface Document {
  title: string;
  description: string;
  filename: string;
}

interface CommitteePageProps {
  title: string;
  overview: string;
  objectives: string[];
  members: Member[];
  contacts: Array<{
    type: "phone" | "email";
    label: string;
    value: string;
  }>;
  documents: Document[];
}

export default function CommitteePage({
  title,
  overview,
  objectives,
  members,
  contacts,
  documents
}: CommitteePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/committee">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Committees
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Overview Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{overview}</p>
              
              <h3 className="text-lg font-semibold mb-4">Key Objectives</h3>
              <ul className="space-y-2">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Members Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Committee Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {members.map((member, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.designation}</p>
                        <p className="text-sm font-medium text-primary">{member.role}</p>
                        {member.phone && (
                          <p className="text-sm text-muted-foreground mt-1">
                            <Phone className="w-3 h-3 inline mr-1" />
                            {member.phone}
                          </p>
                        )}
                        {member.email && (
                          <p className="text-sm text-muted-foreground">
                            <Mail className="w-3 h-3 inline mr-1" />
                            {member.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    {contact.type === "phone" ? (
                      <Phone className="w-5 h-5 text-primary" />
                    ) : (
                      <Mail className="w-5 h-5 text-primary" />
                    )}
                    <div>
                      <p className="text-sm font-medium">{contact.label}</p>
                      <p className="text-muted-foreground">
                        {contact.type === "phone" ? (
                          <a href={`tel:${contact.value}`} className="hover:text-primary transition-colors">
                            {contact.value}
                          </a>
                        ) : (
                          <a href={`mailto:${contact.value}`} className="hover:text-primary transition-colors">
                            {contact.value}
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Documents Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Documents & Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h4 className="font-medium">{document.title}</h4>
                      <p className="text-sm text-muted-foreground">{document.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}