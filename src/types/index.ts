export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type CardVariant = "default" | "interactive" | "featured";

export type BadgeVariant = "default" | "accent" | "success";
export type BadgeSize = "sm" | "md";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SkillItem {
  name: string;
  category?: string;
  isCore?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface EngineeringPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  roleInStack: string;
  keyTechnologies: string[];
  capabilities: string[];
}

export interface Project {
  id: string;
  title: string;
  domain: "Backend" | "AI / LLM" | "QA Automation" | "Systems";
  description: string;
  technologies: string[];
  keyHighlights: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: {
    start: string;
    end: string | "Present";
  };
  focusAreas: string[];
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: {
    start: string;
    end: string;
  };
  details?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  url?: string;
}

export interface SoftwareEngineerProfile {
  name: string;
  primaryRole: string;
  specialization: string;
  summary: string;
  pillars: EngineeringPillar[];
  skillCategories: SkillCategory[];
  featuredProjects?: Project[];
  experiences?: Experience[];
  education?: Education[];
  certifications?: Certification[];
}
