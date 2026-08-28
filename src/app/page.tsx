import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      {/* Target anchor identifiers for future phases */}
      <div id="projects" className="scroll-mt-20" aria-hidden="true" />
      <div id="skills" className="scroll-mt-20" aria-hidden="true" />
      <div id="contact" className="scroll-mt-20" aria-hidden="true" />
    </>
  );
}
