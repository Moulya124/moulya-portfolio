import React from "react";
import { cn } from "@/lib/utils";

export interface TechBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  category?: "backend" | "ai" | "qa" | "lang" | "tool" | "default";
  highlight?: boolean;
}

export function TechBadge({
  name,
  category = "default",
  highlight = false,
  className,
  ...props
}: TechBadgeProps) {
  const categoryIndicator = {
    backend: "bg-sky-400",
    ai: "bg-indigo-400",
    qa: "bg-emerald-400",
    lang: "bg-amber-400",
    tool: "bg-slate-400",
    default: "bg-slate-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border transition-all duration-150",
        highlight
          ? "bg-sky-500/10 text-sky-300 border-sky-500/30 hover:border-sky-400/60"
          : "bg-[#0d131f] text-slate-300 border-[#1e293b] hover:border-slate-600 hover:text-slate-100",
        className
      )}
      {...props}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full inline-block", categoryIndicator[category])}
        aria-hidden="true"
      />
      {name}
    </span>
  );
}
