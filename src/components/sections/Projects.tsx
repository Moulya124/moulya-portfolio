"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/ui/tech-badge";
import { Icons } from "@/components/ui/icons";
import {
  ExternalLink,
  ShieldCheck,
  Globe,
  Layout,
  Code2,
  FolderGit2,
} from "lucide-react";

export function Projects() {
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

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-20 md:py-28 border-t border-[#1e293b]/60 relative"
      aria-label="Selected Engineering Work"
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
              {"//"} PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-sans">
              Selected Engineering Work
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Selected projects demonstrating backend engineering, AI/ML development, web engineering, and automated QA.
            </p>
          </div>

          {/* Featured Project: A N Constructions */}
          {featuredProject && (
            <motion.div variants={itemVariants}>
              <Card
                variant="featured"
                className="bg-[#0d131f] border-sky-500/30 overflow-hidden shadow-2xl p-0"
              >
                {/* Browser Mock Top Bar */}
                <div className="bg-[#080c14] px-4 py-3 border-b border-[#1e293b] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1e293b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1e293b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1e293b]" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#0d131f] border border-[#1e293b] text-[11px] font-mono text-slate-400 max-w-xs sm:max-w-md truncate">
                    <Globe className="h-3 w-3 text-sky-400 shrink-0" />
                    <span className="truncate">{featuredProject.liveUrl}</span>
                  </div>
                  <Badge variant="accent" size="sm" className="font-mono text-[10px]">
                    FEATURED
                  </Badge>
                </div>

                {/* Card Content Area */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Title & Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#1e293b]/80 pb-6">
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
                          {featuredProject.category}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 font-sans tracking-tight">
                        {featuredProject.title}
                      </h3>
                      {featuredProject.tagline && (
                        <p className="text-xs sm:text-sm font-mono text-slate-400">
                          {featuredProject.tagline}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                        {featuredProject.description}
                      </p>
                    </div>

                    {/* Action CTAs */}
                    <div className="flex flex-wrap sm:flex-col gap-2.5 shrink-0 pt-2 sm:pt-0">
                      {featuredProject.liveUrl && (
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center font-mono text-xs font-semibold px-3.5 py-2 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 shadow-sm hover:shadow-sky-500/20 focus-visible:ring-2 focus-visible:ring-sky-400 transition-all cursor-pointer"
                          aria-label={`Open live demo of ${featuredProject.title} in new tab`}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                        </a>
                      )}
                      {featuredProject.githubUrl && (
                        <a
                          href={featuredProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center font-mono text-xs font-medium px-3.5 py-2 rounded-lg bg-[#080c14] hover:bg-[#131c2e] text-slate-200 border border-[#1e293b] hover:border-slate-600 focus-visible:ring-2 focus-visible:ring-sky-400 transition-all cursor-pointer"
                          aria-label={`Open GitHub repository for ${featuredProject.title} in new tab`}
                        >
                          <Icons.gitHub className="h-3.5 w-3.5 mr-1.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Engineering Focus: Web Engineering & QA / CI */}
                  {featuredProject.engineeringFocus && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-[#080c14] border border-[#1e293b] space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-[#131c2e] border border-[#1e293b] text-sky-400">
                            <Layout className="h-3.5 w-3.5" />
                          </div>
                          <h4 className="text-xs font-bold font-mono text-slate-200 uppercase tracking-wide">
                            {featuredProject.engineeringFocus[0]?.area}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {featuredProject.engineeringFocus[0]?.description}
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-[#080c14] border border-[#1e293b] space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-[#131c2e] border border-[#1e293b] text-emerald-400">
                            <ShieldCheck className="h-3.5 w-3.5" />
                          </div>
                          <h4 className="text-xs font-bold font-mono text-slate-200 uppercase tracking-wide">
                            {featuredProject.engineeringFocus[1]?.area}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {featuredProject.engineeringFocus[1]?.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Technologies & Testing CI Badges */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#1e293b]/70">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
                        Technologies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredProject.technologies.map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>
                    </div>

                    {featuredProject.testingTags && (
                      <div className="p-2.5 rounded-lg bg-[#080c14] border border-emerald-500/20 flex items-center gap-2 self-start sm:self-auto">
                        <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-[10px] font-mono text-emerald-400/90 font-bold block uppercase tracking-wider">
                            TESTING &amp; CI
                          </span>
                          <span className="text-xs font-mono text-slate-300">
                            {featuredProject.testingTags.join(" • ")}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Secondary Projects Grid */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <FolderGit2 className="h-4 w-4 text-sky-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                Additional Engineering Projects
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {secondaryProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants} className="h-full">
                  <Card
                    variant="interactive"
                    className="bg-[#0d131f] border-[#1e293b] p-6 h-full flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="p-1.5 rounded-md bg-[#131c2e] border border-[#1e293b] text-sky-400">
                          <Code2 className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-100 font-sans tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#1e293b]/70 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
