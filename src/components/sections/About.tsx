"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROFILE } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/ui/tech-badge";
import {
  Server,
  Cpu,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Layers,
  Terminal,
  Workflow,
} from "lucide-react";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  const capabilityIcons: Record<string, React.ReactNode> = {
    "01": <Server className="h-4 w-4 text-sky-400" />,
    "02": <Cpu className="h-4 w-4 text-indigo-400" />,
    "03": <ShieldCheck className="h-4 w-4 text-emerald-400" />,
  };

  return (
    <section
      id="about"
      className="scroll-mt-20 py-20 md:py-28 border-t border-[#1e293b]/60 relative"
      aria-label="About Moulya M Prasad"
    >
      <Container size="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16"
        >
          {/* Top Editorial Layout: Left Narrative + Right Identity Tree */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Narrative & Background */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-sky-400 tracking-widest uppercase font-semibold">
                  {"//"} ABOUT
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-sans">
                  {PROFILE.aboutHeading}
                </h2>
              </div>

              <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                {PROFILE.aboutParagraph.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Education and Experience Metadata Snippets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-lg bg-[#0d131f] border border-[#1e293b] flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#131c2e] border border-[#1e293b] text-sky-400 shrink-0 mt-0.5">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      Current Position
                    </span>
                    <h3 className="text-xs font-semibold text-slate-200 mt-0.5">
                      {PROFILE.currentRole.company}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {PROFILE.currentRole.role}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0d131f] border border-[#1e293b] flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#131c2e] border border-[#1e293b] text-indigo-400 shrink-0 mt-0.5">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      Education &bull; {PROFILE.education.score}
                    </span>
                    <h3 className="text-xs font-semibold text-slate-200 mt-0.5">
                      {PROFILE.education.degree}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {PROFILE.education.institution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Unified Identity Tree Visualization */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <Card className="bg-[#0d131f] border-[#1e293b] p-6 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#1e293b] pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-sky-400" />
                    <span className="text-xs font-mono font-semibold text-slate-200">
                      ENGINEERING ARCHITECTURE
                    </span>
                  </div>
                  <Badge variant="default" size="sm">
                    UNIFIED
                  </Badge>
                </div>

                {/* Root Tree Node */}
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-[#131c2e] border border-[#1e293b] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Layers className="h-4 w-4 text-sky-400" />
                      <div>
                        <h3 className="text-xs font-bold font-mono text-slate-100 uppercase tracking-wide">
                          SOFTWARE ENGINEER
                        </h3>
                        <p className="text-[10px] text-slate-400 font-mono">
                          Single Primary Professional Identity
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connected Tree Branches */}
                  <div className="pl-4 border-l-2 border-[#1e293b] ml-4 space-y-3.5 py-1">
                    {/* Branch 1: Backend */}
                    <div className="relative pl-4">
                      <div className="absolute -left-[18px] top-3.5 w-3.5 h-px bg-[#1e293b]" />
                      <div className="p-2.5 rounded-md bg-[#080c14] border border-[#1e293b]/90 hover:border-sky-500/30 transition-colors">
                        <div className="flex items-center gap-2">
                          <Server className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                          <span className="text-xs font-semibold text-slate-200">
                            Backend Systems
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                          Python, Django, REST APIs, SQL, and Redis-based state management.
                        </p>
                      </div>
                    </div>

                    {/* Branch 2: AI / LLM */}
                    <div className="relative pl-4">
                      <div className="absolute -left-[18px] top-3.5 w-3.5 h-px bg-[#1e293b]" />
                      <div className="p-2.5 rounded-md bg-[#080c14] border border-[#1e293b]/90 hover:border-indigo-500/30 transition-colors">
                        <div className="flex items-center gap-2">
                          <Cpu className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                          <span className="text-xs font-semibold text-slate-200">
                            AI / LLM Workflows
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                          LangChain, LangGraph, RAG pipelines, and agent orchestration.
                        </p>
                      </div>
                    </div>

                    {/* Branch 3: QA Automation */}
                    <div className="relative pl-4">
                      <div className="absolute -left-[18px] top-3.5 w-3.5 h-px bg-[#1e293b]" />
                      <div className="p-2.5 rounded-md bg-[#080c14] border border-[#1e293b]/90 hover:border-emerald-500/30 transition-colors">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span className="text-xs font-semibold text-slate-200">
                            QA Automation
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                          Pytest suites, Selenium E2E, Swagger API testing, and CI/CD.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Three Connected Capability Cards (01, 02, 03) */}
          <motion.div variants={itemVariants} className="space-y-6 pt-4">
            <div className="flex items-center gap-2">
              <Workflow className="h-4 w-4 text-sky-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Core Engineering Capabilities
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PROFILE.aboutCapabilities.map((cap) => (
                <Card
                  key={cap.index}
                  variant="interactive"
                  className="bg-[#0d131f] border-[#1e293b] p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-md bg-[#131c2e] border border-[#1e293b]">
                        {capabilityIcons[cap.index]}
                      </div>
                      <span className="font-mono text-xs text-sky-400 font-semibold px-2 py-0.5 rounded bg-[#080c14] border border-[#1e293b]">
                        {cap.index}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-100 tracking-wide font-mono mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1e293b]/70 flex flex-wrap gap-1.5">
                    {cap.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Engineering Approach Section */}
          <motion.div variants={itemVariants} className="space-y-6 pt-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-sky-400 tracking-widest uppercase font-semibold">
                {"//"} ENGINEERING APPROACH
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 font-sans">
                Core Engineering Principles
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROFILE.engineeringPrinciples.map((principle) => (
                <div
                  key={principle.index}
                  className="p-4 rounded-lg bg-[#0d131f] border border-[#1e293b] hover:border-slate-600 transition-colors space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-sky-400 font-semibold">
                      {principle.index} &bull;
                    </span>
                    <h4 className="text-sm font-bold text-slate-200">
                      {principle.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
