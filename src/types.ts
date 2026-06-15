export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Web' | 'Android' | 'Fullstack';
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  highlight?: boolean;
  imageGradient: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 1-100 or rating
    iconName: string;
  }[];
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

