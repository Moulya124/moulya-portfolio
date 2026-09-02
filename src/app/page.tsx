import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      {/* Target anchor identifiers for future phases */}
      <div id="contact" className="scroll-mt-20" aria-hidden="true" />
    </>
  );
}
