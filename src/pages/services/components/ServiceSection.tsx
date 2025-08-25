import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Card from "./Card";
import placeholderImage from "/assets/projects/proj1.png";

interface ProjectResult {
  title: string;
}

interface Project {
  company: string;
  year: string;
  title: string;
  results: ProjectResult[];
  link: string;
  image?: string;
}

const portfolioProjects: Project[] = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark SaaS Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: placeholderImage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light SaaS Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: placeholderImage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: placeholderImage,
  },
];

const ServiceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power3.out" }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="projects" className="py-16 lg:py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">

        <div className="flex flex-col mt-12 gap-16">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="project-card px-6 py-8 md:px-10 lg:px-12"
              style={{ top: `calc(64px + ${index * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                {/* Left Side */}
                <div>
                  <div className="text-blue-400 uppercase tracking-widest font-semibold text-sm flex gap-2">
                    <span>{project.company}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 text-2xl md:text-4xl font-bold">{project.title}</h3>
                  <hr className="border-neutral-700 mt-4" />

                  <ul className="mt-4 flex flex-col gap-3">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-neutral-300">
                        <CheckCircle className="w-5 h-5 text-blue-400" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-neutral-200 transition"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative mt-8 lg:mt-0"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </motion.div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
