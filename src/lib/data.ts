export const profile = {
  name: "Alejandro Matta",
  role: "Fullstack Software Engineer",
  tagline:
    "I design and build web apps, from system architecture to polished UI.",
  location: "Costa Rica",
  email: "alejandro.matta.morales@gmail.com",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "Replace with a one- or two-sentence summary: what it does, who it's for, and the problem it solves.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "Replace with a short description highlighting the technical challenge you solved.",
    stack: ["React", "Node.js", "Redis"],
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    description:
      "Replace with a short description. Mention scale, performance wins, or user impact if relevant.",
    stack: ["Python", "FastAPI", "Docker"],
  },
  {
    slug: "project-four",
    title: "Project Four",
    description:
      "Replace with a short description of a side project, open-source contribution, or experiment.",
    stack: ["Vue", "GraphQL", "AWS"],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "GatsbyJS", "React Native"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "GraphQL", "NestJS", "Fastify", "SQL / NoSQL"],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Github Actions"],
  },
  {
    category: "Other",
    items: ["AI", "Testing", "SEO", "Core Web Vitals", "CMS", "System Design"],
  },
];

export const credentials = {
  education: {
    degree: "Software Engineering",
    school: "Universidad Americana",
  },
  certifications: "AWS Certified Developer | Associate Cloud Engineer - GCP",
};
