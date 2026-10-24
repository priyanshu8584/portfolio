"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  ExternalLink,
  Eye,
  GitBranch,
  Globe,
  Layers,
  Maximize2,
  Radio,
  X,
} from "lucide-react";
import { PORTFOLIO_CONFIG, ProjectItem } from "@/utils/lib";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenLightbox: (project: ProjectItem, imageIndex: number) => void;
}

function getProjectScreenshots(project: ProjectItem) {
  return [
    ...(project.imageUrl
      ? [{ url: project.imageUrl, label: "LANDING PAGE" }]
      : []),
    ...(project.dashboardImageUrl
      ? [{ url: project.dashboardImageUrl, label: "DASHBOARD" }]
      : []),
  ];
}

function ProjectCard({ project, onOpenLightbox }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isExpanded, setIsExpanded] = useState(Boolean(project.featured));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const screenshots = getProjectScreenshots(project);
  const selectedScreenshot = screenshots[selectedImageIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden border bg-obsidian-900/90 transition-colors duration-150 ${
        project.featured
          ? "border-accent-lime/40 hover:border-accent-lime lg:col-span-12"
          : "border-white/10 hover:border-accent-indigo/70 lg:col-span-6"
      }`}
    >
      {/* Hardware-Accelerated Mouse-Follow Spotlight & Telemetry Reveal Layer */}
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${cursorPos.x - 200}px, ${
            cursorPos.y - 200
          }px, 0)`,
          opacity: isHovering ? 1 : 0,
        }}
        className="pointer-events-none absolute left-0 top-0 z-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(204,255,0,0.09)_0%,rgba(99,102,241,0.05)_45%,transparent_70%)] transition-opacity duration-150"
      />

      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
        {/* Top Meta Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <span className="border border-white/15 bg-obsidian-950 px-2.5 py-1 font-mono text-xs font-bold text-accent-lime">
              PRJ // {project.index}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              {project.codename}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 border border-accent-lime/30 bg-accent-lime/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-accent-lime">
              <Radio className="h-3 w-3 animate-pulse" />
              {project.status}
            </span>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-accent-lime px-3 py-1 font-mono text-xs font-bold text-obsidian-950 transition-transform duration-150 ease-out hover:-translate-y-0.5"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>LIVE SITE</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div
          className={`grid grid-cols-1 gap-8 ${
            project.featured ? "lg:grid-cols-12" : ""
          }`}
        >
          {/* Left Column: Project Details & Highlights */}
          <div className={project.featured ? "lg:col-span-7" : ""}>
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                {project.name}
              </h3>
              {project.featured && (
                <span className="border border-indigo-500/40 bg-indigo-500/15 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                  FLAGSHIP PRODUCTION
                </span>
              )}
            </div>

            <p className="mb-4 font-mono text-xs font-medium text-accent-cyan">
              {project.tagline}
            </p>

            <p className="mb-6 text-sm leading-relaxed text-zinc-300 sm:text-base">
              {project.description}
            </p>

            {/* Bulleted Architectural Highlights */}
            <div className="mb-6 space-y-3 border-l-2 border-accent-indigo/50 pl-4">
              {project.highlights.map((bullet, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-lime" />
                  <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.techTags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 bg-obsidian-950 px-3 py-1 font-mono text-xs font-medium text-zinc-200 transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:border-accent-lime hover:text-accent-lime"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Live Landing Page Screenshot + Interactive Telemetry Matrix */}
          <div
            className={`flex flex-col justify-between gap-4 ${
              project.featured ? "lg:col-span-5" : "mt-2"
            }`}
          >
            {/* Browser Viewport Frame with Live Landing Page Screenshot */}
            {selectedScreenshot && (
              <div className="overflow-hidden border border-white/15 bg-obsidian-950 shadow-2xl">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-obsidian-900 px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500/70" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="truncate px-2 font-mono text-[10px] text-zinc-400 hover:text-accent-lime"
                  >
                    {project.liveUrl?.replace(/^https?:\/\//, "")}
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox(project, selectedImageIndex)
                    }
                    className="inline-flex items-center gap-1 font-mono text-[10px] text-accent-lime hover:underline"
                    title="Expand full screenshot"
                  >
                    <Maximize2 className="h-3 w-3" />
                    <span>EXPAND</span>
                  </button>
                </div>

                {/* Screenshot Image */}
                <div
                  onClick={() =>
                    onOpenLightbox(project, selectedImageIndex)
                  }
                  className="group/img relative cursor-pointer overflow-hidden bg-obsidian-950"
                >
                  <img
                    src={selectedScreenshot.url}
                    alt={`${project.name} ${selectedScreenshot.label.toLowerCase()} screenshot`}
                    className="h-52 w-full object-cover object-top transition-transform duration-200 ease-out group-hover/img:scale-[1.03] sm:h-60"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-150 group-hover/img:opacity-100">
                    <span className="border border-accent-lime/50 bg-obsidian-950/90 px-2.5 py-1 font-mono text-[10px] font-bold text-accent-lime">
                      CLICK TO INSPECT FULL SCREENSHOT
                    </span>
                  </div>
                </div>
                {screenshots.length > 1 && (
                  <div
                    aria-label={`${project.name} screenshots`}
                    className="flex border-t border-white/10"
                  >
                    {screenshots.map((screenshot, index) => (
                      <button
                        key={screenshot.label}
                        type="button"
                        aria-pressed={selectedImageIndex === index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`flex-1 px-3 py-2 font-mono text-[10px] font-bold tracking-wider transition-colors ${
                          selectedImageIndex === index
                            ? "bg-accent-lime/10 text-accent-lime"
                            : "text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-200"
                        }`}
                      >
                        {screenshot.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 2x2 Telemetry Counters */}
            <div className="border border-white/10 bg-obsidian-950/90 p-4">
              <div className="mb-3 flex items-center justify-between border-b border-white/[0.07] pb-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                  <Eye className="h-3.5 w-3.5 text-accent-lime" />
                  LIVE TELEMETRY MATRIX
                </span>
                <span className="font-mono text-[10px] text-accent-lime">
                  {isHovering ? "CURSOR_LOCKED" : "PROD_METRICS"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {project.telemetry.map((t) => (
                  <div
                    key={t.metric}
                    className="border border-white/[0.07] bg-obsidian-900/90 p-3 transition-transform duration-150 group-hover:border-white/15"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-zinc-500">
                        {t.metric}
                      </span>
                      <span className="font-mono text-[9px] text-accent-cyan">
                        {t.delta}
                      </span>
                    </div>
                    <p className="mt-1 font-display text-lg font-extrabold text-white sm:text-xl">
                      {t.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-3">
                <button
                  type="button"
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="inline-flex items-center gap-2 border border-accent-indigo/40 bg-accent-indigo/10 px-3 py-1.5 font-mono text-xs font-semibold text-indigo-200 transition-colors duration-150 hover:border-accent-lime hover:bg-accent-lime hover:text-obsidian-950"
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>
                    {isExpanded ? "Hide Architecture" : "Inspect Architecture"}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronDown className="h-3.5 w-3.5" />
                  )}
                </button>

                <div className="flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs font-bold text-accent-lime hover:underline"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>VISIT LIVE</span>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400 transition-colors duration-150 hover:text-white"
                    >
                      <GitBranch className="h-3.5 w-3.5" />
                      <span>GITHUB</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable System Architecture Blueprint Drawer */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="mt-6 border border-accent-lime/30 bg-obsidian-950 p-5"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-accent-lime">
                  <Cpu className="h-4 w-4" />
                  EXECUTION PIPELINE TOPOLOGY // {project.name.toUpperCase()}
                </span>
                <span className="font-mono text-[11px] text-zinc-400">
                  ZERO-BOTTLENECK STREAMING
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-5">
                {project.architectureSummary.split(" -> ").map((stage, idx) => (
                  <div
                    key={idx}
                    className="relative border border-white/10 bg-obsidian-900 p-3"
                  >
                    <span className="font-mono text-[10px] font-bold text-accent-indigo">
                      STAGE 0{idx + 1}
                    </span>
                    <p className="mt-1 font-mono text-xs font-semibold text-white">
                      {stage}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export function ProjectsShowcase() {
  const [lightboxSelection, setLightboxSelection] = useState<{
    project: ProjectItem;
    imageIndex: number;
  } | null>(null);
  const lightboxScreenshots = lightboxSelection
    ? getProjectScreenshots(lightboxSelection.project)
    : [];
  const lightboxScreenshot = lightboxSelection
    ? lightboxScreenshots[lightboxSelection.imageIndex] ??
      lightboxScreenshots[0]
    : undefined;

  return (
    <section
      id="projects"
      className="relative border-b border-white/[0.08] bg-obsidian-950 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-lime">
              <span>{PORTFOLIO_CONFIG.projectsSection.sectionCode}</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {PORTFOLIO_CONFIG.projectsSection.heading}
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs leading-relaxed text-zinc-400">
            {PORTFOLIO_CONFIG.projectsSection.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {PORTFOLIO_CONFIG.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenLightbox={(p, imageIndex) =>
                setLightboxSelection({ project: p, imageIndex })
              }
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Screenshot Lightbox Modal */}
      <AnimatePresence>
        {lightboxSelection && lightboxScreenshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setLightboxSelection(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian-950/90 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden border border-accent-lime/50 bg-obsidian-900 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-obsidian-950 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-bold text-white">
                    {lightboxSelection.project.name}
                  </span>
                  <span className="font-mono text-xs text-accent-lime">
                    {lightboxScreenshot.label}
                  </span>
                  <span className="font-mono text-xs text-accent-lime">
                    {lightboxSelection.project.liveUrl}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {lightboxSelection.project.liveUrl && (
                    <a
                      href={lightboxSelection.project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 bg-accent-lime px-3 py-1 font-mono text-xs font-bold text-obsidian-950"
                    >
                      <span>OPEN LIVE URL</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setLightboxSelection(null)}
                    className="border border-white/15 bg-obsidian-900 p-1.5 text-zinc-300 hover:border-accent-lime hover:text-accent-lime"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="max-h-[80vh] overflow-y-auto bg-obsidian-950 p-2">
                <img
                  src={lightboxScreenshot.url}
                  alt={`${lightboxSelection.project.name} ${lightboxScreenshot.label.toLowerCase()} screenshot`}
                  className="w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
