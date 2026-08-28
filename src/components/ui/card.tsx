import React from "react";
import { cn } from "@/lib/utils";
import { CardVariant } from "@/types";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
}

export function Card({
  children,
  className,
  variant = "default",
  ...props
}: CardProps) {
  const variantStyles: Record<CardVariant, string> = {
    default: "border-[#1e293b] bg-[#0d131f]/90",
    interactive:
      "border-[#1e293b] bg-[#0d131f]/90 hover:border-slate-600 hover:bg-[#111927] transition-all duration-200 cursor-pointer",
    featured:
      "border-sky-500/30 bg-[#0d131f] shadow-lg shadow-sky-500/5 hover:border-sky-500/50 transition-all duration-200",
  };

  return (
    <div
      className={cn(
        "relative rounded-xl border p-6 backdrop-blur-sm",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-1.5 pb-3", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold tracking-tight text-slate-100", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-slate-400 leading-relaxed", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pt-2", className)} {...props} />;
}
