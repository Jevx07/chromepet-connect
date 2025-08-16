import React from "react";
import { Link } from "react-router-dom";

interface CommitteeCardProps {
  title: string;
  description: string;
  href: string;
}

export default function CommitteeCard({ title, description, href }: CommitteeCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (cardRef.current && buttonRef.current) {
      cardRef.current.style.borderColor = "#008bf8";
      cardRef.current.style.boxShadow = "0 4px 18px 0 rgba(0, 0, 0, 0.25)";
      buttonRef.current.style.transform = "translate(-50%, 50%)";
      buttonRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current && buttonRef.current) {
      cardRef.current.style.borderColor = "hsl(var(--border))";
      cardRef.current.style.boxShadow = "none";
      buttonRef.current.style.transform = "translate(-50%, 125%)";
      buttonRef.current.style.opacity = "0";
    }
  };

  return (
    <Link to={href}>
      <div
        ref={cardRef}
        className="w-[190px] h-[254px] rounded-[20px] bg-card relative p-7 border-2 border-border transition-all duration-500 ease-out overflow-visible cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-foreground h-full gap-2 grid place-content-center text-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <button
          ref={buttonRef}
          className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[125%] w-[60%] rounded-2xl border-none bg-[#008bf8] text-white text-base py-2 px-4 opacity-0 transition-all duration-300 ease-out cursor-pointer"
        >
          More info
        </button>
      </div>
    </Link>
  );
}