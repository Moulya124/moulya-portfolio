"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROFILE } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/ui/tech-badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Mail,
  Server,
  Cpu,
  ShieldCheck,
  ArrowDown,
  Layers,
} from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="overview"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden"
      aria-label="Hero Introduction"
    >
      <Container size="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* 1. Small Technical Label */}
          <motion.div variants={itemVariants} className="mb-5">
            <Badge
              variant="accent"
              size="md"
              className="gap-2 px-3.5 py-1 text-xs border-sky-500/30 bg-sky-500/10 text-sky-400 font-mono shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" aria-hidden="true" />
              {PROFILE.technicalLabel}
            </Badge>
          </motion.div>

          {/* 2. Main Heading: Software Engineer */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 font-sans"
          >
            {PROFILE.title}
          </motion.h1>

          {/* 3. Accent Heading: Backend, AI & QA Automation */}
          <motion.div variants={itemVariants} className="mt-2 mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-mono font-medium text-sky-400 tracking-tight">
              {PROFILE.specialization}
            </h2>
          </motion.div>

          {/* 4. Concise Supporting Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8"
          >
            {PROFILE.description}
          </motion.p>

          {/* 5. CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-12"
          >
            <Button
              variant="primary"
              size="md"
              onClick={() => handleScrollTo("projects")}
              aria-label="View Projects section"
            >
              View Projects
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => handleScrollTo("contact")}
              aria-label="Contact Me section"
            >
              <Mail className="h-4 w-4 mr-1.5 text-slate-400" />
              Contact Me
            </Button>
          </motion.div>

          {/* 6. Technology Highlights */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-3xl mb-14 px-2"
            aria-label="Core Verified Technologies"
          >
            <div className="flex items-center justify-center gap-2 mb-3.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
                Core Verified Technologies
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {PROFILE.technologies.map((tech) => (
                <TechBadge
                  key={tech.name}
                  name={tech.name}
                  category={tech.category}
                />
              ))}
            </div>
          </motion.div>

          {/* 7. Subtle Engineering Visual: Backend Systems -> AI / LLM Workflows -> QA Automation */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-3xl text-left"
            aria-label="Interconnected Engineering Architecture"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Layers className="h-3.5 w-3.5 text-sky-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
                Unified Engineering Pipeline
              </span>
            </div>

            <Card
              variant="default"
              className="bg-[#0b101b] border-[#1e293b] p-5 sm:p-6 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                {/* Pillar 1: Backend Systems */}
                <div className="flex flex-col justify-between p-4 rounded-lg bg-[#080c14]/80 border border-[#1e293b]/80 relative group hover:border-sky-500/30 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-1.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        <Server className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        Layer 01
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-200">
                      Backend Systems
                    </h3>
                    <p className="text-[11px] font-mono text-sky-400 mt-0.5 mb-2">
                      Core Foundation
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Resilient services, relational schemas, caching, and scalable REST APIs.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#1e293b]/60 flex flex-wrap gap-1">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#131c2e] text-slate-300">
                      Django
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#131c2e] text-slate-300">
                      REST APIs
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#131c2e] text-slate-300">
                      Redis
                    </span>
                  </div>
                </div>

                {/* Connector Arrow for Mobile */}
                <div className="flex md:hidden items-center justify-center -my-2 text-slate-600">
                  <ArrowDown className="h-4 w-4 text-sky-400/60" />
                </div>

                {/* Pillar 2: AI / LLM Workflows */}
                <div className="flex flex-col justify-between p-4 rounded-lg bg-[#080c14]/80 border border-[#1e293b]/80 relative group hover:border-indigo-500/30 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-1.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <Cpu className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        Layer 02
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-200">
                      AI / LLM Workflows
                    </h3>
                    <p className="text-[11px] font-mono text-indigo-400 mt-0.5 mb-2">
                      Advanced App Layer
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Multi-step agent workflows, RAG contextual retrieval, and structured prompts.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#1e293b]/60 flex flex-wrap gap-1">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#131c2e] text-slate-300">
                      LangChain
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#131c2e] text-slate-300">
                      LangGraph
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#131c2e] text-slate-300">
                      RAG
                    </span>
                  </div>
                </div>

                {/* Connector Arrow for Mobile */}
                <div className="flex md:hidden items-center justify-center -my-2 text-slate-600">
                  <ArrowDown className="h-4 w-4 text-emerald-400/60" />
                </div>

                {/* Pillar 3: QA Automation */}
                <div className="flex flex-col justify-between p-4 rounded-lg bg-[#080c14]/80 border border-[#1e293b]/80 relative group hover:border-emerald-500/30 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        Layer 03
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-200">
                      QA Automation
                    </h3>
                    <p className="text-[11px] font-mono text-emerald-400 mt-0.5 mb-2">
                      Engineering Rigor
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Automated testing suites, E2E browser automation, and API contract verification.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#1e293b]/60 flex flex-wrap gap-1">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#131c2e] text-slate-300">
                      Pytest
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#131c2e] text-slate-300">
                      Selenium
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#131c2e] text-slate-300">
                      CI/CD
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
