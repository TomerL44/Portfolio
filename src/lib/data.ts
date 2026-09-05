// ─── Personal Info ───────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Tomer Levy",
  title: "Software Engineering Student",
  headline: "Software Engineering student with solid backend and system-oriented foundations.",
  subheadline:
    "Experienced in C++, Java, and Python development, client-server architectures, and databases. Building robust software from cycle-accurate emulators to autonomous AI agents.",
  status: "Available for Software / Backend Student Roles",
  email: "tomerlevy0404@gmail.com",
  phone: "053-4242300",
  resumeUrl: "/resume.pdf",
};

// ─── Social Links ────────────────────────────────────────────────────────────

export const socialLinks = {
  github: "https://github.com/TomerL44?tab=repositories",
  githubProfile: "https://github.com/TomerL44",
  linkedin: "https://www.linkedin.com/in/tomer-levy-10050a237/",
  email: "mailto:tomerlevy0404@gmail.com",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// ─── Tech Stack ──────────────────────────────────────────────────────────────

export interface TechItem {
  name: string;
  icon?: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "C++" },
      { name: "Java" },
      { name: "Python" },
      { name: "C" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
    ],
  },
  {
    title: "Backend & Systems",
    items: [
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "Client-Server Architectures" },
      { name: "Sockets" },
      { name: "Multi-threading" },
      { name: "Linux" },
      { name: "Git & GitHub" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "Schema Design" },
      { name: "CRUD Operations" },
    ],
  },
  {
    title: "AI & Modern Frameworks",
    items: [
      { name: "LangGraph" },
      { name: "LangChain" },
      { name: "Qwen 2.5 / LLMs" },
      { name: "Streamlit" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Vite" },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techBadges: string[];
  githubUrl: string;
  liveUrl?: string;
  challenge: string;
  category: string;
}

export const projects: Project[] = [
  {
    title: "CHIP-8 Emulator Engine",
    description:
      "A complete, cycle-accurate retro console emulator written from scratch in modern C++20 with SDL2 graphics, sound, and input.",
    longDescription:
      "Designed and implemented a full virtual machine executing all 35 standard CHIP-8 opcodes, accurate COSMAC VIP hardware quirks, 600 Hz CPU clocking, a 64×32 framebuffer with customizable magnification, and 440 Hz square-wave audio synthesis via SDL2 callbacks.",
    techBadges: ["C++20", "SDL2", "CMake", "Low-Level Systems", "Bitwise Ops"],
    githubUrl: "https://github.com/TomerL44/chip8-emulator",
    challenge:
      "Implementing cycle-accurate instruction timing and COSMAC VIP hardware quirks while maintaining a smooth 60fps render loop decoupled from CPU cycle execution.",
    category: "Systems",
  },
  {
    title: "Autonomous Support Agent",
    description:
      "A stateful, autonomous customer support AI agent powered by Qwen 2.5 / LLM, LangGraph state machine, dynamic SQLite tools, and FastAPI.",
    longDescription:
      "Architected an autonomous customer support agent leveraging LangGraph and LangChain. Features an LLM-driven state machine for intent classification, guarded SQLite operations (order lookups, shipping updates, refund escalation), and a Streamlit chat interface showcasing real-time agent reasoning.",
    techBadges: ["Python", "LangGraph", "LangChain", "FastAPI", "SQLite", "Streamlit"],
    githubUrl: "https://github.com/TomerL44/AutonomousSupportAgent",
    challenge:
      "Eliminating hallucination through strict tool-first routing and engineering deterministic graph transitions with automated human escalation triggers for refunds over $50.",
    category: "AI",
  },
  {
    title: "AI Compare",
    description:
      "An interactive comparison and benchmarking platform for evaluating top AI models, coding assistants, and media tools with community tier rankings.",
    longDescription:
      "Built a modern full-stack web application for side-by-side evaluation of AI models, measuring response quality, capability benchmarks, and category-based leaderboards with responsive filtering.",
    techBadges: ["React", "TypeScript", "Vite", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/TomerL44/ai-compare",
    liveUrl: "https://ai-compare-five-beryl.vercel.app",
    challenge:
      "Designing a high-performance comparison matrix with multi-parameter filtering, dynamic benchmark score recalculations, and seamless responsive state handling across desktop and mobile.",
    category: "Full-Stack",
  },
  {
    title: "MineSqweeper",
    description:
      "A desktop implementation of the classic Minesweeper game engineered in Java with JavaFX GUI, custom board logic, and recursive cascade unmasking.",
    longDescription:
      "Engineered an interactive desktop Minesweeper application adhering to clean MVC architecture with FXML layouts. Features recursive zero-cell reveal algorithms, configurable board dimensions, custom mine generation, and interactive flag markers.",
    techBadges: ["Java", "JavaFX", "FXML", "MVC Architecture", "Algorithms"],
    githubUrl: "https://github.com/TomerL44/MineSqweeper",
    challenge:
      "Designing an optimal recursive flood-fill algorithm to unmask zero-adjacent mine regions instantaneously without causing UI thread freezes on high-density minefields.",
    category: "Desktop",
  },
  {
    title: "Green Zebra — Orchid Care System",
    description:
      "An AI and cloud-powered botanical monitoring platform combining IoT telemetry, Vision Transformers (ViT) for species classification, and a Gemini RAG pipeline.",
    longDescription:
      "Academic cloud computing project engineered collaboratively with 4 partners. Integrates live IoT sensor streaming (temperature, humidity, soil moisture) persisted to Firebase Firestore, an image classification pipeline utilizing Hugging Face Vision Transformers (ViT), and a TF-IDF retrieval-augmented generation (RAG) system with Google Gemini 2.5 Flash for grounded botanical advice.",
    techBadges: [
      "Python",
      "Gemini 2.5 Flash",
      "Vision Transformer",
      "Firebase Firestore",
      "RAG / TF-IDF",
      "IoT Telemetry",
      "Academic Team Project",
    ],
    githubUrl: "https://github.com/TomerL44/CloudCompEX",
    challenge:
      "Orchestrating disparate cloud and AI services—real-time IoT sensor ingestion, in-memory computer vision inference, and Firestore-indexed TF-IDF RAG—into a unified, responsive dashboard while coordinating across a 5-member engineering team.",
    category: "Cloud & AI",
  },
];

// ─── Timeline ────────────────────────────────────────────────────────────────

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "project" | "work";
  current?: boolean;
}

export const timelineEntries: TimelineEntry[] = [
  {
    year: "2024 — 2028 (Expected)",
    title: "B.Sc. in Software Engineering",
    subtitle: "Braude Academic College",
    description:
      "Relevant coursework: Object-Oriented Programming, Data Structures, Databases (SQL, MySQL, SQLite schema design & CRUD), Operating Systems, Algorithms.",
    type: "education",
    current: true,
  },
  {
    year: "2018 — 2021",
    title: "Computer Networks Manager",
    subtitle: "C4I Corps • Military Technological Service",
    description:
      "Managed and maintained critical computer networks and infrastructure in a high-responsibility environment. Performed proactive system monitoring, network performance optimization, and automation scripting. Completed an internal Java course.",
    type: "work",
  },
  {
    year: "2015 — 2018",
    title: "High School Diploma — Computers & Electronics",
    subtitle: "ORT Nahariya",
    description:
      "Specialized in Computers & Electronics, building strong foundational knowledge in digital systems and programming.",
    type: "education",
  },
];

// ─── Metrics ─────────────────────────────────────────────────────────────────

export const metrics = [
  { label: "Core Projects", value: 5, suffix: "" },
  { label: "Academic Year", value: 3, suffix: "rd" },
  { label: "Years Tech Service", value: 3, suffix: "" },
  { label: "Languages & Tools", value: 15, suffix: "+" },
];

// ─── Passions ────────────────────────────────────────────────────────────────

export const passions = [
  "Low-level Systems & Emulators",
  "Agentic AI & LangGraph",
  "Backend & Client-Server Systems",
  "Algorithms & Data Structures",
  "Modern Full-Stack Development",
];

// ─── Terminal Commands ───────────────────────────────────────────────────────

export const terminalCommands: Record<string, string> = {
  help: `Available commands:
  help      — Show this help message
  about     — Learn about Tomer Levy
  skills    — View technical skills
  projects  — Browse featured projects
  contact   — Get contact info
  clear     — Clear the terminal`,

  about: `
  Hey! I'm Tomer Levy — a Software Engineering student at Braude Academic
  College with solid backend and system-oriented foundations.
  Experienced in C++, Java, and Python development, client-server
  architectures, and databases. Former Computer Networks Manager in C4I Corps.
  Seeking a Software / Backend Engineer Student role.`,

  skills: `
  Languages    → C++, Java, Python, C, JavaScript, TypeScript, SQL
  Web & Systems→ FastAPI, REST APIs, Client-Server, React, Next.js, Vite
  Databases    → SQL, MySQL, SQLite (Schema design, CRUD)
  Tools & OS   → Git, GitHub, Linux, VS Code, CMake, SDL2, AntiGravity, Claude Code
  AI           → LangGraph, LangChain, Qwen 2.5 / LLMs, Streamlit`,

  projects: `
  [1] CHIP-8 Emulator Engine    — C++20 / SDL2 / Systems Programming
      → https://github.com/TomerL44/chip8-emulator
  [2] Autonomous Support Agent  — Python / LangGraph / FastAPI / SQLite
      → https://github.com/TomerL44/AutonomousSupportAgent
  [3] AI Compare                — React / TypeScript / Vite / Tailwind
      → https://github.com/TomerL44/ai-compare (Live: https://ai-compare-five-beryl.vercel.app)
  [4] MineSqweeper              — Java / JavaFX / MVC / Algorithms
      → https://github.com/TomerL44/MineSqweeper
  [5] Green Zebra (CloudCompEX) — Python / Gemini 2.5 Flash / Vision Transformer / IoT
      → https://github.com/TomerL44/CloudCompEX (Academic Team Project)`,

  contact: `
  Email     → tomerlevy0404@gmail.com
  GitHub    → https://github.com/TomerL44?tab=repositories
  LinkedIn  → https://www.linkedin.com/in/tomer-levy-10050a237/
  Phone     → 053-4242300

  Feel free to reach out directly or download my resume above!`,
};
