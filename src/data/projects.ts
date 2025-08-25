// data/projects.ts

export interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  badge: string;
  tag: "Branding" | "Build" | "Design" | "Social";
  description: string;
  categories: string[];
  date: string; 
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Your Brand Recognized",
    slug: "Brand Identity",
    image: "/assets/projects/proj1.png",
    badge: "Brand Identity",
    tag: "Branding",
    description: "A detailed case study on fighting Canada’s record wildfires using modern AI techniques.",
    categories: ["Environmental", "AI", "Safety"],
    date: "2025-08-01",
  },
  {
    id: 2,
    title: "GovLab Impact Report",
    slug: "govlab-impact-report",
    image: "/assets/projects/proj2.png",
    badge: "GovLab — ai",
    tag: "Build",
    description: "An impact report detailing GovLab’s achievements in the 2023–2024 period.",
    categories: ["Government", "Planning", "Impact"],
    date: "2025-08-02",
  },
  {
    id: 3,
    title: "Alberta Looking at AI to Predict Wildfires",
    slug: "alberta-ai-wildfires",
    image: "/assets/projects/proj3.png",
    badge: "Alberta Wildfire AI ",
    tag: "Design",
    description: "Exploring how AI is being used in Alberta to predict and prevent wildfires.",
    categories: ["Environmental", "Technology", "AI"],
    date: "2025-08-03",
  },
   {
    id: 4,
    title: "Your Brand Recognized",
    slug: "Brand Identity",
    image: "/assets/projects/proj1.png",
    badge: "Brand Identity",
    tag: "Branding",
    description: "A detailed case study on fighting Canada’s record wildfires using modern AI techniques.",
    categories: ["Environmental", "AI", "Safety"],
    date: "2025-08-01",
  },
  {
    id: 5,
    title: "GovLab Impact Report",
    slug: "govlab-impact-report",
    image: "/assets/projects/proj2.png",
    badge: "GovLab — ai",
    tag: "Build",
    description: "An impact report detailing GovLab’s achievements in the 2023–2024 period.",
    categories: ["Government", "Planning", "Impact"],
    date: "2025-08-02",
  },
];
