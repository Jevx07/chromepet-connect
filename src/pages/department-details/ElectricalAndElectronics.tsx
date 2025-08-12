import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navigation } from "@/components/ui/navigation";
import { Star, Zap, ArrowLeft, Mail, Phone, Award, User } from "lucide-react";
import { Link } from "react-router-dom";
import { staffData } from "@/data/staffData";

const ElectricalAndElectronics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-4">
            <Button variant="ghost" asChild className="text-primary-foreground/80 hover:text-primary-foreground">
              <Link to="/departments">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Departments
              </Link>
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              EEE Dept Course Details
            </h1>
            <nav className="text-primary-foreground/80">
              <Link to="/" className="hover:text-primary-foreground">Home</Link>
              <span className="mx-2">›</span>
              <span>Course Details</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Electrical And Electronics Engineering</h2>
              <p className="text-muted-foreground mb-6">
                The Electrical and Electronic Engineering Department was started in the year 1992, with the intake 60 students.
              </p>
              
              <div className="relative mb-8">
                <img 
                  src="/images/departments/Electrical & Electronics Engineering.png" 
                  alt="Electrical & Electronics Engineering Department" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg border"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>

              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                  <TabsTrigger value="staff">Staff Details</TabsTrigger>
                  <TabsTrigger value="facilities">Laboratory Facilities</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Course Description</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The Electrical and Electronics Engineering Department was started in the year 1992, with the intake 60 students. Students are participated in intercollegiate seminars & quiz competitions conducted by Various colleges and won many prizes. They also have won many prizes in extra curricular activities. Every semester one day workshop is conducted for Related subjects.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Certification</h3>
                      <p className="text-muted-foreground">
                        Courses offered by the Department are Electrical and Electronic Engineering (Regular)
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="syllabus" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Core Subjects</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Electrical Machines",
                        "Power Systems", 
                        "Control Systems",
                        "Power Electronics",
                        "Industrial Drives",
                        "Renewable Energy"
                      ].map((subject, index) => (
                        <Card key={index} className="p-4">
                          <p className="font-medium">{subject}</p>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="staff" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Department Faculty</h3>
                      <p className="text-muted-foreground mb-6">
                        Our experienced faculty members provide comprehensive training in electrical and electronics engineering.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {staffData["electrical-electronics"].map((staff, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-card overflow-hidden">
                          <CardHeader className="pb-4">
                            <div className="flex items-start gap-4">
                              <Avatar className="w-16 h-16 border-2 border-primary/20">
                                <AvatarImage src={staff.image} alt={staff.name} />
                                <AvatarFallback className="bg-gradient-hero text-primary-foreground text-sm font-semibold">
                                  {staff.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                  {staff.name}
                                </CardTitle>
                                <p className="text-primary font-medium text-sm">{staff.designation}</p>
                                <p className="text-xs text-muted-foreground">{staff.department}</p>
                              </div>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-accent" />
                              <span className="text-xs text-foreground font-medium">{staff.qualification}</span>
                            </div>
                            
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Mail className="w-3 h-3" />
                                <span>{staff.email}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Phone className="w-3 h-3" />
                                <span>{staff.phone}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="facilities" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Laboratory Facilities</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">Electrical Machines Lab</h4>
                        <p className="text-sm text-muted-foreground">AC/DC machines and motor testing equipment</p>
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">Power Electronics Lab</h4>
                        <p className="text-sm text-muted-foreground">Power electronic circuits and devices</p>
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">Control Systems Lab</h4>
                        <p className="text-sm text-muted-foreground">Control system analysis and design equipment</p>
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">Power Systems Lab</h4>
                        <p className="text-sm text-muted-foreground">Power system protection and measurement</p>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Related Courses */}
              <div className="mt-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">Related Courses</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">←</Button>
                    <Button variant="outline" size="sm">→</Button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&h=200" 
                      alt="Electrical Engineering" 
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Electrical and Electronics Engineering</h4>
                      <div className="flex gap-2 text-sm text-muted-foreground">
                        <span>2 Year Course</span>
                        <span>3 Year Course</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&h=200" 
                      alt="Mechanical Engineering" 
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Mechanical Engineering</h4>
                      <div className="flex gap-2 text-sm text-muted-foreground">
                        <span>2 Year Course</span>
                        <span>3 Year Course</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&h=200" 
                      alt="Electronics and Communication" 
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Electronics and Communication Engineering</h4>
                      <div className="flex gap-2 text-sm text-muted-foreground">
                        <span>2 Year Course</span>
                        <span>3 Year Course</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* News & Events */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">News & Events</h3>
              <Button variant="outline" className="w-full">
                Exam Timetable
              </Button>
            </Card>

            {/* Course Reviews */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Course Reviews</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Average Rating</span>
                  <span className="text-2xl font-bold">4.8</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>5 Stars</span>
                    <span>10</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span>4 Stars</span>
                    <span>6</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span>3 Stars</span>
                    <span>3</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Asked Any Question?</h3>
              <div className="space-y-4">
                <Input placeholder="Name*" />
                <Input placeholder="Email*" />
                <Textarea placeholder="Message*" />
                <Button className="w-full bg-primary">SEND</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalAndElectronics;