import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { PROJECTS} from "../../../data/projects";
import { ArrowRight, Calendar, Sparkles, Monitor, Palette, Megaphone } from "lucide-react";
import Button from "../../../components/ui/Button";

type TagType = "Branding" | "Build" | "Design" | "Social";

interface RelatedProjectsProps {
  tags: TagType[]; // Pass an array of tags you want to show
  limit?: number;  // Optional limit for how many projects to show
  title?: string;  // Custom title
}

function getTagIcon(tag: TagType) {
  switch (tag) {
    case "Branding":
      return <Sparkles className="h-5 w-5 text-orange-400" />;
    case "Build":
      return <Monitor className="h-5 w-5 text-green-700" />;
    case "Design":
      return <Palette className="h-5 w-5 text-purple-700" />;
    case "Social":
      return <Megaphone className="h-5 w-5 text-pink-700" />;
  }
}

const RelatedProjects: React.FC<RelatedProjectsProps> = ({
  tags,
  limit = 6,
  title = "Related Projects",
}) => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Filter projects based on tags
  const relatedProjects = PROJECTS
    .filter((p) => tags.includes(p.tag))
    .slice(0, limit);

  // GSAP animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".project-card");

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="py-20 max-w-7xl mx-auto px-6 lg:px-8 bg-lig">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h3>
        <Button
          title="View All Projects"
          bgColor="#f8f9fa"
          textColor="#1b1b1b"
          rightIcon={<ArrowRight className="w-4 h-4" />}
          onClick={() => navigate("/portfolio")}
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="project-card group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Link
              to={`/portfolio/${project.slug}`}
              className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg">
                    {getTagIcon(project.tag)}
                    <span className="text-xs font-medium text-gray-700">
                      {project.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2 line-clamp-2">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.slice(0, 3).map((cat, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                    >
                      {cat}
                    </span>
                  ))}
                  {project.categories.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md">
                      +{project.categories.length - 3}
                    </span>
                  )}
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {new Date(project.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;
