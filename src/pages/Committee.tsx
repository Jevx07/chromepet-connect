import CommitteeCard from "@/components/ui/CommitteeCard";
import { Users, Shield, Heart, MessageSquare, Award, Lightbulb, Crown } from "lucide-react";

const Committee = () => {
  const committees = [
    {
      id: 1,
      title: "Anti-Ragging Committee",
      description: "Ensuring a safe and secure campus environment for all students",
      href: "/committee/anti-ragging",
      icon: Shield
    },
    {
      id: 2,
      title: "Anti-Drugs Committee",
      description: "Promoting awareness and prevention of substance abuse",
      href: "/committee/anti-drugs",
      icon: Heart
    },
    {
      id: 3,
      title: "Internal Complaints Committee",
      description: "Addressing workplace harassment and grievances",
      href: "/committee/internal-complaints",
      icon: MessageSquare
    },
    {
      id: 4,
      title: "Student Grievance Redressal",
      description: "Resolving student concerns and academic issues",
      href: "/committee/student-grievance",
      icon: Users
    },
    {
      id: 5,
      title: "Internal Quality Assurance",
      description: "Maintaining and enhancing educational standards",
      href: "/committee/quality-assurance",
      icon: Award
    },
    {
      id: 6,
      title: "Innovation Council",
      description: "Fostering innovation and entrepreneurship",
      href: "/committee/innovation-council",
      icon: Lightbulb
    },
    {
      id: 7,
      title: "Women Empowerment",
      description: "Supporting women's rights and empowerment initiatives",
      href: "/committee/women-empowerment",
      icon: Crown
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Committees
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated committees work tirelessly to ensure the welfare, safety, and development of all students and staff members.
          </p>
        </div>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center mb-16">
          {committees.map((committee) => (
            <CommitteeCard
              key={committee.id}
              title={committee.title}
              description={committee.description}
              href={committee.href}
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">About Our Committees</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                Each committee is formed with specific objectives to address various aspects of campus life, 
                from student safety to academic excellence and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">How We Operate</h3>
              <p className="text-muted-foreground">
                Our committees comprise faculty members, staff, and student representatives who work collaboratively 
                to implement policies and resolve issues effectively.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Committee;