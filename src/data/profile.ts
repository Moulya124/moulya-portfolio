export interface NavItem {
  label: string;
  href: string;
}

export interface TechnologyHighlight {
  name: string;
  category: "backend" | "ai" | "qa" | "lang" | "tool";
}

export interface InterconnectedPillar {
  id: string;
  title: string;
  role: string;
  summary: string;
  technologies: string[];
}

export interface AboutCapability {
  index: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface EngineeringPrinciple {
  index: string;
  title: string;
  description: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface ExperienceSnippet {
  role: string;
  company: string;
  period: string;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  specialization: string;
  location: string;
  technicalLabel: string;
  descriptor: string;
  description: string;
  aboutHeading: string;
  aboutParagraph: string[];
  education: EducationInfo;
  currentRole: ExperienceSnippet;
  previousRole: ExperienceSnippet;
  links: {
    linkedin: string;
    github: string;
    email: string;
  };
  navItems: NavItem[];
  technologies: TechnologyHighlight[];
  pillars: InterconnectedPillar[];
  aboutCapabilities: AboutCapability[];
  engineeringPrinciples: EngineeringPrinciple[];
}

export const PROFILE: DeveloperProfile = {
  name: "Moulya M Prasad",
  title: "Software Engineer",
  specialization: "Backend, AI & QA Automation",
  location: "Bengaluru",
  technicalLabel: "SOFTWARE ENGINEER // BENGALURU",
  descriptor: "Software Engineer // Backend · AI · QA",
  description:
    "Software Engineer building robust backend systems, AI/LLM workflows, REST APIs, and automated testing solutions with engineering rigor.",

  aboutHeading: "Building software with engineering depth.",
  aboutParagraph: [
    "I am a Software Engineer based in Manglore working across backend systems, AI/LLM agent workflows, and automated testing solutions.",
    "My core work focuses on building robust REST APIs with Python and Django, orchestrating multi-step LLM workflows using LangChain and LangGraph, and managing session state with Redis. I also have experience developing computer vision classification pipelines using YOLOv11 and Ultralytics.",
    "Committed to software quality, I author automated Pytest regression suites, validate API contracts with Swagger, and systematically debug performance bottlenecks across codebases—maintaining end-to-end ownership from architecture to deployment.",
  ],

  education: {
    degree: "B.E. in Information Science & Engineering",
    institution: "Adichunchanagiri Institute of Technology, Chikkamagaluru",
    year: "2025",
    score: "CGPA: 8.14",
  },

  currentRole: {
    role: "Junior Research Analyst — AI Systems & Automation",
    company: "Seaverse.co",
    period: "Oct 2025 – Present",
  },

  previousRole: {
    role: "AI/ML Intern",
    company: "Bharat Electronics Limited",
    period: "Feb 2025 – May 2025",
  },

  links: {
    linkedin: "https://www.linkedin.com/in/moulya-m-prasad-759a412aa/",
    github: "https://github.com",
    email: "mailto:contact@moulya.dev",
  },

  navItems: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  technologies: [
    { name: "Python", category: "lang" },
    { name: "Django", category: "backend" },
    { name: "REST APIs", category: "backend" },
    { name: "Redis", category: "backend" },
    { name: "LangChain", category: "ai" },
    { name: "LangGraph", category: "ai" },
    { name: "RAG", category: "ai" },
    { name: "Pytest", category: "qa" },
    { name: "Selenium", category: "qa" },
    { name: "GitHub Actions", category: "tool" },
  ],

  pillars: [
    {
      id: "backend-systems",
      title: "Backend Systems",
      role: "Core Engineering Foundation",
      summary: "Architecting reliable server-side services, data models, and scalable RESTful APIs.",
      technologies: ["Python", "Django", "REST APIs", "Redis", "SQL"],
    },
    {
      id: "ai-llm-workflows",
      title: "AI / LLM Workflows",
      role: "Advanced Application Layer",
      summary: "Developing contextual retrieval pipelines, agentic tool calling, and LLM workflows.",
      technologies: ["LangChain", "LangGraph", "RAG", "Embeddings"],
    },
    {
      id: "qa-automation",
      title: "QA Automation",
      role: "Engineering Rigor & Quality",
      summary: "Engineering automated test suites, end-to-end browser testing, and continuous quality checks.",
      technologies: ["Pytest", "Selenium", "Swagger", "CI/CD"],
    },
  ],

  aboutCapabilities: [
    {
      index: "01",
      title: "BACKEND ENGINEERING",
      description: "Building backend systems and REST APIs using Python/Django, SQL, and Redis.",
      technologies: ["Python", "Django", "REST APIs", "SQL", "Redis"],
    },
    {
      index: "02",
      title: "AI & AGENT TOOLING",
      description: "Building multi-step LLM workflows and agent systems using LangChain and LangGraph, with retrieval and state management.",
      technologies: ["LangChain", "LangGraph", "RAG", "LLM Workflows", "Embedding Retrieval"],
    },
    {
      index: "03",
      title: "QA AUTOMATION",
      description: "Validating software through API testing, automated regression suites, end-to-end testing, debugging, and CI/CD practices.",
      technologies: ["Pytest", "Selenium", "Swagger", "REST API Testing", "GitHub Actions"],
    },
  ],

  engineeringPrinciples: [
    {
      index: "01",
      title: "Build end-to-end",
      description: "Focus on taking features from architectural design through implementation and production deployment.",
    },
    {
      index: "02",
      title: "Test systematically",
      description: "Leverage API contract testing, automated Pytest regression suites, and end-to-end validation to ensure software reliability.",
    },
    {
      index: "03",
      title: "Debug to root cause",
      description: "Investigate unfamiliar codebases to diagnose and resolve performance bottlenecks rather than treating symptoms.",
    },
    {
      index: "04",
      title: "Design for stateful workflows",
      description: "Integrate structured session and memory management (such as Redis) to power resilient, multi-turn AI interactions.",
    },
  ],
};
