"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EXPERIENCES } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/ui/tech-badge";
import {
  Briefcase,
  Calendar,
  Layers,
  ArrowRight,
  Cpu,
  Server,
  ShieldCheck,
  Wrench,
  CheckCircle2,
} from "lucide-react";

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
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

  const contributionIcons: Record<string, React.ReactNode> = {
    "01": <Cpu className="h-3.5 w-3.5 text-indigo-400" />,
    "02": <Server className="h-3.5 w-3.5 text-sky-400" />,
    "03": <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />,
    "04": <Wrench className="h-3.5 w-3.5 text-amber-400" />,
  };

  const lifecycleSteps = [
    "Design",
    "Build",
    "Integrate",
    "Test",
    "Debug",
    "Optimize",
    "Deploy",
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-20 py-20 md:py-28 border-t border-[#1e293b]/60 relative"
      aria-label="Engineering Experience"
    >
      <Container size="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-14"
        >
          {/* Section Heading */}
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-sky-400 tracking-widest uppercase font-semibold">
              {"//"} EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-sans">
              Engineering Experience
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Spanning backend architecture, AI-powered agent workflows, automated testing suites, and root-cause engineering problem solving.
            </p>
          </div>

          {/* End-to-End Ownership Pipeline Indicator */}
          <motion.div
            variants={itemVariants}
            className="p-4 rounded-xl bg-[#0d131f] border border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Layers className="h-4 w-4 text-sky-400" />
              <span className="font-semibold text-slate-200">End-to-End Engineering Ownership:</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] font-mono text-slate-400">
              {lifecycleSteps.map((step, idx) => (
                <React.Fragment key={step}>
                  <span className="px-2 py-0.5 rounded bg-[#080c14] border border-[#1e293b] text-slate-300 font-medium">
                    {step}
                  </span>
                  {idx < lifecycleSteps.length - 1 && (
                    <ArrowRight className="h-3 w-3 text-sky-400/50 shrink-0" aria-hidden="true" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Vertical Timeline Structure */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#1e293b] ml-2 sm:ml-4 space-y-12">
            {EXPERIENCES.map((exp) => {
              const isCurrent = exp.status === "current";

              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative space-y-4"
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                    {isCurrent ? (
                      <div className="h-5 w-5 rounded-full bg-[#080c14] border-2 border-sky-400 flex items-center justify-center shadow-lg shadow-sky-500/20">
                        <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full bg-[#080c14] border-2 border-slate-600 flex items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-slate-500" />
                      </div>
                    )}
                  </div>

                  {/* Experience Card */}
                  <Card
                    variant={isCurrent ? "featured" : "default"}
                    className={
                      isCurrent
                        ? "bg-[#0d131f] border-sky-500/30 p-6 sm:p-7 shadow-xl space-y-6"
                        : "bg-[#0d131f] border-[#1e293b] p-6 sm:p-7 space-y-5"
                    }
                  >
                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1e293b]/80 pb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-sans">
                            {exp.company}
                          </h3>
                          {isCurrent && (
                            <Badge variant="accent" size="sm" className="font-mono">
                              CURRENT
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-medium">
                          <Briefcase className="h-3.5 w-3.5 text-slate-400" />
                          <span>{exp.role}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-[#080c14] px-3 py-1 rounded-md border border-[#1e293b] self-start sm:self-auto">
                        <Calendar className="h-3.5 w-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Role Summary */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Seaverse: 4 Grouped Engineering Contribution Areas */}
                    {exp.contributionAreas && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                        {exp.contributionAreas.map((area) => (
                          <div
                            key={area.index}
                            className="p-3.5 rounded-lg bg-[#080c14]/90 border border-[#1e293b]/90 space-y-2 hover:border-slate-600 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="p-1 rounded bg-[#131c2e] border border-[#1e293b]">
                                  {contributionIcons[area.index]}
                                </div>
                                <h4 className="text-xs font-bold text-slate-200">
                                  {area.title}
                                </h4>
                              </div>
                              <span className="font-mono text-[10px] text-slate-500 font-semibold">
                                {area.index}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed">
                              {area.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* BEL: Direct Contributions */}
                    {exp.directContributions && (
                      <ul className="space-y-2 pt-1">
                        {exp.directContributions.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Technologies Used */}
                    <div className="pt-4 border-t border-[#1e293b]/80 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
                        Technologies &amp; Tools Used
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
