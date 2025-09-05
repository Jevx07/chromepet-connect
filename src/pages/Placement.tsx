import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/ui/back-button";
import { Users, Target, Phone, Mail, ExternalLink, Building, Award, Handshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/sections/Footer";

const Placement = () => {
  const objectives = [
    "Achieve high placements",
    "Develop strong industry relationships and partnerships",
    "Provide career counseling, training, and mentorship",
    "Facilitate industrial visits, internships, and projects",
    "Enhance student employability skills",
    "Organize recruitment drives and networking events",
    "Monitor and improve placement processes"
  ];

  const coordinators = [
    {
      sno: 1,
      name: "Tmt. KAVITHA B",
      designation: "Lecturer/ECE",
      mobile: "9444359441",
      email: "sridhar.kavitha@gmail.com"
    },
    {
      sno: 2,
      name: "Thiru ANANAD S",
      designation: "Lecturer/MECH",
      mobile: "7010878240",
      email: "irtanand@gmail.com"
    },
    {
      sno: 3,
      name: "Tmt. RAJAKUMARI A",
      designation: "Lecturer/EEE",
      mobile: "9445204146",
      email: "rajakumari1996@gmail.com"
    },
    {
      sno: 4,
      name: "Tmt. JULIET THESSALONICA D",
      designation: "Lecturer/COMPUTER",
      mobile: "9444365032",
      email: "juliet.jsamuel@gmail.com"
    }
  ];

  const companies = [
    { name: "Precision Group", website: "https://www.precisiongroup.com", description: "Engineering Solutions & Manufacturing" },
    { name: "BK Systems", website: "https://www.bksystems.in", description: "Technology & Engineering Services" },
    { name: "K2 Cranes & Components", website: "https://www.k2cranes.com", description: "Material Handling Equipment" },
    { name: "Apollo Tyres", website: "https://www.apollotyres.com", description: "Tire Manufacturing & Automotive" },
    { name: "Delphi-TVS Technologies", website: "https://www.delphitvs.com", description: "Automotive Components" },
    { name: "Igarashi Motors India Ltd", website: "https://www.igarashi-motor.com", description: "Motor Manufacturing" },
    { name: "TAFE", website: "https://www.tafe.com", description: "Tractors & Farm Equipment" },
    { name: "Zauba Corp", website: "https://www.zauba.com", description: "Import Export Data Solutions" },
    { name: "Royal Enfield", website: "https://www.royalenfield.com", description: "Motorcycle Manufacturing" },
    { name: "TVS", website: "https://www.tvs.com", description: "Automotive & Two-Wheeler Manufacturing" },
    { name: "JayAir Systems Private Limited", website: "https://www.jayairsystems.com", description: "HVAC & Air Conditioning Systems" },
    { name: "Autotech", website: "https://www.autotech.in", description: "Automotive Components & Assemblies" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-4">
            <Link to="/">
              <BackButton />
            </Link>
          </div>
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
              Career Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Placement Cell
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Bridging the gap between education and industry, helping our students achieve their career aspirations.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Building className="w-6 h-6 text-primary" />
                About Our Placement Cell
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Every diploma student aspires to work for a renowned organization. It is evident from considering this important issue that diploma students require training to enhance their career prospects and secure respectable employment in a variety of industries. At our college, students not only receive technical instruction but are also cultivated into well-rounded persons with life skills to address global issues. In order to provide career opportunity to our students we are having a Placement Cell, which is effectively functioning in our Institution with a Placement Officer and Placement coordinators to achieve consistently high placement rates.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="w-6 h-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg italic">
                "To provide comprehensive training, guidance, and support to students, enhancing their employability and securing successful placements in leading organizations."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Objectives */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Objectives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our placement cell works towards these core objectives to ensure student success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium">{objective}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        {/* Placement Coordinators */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Placement Coordinators</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of experienced coordinators from various departments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordinators.map((coordinator) => (
              <Card key={coordinator.sno} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{coordinator.name}</CardTitle>
                  <CardDescription className="text-sm font-medium">
                    {coordinator.designation}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm">{coordinator.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm break-all">{coordinator.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recruiting Companies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Recruiting Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading companies that regularly recruit our talented graduates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{company.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {company.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    Visit Website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">High Placement Rate</h3>
              <p className="text-muted-foreground">Consistently achieving excellent placement records</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Handshake className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Industry Partnerships</h3>
              <p className="text-muted-foreground">Strong relationships with leading companies</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Career Development</h3>
              <p className="text-muted-foreground">Comprehensive training and skill enhancement</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Placement;