"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TubelightNavbarProps {
  navItems: Array<{
    name: string;
    link: string;
    icon?: React.ReactNode;
  }>;
  className?: string;
}

export const TubelightNavbar: React.FC<TubelightNavbarProps> = ({
  navItems,
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex items-center justify-center space-x-4 px-8 py-6 rounded-full bg-black/20 backdrop-blur-md border border-white/10",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={navItem.link}
          href={navItem.link}
          className={cn(
            "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
            "text-white/70 hover:text-white"
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === idx && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full border border-white/20"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
          <span className="relative z-10 flex items-center space-x-2">
            {navItem.icon}
            <span>{navItem.name}</span>
          </span>
        </a>
      ))}
    </div>
  );
};

interface TubelightTabsProps {
  tabs: Array<{
    title: string;
    value: string;
    content?: string | React.ReactNode;
  }>;
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}

export const TubelightTabs: React.FC<TubelightTabsProps> = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState<string>(propTabs[0]?.value || "");
  const [tabs, setTabs] = useState<Array<{
    title: string;
    value: string;
    content?: string | React.ReactNode;
  }>>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0].value);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full border border-white/20",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-white/70 hover:text-white transition-colors duration-200">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active}
        hovering={hovering}
        className={cn("mt-8", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Array<{
    title: string;
    value: string;
    content?: string | React.ReactNode;
  }>;
  active: string;
  hovering?: boolean;
}) => {
  const isActive = (tab: any) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};