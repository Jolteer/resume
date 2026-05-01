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
  name: "Joshua Day",
  initials: "JD",
  headline: "Software Engineer",
  tagline:
    "Cross-platform mobile and web developer building full-stack applications with Flutter, React, and Python. Recent Applied Software Engineering graduate from Northern Kentucky University.",
  location: "Newport, Kentucky",
  email: "Joshua.day30@gmail.com",
  resumeHref: "/resume",
  yearsExperience: 4,
};

export const nav: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Résumé" },
  { href: "/#contact", label: "Contact" },
];

export const socials: SocialLink[] = [
  {
    href: "https://github.com/Jolteer",
    label: "GitHub",
    username: "Jolteer",
  },
  {
    href: "https://www.linkedin.com/in/joshuamday7/",
    label: "LinkedIn",
    username: "joshuamday7",
  },
  {
    href: "mailto:Joshua.day30@gmail.com",
    label: "Email",
    username: "Joshua.day30@gmail.com",
  },
];

export const aboutParagraphs: string[] = [
  "I'm a software engineer based in Newport, Kentucky, with a B.S. in Applied Software Engineering and a minor in Information Security from Northern Kentucky University. I focus on building cross-platform applications — mobile, web, and desktop — that pair clean front-end experiences with thoughtful, well-tested backends.",
  "My recent work spans Flutter mobile apps, React/Electron desktop apps, and FastAPI services backed by PostgreSQL. I'm particularly drawn to projects that combine product polish with non-trivial backend work, like my capstone — a finance app that uses machine-learning categorization to help users build better spending habits.",
  "Outside of building software, I spent three years working at Kroger Pharmacy, where I learned the kind of attention-to-detail and calm-under-pressure that translates surprisingly well into shipping production code.",
];

export const experience: ExperienceEntry[] = [
  {
    company: "Kroger Pharmacy",
    role: "Pharmacy Technician",
    location: "Northern Kentucky",
    startDate: "2023",
    endDate: "Present",
    summary:
      "Three years filling prescriptions and supporting pharmacists in a high-volume retail pharmacy while completing my Applied Software Engineering degree.",
    highlights: [
      "Maintained accuracy in a fast-paced environment where small mistakes have real consequences for patient safety.",
      "Built rapport with hundreds of repeat customers, balancing speed of service with careful, individual attention.",
      "Learned to work calmly under sustained pressure — a skill that has translated directly into incident-response and debugging discipline in software work.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "Northern Kentucky University",
    degree: "B.S.",
    field: "Applied Software Engineering, Minor in Information Security",
    location: "Highland Heights, KY",
    startDate: "2022",
    endDate: "2026",
    details: [
      "Capstone (ASE 485): SmartSpend — a cross-platform Flutter + FastAPI personal-finance app with ML-based transaction categorization, budget generation, and savings recommendations.",
      "Coursework spanning full-stack development, software architecture, secure coding, networking, and information security.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "Dart",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      "React",
      "Redux",
      "Flutter",
      "Next.js",
      "Electron",
      "Vite",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & Data",
    items: [
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "SQLite",
      "REST APIs",
      "JWT Authentication",
      "Pydantic",
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      "Git & GitHub",
      "Docker & Docker Compose",
      "Information Security",
      "scikit-learn (TF-IDF / Naive Bayes)",
      "Unit & Integration Testing",
      "Agile / Sprint Workflow",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "smartspend",
    title: "SmartSpend",
    tagline:
      "AI-powered personal finance assistant. Cross-platform Flutter app with a FastAPI backend and ML-driven budgeting.",
    description:
      "My senior capstone (ASE 485). A cross-platform mobile/web app that helps people with poor spending habits build better financial behaviors. Users log transactions, the ML pipeline auto-categorizes them, and the system generates personalized budgets and savings recommendations from their actual spending history.",
    year: "2026",
    role: "Solo developer (frontend, backend, ML, infra)",
    stack: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "scikit-learn",
      "Docker",
      "JWT",
    ],
    repo: "https://github.com/Jolteer/ase485-capstone-finance-ml",
    featured: true,
    highlights: [
      "11-screen Flutter app with 6-provider state architecture, Material 3 light/dark theming, and persistent JWT-based auth via secure storage.",
      "FastAPI backend with 18 endpoints across auth, transactions, budgets, goals, and ML — fully containerized with Docker Compose (API + PostgreSQL + pgAdmin).",
      "ML layer using a TF-IDF + Naive Bayes pipeline for transaction categorization across 8 categories, plus rules-based budget generation and savings recommendations.",
      "Layered backend architecture (repositories → services → schemas) and a comprehensive test suite covering models, providers, services, and ML.",
    ],
  },
  {
    slug: "chatgpt-clone",
    title: "ChatGPT Clone",
    tagline:
      "A cross-platform desktop and web AI chat client built on the OpenAI Chat Completions API.",
    description:
      "An individual project for ASE 285. A React + Redux Toolkit chat application that runs as both a web app and a packaged Electron desktop app. Users can manage multiple persistent conversations, search within a chat, rename and delete individual conversations, and switch between dark and light themes.",
    year: "2025",
    role: "Sole developer",
    stack: [
      "React 18",
      "Redux Toolkit",
      "Vite",
      "Electron",
      "OpenAI API",
      "JavaScript",
    ],
    repo: "https://github.com/Jolteer/ASE285_Individual",
    featured: true,
    highlights: [
      "Shipped 8 features / 25 requirements across two sprints, all backed by 40 passing unit, integration, regression, and acceptance tests.",
      "Secure OpenAI key handling via Electron preload IPC bridge or Vite environment variables, with conversation state persisted to localStorage.",
      "Packaged for Windows, macOS, and Linux via electron-builder with a responsive UI that adapts down to mobile widths.",
    ],
  },
  {
    slug: "calendar",
    title: "Calendar App",
    tagline: "An ADHD-friendly calendar with monthly and weekly views.",
    description:
      "A modern calendar application designed around clarity and quick capture, with both monthly grid and weekly column views. Events are color-coded, persist locally in the browser, and the whole interface is keyboard-accessible. Backed by an optional FastAPI service.",
    year: "2025",
    role: "Designer & engineer",
    stack: ["JavaScript", "HTML", "CSS", "Bootstrap 5", "Python", "FastAPI"],
    repo: "https://github.com/Jolteer/Calendar",
    featured: true,
    highlights: [
      "Dual view modes (monthly grid + weekly columns) with a single shared event store.",
      "Class-based ES6+ architecture, CSS-variable theming, and full keyboard navigation with focus indicators.",
      "Standalone frontend that works with zero build step, plus an optional FastAPI backend for persistence.",
    ],
  },
  {
    slug: "trip-planner",
    title: "Trip Planner",
    tagline:
      "A personal trip-organization app that tracks every part of a trip in one place.",
    description:
      "A web app that helps travelers plan and track all aspects of a trip — flights, hotels, other bookings, day-by-day itinerary, budget, and a packing checklist — with everything auto-saved to local storage so a trip survives a refresh.",
    year: "2025",
    role: "Solo developer",
    stack: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
    repo: "https://github.com/Jolteer/Trip_Planner",
    highlights: [
      "Single-page dashboard pulling together flights, hotels, itinerary, and budget into one live overview.",
      "Vanilla JS with browser localStorage persistence — no backend dependency, deployable as static files.",
    ],
  },
];

export const posts: BlogPost[] = [];
