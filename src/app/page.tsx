import React from "react";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Target anchor identifiers for future phases */}
      <div id="about" className="scroll-mt-20" aria-hidden="true" />
      <div id="experience" className="scroll-mt-20" aria-hidden="true" />
      <div id="projects" className="scroll-mt-20" aria-hidden="true" />
      <div id="skills" className="scroll-mt-20" aria-hidden="true" />
      <div id="contact" className="scroll-mt-20" aria-hidden="true" />
    </>
  );
}
