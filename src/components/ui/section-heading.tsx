import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 mb-8",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {tag && (
        <span className="font-mono text-xs text-sky-400 tracking-wider uppercase font-semibold">
          {"//"} {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
