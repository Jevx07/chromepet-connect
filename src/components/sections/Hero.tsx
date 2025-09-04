import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Award, BookOpen, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/college-hero.jpg";
import BlurText from "@/components/ui/BlurText";

const stats = [
  { icon: Users, label: "Students", value: "2,500+" },
  { icon: BookOpen, label: "Courses", value: "15+" },
  { icon: Award, label: "Years of Excellence", value: "25+" },
  { icon: Briefcase, label: "Placement Rate", value: "85%" }
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Government Polytechnic College Chromepet Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary text-sm font-medium">
                Government of Tamil Nadu Institution
              </div>
              
              <BlurText
                text="Government Polytechnic College Chromepet"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={() => console.log('Animation completed!')}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              />
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Empowering future engineers and technologists with quality education, 
                innovative learning, and industry-ready skills since 1999.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground text-lg px-8 py-4 h-auto rounded-xl shadow-glow transition-all duration-300 hover:shadow-xl"
                asChild
              >
                <Link to="/admission">
                  Apply for Admission
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="w-6 h-6 text-secondary mr-2" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-sm">Scroll Down</span>
        </div>
      </div>
    </section>
  );
}