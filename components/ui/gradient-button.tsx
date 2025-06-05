"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  href: string;
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function GradientButton({
  href,
  className,
  icon,
  children,
}: GradientButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden flex items-center gap-1.5 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 px-5 py-2.5 text-sm font-medium rounded-full border border-white shadow hover:shadow-lg transition-all duration-300 whitespace-nowrap",
        className
      )}
    >
      {icon}
      <div className="relative h-5 overflow-hidden">
        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0">
          {children}
        </span>
      </div>
    </Link>
  );
}
