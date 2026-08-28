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

export interface DeveloperProfile {
  name: string;
  title: string;
  specialization: string;
  location: string;
  technicalLabel: string;
  descriptor: string;
  description: string;
  links: {
    linkedin: string;
    github: string;
    email: string;
  };
  navItems: NavItem[];
  technologies: TechnologyHighlight[];
  pillars: InterconnectedPillar[];
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
};
