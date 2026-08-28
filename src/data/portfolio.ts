import { SoftwareEngineerProfile } from "@/types";

export const PORTFOLIO_DATA: SoftwareEngineerProfile = {
  name: "Moulya",
  primaryRole: "Software Engineer",
  specialization: "Backend, AI & QA Automation",
  summary:
    "Software Engineer building robust backend systems, intelligent AI/LLM workflows, and comprehensive automated testing suites with engineering rigor.",

  // Interconnected engineering pillars representing one unified software engineering identity
  pillars: [
    {
      id: "backend-systems",
      title: "Backend Systems",
      subtitle: "Core Engineering Foundation",
      roleInStack: "Foundation",
      description:
        "Building resilient server-side services, robust REST APIs, structured database layers, and performant data processing systems.",
      keyTechnologies: ["Python", "Django", "REST APIs", "SQL", "Redis", "Apache"],
      capabilities: [
        "REST API Design & Architecture",
        "Relational Database Modeling & SQL Queries",
        "Data Caching & Performance Optimization",
        "Server Deployment & Environment Configuration",
      ],
    },
    {
      id: "ai-llm-tooling",
      title: "AI / LLM Agent Tooling",
      subtitle: "Advanced Application Layer",
      roleInStack: "Application Development",
      description:
        "Developing autonomous agent workflows, contextual retrieval pipelines, structured prompt architectures, and vision/ML integrations.",
      keyTechnologies: [
        "LangChain",
        "LangGraph",
        "LLM workflows",
        "RAG",
        "Embedding-based retrieval",
        "Prompt engineering",
        "YOLOv11",
      ],
      capabilities: [
        "Multi-Step Agentic Workflows & Tool Calling",
        "Retrieval-Augmented Generation (RAG) Pipelines",
        "Context Retrieval & Vector Embeddings",
        "Computer Vision & ML Model Integration",
      ],
    },
    {
      id: "qa-automation",
      title: "QA Automation & Reliability",
      subtitle: "Engineering Rigor & Quality",
      roleInStack: "Software Quality & Verification",
      description:
        "Embedding automated validation, regression resilience, API contract verification, and disciplined testing into the development lifecycle.",
      keyTechnologies: [
        "Pytest",
        "Selenium",
        "Swagger",
        "REST API testing",
        "Regression testing",
        "End-to-end testing",
      ],
      capabilities: [
        "Automated Test Suite Design (Pytest)",
        "Browser & UI Automation (Selenium)",
        "REST API Specification & Contract Testing",
        "Continuous Quality Assurance in CI/CD",
      ],
    },
  ],

  // Source-of-truth skill categories strictly matching verified resume capabilities
  skillCategories: [
    {
      title: "Languages",
      description: "Core programming and query languages",
      skills: ["Python", "SQL", "Java"],
    },
    {
      title: "Backend & APIs",
      description: "Server-side frameworks, services, and caching",
      skills: ["Django", "REST APIs", "Redis", "Apache", "SQL"],
    },
    {
      title: "AI / LLM",
      description: "Agent orchestration, contextual retrieval, and prompt systems",
      skills: [
        "LangChain",
        "LangGraph",
        "LLM workflows",
        "RAG",
        "Embedding-based retrieval",
        "Prompt engineering",
      ],
    },
    {
      title: "Testing & Automation",
      description: "Automated verification, regression suites, and quality discipline",
      skills: [
        "Pytest",
        "Selenium",
        "Swagger",
        "REST API testing",
        "Regression testing",
        "End-to-end testing",
        "Debugging",
        "Performance optimization",
      ],
    },
    {
      title: "Engineering & CI/CD",
      description: "Version control, workflow automation, and release practices",
      skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "Feature-branch workflows"],
    },
    {
      title: "Additional AI / ML",
      description: "Machine learning frameworks, data manipulation, and computer vision",
      skills: ["YOLOv11", "Ultralytics", "Roboflow", "TensorFlow", "Pandas", "NumPy"],
    },
  ],
};
