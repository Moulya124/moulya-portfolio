export interface ContributionArea {
  index: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  status: "current" | "previous";
  summary: string;
  contributionAreas?: ContributionArea[];
  directContributions?: string[];
  technologies: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "seaverse",
    company: "Seaverse.co",
    role: "Junior Research Analyst — AI Systems & Automation",
    period: "Oct 2025 – Present",
    status: "current",
    summary:
      "Owning end-to-end engineering across AI agent workflows, backend service integrations, Redis session state architecture, and automated test pipelines from design through deployment.",
    contributionAreas: [
      {
        index: "01",
        title: "Agent Engineering & Automation",
        description:
          "Designed and implemented multi-step agent orchestration workflows using LangChain and LangGraph. Built internal AI-powered automation tools from architecture through production deployment.",
        tags: ["LangChain", "LangGraph", "Multi-Step Workflows", "AI Automation"],
      },
      {
        index: "02",
        title: "State Management & API Validation",
        description:
          "Integrated Redis-based memory and session management to maintain application state across multi-turn, context-aware LLM workflows. Designed and executed end-to-end REST API testing with Swagger to validate request/response integrity across services.",
        tags: ["Redis", "REST APIs", "Swagger", "Session State"],
      },
      {
        index: "03",
        title: "Quality Engineering & Testing Discipline",
        description:
          "Authored automated Pytest regression suites to validate system correctness and improve software reliability across releases.",
        tags: ["Pytest", "Regression Testing", "API Contracts", "CI/CD"],
      },
      {
        index: "04",
        title: "Codebase Debugging & Optimization",
        description:
          "Systematically investigated and debugged existing codebases, diagnosing and resolving performance bottlenecks through disciplined root-cause analysis.",
        tags: ["Root-Cause Analysis", "Code Optimization", "Performance Tuning"],
      },
    ],
    technologies: [
      "Python",
      "Django",
      "REST APIs",
      "LangChain",
      "LangGraph",
      "Redis",
      "Pytest",
      "Swagger",
      "GitHub Actions",
    ],
  },
  {
    id: "bel",
    company: "Bharat Electronics Limited (BEL)",
    role: "AI/ML Intern",
    period: "Feb 2025 – May 2025",
    status: "previous",
    summary:
      "Engineered computer vision pipelines for defense domain use cases, focusing on target classification and model evaluation.",
    directContributions: [
      "Built and evaluated an image classification pipeline tailored for naval target-identification use cases.",
      "Utilized YOLOv11, Ultralytics, and Roboflow for dataset preparation and model evaluation.",
    ],
    technologies: ["YOLOv11", "Ultralytics", "Roboflow", "Python"],
  },
];
