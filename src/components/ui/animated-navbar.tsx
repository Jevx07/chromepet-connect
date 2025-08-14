"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon, Home, GraduationCap, BookOpen, Users, Calendar, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface AnimatedNavBarProps {
  items: NavItem[];
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: GraduationCap },
  { name: "Departments", url: "/departments", icon: BookOpen },
  { name: "Staff", url: "/staff", icon: Users },
  { name: "Academics", url: "/academics", icon: Calendar },
  { name: "Contact", url: "#contact", icon: Phone },
];

export function AnimatedNavBar({ 
  items = defaultNavItems, 
  className 
}: AnimatedNavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Set active tab based on current location
    const currentItem = items.find(item => 
      item.url === location.pathname || 
      (item.url === "/" && location.pathname === "/")
    );
    if (currentItem) {
      setActiveTab(currentItem.name);
    } else {
      setActiveTab(items[0]?.name || "");
    }
  }, [location.pathname, items]);

  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-[9999]",
        className,
      )}
    >
      <div className="flex items-center gap-1 bg-background/95 border border-border/30 backdrop-blur-xl py-1 px-1 rounded-full shadow-xl"
           style={{ 
             position: 'relative',
             zIndex: 9999
           }}>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-200",
                "text-foreground/60 hover:text-foreground",
                isActive && "text-primary",
              )}
            >
              <span className="hidden sm:inline relative z-10">{item.name}</span>
              <span className="sm:hidden relative z-10">
                <Icon size={16} strokeWidth={2.5} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                >
                  {/* Enhanced Tubelight Effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full shadow-lg">
                    {/* Outer atmospheric glow */}
                    <div className="absolute w-16 h-8 bg-primary/10 rounded-full blur-xl -top-3 -left-4 animate-pulse" />
                    {/* Middle bright glow */}
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-lg -top-2.5 -left-2" />
                    {/* Inner intense glow */}
                    <div className="absolute w-8 h-4 bg-primary/30 rounded-full blur-md -top-1.5 left-0" />
                    {/* Core tubelight */}
                    <div className="absolute w-6 h-2 bg-primary/40 rounded-full blur-sm -top-0.5 left-1" />
                    {/* Bright center line */}
                    <div className="absolute w-4 h-0.5 bg-primary rounded-full top-0.25 left-2" />
                    {/* Flickering effect */}
                    <div className="absolute w-8 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full animate-pulse top-0 left-0" />
                  </div>
                  
                  {/* Enhanced light beam effect */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent blur-sm" />
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-gradient-to-b from-primary/80 to-transparent" />
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}