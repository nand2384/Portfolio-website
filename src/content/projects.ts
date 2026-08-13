export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  tags: string[];
  techStack: string[];
  hasLiveDemo: boolean;
  demoUrl?: string;
  repoUrl: string;
  coverImage?: string;
  gallery?: string[];
  caseStudy: {
    problem: string;
    approach: string;
    outcome: string;
  };
};

const TODO = "[TODO: content]";

export const projects: Project[] = [
  {
    slug: "rapidx",
    title: "RapidX",
    oneLiner:
      "Logistics and delivery management platform for tracking shipments and courier operations.",
    tags: ["Logistics", "Full-Stack"],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Supabase"],
    hasLiveDemo: false,
    repoUrl: "https://github.com/nand2384/RapidX",
    caseStudy: { problem: TODO, approach: TODO, outcome: TODO },
  },
  {
    slug: "bloodnation",
    title: "BloodNation",
    oneLiner:
      "Blood bank management platform for tracking inventory, donor records, and requests.",
    tags: ["Healthcare", "Admin Dashboard"],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "JWT Auth"],
    hasLiveDemo: false,
    repoUrl: "https://github.com/nand2384/bloodnation",
    caseStudy: { problem: TODO, approach: TODO, outcome: TODO },
  },
  {
    slug: "quizwave",
    title: "QuizWave",
    oneLiner:
      "Interactive quiz platform with real-time scoring and a leaderboard.",
    tags: ["Education", "Real-Time"],
    techStack: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
    hasLiveDemo: false,
    repoUrl: "https://github.com/nand2384/quizwave",
    caseStudy: { problem: TODO, approach: TODO, outcome: TODO },
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    oneLiner:
      "Todo management app for creating, tracking, and organizing daily tasks.",
    tags: ["Productivity"],
    techStack: ["React", "JavaScript", "Firebase", "Tailwind CSS"],
    hasLiveDemo: true,
    demoUrl: "https://nand2384.github.io/Todos/login",
    repoUrl: "https://github.com/nand2384/Todos",
    caseStudy: { problem: TODO, approach: TODO, outcome: TODO },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
