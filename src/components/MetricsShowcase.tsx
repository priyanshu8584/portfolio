"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_CONFIG, MetricItem } from "@/utils/lib";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function MetricsShowcase() {
  const getIcon = (id: string) => {
    switch (id) {
      case "experience":
        return <TrendingUp className="h-4 w-4 text-accent-indigo" />;
      case "scale":
        return <Users className="h-4 w-4 text-accent-lime" />;
      case "throughput":
      default:
        return <Zap className="h-4 w-4 text-accent-cyan" />;
    }
  };

  const getAccentBorder = (accent: MetricItem["accent"]) => {
    switch (accent) {
      case "lime":
        return "hover:border-accent-lime/70";
      case "cyan":
        return "hover:border-accent-cyan/70";
      case "indigo":
      default:
        return "hover:border-accent-indigo/70";
    }
  };

  const getAccentBadge = (accent: MetricItem["accent"]) => {
    switch (accent) {
      case "lime":
        return "border-accent-lime/30 bg-accent-lime/10 text-accent-lime";
      case "cyan":
        return "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan";
      case "indigo":
      default:
        return "border-accent-indigo/30 bg-accent-indigo/10 text-indigo-300";
    }
  };

  return (
    <section
      id="metrics"
      className="relative border-b border-white/[0.08] bg-obsidian-950 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-6 md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-lime">
              <span>{PORTFOLIO_CONFIG.metricsSection.sectionCode}</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {PORTFOLIO_CONFIG.metricsSection.heading}
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs leading-relaxed text-zinc-400">
            {PORTFOLIO_CONFIG.metricsSection.subheading}
          </p>
        </div>

        {/* 3-Column Architectural Metric Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {PORTFOLIO_CONFIG.metrics.map((item, idx) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.14, ease: "easeOut" }}
              className={`group relative flex flex-col justify-between border border-white/10 bg-obsidian-900/90 p-7 transition-colors duration-150 ${getAccentBorder(
                item.accent
              )}`}
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className={`border px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider ${getAccentBadge(
                      item.accent
                    )}`}
                  >
                    0{idx + 1} // {item.tag}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center border border-white/10 bg-obsidian-950 transition-transform duration-150 group-hover:scale-110">
                    {getIcon(item.id)}
                  </div>
                </div>

                <div className="mb-4 flex items-baseline gap-2.5">
                  <span className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                    {item.figure}
                  </span>
                  {item.suffix && (
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
                      {item.suffix}
                    </span>
                  )}
                </div>

                <h3 className="mb-3 font-display text-xl font-bold leading-snug text-white transition-colors duration-150 group-hover:text-accent-lime">
                  {item.label}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 border-t border-white/[0.07] pt-4">
                <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500">
                  <span>{item.statusText}</span>
                  <span className="inline-flex items-center gap-1 text-zinc-300 group-hover:text-white">
                    BENCHMARK
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
