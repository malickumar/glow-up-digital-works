import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  hover3d?: boolean;
  style?: CSSProperties;
}

const FloatingCard = ({ children, className, hover3d = true, style }: FloatingCardProps) => {
  return (
    <div 
      className={cn(
        "card-float p-6",
        hover3d && "hover:transform hover:perspective-1000",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default FloatingCard;