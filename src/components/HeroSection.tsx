"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Activity,
  Cpu,
  Database,
  Layers,
} from "lucide-react";
import { PORTFOLIO_CONFIG, DossierStat } from "@/utils/lib";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

const lineRevealVariants = {
  hidden: { opacity: 1, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 260, damping: 28, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 260, damping: 28, mass: 0.5 });

  const cardRotateX = useTransform(smoothY, [-250, 250], [4, -4]);
  const cardRotateY = useTransform(smoothX, [-250, 250], [-4, 4]);
  const badgeShiftX = useTransform(smoothX, [-250, 250], [-8, 8]);
  const badgeShiftY = useTransform(smoothY, [-250, 250], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const relX = e.clientX - centerX;
    const relY = e.clientY - centerY;

    mouseX.set(relX);
    mouseY.set(relY);
    setCoords({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    });
  };

  const headlineWords = [
    { text: PORTFOLIO_CONFIG.profile.headline.line1, accent: false },
    { text: PORTFOLIO_CONFIG.profile.headline.line2, accent: true },
    { text: PORTFOLIO_CONFIG.profile.headline.line3, accent: false },
  ];

  const getDossierIcon = (type: DossierStat["iconType"]) => {
    switch (type) {
      case "activity":
        return <Activity className="h-3.5 w-3.5 text-accent-lime" />;
      case "cpu":
        return <Cpu className="h-3.5 w-3.5 text-accent-indigo" />;
      case "layers":
        return <Layers className="h-3.5 w-3.5 text-accent-cyan" />;
      case "database":
      default:
        return <Database className="h-3.5 w-3.5 text-accent-lime" />;
    }
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringHero(true)}
      onMouseLeave={() => {
        setIsHoveringHero(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative overflow-hidden border-b border-white/[0.08] bg-obsidian-950 pt-10 pb-20 lg:pt-16 lg:pb-28"
    >
      {/* Architectural Swiss Grid Hairlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]"
      />

      {/* Hardware-accelerated mouse-proximity reticle */}
      <motion.div
        aria-hidden="true"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isHoveringHero ? 1 : 0,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -ml-32 -mt-32 h-64 w-64 rounded-full border border-accent-indigo/20 bg-accent-indigo/[0.04] transition-opacity duration-200"
      >
        <div className="absolute left-1/2 top-0 h-3 w-[1px] -translate-x-1/2 bg-accent-lime/50" />
        <div className="absolute bottom-0 left-1/2 h-3 w-[1px] -translate-x-1/2 bg-accent-lime/50" />
        <div className="absolute left-0 top-1/2 h-[1px] w-3 -translate-y-1/2 bg-accent-lime/50" />
        <div className="absolute right-0 top-1/2 h-[1px] w-3 -translate-y-1/2 bg-accent-lime/50" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top Engineering Telemetry Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 border border-accent-lime/30 bg-accent-lime/10 px-2.5 py-1 font-mono text-[11px] font-medium text-accent-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" />
              {PORTFOLIO_CONFIG.profile.availability.toUpperCase()}
            </span>
            <span className="hidden font-mono text-xs text-zinc-500 sm:inline-block">
              // {PORTFOLIO_CONFIG.profile.titleBadge}
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-zinc-500">
            <span>
              PROXIMITY_XY:{" "}
              <strong className="text-zinc-300">
                {String(coords.x).padStart(4, "0")}px,{" "}
                {String(coords.y).padStart(4, "0")}px
              </strong>
            </span>
            <span className="hidden text-accent-indigo md:inline">
              [LATENCY_TARGET: {PORTFOLIO_CONFIG.profile.latencyTarget}]
            </span>
          </div>
        </div>

        {/* Main Hero Split Layout */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left 7 Columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div
              variants={lineRevealVariants}
              className="mb-5 inline-flex items-center gap-2.5 border border-white/10 bg-obsidian-900/90 px-3.5 py-1.5"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                ENGINEER:
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                {PORTFOLIO_CONFIG.profile.name}
              </span>
              <span className="text-zinc-600">/</span>
              <span className="font-mono text-xs text-accent-cyan">
                {PORTFOLIO_CONFIG.profile.role}
              </span>
            </motion.div>

            {/* Bold Split Headline */}
            <div className="space-y-1">
              {headlineWords.map((line, idx) => (
                <div key={idx} className="overflow-hidden py-0.5">
                  <motion.h1
                    variants={lineRevealVariants}
                    className={`font-display text-4xl font-extrabold tracking-tight sm:text-6xl xl:text-[4.25rem] xl:leading-[1.03] ${
                      line.accent ? "text-accent-lime" : "text-white"
                    }`}
                  >
                    {line.text}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Subheadline */}
            <motion.p
              variants={lineRevealVariants}
              className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg"
            >
              Hi, I&apos;m{" "}
              <span className="font-semibold text-white underline decoration-accent-indigo decoration-2 underline-offset-4">
                {PORTFOLIO_CONFIG.profile.name}
              </span>
              . {PORTFOLIO_CONFIG.profile.subheadline}
            </motion.p>

            {/* Core Stack Quick-Scan Pills */}
            <motion.div
              variants={lineRevealVariants}
              className="mt-6 flex flex-wrap gap-2"
            >
              {PORTFOLIO_CONFIG.profile.heroStackPills.map((tech) => (
                <span
                  key={tech}
                  className="border border-white/10 bg-obsidian-900/80 px-2.5 py-1 font-mono text-xs text-zinc-300 transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:border-accent-indigo hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              variants={lineRevealVariants}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href={PORTFOLIO_CONFIG.profile.ctaPrimary.href}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.14 }}
                className="group inline-flex items-center gap-3 bg-accent-lime px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-wider text-obsidian-950"
              >
                <span>{PORTFOLIO_CONFIG.profile.ctaPrimary.text}</span>
                <ArrowDownRight className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </motion.a>

              <motion.a
                href={PORTFOLIO_CONFIG.profile.ctaSecondary.href}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.14 }}
                className="group inline-flex items-center gap-3 border border-white/20 bg-obsidian-900 px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-150 hover:border-accent-indigo hover:bg-accent-indigo/10"
              >
                <span>{PORTFOLIO_CONFIG.profile.ctaSecondary.text}</span>
                <ArrowUpRight className="h-4 w-4 text-accent-indigo transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right 5 Columns: Engineer Dossier & Editable Avatar */}
          <motion.div
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              rotateX: cardRotateX,
              rotateY: cardRotateY,
              transformPerspective: 1000,
            }}
            className="lg:col-span-5"
          >
            <div className="relative border border-white/15 bg-obsidian-900/95 p-5 shadow-2xl">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-accent-indigo" />
                  <span className="font-mono text-xs font-bold tracking-wider text-white">
                    DOSSIER // {PORTFOLIO_CONFIG.profile.name.toUpperCase()}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-accent-lime">
                  [ID: {PORTFOLIO_CONFIG.profile.avatarId}]
                </span>
              </div>

              {/* Editable Avatar Frame */}
              <div className="group relative overflow-hidden border border-white/10 bg-obsidian-950">
                <img
                  src={PORTFOLIO_CONFIG.profile.avatarUrl}
                  alt={`${PORTFOLIO_CONFIG.profile.name} portrait`}
                  className="block h-auto max-h-[32rem] w-full object-contain object-center"
                />

                <motion.div
                  style={{ x: badgeShiftX, y: badgeShiftY }}
                  className="absolute bottom-3 left-3 right-3 flex items-center justify-between border border-white/15 bg-obsidian-950/90 px-3 py-2 backdrop-blur-md"
                >
                  <div>
                    <p className="font-display text-sm font-bold text-white">
                      {PORTFOLIO_CONFIG.profile.name}
                    </p>
                    <p className="font-mono text-[11px] text-zinc-400">
                      {PORTFOLIO_CONFIG.profile.avatarSubtitle}
                    </p>
                  </div>
                  <span className="border border-accent-lime/40 bg-accent-lime/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-accent-lime">
                    {PORTFOLIO_CONFIG.profile.location}
                  </span>
                </motion.div>

                <div className="pointer-events-none absolute right-3 top-3 border border-white/15 bg-obsidian-950/90 px-2.5 py-1 font-mono text-[10px] text-zinc-300 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                  Edit in <code className="text-accent-lime">src/utils/lib.ts</code>
                </div>
              </div>

              {/* Live Engineering Architecture Readout */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {PORTFOLIO_CONFIG.profile.dossierStats.map((stat, i) => (
                  <div
                    key={i}
                    className="border border-white/[0.08] bg-obsidian-950 p-3"
                  >
                    <div className="flex items-center justify-between text-zinc-400">
                      <span className="font-mono text-[10px] uppercase">
                        {stat.label}
                      </span>
                      {getDossierIcon(stat.iconType)}
                    </div>
                    <p className="mt-1 font-display text-lg font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="font-mono text-[10px] text-zinc-500">
                      {stat.subtext}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
