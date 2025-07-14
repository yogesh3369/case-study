'use client';

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link";
}

export function ScrollButton({ 
  targetId, 
  children, 
  className = "",
  variant = "outline"
}: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button 
      variant={variant}
      className={`px-6 py-3 border-gray-300 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md ${className}`}
      onClick={handleClick}
    >
      <Mail className="mr-2 h-4 w-4" />
      {children}
    </Button>
  );
}
