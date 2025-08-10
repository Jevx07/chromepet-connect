import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Award, User } from "lucide-react";

const staffData = {
  "basic-engineering": [
    {
      name: "Senthil Kumaran.S",
      designation: "Senior Lecturer",
      department: "Department of Physics",
      qualification: "M.Sc., M.Ed., M.Phil",
      image: "/placeholder.svg?height=120&width=120",
      email: "senthil@gptcchromepet.edu.in",
      phone: "+91 9876543210"
    },
    {
      name: "Thangadurai.C",
      designation: "Physics Lecturer",
      department: "Department of Physics",
      qualification: "M.Sc., M.Ed., M.Phil",
      image: "/placeholder.svg?height=120&width=120",
      email: "thangadurai@gptcchromepet.edu.in",
      phone: "+91 9876543211"
    },
    {
      name: "Dr.Palaniyappa .R",
      designation: "Mathematics Lecturer",
      department: "Department of Mathematics",
      qualification: "M.Sc., M.Phil, Ph.D",
      image: "/placeholder.svg?height=120&width=120",
      email: "palaniyappa@gptcchromepet.edu.in",
      phone: "+91 9876543212"
    },
    {
      name: "Vijila Mary.R",
      designation: "Mathematics Lecturer",
      department: "Department of Mathematics",
      qualification: "M.Sc, M.Ed., M.Phil",
      image: "/placeholder.svg?height=120&width=120",
      email: "vijila@gptcchromepet.edu.in",
      phone: "+91 9876543213"
    },
    {
      name: "Gnanasekaran .P",
      designation: "Chemistry Lecturer",
      department: "Department of Chemistry",
      qualification: "M.Sc., B.Ed.,M.Phil",
      image: "/placeholder.svg?height=120&width=120",
      email: "gnanasekaran@gptcchromepet.edu.in",
      phone: "+91 9876543214"
    },
    {
      name: "Aruna.M",
      designation: "Chemistry Lecturer",
      department: "Department of Chemistry",
      qualification: "M.Sc, M.Phil",
      image: "/placeholder.svg?height=120&width=120",
      email: "aruna@gptcchromepet.edu.in",
      phone: "+91 9876543215"
    },
    {
      name: "Raja Rajeswari.V",
      designation: "Chemistry Lecturer",
      department: "Department of Chemistry",
      qualification: "M.Sc, M.Phil",
      image: "/placeholder.svg?height=120&width=120",
      email: "raja@gptcchromepet.edu.in",
      phone: "+91 9876543216"
    },
    {
      name: "Sivagami .N",
      designation: "Lab Attender - I/0",
      department: "Basic Engineering",
      qualification: "H.S.C+M.A(Distance education) + B.Lib.",
      image: "/placeholder.svg?height=120&width=120",
      email: "sivagami@gptcchromepet.edu.in",
      phone: "+91 9876543217"
    }
  ],
  "computer-technology": [
    {
      name: "Sridhar.P",
      designation: "Head Of the Department",
      department: "Computer Technology",
      qualification: "M.E.",
      image: "/placeholder.svg?height=120&width=120",
      email: "sridhar@gptcchromepet.edu.in",
      phone: "+91 9876543218"
    },
    {
      name: "Kavitha.B",
      designation: "Lecturer",
      department: "Computer Technology",
      qualification: "M.E.",
      image: "/placeholder.svg?height=120&width=120",
      email: "kavitha@gptcchromepet.edu.in",
      phone: "+91 9876543219"
    },
    {
      name: "Manga.V",
      designation: "Lecturer",
      department: "Computer Technology",
      qualification: "M.E.",
      image: "/placeholder.svg?height=120&width=120",
      email: "manga@gptcchromepet.edu.in",
      phone: "+91 9876543220"
    },
    {
      name: "Juliet Thessalonica.D",
      designation: "Lecturer",
      department: "Computer Technology",
      qualification: "M.E.",
      image: "/placeholder.svg?height=120&width=120",
      email: "juliet@gptcchromepet.edu.in",
      phone: "+91 9876543221"
    },
    {
      name: "Priya.V",
      designation: "Lecturer",
      department: "Computer Technology",
      qualification: "M.E.",
      image: "/placeholder.svg?height=120&width=120",
      email: "priya@gptcchromepet.edu.in",
      phone: "+91 9876543222"
    },
    {
      name: "Vairam.M",
      designation: "ASST.WORKSHOP INSTRUCTOR",
      department: "Computer Technology",
      qualification: "I.T.I & NTC NATC",
      image: "/placeholder.svg?height=120&width=120",
      email: "vairam@gptcchromepet.edu.in",
      phone: "+91 9876543223"
    }
  ],
  "electrical-electronics": [
    {
      name: "Tamilarasi.R",
      designation: "Lecturer",
      department: "Electrical & Electronics",
      qualification: "M.E.",
      image: "/placeholder.svg?height=120&width=120",
      email: "tamilarasi@gptcchromepet.edu.in",
      phone: "+91 9876543224"
    },
    {
      name: "Rajakumari.A",
      designation: "Lecturer",
      department: "Electrical & Electronics",
      qualification: "B.E.",
      image: "/placeholder.svg?height=120&width=120",
      email: "rajakumari@gptcchromepet.edu.in",
      phone: "+91 9876543225"
    },
    {
      name: "Singaram.T",
      designation: "LABTECH",
      department: "Electrical & Electronics",
      qualification: "I.T.I & NTC NATC, M.E",
      image: "/placeholder.svg?height=120&width=120",
      email: "singaram@gptcchromepet.edu.in",
      phone: "+91 9876543226"
    }
  ],
  "electronics-communication": [
    {
      name: "Mary Josephine Caroline.R",
      designation: "Head Of the Department",
      department: "Electronics & Communication",
      qualification: "M.E",
      image: "/placeholder.svg?height=120&width=120",
      email: "mary@gptcchromepet.edu.in",
      phone: "+91 9876543227"
    },
    {
      name: "Thangavelu.S",
      designation: "Lecturer",
      department: "Electronics & Communication",
      qualification: "M.E.",
      image: "/placeholder.svg?height=120&width=120",
      email: "thangavelu@gptcchromepet.edu.in",
      phone: "+91 9876543228"
    },
    {
      name: "Arulmozhi Vijaya Banu.N",
      designation: "Lecturer",
      department: "Electronics & Communication",
      qualification: "M.E.",
      image: "/placeholder.svg?height=120&width=120",
      email: "arulmozhi@gptcchromepet.edu.in",
      phone: "+91 9876543229"
    },
    {
      name: "Kavitha Sridhar.B",
      designation: "Lecturer",
      department: "Electronics & Communication",
      qualification: "M.E",
      image: "/placeholder.svg?height=120&width=120",
      email: "kavithasridhar@gptcchromepet.edu.in",
      phone: "+91 9876543230"
    },
    {
      name: "Sagaya Arockiaraj.X",
      designation: "LAB TECH",
      department: "Electronics & Communication",
      qualification: "I.T.I & NTC NATC, B.E",
      image: "/placeholder.svg?height=120&width=120",
      email: "sagaya@gptcchromepet.edu.in",
      phone: "+91 9876543231"
    }
  ],
  "mechanical-engineering": [
    {
      name: "Venkatesan .M",
      designation: "Lecturer",
      department: "Mechanical Engineering",
      qualification: "M.E",
      image: "/placeholder.svg?height=120&width=120",
      email: "venkatesan@gptcchromepet.edu.in",
      phone: "+91 9876543232"
    },
    {
      name: "Anand .S",
      designation: "Lecturer",
      department: "Mechanical Engineering",
      qualification: "M.E.",
      image: "/placeholder.svg?height=120&width=120",
      email: "anand@gptcchromepet.edu.in",
      phone: "+91 9876543233"
    },
    {
      name: "Durairaj .J",
      designation: "SKILLED ASST - GR I",
      department: "Mechanical Engineering",
      qualification: "I.T.I & NTC NATC",
      image: "/placeholder.svg?height=120&width=120",
      email: "durairaj@gptcchromepet.edu.in",
      phone: "+91 9876543234"
    },
    {
      name: "John Kennady .S.B",
      designation: "SKILLED ASST - GR I",
      department: "Mechanical Engineering",
      qualification: "I.T.I & NTC NATC & B.A",
      image: "/placeholder.svg?height=120&width=120",
      email: "john@gptcchromepet.edu.in",
      phone: "+91 9876543235"
    },
    {
      name: "Venkatesan .J",
      designation: "FORMAN",
      department: "Mechanical Engineering",
      qualification: "I.T.I & NTC",
      image: "/placeholder.svg?height=120&width=120",
      email: "venkatesanj@gptcchromepet.edu.in",
      phone: "+91 9876543236"
    }
  ]
};

