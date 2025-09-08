import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BackButton } from "@/components/ui/back-button";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";

const admissionCards = [
  {
    id: 1,
    type: "first_year",
    icon: {
      type: GraduationCap,
      color: "#22c55e",
      backgroundColor: "#dcfce7"
    },
    heading: "First Year Admission",
    subheading: "Direct Entry Program",
    description: "For students who have completed 10th standard and want to join directly in the first year",
    requirements: [
      {
        id: 1,
        text: "Minimum 35% in 10th standard",
        icon: Check
      },
      {
        id: 2,
        text: "Age limit: 15-20 years",
        icon: Check
      },
      {
        id: 3,
        text: "Merit-based selection",
        icon: Check
      }
    ],
    action: {
      text: "Click to apply online",
      url: "https://tnpoly.in/",
      type: "external",
      color: "#3b82f6",
      icon: ArrowRight
    },
    cardStyle: {
      primaryColor: "#22c55e",
      gradientStart: "#dcfce7",
      gradientEnd: "#bbf7d0"
    }
  },
  {
    id: 2,
    type: "second_year",
    icon: {
      type: Calendar,
      color: "#8b5cf6",
      backgroundColor: "#ede9fe"
    },
    heading: "Second Year Admission",
    subheading: "Lateral Entry Program",
    description: "For students who have completed 12th standard and want to join directly in the second year",
    requirements: [
      {
        id: 1,
        text: "Minimum 50% in 12th standard",
        icon: Check
      },
      {
        id: 2,
        text: "PCM subjects mandatory",
        icon: Check
      },
      {
        id: 3,
        text: "Lateral entry program",
        icon: Check
      }
    ],
    action: {
      text: "Click to apply online",
      url: "https://tnpoly.in/",
      type: "external",
      color: "#3b82f6",
      icon: ArrowRight
    },
    cardStyle: {
      primaryColor: "#8b5cf6",
      gradientStart: "#ede9fe",
      gradientEnd: "#ddd6fe"
    }
  }
];

const Admissions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 pt-16">
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
              Admission Portal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Admission Portal
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Join Government Polytechnic College and start your journey towards a successful engineering career
            </p>
          </div>
        </div>
      </section>

      {/* Admission Cards Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <div className="grid md:grid-cols-2 gap-8">
            {admissionCards.map((card, index) => {
              const IconComponent = card.icon.type;
              const ActionIcon = card.action.icon;
              
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Card 
                    className="h-full bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] group"
                    style={{
                      background: `linear-gradient(135deg, ${card.cardStyle.gradientStart}, ${card.cardStyle.gradientEnd})`
                    }}
                  >
                    <CardContent className="p-8">
                      {/* Icon */}
                      <motion.div 
                        className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto"
                        style={{ backgroundColor: card.icon.backgroundColor }}
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <IconComponent 
                          className="w-8 h-8" 
                          style={{ color: card.icon.color }} 
                        />
                      </motion.div>

                      {/* Content */}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {card.heading}
                        </h3>
                        <p className="text-primary font-medium mb-4">
                          {card.subheading}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      {/* Requirements */}
                      <div className="space-y-3 mb-8">
                        {card.requirements.map((req, reqIndex) => {
                          const ReqIcon = req.icon;
                          return (
                            <motion.div
                              key={req.id}
                              className="flex items-center space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.1) + (reqIndex * 0.1) + 0.4 }}
                            >
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <ReqIcon className="w-3 h-3 text-green-600" />
                              </div>
                              <span className="text-sm text-foreground">
                                {req.text}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Action Button */}
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 h-auto rounded-xl shadow-glow transition-all duration-300 hover:shadow-xl group-hover:scale-105 relative overflow-hidden"
                        onClick={() => window.open(card.action.url, '_blank')}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {card.action.text}
                          <ActionIcon className="w-4 h-4 ml-2" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;