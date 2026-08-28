import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  orientation?: "horizontal" | "vertical";
}

export function Divider({
  label,
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        className={cn("w-px bg-[#1e293b] self-stretch mx-2", className)}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        className={cn("flex items-center w-full my-6", className)}
        role="separator"
        {...props}
      >
        <div className="flex-grow border-t border-[#1e293b]" />
        <span className="px-3 text-[11px] font-mono uppercase tracking-widest text-slate-500">
          {label}
        </span>
        <div className="flex-grow border-t border-[#1e293b]" />
      </div>
    );
  }

  return (
    <div
      className={cn("w-full border-t border-[#1e293b] my-6", className)}
      role="separator"
      {...props}
    />
  );
}
