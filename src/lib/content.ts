export type NavLink = { href: string; label: string };

export type SocialLink = {
  href: string;
  label: string;
  username: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  stack?: string[];
};

export type EducationEntry = {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  details?: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
  highlights: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
};

export const site = {
  name: "Alex Morgan",
  initials: "AM",
  headline: "Senior Software Engineer & Systems Designer",
  tagline:
    "I build resilient backend platforms and thoughtful product experiences. Currently focused on developer tooling, distributed systems, and the craft of well-engineered software.",
  location: "San Francisco, California",
  email: "hello@alexmorgan.dev",
  resumeHref: "/resume",
  yearsExperience: 9,
};

export const nav: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Writing" },
  { href: "/resume", label: "Résumé" },
  { href: "/#contact", label: "Contact" },
];

export const socials: SocialLink[] = [
  { href: "https://github.com/", label: "GitHub", username: "alexmorgan" },
  {
    href: "https://linkedin.com/in/",
    label: "LinkedIn",
    username: "alex-morgan",
  },
  { href: "https://twitter.com/", label: "Twitter", username: "@alexmorgan" },
  {
    href: "mailto:hello@alexmorgan.dev",
    label: "Email",
    username: "hello@alexmorgan.dev",
  },
];

export const aboutParagraphs: string[] = [
  "I'm a software engineer based in San Francisco with nearly a decade of experience designing and operating systems that need to be both elegant and durable. My work spans developer tooling, infrastructure, and product engineering — and I find the connective tissue between those layers to be where the most interesting problems live.",
  "I care deeply about craft. That means readable code, considered API design, honest documentation, and software that ages well. I've been fortunate to work alongside teams that share that conviction, and the work I'm proudest of has been quiet, foundational work that quietly improved the lives of every engineer downstream of it.",
  "Outside of work, I write occasionally about the practice of engineering, mentor early-career developers, and spend a fair amount of time in the woods.",
];

