import React, { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ChevronRight, Palette, Monitor, Megaphone, Sparkles } from "lucide-react";
import MinimalHeader from "../../../components/ui/MinimalHeader";
import { PROJECTS, type Project } from "../../../data/projects";

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
    case "Branding": return <Sparkles className="h-3.5 w-3.5 text-orange-400" />;
    case "Build": return <Monitor className="h-3.5 w-3.5 text-green-700" />;
    case "Design": return <Palette className="h-3.5 w-3.5 text-purple-700" />;
    case "Social": return <Megaphone className="h-3.5 w-3.5 text-pink-700" />;
  }
}

// ---- Read More Button ----
const ReadMore = ({ slug }: { slug: string }) => (
  <Link to={`/portfolio/${slug}`} className="group relative inline-flex items-center gap-2 text-sm font-medium text-appleBlue">
    <span>View Project</span>
    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

    gsap.fromTo(el, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: idx * 0.08 });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = -((y / rect.height) - 0.5) * 6;
      const ry = ((x / rect.width) - 0.5) * 8;
      gsap.to(el, { rotateX: rx, rotateY: ry, transformPerspective: 700, duration: 0.35, ease: "power2.out" });
      gsap.to(img, { x: (x - rect.width / 2) * 0.04, y: (y - rect.height / 2) * 0.04, duration: 0.35, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
      gsap.to(img, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
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
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/50 p-4 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-xl"
      style={{ ...inwardCornerMask }}
    >
      <div ref={imgRef} className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        <div className="pointer-events-none absolute inset-x-4 bottom-3 flex items-center justify-between rounded-xl bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          <span className="truncate">{project.badge}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-lightGray px-3 py-1 text-xs font-medium text-carbonGray ring-1 ring-carbonGray/10">
          {getTagIcon(project.tag)}
          {project.tag}
        </span>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-carbonBlack">{project.title}</h3>
        <p className="mt-2 text-sm text-carbonGray/80 line-clamp-3">{project.description}</p>
        <div className="mt-6 flex items-center justify-between">
          <ReadMore slug={project.slug} />
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-2xl" />
    </motion.article>
  );
};

// ---- Project Section ----
const ProjectSection: React.FC = () => {
  const latestProjects = [...PROJECTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="w-full bg-lightGray py-16">
      <div className="mx-auto max-w-7xl px-6">
        <MinimalHeader pillText="Our Work" titleLine1="Our Featured Projects" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} idx={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/portfolio"
            className="group relative rounded-2xl border border-slate-300 bg-white px-6 py-2 text-sm font-medium text-carbonGray hover:text-white shadow-sm hover:bg-carbonGray"
          >
            <span className="relative z-10">View All Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
