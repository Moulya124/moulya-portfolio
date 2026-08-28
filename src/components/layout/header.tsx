"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { Terminal, Menu, X } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-[#080c14]/90 backdrop-blur-md border-b border-[#1e293b] shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container size="lg" className="flex h-16 items-center justify-between">
        {/* Brand identity */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-slate-100 hover:text-sky-400 transition-colors group"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#131c2e] border border-[#1e293b] text-sky-400 group-hover:border-sky-500/40 transition-colors">
            <Terminal className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="leading-none text-slate-100 font-bold tracking-wider">{SITE_CONFIG.name.toUpperCase()}</span>
            <span className="text-[10px] text-slate-400 font-mono leading-tight tracking-normal">
              SWE // Backend &bull; AI &bull; QA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-sky-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* External Links */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-slate-100 transition-colors rounded-md hover:bg-[#131c2e] border border-transparent hover:border-[#1e293b]"
            aria-label="GitHub Profile"
          >
            <Icons.gitHub className="h-4 w-4" />
          </a>
          <a
            href={SITE_CONFIG.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-slate-100 transition-colors rounded-md hover:bg-[#131c2e] border border-transparent hover:border-[#1e293b]"
            aria-label="LinkedIn Profile"
          >
            <Icons.linkedIn className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-400 hover:text-slate-100 md:hidden rounded-md hover:bg-[#131c2e] border border-[#1e293b]"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1e293b] bg-[#080c14]/98 backdrop-blur-xl px-4 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-sky-400 py-1.5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#1e293b] flex items-center gap-3">
            <a
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-100 rounded-md bg-[#0d131f] border border-[#1e293b]"
              aria-label="GitHub Profile"
            >
              <Icons.gitHub className="h-4 w-4" />
            </a>
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-100 rounded-md bg-[#0d131f] border border-[#1e293b]"
              aria-label="LinkedIn Profile"
            >
              <Icons.linkedIn className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