export const experience: ExperienceEntry[] = [
  {
    company: "Northwind Systems",
    role: "Senior Staff Engineer",
    location: "San Francisco, CA",
    startDate: "2023",
    endDate: "Present",
    summary:
      "Lead engineer on the developer platform team, responsible for the internal toolchain used by 600+ engineers across the company.",
    highlights: [
      "Designed and shipped a unified build orchestration layer that reduced average CI runtime from 23 minutes to 4 minutes across 80+ services.",
      "Authored the technical strategy for a multi-year migration to a service-mesh architecture, now adopted as the company-wide standard.",
      "Mentored a team of seven engineers; promoted three to senior level during my tenure.",
    ],
    stack: ["Go", "TypeScript", "Kubernetes", "PostgreSQL", "Bazel"],
  },
  {
    company: "Halcyon Labs",
    role: "Staff Software Engineer",
    location: "Remote",
    startDate: "2020",
    endDate: "2023",
    summary:
      "Founding engineer at a developer-tools startup; helped grow the engineering team from 4 to 35 and the product from prototype to Series B.",
    highlights: [
      "Designed the company's distributed task execution engine, processing roughly 12 million workflow runs per month at peak.",
      "Owned the public REST and gRPC APIs end-to-end — design, versioning, documentation, and SDK generation for four languages.",
      "Wrote the engineering interview rubric and conducted 200+ technical interviews during the hiring scale-up.",
    ],
    stack: ["Rust", "Python", "Postgres", "Redis", "Terraform"],
  },
  {
    company: "Ironwood Technology",
    role: "Software Engineer, Platform",
    location: "Seattle, WA",
    startDate: "2017",
    endDate: "2020",
    summary:
      "Worked on the data platform team supporting analytics workloads for a Fortune 500 retailer.",
    highlights: [
      "Built the streaming ingestion pipeline that backed the company's real-time inventory dashboard.",
      "Reduced cloud spend on the analytics warehouse by 41% through query optimization and storage-tier reorganization.",
      "Created the team's on-call runbook, which became the template adopted across the broader engineering org.",
    ],
    stack: ["Java", "Kafka", "Snowflake", "Airflow"],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "University of Washington",
    degree: "B.S.",
    field: "Computer Science",
    location: "Seattle, WA",
    startDate: "2013",
    endDate: "2017",
    details: [
      "Graduated with Honors. Concentration in Distributed Systems.",
      "Teaching assistant for CSE 451: Operating Systems (3 quarters).",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "Go", "Rust", "Python", "SQL", "Bash"],
  },
  {
    category: "Backend & Infrastructure",
    items: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Kubernetes",
      "Terraform",
      "AWS",
      "GCP",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Vite", "Storybook"],
  },
  {
    category: "Practices",
    items: [
      "Distributed Systems",
      "API Design",
      "Code Review",
      "Mentorship",
      "Technical Writing",
      "Incident Response",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "ledger-cli",
    title: "Ledger CLI",
    tagline:
      "A plain-text accounting tool for engineers who like the terminal.",
    description:
      "An opinionated double-entry accounting tool built around plain-text files, with reporting, forecasting, and an embedded query language. Used quietly by a few hundred people who care about owning their financial data.",
    year: "2024",
    role: "Designer & sole maintainer",
    stack: ["Rust", "SQLite", "TUI"],
    repo: "https://github.com/",
    href: "https://example.com/",
    featured: true,
    highlights: [
      "Custom query language with a hand-written recursive-descent parser.",
      "Imports from 30+ financial institutions via OFX, CSV, and a small plugin API.",
      "Has shipped 47 releases over two years with zero data-corruption bugs reported.",
    ],
  },
  {
    slug: "fieldnotes",
    title: "Fieldnotes",
    tagline: "A focused journaling app for engineers and researchers.",
    description:
      "A markdown-first journaling app with a small, deliberate feature set: daily prompts, structured notes, and full-text search. Designed to be the antidote to bloated note-taking apps.",
    year: "2023",
    role: "Designer & engineer",
    stack: ["TypeScript", "Next.js", "PostgreSQL"],
    href: "https://example.com/",
    featured: true,
    highlights: [
      "Designed an offline-first sync model with conflict-free replicated data types (CRDTs).",
      "Reached 8,000 active users in the first six months without paid acquisition.",
      "Featured in two newsletters and one print magazine.",
    ],
  },
  {
    slug: "harbor-router",
    title: "Harbor",
    tagline: "An HTTP router for Go with a careful, minimal API.",
    description:
      "A small, dependency-free HTTP router for Go that prioritizes readability of route tables and explicit middleware composition. Used in production by half a dozen companies that I know of.",
    year: "2022",
    role: "Maintainer",
    stack: ["Go"],
    repo: "https://github.com/",
    featured: true,
    highlights: [
      "Under 1,200 lines of code, including comments.",
      "Benchmarks comparable to the fastest routers in the Go ecosystem, with a more readable API.",
      "Stable v1 API since 2022 — no breaking changes shipped.",
    ],
  },
  {
    slug: "atlas-config",
    title: "Atlas Config",
    tagline: "Type-safe configuration loading for distributed services.",
    description:
      "A small library that handles the unglamorous parts of configuration loading — file parsing, environment overrides, validation, and secret resolution — so that each service doesn't have to.",
    year: "2022",
    role: "Author",
    stack: ["TypeScript", "Zod"],
    repo: "https://github.com/",
    highlights: [
      "Adopted internally across 40+ services at my previous company.",
      "Powers a small open-source ecosystem of validators and secret resolvers.",
    ],
  },
  {
    slug: "quietpost",
    title: "QuietPost",
    tagline: "A self-hosted micro-blogging platform.",
    description:
      "A minimalist self-hosted blogging platform designed for writers who want full ownership of their archive without the complexity of a CMS. Single-binary deploy, SQLite by default.",
    year: "2021",
    role: "Designer & engineer",
    stack: ["Go", "SQLite", "HTML"],
    repo: "https://github.com/",
    highlights: [
      "Single-binary deploy with embedded assets — no external dependencies.",
      "Powers a handful of personal blogs I admire, including this one.",
    ],
  },
  {
    slug: "tide",
    title: "Tide",
    tagline: "A weekend project: an ambient ocean-sounds menu bar app.",
    description:
      "A small macOS menu bar app that plays curated ambient ocean recordings. Built in a weekend as an exercise in macOS native development; quietly downloaded a few thousand times.",
    year: "2020",
    role: "Solo project",
    stack: ["Swift", "AppKit"],
    href: "https://example.com/",
    highlights: [
      "Built in a single weekend; shipped to a small audience the following Monday.",
      "Surprisingly enduring — still receives the occasional email of thanks.",
    ],
  },
];

export const posts: BlogPost[] = [
  {
    slug: "the-quiet-discipline-of-good-engineering",
    title: "The Quiet Discipline of Good Engineering",
    excerpt:
      "Some of the best engineering work I've witnessed has been almost invisible. A reflection on the kind of craft that doesn't trend on social media.",
    date: "2025-09-12",
    readingTime: "7 min read",
    tags: ["Craft", "Engineering Culture"],
  },
  {
    slug: "designing-apis-that-age-well",
    title: "Designing APIs That Age Well",
    excerpt:
      "Notes from a decade of API design — what I've learned about versioning, naming, and the long-running cost of small mistakes.",
    date: "2025-06-04",
    readingTime: "11 min read",
    tags: ["API Design", "Software Architecture"],
  },
  {
    slug: "on-mentorship",
    title: "On Mentorship",
    excerpt:
      "What I've come to believe about mentoring early-career engineers, after seven years of getting it wrong in interesting ways.",
    date: "2025-02-18",
    readingTime: "6 min read",
    tags: ["Mentorship", "Career"],
  },
];