const StaffCard = ({ staff }: { staff: any }) => (
  <Card className="group hover:shadow-strong transition-all duration-300 border-0 bg-gradient-card overflow-hidden">
    <CardHeader className="pb-4">
      <div className="flex items-start gap-4">
        <Avatar className="w-20 h-20 border-2 border-primary/20">
          <AvatarImage src={staff.image} alt={staff.name} />
          <AvatarFallback className="bg-gradient-hero text-primary-foreground text-lg font-semibold">
            {staff.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {staff.name}
          </CardTitle>
          <p className="text-primary font-medium">{staff.designation}</p>
          <p className="text-sm text-muted-foreground">{staff.department}</p>
        </div>
      </div>
    </CardHeader>
    
    <CardContent className="space-y-4">
      <div className="flex items-center gap-2">
        <Award className="w-4 h-4 text-accent" />
        <span className="text-sm text-foreground font-medium">{staff.qualification}</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="w-4 h-4" />
          <span>{staff.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="w-4 h-4" />
          <span>{staff.phone}</span>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        className="w-full justify-center text-primary hover:text-primary hover:bg-primary/5 mt-4"
      >
        <User className="w-4 h-4 mr-2" />
        View Profile
      </Button>
    </CardContent>
  </Card>
);

const Staff = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
              Our Faculty
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Meet Our <span className="text-secondary">Expert Staff</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Dedicated professionals committed to providing quality technical education 
              and nurturing the next generation of engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Staff Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="basic-engineering" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
              <TabsTrigger value="basic-engineering" className="text-xs lg:text-sm">
                Basic Engineering
              </TabsTrigger>
              <TabsTrigger value="computer-technology" className="text-xs lg:text-sm">
                Computer Tech
              </TabsTrigger>
              <TabsTrigger value="electrical-electronics" className="text-xs lg:text-sm">
                Electrical & Electronics
              </TabsTrigger>
              <TabsTrigger value="electronics-communication" className="text-xs lg:text-sm">
                Electronics & Comm
              </TabsTrigger>
              <TabsTrigger value="mechanical-engineering" className="text-xs lg:text-sm">
                Mechanical
              </TabsTrigger>
            </TabsList>

            {Object.entries(staffData).map(([department, staff]) => (
              <TabsContent key={department} value={department} className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {department.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')} Department
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Meet our dedicated faculty members who bring years of experience and expertise to their respective fields.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {staff.map((member, index) => (
                    <StaffCard key={index} staff={member} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Staff;