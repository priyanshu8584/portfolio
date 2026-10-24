import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility helper to merge Tailwind CSS classes cleanly
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Helper to read environment variables with a fallback default
 */
const env = (key: string, fallback: string): string => {
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key] as string;
  }
  return fallback;
};

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface DossierStat {
  label: string;
  value: string;
  subtext: string;
  iconType: "activity" | "cpu" | "layers" | "database";
}

export interface MetricItem {
  id: string;
  figure: string;
  suffix?: string;
  label: string;
  description: string;
  tag: string;
  statusText: string;
  accent: "lime" | "indigo" | "cyan";
}

export interface SkillItem {
  name: string;
  level: string;
  context: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface ProjectTelemetry {
  metric: string;
  value: string;
  delta: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  name: string;
  codename: string;
  tagline: string;
  status: string;
  scaleBadge: string;
  imageUrl?: string;
  dashboardImageUrl?: string;
  description: string;
  highlights: string[];
  techTags: string[];
  telemetry: ProjectTelemetry[];
  architectureSummary: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface SocialLinkConfig {
  id: "github" | "linkedin" | "email" | "twitter";
  label: string;
  handle: string;
  href: string;
  easterEggPing: string;
  easterEggNote: string;
}

// ============================================================================
// MASTER PORTFOLIO CONFIGURATION (EDIT EVERYTHING HERE OR VIA .env.local)
// ============================================================================

export const PORTFOLIO_CONFIG = {
  // 1. SEO & PAGE METADATA
  seo: {
    title: env(
      "NEXT_PUBLIC_SEO_TITLE",
      "Priyanshu Singh — Full-Stack & Distributed Systems Engineer"
    ),
    description: env(
      "NEXT_PUBLIC_SEO_DESCRIPTION",
      "Portfolio of Priyanshu Singh — Full-Stack & Distributed Systems Engineer building TradeCopier.org (5,000+ active traders), MightyGo, and high-concurrency systems with Redis, Node.js, ASP.NET Web API, WebSockets, Prisma, TypeScript, and Next.js."
    ),
  },

  // 2. NAVBAR & BRANDING
  navbar: {
    version: env("NEXT_PUBLIC_VERSION", "v2.5"),
    brandSubtitle: env(
      "NEXT_PUBLIC_BRAND_SUBTITLE",
      "SYS.ENG // REDIS • NODE • ASP.NET • NEXT.JS"
    ),
    ctaLabel: env("NEXT_PUBLIC_NAV_CTA", "WORK"),
    ctaHref: "#projects",
    navItems: [
      { label: "01 // Metrics", href: "#metrics" },
      { label: "02 // Architecture", href: "#skills" },
      { label: "03 // Projects", href: "#projects" },
      { label: "04 // Connect", href: "#contact" },
    ] satisfies NavItem[],
  },

  // 3. PERSONAL PROFILE & HERO SECTION
  profile: {
    name: env("NEXT_PUBLIC_NAME", "Priyanshu Singh"),
    handle: env("NEXT_PUBLIC_HANDLE", "priyanshusingh.dev"),
    role: env(
      "NEXT_PUBLIC_ROLE",
      "Full-Stack & Distributed Systems Engineer"
    ),
    titleBadge: env(
      "NEXT_PUBLIC_TITLE_BADGE",
      "CREATOR OF TRADECOPIER.ORG // REAL-TIME FINANCIAL & MARKETPLACE SYSTEMS"
    ),
    location: env("NEXT_PUBLIC_LOCATION", "Kolkata, India // UTC+5:30"),
    avatarUrl: env("NEXT_PUBLIC_AVATAR_URL", "/profile.png"),
    avatarId: env("NEXT_PUBLIC_AVATAR_ID", "PS-1024X"),
    avatarSubtitle: env(
      "NEXT_PUBLIC_AVATAR_SUBTITLE",
      "Redis • Node.js • ASP.NET Web API • Next.js"
    ),
    availability: env(
      "NEXT_PUBLIC_AVAILABILITY",
      "Available for Software Engineer & Full-Stack Roles"
    ),
    latencyTarget: env("NEXT_PUBLIC_LATENCY_TARGET", "<50ms"),

    headline: {
      line1: env("NEXT_PUBLIC_HERO_LINE_1", "ARCHITECTING"),
      line2: env("NEXT_PUBLIC_HERO_LINE_2", "REAL-TIME"),
      line3: env("NEXT_PUBLIC_HERO_LINE_3", "SYSTEMS AT SCALE."),
    },
    subheadline: env(
      "NEXT_PUBLIC_HERO_SUBHEADLINE",
      "I engineer high-throughput financial execution platforms, sub-200ms reactive marketplaces, and ultra-snappy React/Next.js interfaces. Built and scaled TradeCopier.org to 5,000+ active traders across 8+ broker platforms alongside real-time systems powered by Redis, Node.js, ASP.NET Web API, WebSockets, and Prisma."
    ),

    ctaPrimary: {
      text: env("NEXT_PUBLIC_CTA_PRIMARY_TEXT", "View My Work"),
      href: "#projects",
    },
    ctaSecondary: {
      text: env("NEXT_PUBLIC_CTA_SECONDARY_TEXT", "Let's Connect"),
      href: "#contact",
    },

    // Quick-scan stack pills shown in Hero
    heroStackPills: [
      "Redis Queues & Pub/Sub",
      "RabbitMQ",
      "Node.js",
      "ASP.NET Core Web API",
      "WebSockets",
      "Prisma ORM",
      "PostgreSQL",
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js 15",
      "Docker",
    ],

    // 4 Mini Telemetry cards below portrait in Hero
    dossierStats: [
      {
        label: "FLAGSHIP SCALE",
        value: "5,000+ Users",
        subtext: "TradeCopier.org Cloud",
        iconType: "activity",
      },
      {
        label: "CORE BACKEND",
        value: "Node + ASP.NET",
        subtext: "Web API • WebSockets",
        iconType: "cpu",
      },
      {
        label: "QUEUE / CACHE",
        value: "Redis Streams",
        subtext: "Sub-Second Order Sync",
        iconType: "layers",
      },
      {
        label: "PERSISTENCE",
        value: "Prisma + PG",
        subtext: "PostgreSQL • Convex",
        iconType: "database",
      },
    ] satisfies DossierStat[],

    // Direct Contact & Social URLs
    email: env("NEXT_PUBLIC_EMAIL", "singh.priyanshu.1024@gmail.com"),
    phone: env("NEXT_PUBLIC_PHONE", "+91-8584921928"),
    github: env("NEXT_PUBLIC_GITHUB_URL", "https://github.com/priyanshu8584"),
    githubHandle: env("NEXT_PUBLIC_GITHUB_HANDLE", "@priyanshu8584"),
    linkedin: env(
      "NEXT_PUBLIC_LINKEDIN_URL",
      "https://www.linkedin.com/in/priyanshu-singh-8a7652258"
    ),
    linkedinHandle: env(
      "NEXT_PUBLIC_LINKEDIN_HANDLE",
      "/in/priyanshu-singh-8a7652258"
    ),
    twitter: env("NEXT_PUBLIC_TWITTER_URL", "https://x.com/1024Priyanshu"),
    twitterHandle: env("NEXT_PUBLIC_TWITTER_HANDLE", "@1024Priyanshu"),
    resumeUrl: env("NEXT_PUBLIC_RESUME_URL", "/resume.pdf"),
  },

  // 4. METRICS SHOWCASE SECTION (The Hook)
  metricsSection: {
    sectionCode: "01 // VERIFIED IMPACT & TELEMETRY",
    heading: "Built for Production Scale.",
    subheading:
      "Real-world engineering benchmarks delivered across cloud Forex copy-trading infrastructure (tradecopier.org) and real-time multi-vendor marketplaces.",
  },
  metrics: [
    {
      id: "experience",
      figure: env("NEXT_PUBLIC_METRIC_1_FIGURE", "10+"),
      suffix: env("NEXT_PUBLIC_METRIC_1_SUFFIX", "MOS"),
      label: env(
        "NEXT_PUBLIC_METRIC_1_LABEL",
        "10+ Months of Professional Experience"
      ),
      description: env(
        "NEXT_PUBLIC_METRIC_1_DESC",
        "Shipping mission-critical production trading modules at YoForex (TradeCopier.org, FxTrusts, Yopips), owning REST/WebSocket integrations, SEO/Core Web Vitals, and backend pipelines."
      ),
      tag: "PRODUCTION TENURE",
      statusText: "STATUS: YOFOREX // PROD",
      accent: "indigo",
    },
    {
      id: "scale",
      figure: env("NEXT_PUBLIC_METRIC_2_FIGURE", "5,000+"),
      suffix: env("NEXT_PUBLIC_METRIC_2_SUFFIX", "USERS"),
      label: env(
        "NEXT_PUBLIC_METRIC_2_LABEL",
        "Scaled Forex Tradecopier Product to 5,000+ Active Users"
      ),
      description: env(
        "NEXT_PUBLIC_METRIC_2_DESC",
        "Engineered cloud-hosted trade routing across 8 trading platforms (MT4, MT5, cTrader, NinjaTrader 8, DXtrade, TradeLocker, MatchTrader, VertexFX) with zero personal VPS required."
      ),
      tag: "LIVE CONCURRENCY",
      statusText: "STATUS: TRADECOPIER.ORG",
      accent: "lime",
    },
    {
      id: "throughput",
      figure: env("NEXT_PUBLIC_METRIC_3_FIGURE", "<50"),
      suffix: env("NEXT_PUBLIC_METRIC_3_SUFFIX", "MS P99"),
      label: env(
        "NEXT_PUBLIC_METRIC_3_LABEL",
        "Executed Real-Time High-Throughput Financial Transaction Syncing"
      ),
      description: env(
        "NEXT_PUBLIC_METRIC_3_DESC",
        "Built deterministic Redis queue consumers, WebSocket multiplexers, symbol mapping (GOLD -> XAUUSD), and equity protection guards for sub-second order replication."
      ),
      tag: "TRANSACTION ENGINE",
      statusText: "STATUS: SUB-SECOND SYNC",
      accent: "cyan",
    },
  ] satisfies MetricItem[],

  // 5. SKILLS ARCHITECTURE SECTION
  skillsSection: {
    sectionCode: "02 // TECHNICAL STACK & ARCHITECTURE",
    heading: "Skills Architecture.",
    subheading:
      "Hover over any technology node below to inspect how I deploy it across TradeCopier.org, MightyGo, and production backend services.",
  },
  skillsArchitecture: [
    {
      id: "frontend",
      code: "SYS // 01",
      title: "Frontend Ecosystem",
      subtitle: "Zero-jank reactive UIs, state orchestration & design systems",
      skills: [
        {
          name: "React.js",
          level: "Production Core",
          context:
            "High-frequency live trading dashboards, custom hooks & memoized render trees across TradeCopier & Yopips",
          highlight: true,
        },
        {
          name: "Next.js 15",
          level: "App Router / SSR",
          context:
            "Server Actions, streaming layouts, Core Web Vitals optimization & SEO architecture",
          highlight: true,
        },
        {
          name: "TypeScript",
          level: "Strict Mode",
          context:
            "End-to-end type safety across broker API contracts, WebSockets & state stores",
          highlight: true,
        },
        {
          name: "JavaScript (ES6+)",
          level: "Core Runtime",
          context:
            "Asynchronous event loops, binary array buffers & high-speed DOM/WebSocket client engines",
          highlight: true,
        },
        {
          name: "Tailwind CSS",
          level: "Design Systems",
          context:
            "Custom industrial design tokens, responsive layouts & 40%+ component reusability with shadcn/ui",
        },
        {
          name: "Framer Motion",
          level: "60fps Motion",
          context:
            "Hardware-accelerated layout orchestration, spring physics & sub-200ms micro-interactions",
        },
        {
          name: "Redux Toolkit",
          level: "State Sync",
          context:
            "Normalized client caches & real-time WebSocket tick state reconciliation",
        },
        {
          name: "shadcn/ui",
          level: "Component Arch",
          context:
            "Accessible, composable UI primitives deployed across FxTrusts & MightyGo",
        },
      ],
    },
    {
      id: "backend",
      code: "SYS // 02",
      title: "Backend & Systems",
      subtitle:
        "High-throughput APIs, distributed queues & relational persistence",
      skills: [
        {
          name: "Redis",
          level: "Queues & Pub/Sub",
          context:
            "High-throughput trade signal queues, Pub/Sub fan-out, rate limiting & sub-millisecond caching",
          highlight: true,
        },
        {
          name: "RabbitMQ",
          level: "Message Broker",
          context:
            "AMQP message routing, dead-letter exchanges, durable worker queues & decoupled microservice event buses",
          highlight: true,
        },
        {
          name: "Node.js",
          level: "Event-Driven",
          context:
            "Non-blocking I/O microservices, worker pools & real-time WebSocket gateways",
          highlight: true,
        },
        {
          name: "ASP.NET Core Web API",
          level: "High-Performance",
          context:
            "Enterprise RESTful microservices, strongly-typed controllers, DI pipelines & background workers",
          highlight: true,
        },
        {
          name: "WebSockets",
          level: "Bi-Directional",
          context:
            "Persistent connection pooling, live order replication & sub-second trade telemetry streaming",
          highlight: true,
        },
        {
          name: "Prisma ORM",
          level: "Type-Safe Data",
          context:
            "Optimized query batching, connection pooling & schema migrations for high-write ledgers",
          highlight: true,
        },
        {
          name: "PostgreSQL",
          level: "ACID & Indexing",
          context:
            "Composite B-Tree indexing, transactional integrity & high-volume financial activity logs",
          highlight: true,
        },
        {
          name: "Express.js",
          level: "API Gateway",
          context:
            "Rate-limited REST APIs, JWT authentication middleware & payment webhook ingestion",
        },
        {
          name: "Convex & MongoDB",
          level: "Reactive / NoSQL",
          context:
            "Sub-200ms reactive state synchronization for MightyGo & Ticketr marketplaces",
        },
      ],
    },
    {
      id: "devops",
      code: "SYS // 03",
      title: "DevOps, Auth & Payments",
      subtitle:
        "Cloud deployments, multi-party payment gateways & security",
      skills: [
        {
          name: "Docker",
          level: "Containerized",
          context:
            "Multi-stage builds, isolated trade-router containers & reproducible deployments",
          highlight: true,
        },
        {
          name: "AWS (EC2 / S3)",
          level: "Cloud Infra",
          context:
            "Compute instance provisioning, reverse-proxy tuning & cloud asset delivery",
          highlight: true,
        },
        {
          name: "Stripe Connect & Razorpay",
          level: "Fintech Gateways",
          context:
            "Automated multi-vendor split payouts, webhook signature verification & instant checkout",
          highlight: true,
        },
        {
          name: "Clerk & JWT Auth",
          level: "Identity & RBAC",
          context:
            "Role-based vendor/customer access control, session security & OAuth flows",
        },
        {
          name: "Git & CI/CD Pipelines",
          level: "Zero-Downtime",
          context:
            "Automated builds, branch deployments, Postman API testing & version control",
        },
      ],
    },
    {
      id: "domain",
      code: "SYS // 04",
      title: "Domain Expertise",
      subtitle: "Mission-critical engineering under real-world concurrency",
      skills: [
        {
          name: "Real-Time Data Streaming",
          level: "Sub-Second Sync",
          context:
            "Master-to-follower order fan-out, heartbeat multiplexing & live tick streaming",
          highlight: true,
        },
        {
          name: "High-Concurrency Systems",
          level: "5,000+ Active Users",
          context:
            "Backpressure handling, up to 20 groups / 60 accounts per trader & lock-free patterns",
          highlight: true,
        },
        {
          name: "Financial App Architecture",
          level: "8+ Broker Platforms",
          context:
            "MT4, MT5, cTrader, NinjaTrader 8, DXtrade, TradeLocker, MatchTrader & VertexFX routing",
          highlight: true,
        },
        {
          name: "Data Structures & Algorithms",
          level: "300+ Solved",
          context:
            "CodeVita Season 13 Qualifier, 1200+ CodeChef & 300+ LeetCode/CodeChef problems solved",
        },
      ],
    },
  ] satisfies SkillCategory[],

  // 6. PROJECTS SHOWCASE SECTION (With Live Extracted Landing Page Details & Screenshots)
  projectsSection: {
    sectionCode: "03 // PRODUCTION SYSTEMS & LIVE DEPLOYMENTS",
    heading: "Engineered & Shipped to Production.",
    subheading:
      "Every project below is live in production. Hover to inspect real-time telemetry, click any screenshot to zoom, or expand the execution topology.",
  },
  projects: [
    {
      id: "tradecopier",
      index: "01",
      name: env("NEXT_PUBLIC_PROJECT_1_NAME", "TradeCopier.org"),
      codename: env(
        "NEXT_PUBLIC_PROJECT_1_CODENAME",
        "CLOUD FOREX TRADECOPIER // TRADECOPiER.ORG"
      ),
      tagline: env(
        "NEXT_PUBLIC_PROJECT_1_TAGLINE",
        "Free & Pro Cloud Trade Copier for MT4, MT5, cTrader, NinjaTrader 8 & More — Scaled to 5,000+ Active Users"
      ),
      status: env(
        "NEXT_PUBLIC_PROJECT_1_STATUS",
        "LIVE IN PRODUCTION // 5,000+ ACTIVE USERS"
      ),
      scaleBadge: "5,000+ Concurrent Users",
      imageUrl: env(
        "NEXT_PUBLIC_PROJECT_1_IMAGE",
        "/screenshots/tradecopier.png"
      ),
      dashboardImageUrl: env(
        "NEXT_PUBLIC_PROJECT_1_DASHBOARD_IMAGE",
        "/screenshots/tradecopier-dashboard.webp"
      ),
      description: env(
        "NEXT_PUBLIC_PROJECT_1_DESCRIPTION",
        "A high-performance, cloud-hosted Forex and prop-firm trade copying platform (tradecopier.org) engineered to scale. Built to replicate trading signals from source (master) accounts to connected destination (follower) accounts across 8 major trading platforms (MetaTrader 4, MetaTrader 5, cTrader, NinjaTrader 8, DXtrade, TradeLocker, MatchTrader, and VertexFX) with sub-second latency — scaling to over 5,000 concurrent active users without requiring a personal VPS."
      ),
      highlights: [
        "Engineered a high-throughput transaction pipeline using Redis queues and REST/WebSocket gateways to process concurrent financial trade signals instantly across MT4, MT5, cTrader, NinjaTrader 8, DXtrade, TradeLocker, MatchTrader, and VertexFX.",
        "Implemented real-time connection pooling, cloud trade routing (no personal VPS required), symbol mapping (e.g., GOLD -> XAUUSD), lot multipliers, equity protection thresholds, and drawdown limits.",
        "Optimized database indexing and query architecture via Prisma and PostgreSQL to handle heavy read/write trade activity logs, multi-group routing (up to 20 groups & 60 trading accounts on Pro Plus), and live telemetry without degradation.",
      ],
      techTags: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Node.js",
        "ASP.NET Web API",
        "Redis",
        "WebSockets",
        "Prisma ORM",
        "PostgreSQL",
        "Docker",
      ],
      telemetry: [
        { metric: "ACTIVE TRADERS", value: "5,000+", delta: "LIVE SCALE" },
        { metric: "PLATFORMS", value: "8 BROKERS", delta: "MT4/MT5/cTRADER" },
        { metric: "MAX CAPACITY", value: "60 ACCTS", delta: "20 GROUPS / USER" },
        { metric: "SIGNAL FAN-OUT", value: "< 42ms", delta: "CLOUD ROUTER" },
      ],
      architectureSummary:
        "Source Account (MT4/MT5/cTrader/NT8) -> Redis Queue & Symbol Mapper -> Cloud Trade Router (Equity & Risk Guard) -> Pooled WebSocket Broadcaster -> Follower Accounts + PostgreSQL Activity Log.",
      liveUrl: env("NEXT_PUBLIC_PROJECT_1_LIVE_URL", "https://tradecopier.org"),
      repoUrl: env(
        "NEXT_PUBLIC_PROJECT_1_REPO_URL",
        "https://github.com/priyanshu8584"
      ),
      featured: true,
    },
    {
      id: "mightygo",
      index: "02",
      name: env("NEXT_PUBLIC_PROJECT_2_NAME", "MightyGo"),
      codename: env(
        "NEXT_PUBLIC_PROJECT_2_CODENAME",
        "REAL-TIME SERVICE MARKETPLACE // MIGHTY-GO.VERCEL.APP"
      ),
      tagline: env(
        "NEXT_PUBLIC_PROJECT_2_TAGLINE",
        "Revolutionizing Local Services — Connecting Customers With Trusted Local Experts in Real Time"
      ),
      status: env(
        "NEXT_PUBLIC_PROJECT_2_STATUS",
        "LIVE DEPLOYMENT // SUB-200MS SYNC"
      ),
      scaleBadge: "Sub-200ms Real-Time Sync",
      imageUrl: env(
        "NEXT_PUBLIC_PROJECT_2_IMAGE",
        "/screenshots/mightygo.png"
      ),
      dashboardImageUrl: env(
        "NEXT_PUBLIC_PROJECT_2_DASHBOARD_IMAGE",
        "/screenshots/mightygo-dashboard.webp"
      ),
      description: env(
        "NEXT_PUBLIC_PROJECT_2_DESCRIPTION",
        "A full-stack, real-time two-sided local service marketplace (mighty-go.vercel.app) connecting customers with verified local professionals. Engineered with dedicated customer service discovery ('Find Services Now') and vendor onboarding ('Become a Vendor') workflows, real-time booking synchronization, verified reviews, and secure Razorpay checkout."
      ),
      highlights: [
        "Built a full-stack marketplace with a multi-vendor dashboard, end-to-end booking workflows, verified professional badges, and dynamic service listings supporting concurrent users.",
        "Achieved sub-200ms real-time state synchronization using a reactive database architecture (Convex) and Next.js 15 App Router for instantaneous booking updates without manual page reloads.",
        "Integrated Razorpay payment gateway and Clerk authentication for secure multi-role transactions, order handling, customer review verification, and instant booking confirmations.",
      ],
      techTags: [
        "Next.js 15",
        "React.js",
        "TypeScript",
        "Convex Reactive DB",
        "Clerk Auth",
        "Razorpay",
        "Node.js",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      telemetry: [
        { metric: "STATE SYNC", value: "< 200ms", delta: "REACTIVE DB" },
        { metric: "WORKFLOWS", value: "2-SIDED", delta: "USER + VENDOR" },
        { metric: "CHECKOUT", value: "RAZORPAY", delta: "INSTANT ACK" },
        { metric: "UPTIME", value: "99.95%", delta: "VERCEL EDGE" },
      ],
      architectureSummary:
        "Customer / Vendor Client (Next.js 15) -> Clerk RBAC Auth Guard -> Convex Reactive State Engine (<200ms Sync) -> Razorpay Payment Webhook Pipeline -> Live Vendor Booking Dashboard.",
      liveUrl: env(
        "NEXT_PUBLIC_PROJECT_2_LIVE_URL",
        "https://mighty-go.vercel.app/"
      ),
      repoUrl: env(
        "NEXT_PUBLIC_PROJECT_2_REPO_URL",
        "https://github.com/priyanshu8584"
      ),
      featured: true,
    },
    {
      id: "ticketr",
      index: "03",
      name: "Ticketr",
      codename: "MULTI-VENDOR TICKETING & PAYOUT PLATFORM",
      tagline:
        "Real-Time Event Ticketing Marketplace With Automated Stripe Connect Multi-Party Payouts",
      status: "LIVE DEPLOYMENT",
      scaleBadge: "Stripe Connect + Real-Time Queue",
      imageUrl: "/screenshots/ticketr.png",
      description:
        "A multi-vendor event ticketing platform (ticket-book-three.vercel.app) with real-time ticket availability locking, waiting-list queue orchestration, automated vendor onboarding, and instant split payouts powered by Stripe Connect.",
      highlights: [
        "Developed a multi-vendor ticketing marketplace with automated payout distribution, event discovery search, and seamless vendor onboarding.",
        "Implemented Stripe Connect for multi-party split payments and webhook-verified transactional integrity under concurrent ticket checkouts.",
        "Engineered real-time booking workflows with live seat/ticket inventory locking to prevent double-booking during high-demand event drops.",
      ],
      techTags: [
        "Next.js",
        "TypeScript",
        "Convex",
        "Stripe Connect",
        "React.js",
        "Tailwind CSS",
      ],
      telemetry: [
        { metric: "PAYOUT ENGINE", value: "STRIPE", delta: "MULTI-PARTY" },
        { metric: "INVENTORY LOCK", value: "REAL-TIME", delta: "ZERO OVERSELL" },
        { metric: "SYNC LATENCY", value: "< 150ms", delta: "REACTIVE" },
        { metric: "STATUS", value: "LIVE", delta: "PRODUCTION" },
      ],
      architectureSummary:
        "Event Search & Queue -> Real-Time Ticket Inventory Lock -> Stripe Connect Multi-Party Checkout -> Webhook Settlement -> Vendor Payout Ledger.",
      liveUrl: "https://ticket-book-three.vercel.app/",
      repoUrl: "https://github.com/priyanshu8584",
      featured: false,
    },
    {
      id: "podcastr",
      index: "04",
      name: "Podcastr",
      codename: "AI PODCAST GENERATOR & STREAMING STUDIO",
      tagline:
        "LLM-Powered Long-Form Audio Synthesis, Multi-Voice TTS & Dynamic Streaming Player",
      status: "LIVE DEPLOYMENT",
      scaleBadge: "OpenAI LLM + TTS Pipeline",
      imageUrl: "/screenshots/podcastr.png",
      description:
        "An AI-powered podcast creation and streaming platform (podcasting-two.vercel.app) that generates structured long-form podcast episodes, cover artwork, and multi-voice audio using OpenAI LLM + Text-to-Speech pipelines.",
      highlights: [
        "Built an end-to-end AI audio pipeline that transforms user prompts into structured long-form podcast scripts and synthesized voice streams.",
        "Integrated real-time text-to-speech conversion, AI thumbnail generation, creator discovery feeds ('Trending Podcasts' & 'Top Podcastrs'), and a persistent audio playback UI.",
      ],
      techTags: [
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "React.js",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      telemetry: [
        { metric: "AUDIO ENGINE", value: "LLM + TTS", delta: "MULTI-VOICE" },
        { metric: "PLAYER UI", value: "60 FPS", delta: "PERSISTENT" },
        { metric: "TYPE SAFETY", value: "100%", delta: "TYPESCRIPT" },
        { metric: "STATUS", value: "LIVE", delta: "PRODUCTION" },
      ],
      architectureSummary:
        "Creator Prompt Input -> OpenAI Script & Voice Synthesis Pipeline -> Cloud Audio Storage -> Next.js Streaming Feed & Persistent Audio Player.",
      liveUrl: "https://podcasting-two.vercel.app/",
      repoUrl: "https://github.com/priyanshu8584",
      featured: false,
    },
  ] satisfies ProjectItem[],

  // 7. CONTACT & FOOTER SECTION (Social Links + Easter Eggs)
  contactSection: {
    sectionCode: "04 // INITIALIZE HANDSHAKE",
    headingPrefix: "Need an engineer who ships for",
    headingHighlight: "real-world concurrency?",
    description:
      "Whether you're scaling a high-frequency financial platform like TradeCopier.org, architecting a Redis + Node.js / ASP.NET Core Web API pipeline, or building a real-time marketplace like MightyGo — let's connect.",
    easterEggButtonLabel: "Ping Priyanshu's Trade Router",
    easterEggDefaultPrompt:
      "EASTER_EGG // Click 'Ping Priyanshu's Trade Router' to test the sub-millisecond Redis & WebSocket pipeline.",
    easterEggQuotes: [
      "⚡ BENCHMARK: 0.4ms Redis RTT — TradeCopier.org router synced across MT4, MT5 & cTrader.",
      "🚀 OVERCLOCK ENGAGED: 5,000+ concurrent trader nodes active with zero dropped ticks.",
      "🛡️ MIGHTYGO ENGINE: Sub-200ms reactive vendor-customer sync & instant Razorpay ACK.",
      "🔥 SIGNAL DISPATCHED: 300+ DSA problems solved & ready to architect your next flagship system.",
    ],
    footerTagline:
      "PRIYANSHU SINGH // ZERO AI CLICHÉS // 100% HARDWARE-ACCELERATED TRANSFORMS",
    socialLinks: [
      {
        id: "github",
        label: "GitHub",
        handle: env("NEXT_PUBLIC_GITHUB_HANDLE", "@priyanshu8584"),
        href: env(
          "NEXT_PUBLIC_GITHUB_URL",
          "https://github.com/priyanshu8584"
        ),
        easterEggPing: "GIT_ACK // 11ms",
        easterEggNote: "Production repos: TradeCopier, MightyGo, Ticketr ✨",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        handle: env(
          "NEXT_PUBLIC_LINKEDIN_HANDLE",
          "/in/priyanshu-singh-8a7652258"
        ),
        href: env(
          "NEXT_PUBLIC_LINKEDIN_URL",
          "https://www.linkedin.com/in/priyanshu-singh-8a7652258"
        ),
        easterEggPing: "SYN_ACK // 14ms",
        easterEggNote: "Software Engineer @ YoForex • Let's connect ⚡",
      },
      {
        id: "email",
        label: "Direct Email",
        handle: env("NEXT_PUBLIC_EMAIL", "singh.priyanshu.1024@gmail.com"),
        href: `mailto:${env(
          "NEXT_PUBLIC_EMAIL",
          "singh.priyanshu.1024@gmail.com"
        )}`,
        easterEggPing: "SMTP_TLS // 8ms",
        easterEggNote: "Direct inbox — fastest response (< 2 hrs) 🚀",
      },
      {
        id: "twitter",
        label: "X / Twitter",
        handle: env("NEXT_PUBLIC_TWITTER_HANDLE", "@1024Priyanshu"),
        href: env("NEXT_PUBLIC_TWITTER_URL", "https://x.com/1024Priyanshu"),
        easterEggPing: "WS_STREAM // 9ms",
        easterEggNote: "Building @1024Priyanshu • Redis, Next.js & .NET",
      },
    ] satisfies SocialLinkConfig[],
  },
};

export const PORTFOLIO_DATA = PORTFOLIO_CONFIG;
