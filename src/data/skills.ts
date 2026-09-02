export interface SkillGroup {
  id: string;
  index: string;
  title: string;
  description: string;
  technologies: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "backend-engineering",
    index: "01",
    title: "BACKEND ENGINEERING",
    description:
      "Building APIs, backend services, data-driven applications, and stateful systems.",
    technologies: ["Python", "Django", "REST APIs", "SQL", "Redis"],
  },
  {
    id: "ai-llm-engineering",
    index: "02",
    title: "AI & LLM ENGINEERING",
    description:
      "Designing LLM workflows, agent orchestration, and retrieval-augmented applications.",
    technologies: ["LangChain", "LangGraph", "RAG", "LLM Workflows"],
  },
  {
    id: "qa-test-automation",
    index: "03",
    title: "QA & TEST AUTOMATION",
    description:
      "Validating APIs and application behavior through automated and systematic testing.",
    technologies: ["Pytest", "Selenium", "Swagger", "REST API Testing"],
  },
  {
    id: "development-ci",
    index: "04",
    title: "DEVELOPMENT & CI",
    description:
      "Managing source code and integrating automated validation into development workflows.",
    technologies: ["Git", "GitHub Actions"],
  },
];

export const ENGINEERING_FOCUS = [
  { title: "Backend Systems", descriptor: "API & Data Architecture" },
  { title: "API & Integration", descriptor: "Contract & Service Reliability" },
  { title: "AI / LLM Workflows", descriptor: "Agent & Retrieval Pipelines" },
  { title: "Quality Automation", descriptor: "Continuous Verification & CI" },
];
