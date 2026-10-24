"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Twitter,
  Zap,
} from "lucide-react";
import { PORTFOLIO_CONFIG, SocialLinkConfig } from "@/utils/lib";

export function ContactFooter() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [overclockCount, setOverclockCount] = useState(0);
  const [easterEggQuote, setEasterEggQuote] = useState<string | null>(null);

  const quotes = PORTFOLIO_CONFIG.contactSection.easterEggQuotes;

  const triggerEasterEgg = () => {
    const nextIdx = overclockCount % quotes.length;
    setOverclockCount((prev) => prev + 1);
    setEasterEggQuote(quotes[nextIdx]);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getSocialIcon = (id: SocialLinkConfig["id"]) => {
    switch (id) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "email":
        return <Mail className="h-5 w-5" />;
      case "twitter":
      default:
        return <Twitter className="h-5 w-5" />;
    }
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-obsidian-950 pt-20 pb-14 lg:pt-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top Callout Banner */}
        <div className="mb-16 grid grid-cols-1 gap-10 border border-white/10 bg-obsidian-900/90 p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="mb-3 inline-flex items-center gap-2 border border-accent-lime/30 bg-accent-lime/10 px-3 py-1 font-mono text-xs font-semibold text-accent-lime">
              <span className="h-2 w-2 animate-ping rounded-full bg-accent-lime" />
              {PORTFOLIO_CONFIG.contactSection.sectionCode}
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {PORTFOLIO_CONFIG.contactSection.headingPrefix}{" "}
              <span className="text-accent-lime">
                {PORTFOLIO_CONFIG.contactSection.headingHighlight}
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              {PORTFOLIO_CONFIG.contactSection.description}
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 lg:col-span-4 lg:items-end">
            <motion.button
              type="button"
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.13 }}
              className="inline-flex w-full items-center justify-center gap-3 bg-accent-lime px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider text-obsidian-950 sm:w-auto"
            >
              {copiedEmail ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>COPIED: {PORTFOLIO_CONFIG.profile.email}</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>COPY: {PORTFOLIO_CONFIG.profile.email}</span>
                </>
              )}
            </motion.button>
            <span className="font-mono text-[11px] text-zinc-500">
              Hover social cards below for live telemetry easter-eggs ↓
            </span>
          </div>
        </div>

        {/* Social & Professional Links Grid */}
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO_CONFIG.contactSection.socialLinks.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.id === "email" ? undefined : "_blank"}
                rel={item.id === "email" ? undefined : "noreferrer"}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -4, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.14, ease: "easeOut" }}
                className="group relative flex flex-col justify-between border border-white/10 bg-obsidian-900/80 p-6 transition-colors duration-150 hover:border-accent-lime"
              >
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.94 }}
                      transition={{ duration: 0.12 }}
                      className="mb-4 border border-accent-lime/50 bg-obsidian-950 px-3 py-2"
                    >
                      <div className="flex items-center justify-between font-mono text-[10px] font-bold text-accent-lime">
                        <span>{item.easterEggPing}</span>
                        <span>200 OK</span>
                      </div>
                      <p className="mt-0.5 font-mono text-[11px] text-zinc-200">
                        {item.easterEggNote}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-obsidian-950 text-zinc-300 transition-colors duration-150 group-hover:border-accent-lime group-hover:text-accent-lime">
                    {getSocialIcon(item.id)}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-lime" />
                </div>

                <div className="mt-6">
                  <p className="font-display text-lg font-bold text-white">
                    {item.label}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-zinc-400 group-hover:text-zinc-200">
                    {item.handle}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Interactive Easter-Egg Console Bar */}
        <div className="mb-10 border border-white/10 bg-obsidian-900/60 p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="h-4 w-4 text-accent-indigo" />
              <span className="font-mono text-xs text-zinc-300">
                {easterEggQuote ??
                  PORTFOLIO_CONFIG.contactSection.easterEggDefaultPrompt}
              </span>
            </div>

            <motion.button
              type="button"
              onClick={triggerEasterEgg}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.12 }}
              className="inline-flex items-center gap-2 border border-accent-indigo/50 bg-accent-indigo/15 px-3.5 py-1.5 font-mono text-xs font-semibold text-indigo-200 hover:border-accent-lime hover:bg-accent-lime hover:text-obsidian-950"
            >
              <Zap className="h-3.5 w-3.5" />
              <span>
                {PORTFOLIO_CONFIG.contactSection.easterEggButtonLabel}{" "}
                {overclockCount > 0 ? `(${overclockCount}x)` : ""}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Bottom Copyright & Colophon */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 font-mono text-xs text-zinc-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {PORTFOLIO_CONFIG.profile.name}.
            Crafted with Next.js, Tailwind CSS &amp; Framer Motion.
          </p>
          <p className="text-zinc-400">
            {PORTFOLIO_CONFIG.contactSection.footerTagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
