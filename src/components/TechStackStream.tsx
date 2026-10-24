"use client";

import React from "react";

interface TechLogoItem {
  name: string;
  tag: string;
  color: string;
  svg: React.ReactNode;
}

const TECH_STACK_STREAM: TechLogoItem[] = [
  {
    name: "JavaScript",
    tag: "ES6+ RUNTIME",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path
          d="M12.5 17.6c0 1.8-1 2.7-2.6 2.7-1.4 0-2.2-.7-2.6-1.6l1.4-.8c.3.5.6.9 1.2.9.6 0 1-.3 1-1.2v-6.4h1.6v6.4zm5.7 2.7c-1.7 0-2.8-.8-3.3-1.9l1.4-.8c.4.7.9 1.2 1.9 1.2.8 0 1.3-.4 1.3-1 0-.7-.5-.9-1.4-1.3l-.5-.2c-1.4-.6-2.4-1.3-2.4-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.4.9c-.3-.6-.7-.8-1.3-.8-.6 0-1 .4-1 .9 0 .6.4.9 1.2 1.2l.5.2c1.7.7 2.6 1.4 2.6 3 0 1.7-1.3 2.5-3.1 2.5z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    tag: "STRICT TYPING",
    color: "#3178C6",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path
          d="M13.4 12.6H11V20H9.2v-7.4H6.8V11h6.6v1.6zm4.7 7.5c-1.6 0-2.8-.7-3.4-1.8l1.4-.9c.4.7 1 1.1 1.9 1.1.8 0 1.4-.4 1.4-1 0-.7-.5-.9-1.5-1.3l-.5-.2c-1.5-.6-2.4-1.4-2.4-2.8 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.4.9c-.3-.5-.7-.8-1.3-.8-.6 0-1 .4-1 .9 0 .6.4.8 1.3 1.2l.5.2c1.6.7 2.6 1.4 2.6 2.9 0 1.7-1.3 2.6-3.1 2.6z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "Redis",
    tag: "QUEUES & PUB/SUB",
    color: "#DC382D",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M12 3L3 7.5v3L12 15l9-4.5v-3L12 3z"
          fill="#DC382D"
        />
        <path
          d="M3 13l9 4.5 9-4.5v2.5L12 20l-9-4.5V13z"
          fill="#A41E11"
        />
        <path
          d="M3 16.5L12 21l9-4.5v2L12 23l-9-4.5v-2z"
          fill="#DC382D"
          opacity="0.8"
        />
        <circle cx="12" cy="8.5" r="1.5" fill="#FFFFFF" />
        <path d="M8.5 8.5l2 1-2 1v-2zm7 0l-2-1v2l2-1z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "React.js",
    tag: "UI ARCHITECTURE",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
        <ellipse
          cx="12"
          cy="12"
          rx="9.5"
          ry="3.8"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9.5"
          ry="3.8"
          transform="rotate(60 12 12)"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9.5"
          ry="3.8"
          transform="rotate(120 12 12)"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    tag: "DESIGN SYSTEM",
    color: "#38BDF8",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    tag: "60FPS PHYSICS",
    color: "#FF0055",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path d="M4 3h16v6h-8L4 3z" fill="#0055FF" />
        <path d="M4 9h8l8 6H4V9z" fill="#8800FF" />
        <path d="M4 15h8v6l-8-6z" fill="#FF0055" />
      </svg>
    ),
  },
  {
    name: "ASP.NET Core Web API",
    tag: "MICROSERVICES",
    color: "#512BD4",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <rect width="24" height="24" rx="4" fill="#512BD4" />
        <circle cx="5.2" cy="15.8" r="1.2" fill="#FFFFFF" />
        <path
          d="M8.2 16.8V8.4h1.6l3.4 5.6V8.4h1.5v8.4h-1.5L9.7 11v5.8H8.2zm8.3 0V8.4h5v1.4h-3.4v2h3.1v1.4h-3.1v2.2h3.5v1.4h-5.1z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "Docker",
    tag: "CONTAINERS",
    color: "#2496ED",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <rect x="4" y="10" width="2.5" height="2.5" fill="#2496ED" />
        <rect x="7" y="10" width="2.5" height="2.5" fill="#2496ED" />
        <rect x="10" y="10" width="2.5" height="2.5" fill="#2496ED" />
        <rect x="13" y="10" width="2.5" height="2.5" fill="#2496ED" />
        <rect x="7" y="7" width="2.5" height="2.5" fill="#2496ED" />
        <rect x="10" y="7" width="2.5" height="2.5" fill="#2496ED" />
        <rect x="13" y="7" width="2.5" height="2.5" fill="#2496ED" />
        <rect x="10" y="4" width="2.5" height="2.5" fill="#2496ED" />
        <path
          d="M21.5 12.2c-.6-.4-1.8-.5-2.6-.2-.2-1.1-.9-2-1.8-2.5l-.4-.2-.2.4c-.4.8-.5 2-.1 2.9-.4.2-1.1.4-2 .4H2.3c-.3 1.8.2 4.1 1.6 5.6 1.4 1.5 3.6 2.2 6.3 2.2 5.4 0 9.4-2.5 11.2-7 .8 0 2.2 0 2.9-1.2l.2-.3-.5-.1z"
          fill="#2496ED"
        />
      </svg>
    ),
  },
  {
    name: "RabbitMQ",
    tag: "MESSAGE BROKER",
    color: "#FF6600",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M18.5 10h-4V4.5A1.5 1.5 0 0013 3h-2a1.5 1.5 0 00-1.5 1.5V10h-1V4.5A1.5 1.5 0 007 3H5a1.5 1.5 0 00-1.5 1.5v15A1.5 1.5 0 005 21h13.5a2 2 0 002-2v-7a2 2 0 00-2-2zm-3 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
          fill="#FF6600"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    tag: "EVENT-DRIVEN I/O",
    color: "#5FA04E",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M12 2L3.5 6.9v10.2L12 22l8.5-4.9V6.9L12 2z"
          stroke="#5FA04E"
          strokeWidth="1.8"
          fill="#5FA04E"
          fillOpacity="0.18"
        />
        <path
          d="M9.5 15V9l5 6V9"
          stroke="#5FA04E"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Next.js 15",
    tag: "APP ROUTER / SSR",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FFFFFF" />
        <path
          d="M8.5 16V8l7.8 10.2M15.5 8v5.5"
          stroke="#060709"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "WebSockets",
    tag: "SUB-SECOND STREAM",
    color: "#CCFF00",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M4 9h13l-3.5-3.5M20 15H7l3.5 3.5"
          stroke="#CCFF00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Prisma ORM",
    tag: "TYPE-SAFE DATA",
    color: "#5A67D8",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M12.4 2.5L4.2 15.6c-.4.6-.1 1.4.5 1.7l7.5 4.2c.6.3 1.4.1 1.8-.5l5.8-9.2c.3-.5.3-1.1 0-1.6L14 2.6c-.4-.6-1.2-.6-1.6-.1zm1.1 4.1l4.1 5.9-4.5 7.2-5.1-2.8 5.5-10.3z"
          fill="#818CF8"
        />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    tag: "ACID LEDGER",
    color: "#336791",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <ellipse cx="12" cy="6" rx="7.5" ry="3" stroke="#60A5FA" strokeWidth="1.7" />
        <path
          d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6"
          stroke="#60A5FA"
          strokeWidth="1.7"
        />
        <path
          d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6"
          stroke="#60A5FA"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
];

