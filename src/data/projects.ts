export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline?: string;
  description: string;
  featured?: boolean;
  engineeringFocus?: {
    area: string;
    description: string;
  }[];
  technologies: string[];
  testingTags?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "an-constructions",
    title: "A N Constructions",
    category: "Web Engineering & QA Automation",
    tagline: "Responsive Construction Platform with Automated Test Suite & CI",
    description:
      "A modern, responsive multi-page website for A N Constructions focused on civil engineering, construction, contracting, and project enquiries with automated browser testing and continuous integration.",
    featured: true,
    engineeringFocus: [
      {
        area: "Web Architecture",
        description:
          "Modular multi-page architecture spanning Home, Services, Projects, About, and Contact pages with direct FormSubmit email enquiries (no custom backend required).",
      },
      {
        area: "Quality Engineering & CI",
        description:
          "Automated UI testing with Selenium and Pytest integrated into GitHub Actions CI workflows to validate changes before merging into main.",
      },
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Selenium",
      "Pytest",
      "GitHub Actions",
      "FormSubmit",
    ],
    testingTags: ["Selenium", "Pytest", "GitHub Actions"],
    githubUrl: "https://github.com/Moulya124/an-constructions",
    liveUrl: "https://an-constructions.onrender.com",
  },
  {
    id: "doctors-appointment-system",
    title: "Doctor's Appointment System",
    category: "Web & Database Systems",
    description:
      "Web application for scheduling doctor appointments, managing patient records, and handling relational database queries.",
    technologies: ["Python", "Django", "SQL"],
  },
  {
    id: "bus-pass-management-system",
    title: "Bus Pass Management System",
    category: "Application & Data Management",
    description:
      "Digital pass management application for issuing, verifying, and renewing transit passes backed by database records.",
    technologies: ["Java", "SQL"],
  },
  {
    id: "crop-yield-prediction",
    title: "Crop Yield Prediction",
    category: "Applied Machine Learning",
    description:
      "Machine learning model for predicting agricultural crop yield based on environmental and regional dataset features.",
    technologies: ["Python", "TensorFlow", "NumPy", "Pandas"],
  },
];
