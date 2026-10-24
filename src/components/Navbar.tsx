"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Check, Copy, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/utils/lib";

export function Navbar() {
  const [copied, setCopied] = useState(false);
  const [timeStr, setTimeStr] = useState<string>("00:00:00 LOCAL");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " LOCAL"
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-obsidian-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10">
        {/* Brand Identity */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="flex h-8 w-8 items-center justify-center border border-white/15 bg-obsidian-900 transition-transform duration-150 ease-out group-hover:scale-105 group-hover:border-accent-lime">
            <Terminal className="h-4 w-4 text-accent-lime" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold tracking-tight text-white">
                {PORTFOLIO_CONFIG.profile.name.toUpperCase()}
              </span>
              <span className="rounded-sm border border-indigo-500/30 bg-accent-indigo/15 px-1.5 py-0.5 font-mono text-[10px] font-medium text-indigo-300">
                {PORTFOLIO_CONFIG.navbar.version}
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-zinc-400">
              {PORTFOLIO_CONFIG.navbar.brandSubtitle}
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {PORTFOLIO_CONFIG.navbar.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative px-3.5 py-1.5 font-mono text-xs text-zinc-400 transition-colors duration-150 hover:text-white"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 scale-95 rounded bg-white/[0.04] opacity-0 transition-all duration-150 ease-out group-hover:scale-100 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        {/* Right Telemetry + Quick Action */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 border border-white/[0.07] bg-obsidian-900/90 px-3 py-1.5 font-mono text-[11px] text-zinc-400 lg:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-lime" />
            <span>{timeStr}</span>
          </div>

          <motion.button
            onClick={copyEmail}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12 }}
            className="flex items-center gap-2 border border-white/15 bg-obsidian-900 px-3.5 py-1.5 font-mono text-xs font-medium text-zinc-200 transition-colors duration-150 hover:border-accent-lime hover:text-accent-lime"
            title="Copy direct email address"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-accent-lime" />
                <span className="text-accent-lime">COPIED EMAIL</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-zinc-400" />
                <span className="hidden sm:inline">
                  {PORTFOLIO_CONFIG.profile.email}
                </span>
                <span className="sm:hidden">EMAIL</span>
              </>
            )}
          </motion.button>

          <a
            href={PORTFOLIO_CONFIG.navbar.ctaHref}
            className="hidden items-center gap-1 bg-accent-lime px-3.5 py-1.5 font-mono text-xs font-semibold text-obsidian-950 transition-transform duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 sm:inline-flex"
          >
            <span>{PORTFOLIO_CONFIG.navbar.ctaLabel}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