export function TechStackStream() {
  // Duplicate array twice so translate3d(-50% -> 0%) creates a seamless infinite left-to-right stream
  const marqueeItems = [...TECH_STACK_STREAM, ...TECH_STACK_STREAM];

  return (
    <section
      aria-label="Core Technology Stack Stream"
      className="relative overflow-hidden border-b border-white/[0.08] bg-obsidian-950 py-7"
    >
      {/* Subtle Top/Bottom Edge Telemetry Label */}
      <div className="mx-auto mb-4 flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" />
          <span>LIVE PRODUCTION PIPELINE // TECH STACK STREAM</span>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-widest text-zinc-500 sm:inline">
          DIRECTION: L &rarr; R // HOVER TO INSPECT
        </span>
      </div>

      {/* Left & Right Edge Fade Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-obsidian-950 to-transparent sm:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-obsidian-950 to-transparent sm:w-36" />

      {/* Continuous Left-to-Right Moving Stream */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee-ltr flex items-center gap-4 px-2">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="group relative flex shrink-0 items-center gap-3.5 border border-white/10 bg-obsidian-900/80 px-5 py-3 transition-all duration-150 hover:-translate-y-0.5 hover:border-accent-lime/60 hover:bg-obsidian-900"
            >
              {/* Brand SVG Icon Container */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-obsidian-950 transition-transform duration-150 group-hover:scale-105">
                {tech.svg}
              </div>

              {/* Tech Name & Architectural Role Tag */}
              <div className="pr-1">
                <div className="font-display text-sm font-bold tracking-tight text-white transition-colors duration-150 group-hover:text-accent-lime">
                  {tech.name}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  {tech.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
