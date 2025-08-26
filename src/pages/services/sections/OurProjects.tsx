import React, { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { ExternalLink, Palette, Monitor, Megaphone, Sparkles, ArrowRight } from "lucide-react";
import { PROJECTS, type Project } from "../../../data/projects";
import MinimalHeader from "../../../components/ui/MinimalHeader";
import Button from "../../../components/ui/Button";

const cardVariants: Variants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  in: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 18 } },
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

// Project Card Component
const ProjectCard: React.FC<{ project: Project; idx: number; size?: 'large' | 'medium' }> = ({ 
  project, 
  idx, 
  size = 'medium' 
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    gsap.fromTo(
      el, 
      { y: 50, opacity: 0, scale: 0.98 }, 
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        ease: "power3.out", 
        delay: idx * 0.15 
      }
    );

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = -((y / rect.height) - 0.5) * 3;
      const ry = ((x / rect.width) - 0.5) * 5;
      
      gsap.to(el, { 
        rotateX: rx, 
        rotateY: ry, 
        transformPerspective: 1000, 
        duration: 0.3, 
        ease: "power2.out" 
      });
      
      gsap.to(img, { 
        x: (x - rect.width / 2) * 0.02, 
        y: (y - rect.height / 2) * 0.02, 
        scale: 1,
        duration: 0.3, 
        ease: "power2.out" 
      });
    };

    const onLeave = () => {
      gsap.to(el, { 
        rotateX: 0, 
        rotateY: 0, 
        duration: 0.6, 
        ease: "power3.out" 
      });
      gsap.to(img, { 
        x: 0, 
        y: 0, 
        scale: 1,
        duration: 0.6, 
        ease: "power3.out" 
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [idx]);

  const isLarge = size === 'large';
  
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="in"
      ref={cardRef}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-gray-50/80 backdrop-blur-sm shadow-lg ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:ring-black/15 ${
        isLarge ? 'min-h-[600px]' : 'min-h-[480px]'
      }`}
    >
      {/* Background Image */}
      <div ref={imgRef} className="absolute inset-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-all duration-700 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        {/* Top Section - Badge */}
        <div className="flex justify-between items-start">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 px-4 py-2 shadow-sm">
            {getTagIcon(project.tag)}
            <span className="text-sm font-medium text-white">{project.tag}</span>
          </div>
          
          <div className="rounded-lg bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/90 shadow-sm">
            <span className="truncate">{project.badge}</span>
          </div>
        </div>

        {/* Bottom Section - Content */}
        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className={`font-bold leading-tight text-white transition-all duration-300 group-hover:translate-y-[-2px] ${
              isLarge ? 'text-4xl' : 'text-2xl'
            }`}>
              {project.title}
            </h3>
            
            <p className={`text-white/90 leading-relaxed transition-all duration-300 group-hover:text-white ${
              isLarge ? 'text-lg line-clamp-4' : 'text-base line-clamp-3'
            }`}>
              {project.description}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span>Live Project</span>
            </div>
            
            <Link
              to={`/portfolio/${project.slug}`}
              className="group/btn relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            >
              <span className="transition-transform group-hover/btn:translate-x-[-2px]">
                View Project
              </span>
              <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

// Main OurProjects Component
const OurProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  // Limit projects to first 5
  const limitedProjects = PROJECTS.slice(0, 5);

  // Group projects by the 2-3 pattern for 5 projects
  const groupProjects = (projects: Project[]) => {
    const groups: Project[][] = [];
    
    // For 5 projects, we'll do 2 in first row, 3 in second row
    if (projects.length <= 2) {
      groups.push(projects);
    } else if (projects.length <= 5) {
      groups.push(projects.slice(0, 2)); // First 2
      if (projects.length > 2) {
        groups.push(projects.slice(2)); // Remaining projects
      }
    }

    return groups;
  };

  const projectGroups = groupProjects(limitedProjects);

  const handleViewAllWorks = () => {
    navigate('/portfolio');
  };

  return (
    <div className="w-full bg-lightGray py-20">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        {/* Header */}
        <div ref={containerRef} className="text-center mb-16 space-y-4">
          <MinimalHeader titleLine1="Work's We Have Done" pillText="Projects"/>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projectGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
              className={`grid gap-6 ${
                group.length === 2 
                  ? 'grid-cols-1 lg:grid-cols-2' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {group.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  idx={groupIndex * 3 + idx}
                  size={group.length === 2 ? 'large' : 'medium'}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            title="View All Works"
            bgColor="#1b1b1b"
            textColor="#f1f1f1"
            rightIcon={<ArrowRight className="w-5 h-5" />}
            onClick={handleViewAllWorks}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default OurProjects;