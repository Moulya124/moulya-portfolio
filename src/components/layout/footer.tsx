import React from "react";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/constants";
import { Icons } from "@/components/ui/icons";
import { Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e293b] bg-[#080c14]/90 py-10 text-slate-400">
      <Container size="lg" className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <Terminal className="h-3.5 w-3.5 text-sky-400" />
            <span className="font-semibold">{SITE_CONFIG.name}</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-400">{SITE_CONFIG.role}</span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            &copy; {currentYear} &bull; Backend Systems &bull; AI/LLM Agent Tooling &bull; QA Automation
          </p>
        </div>

        <div className="flex items-center gap-3 text-slate-400">
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:text-sky-400 hover:bg-[#131c2e] border border-transparent hover:border-[#1e293b] transition-colors"
            aria-label="GitHub"
          >
            <Icons.gitHub className="h-4 w-4" />
          </a>
          <a
            href={SITE_CONFIG.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:text-sky-400 hover:bg-[#131c2e] border border-transparent hover:border-[#1e293b] transition-colors"
            aria-label="LinkedIn"
          >
            <Icons.linkedIn className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
