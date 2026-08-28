import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function SectionContainer({
  id,
  className,
  containerClassName,
  children,
  size = "lg",
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 scroll-mt-20", className)}
      {...props}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
