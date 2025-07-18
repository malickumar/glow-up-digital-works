import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
}

const GlowButton = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className,
  onClick,
  href,
  type = "button"
}: GlowButtonProps) => {
  const baseClasses = "font-semibold transition-all duration-300 hover:scale-105";
  const glowClasses = variant === "primary" ? "btn-glow text-black" : "btn-accent-glow text-white";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  if (href) {
    return (
      <a 
        href={href}
        className={cn(baseClasses, glowClasses, sizeClasses[size], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Button
      type={type}
      onClick={onClick}
      className={cn(baseClasses, glowClasses, sizeClasses[size], className)}
    >
      {children}
    </Button>
  );
};

export default GlowButton;