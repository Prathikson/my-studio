import React, { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ChevronRight, Palette, Monitor, Megaphone, Sparkles, ExternalLink } from "lucide-react";
import MinimalHeader from "../../../components/ui/MinimalHeader";
import { PROJECTS, type Project } from "../../../data/projects";
import Button from "../../../components/ui/Button";

const cardVariants: Variants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  in: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 16 } },
};

const inwardCornerMask: React.CSSProperties = {
  WebkitMaskImage:
    "radial-gradient(64px 64px at calc(100% + 32px) calc(100% + 32px), transparent 63px, black 64px)",
  maskImage:
    "radial-gradient(64px 64px at calc(100% + 32px) calc(100% + 32px), transparent 63px, black 64px)",
};

// Tag Icons
function getTagIcon(tag: "Branding" | "Build" | "Design" | "Social") {
  switch (tag) {
    case "Branding": return <Sparkles className="h-4 w-4 text-orange-400" />;
    case "Build": return <Monitor className="h-4 w-4 text-green-700" />;
    case "Design": return <Palette className="h-4 w-4 text-purple-700" />;
    case "Social": return <Megaphone className="h-4 w-4 text-pink-700" />;
  }
}

// ---- Read More Button ----
const ReadMore = ({ slug }: { slug: string }) => (
  <Link to={`/portfolio/${slug}`} className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-lightGray bg-carbonGray rounded-xl  transition-all duration-200 ">
    <span>View Project</span>
    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </Link>
);

// ---- Project Card ----
const ProjectCard: React.FC<{ project: Project; idx: number }> = ({ project, idx }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    gsap.fromTo(el, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: idx * 0.1 });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = -((y / rect.height) - 0.5) * 4;
      const ry = ((x / rect.width) - 0.5) * 6;
      gsap.to(el, { rotateX: rx, rotateY: ry, transformPerspective: 800, duration: 0.4, ease: "power2.out" });
      gsap.to(img, { x: (x - rect.width / 2) * 0.03, y: (y - rect.height / 2) * 0.03, duration: 0.4, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.7, ease: "power3.out" });
      gsap.to(img, { x: 0, y: 0, duration: 0.7, ease: "power3.out" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [idx]);

  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      animate="in"
      ref={cardRef}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-lightGray/10 backdrop-blur-2xl p-6   transition-all duration-300"
      style={{ ...inwardCornerMask }}
    >
<div ref={imgRef} className="relative min-h-[480px] max-h-[480px] overflow-hidden rounded-2xl mb-6 bg-slate-100">
  <img 
    src={project.image} 
    alt={project.title} 
    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" 
  />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project Badge */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-lg border border-white/20 px-4 py-2 shadow-sm">
          {getTagIcon(project.tag)}
          <span className="text-sm font-medium text-carbonGray">{project.tag}</span>
        </div>
        
        {/* Status Badge */}
        <div className="absolute bottom-4 right-4 rounded-lg bg-white/20 backdrop-blur-lg border border-white/20 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
          <span className="truncate">{project.badge}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-2xl font-bold leading-tight text-carbonBlack mb-3 group-hover:text-carbonGray transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-base text-carbonGray/90 leading-relaxed line-clamp-3 mb-6 flex-1">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-sm text-carbonGray/70">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            <span>Live Project</span>
          </div>
          <ReadMore slug={project.slug} />
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
    </motion.article>
  );
};

// ---- Project Section ----
const ProjectSection: React.FC = () => {
  const latestProjects = [...PROJECTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="w-full bg-lightGray py-20">
      <div className="mx-auto max-w-full px-10">
        <MinimalHeader pillText="Our Work" titleLine1="Featured Projects" />

        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {latestProjects.map((p, i) => (
            <div key={p.id} className="min-h-[520px]">
              <ProjectCard project={p} idx={i} />
            </div>
          ))}
        </div>

          
          
        <div className="mt-16 flex justify-center">
          <Button rightIcon={<ChevronRight className="h-5 w-5"/>} title="View All Projects" to="/portfolio"/>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;