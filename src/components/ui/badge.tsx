import React from "react";
import { cn } from "@/lib/utils";
import { BadgeVariant, BadgeSize } from "@/types";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    default: "bg-[#131c2e] text-slate-300 border border-[#1e293b]",
    accent: "bg-sky-500/10 text-sky-400 border border-sky-500/30",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
  };

  const sizeStyles: Record<BadgeSize, string> = {
    sm: "text-[11px] px-2 py-0.5 font-medium",
    md: "text-xs px-2.5 py-1 font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md font-mono transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
