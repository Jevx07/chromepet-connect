import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Mail, Phone, Award, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { BackButton } from "@/components/ui/back-button";
import { staffData } from "@/data/staffData";

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
          <div className="flex items-center mb-4">
            <Link to="/">
              <BackButton />
            </Link>
          </div>
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
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12">
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
              <TabsTrigger value="office" className="text-xs lg:text-sm">
                Office
              </TabsTrigger>
            </TabsList>

            {Object.entries(staffData).map(([department, staff]) => (
              <TabsContent key={department} value={department} className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {department.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')} {department === 'office' ? '' : 'Department'}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {department === 'office' 
                      ? 'Meet our dedicated office staff who provide administrative support and ensure smooth operations.'
                      : 'Meet our dedicated faculty members who bring years of experience and expertise to their respective fields.'
                    }
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