"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SKILL_GROUPS, ENGINEERING_FOCUS } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { TechBadge } from "@/components/ui/tech-badge";
import {
  Server,
  Cpu,
  ShieldCheck,
  GitBranch,
  Layers,
} from "lucide-react";

export function Skills() {
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

  const groupIcons: Record<string, React.ReactNode> = {
    "01": <Server className="h-4 w-4 text-sky-400" />,
    "02": <Cpu className="h-4 w-4 text-indigo-400" />,
    "03": <ShieldCheck className="h-4 w-4 text-emerald-400" />,
    "04": <GitBranch className="h-4 w-4 text-amber-400" />,
  };

  return (
    <section
      id="skills"
      className="scroll-mt-20 py-20 md:py-28 border-t border-[#1e293b]/60 relative"
      aria-label="Technical Stack"
    >
      <Container size="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-14"
        >
          {/* Section Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-sky-400 tracking-widest uppercase font-semibold">
              {"//"} SKILLS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-sans">
              Technical Stack
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Tools and technologies I use to build backend systems, AI/LLM workflows, and reliable automated testing solutions.
            </p>
          </div>

          {/* 2x2 Skill Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SKILL_GROUPS.map((group) => (
              <motion.div key={group.id} variants={itemVariants} className="h-full">
                <Card
                  variant="interactive"
                  className="bg-[#0d131f] border-[#1e293b] p-6 h-full flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-md bg-[#131c2e] border border-[#1e293b]">
                          {groupIcons[group.index]}
                        </div>
                        <h3 className="text-sm font-bold text-slate-100 font-mono tracking-wide">
                          {group.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-sky-400 font-semibold px-2 py-0.5 rounded bg-[#080c14] border border-[#1e293b]">
                        {group.index}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1e293b]/70 flex flex-wrap gap-1.5">
                    {group.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Engineering Focus Subsection */}
          <motion.div
            variants={itemVariants}
            className="pt-4 space-y-4"
          >
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-sky-400" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                Engineering Focus
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {ENGINEERING_FOCUS.map((focus, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#0d131f] border border-[#1e293b] hover:border-slate-600 transition-colors flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-sky-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">
                      {focus.title}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                      {focus.descriptor}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
