"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, CloudCog, Cpu, TerminalSquare } from "lucide-react";
import { PORTFOLIO_CONFIG, SkillItem } from "@/utils/lib";

export function SkillsArchitecture() {
  const [activeSkill, setActiveSkill] = useState<{
    category: string;
    skill: SkillItem;
  }>({
    category: PORTFOLIO_CONFIG.skillsArchitecture[1].title,
    skill: PORTFOLIO_CONFIG.skillsArchitecture[1].skills[0],
  });

  const [hoveredSkillName, setHoveredSkillName] = useState<string | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Code2 className="h-4 w-4 text-accent-indigo" />;
      case "backend":
        return <Server className="h-4 w-4 text-accent-lime" />;
      case "devops":
        return <CloudCog className="h-4 w-4 text-accent-cyan" />;
      case "domain":
      default:
        return <Cpu className="h-4 w-4 text-accent-lime" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative border-b border-white/[0.08] bg-obsidian-950 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header + Live Inspector Bar */}
        <div className="mb-12 grid grid-cols-1 gap-6 border-b border-white/[0.08] pb-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-indigo">
              <span>{PORTFOLIO_CONFIG.skillsSection.sectionCode}</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {PORTFOLIO_CONFIG.skillsSection.heading}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-400">
              {PORTFOLIO_CONFIG.skillsSection.subheading}
            </p>
          </div>

          {/* Live Telemetry Tooltip / Inspector Readout */}
          <div className="lg:col-span-5">
            <div className="border border-accent-indigo/30 bg-obsidian-900/95 p-4">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-lime">
                  <TerminalSquare className="h-3.5 w-3.5" />
                  NODE INSPECTOR // {activeSkill.category.toUpperCase()}
                </span>
                <span className="border border-white/10 bg-obsidian-950 px-2 py-0.5 font-mono text-[10px] text-zinc-300">
                  {activeSkill.skill.level}
                </span>
              </div>
              <p className="font-display text-base font-bold text-white">
                {activeSkill.skill.name}
              </p>
              <p className="mt-1 font-mono text-xs leading-relaxed text-zinc-300">
                {activeSkill.skill.context}
              </p>
            </div>
          </div>
        </div>

        {/* 2x2 Architectural Category Matrix */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PORTFOLIO_CONFIG.skillsArchitecture.map((group) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between border border-white/10 bg-obsidian-900/75 p-6 transition-colors duration-150 hover:border-white/25 sm:p-8"
            >
              <div>
                <div className="mb-6 flex items-start justify-between border-b border-white/[0.07] pb-4">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                      {group.code}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">
                      {group.subtitle}
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center border border-white/10 bg-obsidian-950">
                    {getCategoryIcon(group.id)}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const isHovered = hoveredSkillName === skill.name;
                    return (
                      <div key={skill.name} className="relative">
                        <motion.button
                          type="button"
                          onMouseEnter={() => {
                            setHoveredSkillName(skill.name);
                            setActiveSkill({
                              category: group.title,
                              skill,
                            });
                          }}
                          onMouseLeave={() => setHoveredSkillName(null)}
                          onFocus={() => {
                            setHoveredSkillName(skill.name);
                            setActiveSkill({
                              category: group.title,
                              skill,
                            });
                          }}
                          onBlur={() => setHoveredSkillName(null)}
                          whileHover={{ scale: 1.04, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.12, ease: "easeOut" }}
                          className={`group relative flex items-center gap-2 border px-3.5 py-2 text-left transition-colors duration-150 focus:outline-none ${
                            isHovered
                              ? "border-accent-lime bg-accent-lime text-obsidian-950"
                              : skill.highlight
                              ? "border-white/20 bg-obsidian-950 text-white hover:border-accent-lime"
                              : "border-white/10 bg-obsidian-950/70 text-zinc-300 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full transition-colors duration-150 ${
                              isHovered
                                ? "bg-obsidian-950"
                                : skill.highlight
                                ? "bg-accent-lime"
                                : "bg-accent-indigo"
                            }`}
                          />
                          <span className="font-mono text-xs font-semibold">
                            {skill.name}
                          </span>
                          <span
                            className={`font-mono text-[10px] ${
                              isHovered ? "text-obsidian-900" : "text-zinc-500"
                            }`}
                          >
                            [{skill.level}]
                          </span>
                        </motion.button>

                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 6, scale: 0.96 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 4, scale: 0.96 }}
                              transition={{ duration: 0.12 }}
                              className="pointer-events-none absolute bottom-full left-0 z-30 mb-2 w-64 border border-accent-lime/50 bg-obsidian-950 p-3 shadow-2xl"
                            >
                              <div className="mb-1 flex items-center justify-between font-mono text-[10px] text-accent-lime">
                                <span>{skill.name.toUpperCase()}</span>
                                <span>{skill.level}</span>
                              </div>
                              <p className="font-sans text-xs leading-snug text-zinc-200">
                                {skill.context}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[10px] text-zinc-500">
                <span>NODES: {group.skills.length} ACTIVE</span>
                <span>PROD_VERIFIED // TRUE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
