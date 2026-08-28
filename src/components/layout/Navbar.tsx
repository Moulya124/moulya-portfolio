"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PROFILE } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Terminal, Menu, X } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section for navigation highlight
      const sections = PROFILE.navItems.map((item) => item.href.replace("#", ""));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(`#${current}`);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Check initial scroll state asynchronously
    const timer = setTimeout(onScroll, 0);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-[#080c14]/92 backdrop-blur-md border-b border-[#1e293b] shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container size="lg" className="flex h-16 items-center justify-between">
        {/* Brand identity */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md py-1 px-1"
          aria-label={`${PROFILE.name} - Home`}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0d131f] border border-[#1e293b] text-sky-400 group-hover:border-sky-500/40 transition-colors">
            <Terminal className="h-4 w-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="leading-none text-slate-100 font-bold text-sm tracking-tight group-hover:text-sky-300 transition-colors font-sans">
              {PROFILE.name}
            </span>
            <span className="text-[10px] text-slate-400 font-mono leading-tight mt-0.5">
              {PROFILE.descriptor}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Desktop Navigation">
          {PROFILE.navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs font-mono transition-colors",
                  isActive
                    ? "text-sky-400 bg-sky-500/10 font-semibold border border-sky-500/20"
                    : "text-slate-400 hover:text-slate-100 hover:bg-[#0d131f]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-sky-400 hover:bg-[#0d131f] border border-transparent hover:border-[#1e293b] rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="LinkedIn Profile (opens in a new tab)"
          >
            <Icons.linkedIn className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-sky-400 hover:bg-[#0d131f] border border-transparent hover:border-[#1e293b] rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="GitHub Profile (opens in a new tab)"
          >
            <Icons.gitHub className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-400 hover:text-slate-100 md:hidden rounded-md bg-[#0d131f] border border-[#1e293b] focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Responsive Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-[#080c14]/98 backdrop-blur-xl border-b border-[#1e293b] px-6 py-6 flex flex-col justify-between overflow-y-auto"
        >
          <div className="space-y-2">
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
              {"//"} Navigation
            </p>
            {PROFILE.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="block text-sm font-mono uppercase tracking-wide text-slate-300 hover:text-sky-400 py-2.5 border-b border-[#1e293b]/60 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-[#1e293b] space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
              {"//"} Connect
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-slate-300 hover:text-sky-400 rounded-md bg-[#0d131f] border border-[#1e293b] transition-colors"
                aria-label="LinkedIn Profile (opens in a new tab)"
              >
                <Icons.linkedIn className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-slate-300 hover:text-sky-400 rounded-md bg-[#0d131f] border border-[#1e293b] transition-colors"
                aria-label="GitHub Profile (opens in a new tab)"
              >
                <Icons.gitHub className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
