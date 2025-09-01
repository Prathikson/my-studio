import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";
import {
  Palette, 
  Monitor, 
  Megaphone, 
  Sparkles, 
  Navigation,
  Search,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";
import { PROJECTS, type Project } from "../../../data/projects";
// import Button from "../../../components/ui/Button";

// ===== Types =====
type ViewMode = "grid" | "table";
type FilterType = "all" | "Branding" | "Build" | "Design" | "Social";
type SortType = "date" | "title" | "category";

const FILTER_OPTIONS: FilterType[] = ["all", "Branding", "Build", "Design", "Social"];
const SORT_OPTIONS: SortType[] = ["date", "title", "category"];

// ===== Card Animations =====
const cardVariants: Variants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

// ===== Tag Icons =====
function getTagIcon(tag: FilterType) {
  switch (tag) {
    case "Branding":
      return <Sparkles className="h-4 w-4 text-orange-400" />;
    case "Build":
      return <Monitor className="h-4 w-4 text-green-700" />;
    case "Design":
      return <Palette className="h-4 w-4 text-purple-700" />;
    case "Social":
      return <Megaphone className="h-4 w-4 text-pink-700" />;
    default:
      return null; // handles "all"
  }
}

// ===== TopBar Component =====
interface TopBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: FilterType;
  setFilterType: (type: FilterType) => void;
  sortType: SortType;
  setSortType: (type: SortType) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  totalProjects: number;
}

const TopBar: React.FC<TopBarProps> = ({
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
  sortType,
  setSortType,
  viewMode,
  setViewMode,
  totalProjects,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="bg-white/20 backdrop-blur-lg border rounded-2xl p-6 mb-8 shadow-sm relative z-20">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-smoothBlack" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50/70 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm"
          />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen((prev) => !prev)}
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-50/70 hover:bg-gray-100/70 border border-gray-200 rounded-xl transition-all duration-200 text-sm font-medium"
            >
              <Filter className="h-4 w-4" />
              <span>Filter</span>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">{totalProjects}</span>
            </button>

            {isFilterOpen && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className="absolute top-full mt-2 left-0 sm:right-0 sm:left-auto bg-white border border-gray-200 rounded-xl shadow-lg p-2 min-w-[200px] max-w-[90vw] overflow-auto z-[100]"
  >
    <div className="space-y-1">
      <p className="text-xs font-semibold text-gray-500 px-3 py-2">Filter by Service</p>
      {FILTER_OPTIONS.map((type) => (
        <button
          key={type}
          onClick={() => {
            setFilterType(type);
            setIsFilterOpen(false);
          }}
          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
            filterType === type
              ? "bg-blue-50 text-blue-700 font-medium"
              : "hover:bg-gray-50 text-gray-700"
          }`}
        >
          {getTagIcon(type)}
          <span className="capitalize">{type === "all" ? "All Services" : type}</span>
        </button>
      ))}

      <div className="border-t pt-2 mt-2">
        <p className="text-xs font-semibold text-gray-500 px-3 py-2">Sort by</p>
        {SORT_OPTIONS.map((sort) => (
          <button
            key={sort}
            onClick={() => {
              setSortType(sort);
              setIsFilterOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
              sortType === sort
                ? "bg-blue-50 text-blue-700 font-medium"
                : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <span className="capitalize">{sort === "date" ? "Latest First" : sort}</span>
          </button>
        ))}
      </div>
    </div>
  </motion.div>
)}

          </div>

          {/* View Toggle */}
          <div className="flex items-center bg-gray-50/70 border border-gray-200 rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "grid" ? "bg-white text-gray-900 shadow-sm" : "text-smoothBlack/80 hover:text-gray-700"
              }`}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "table" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Card Component - Cleaned up
const ProjectCard: React.FC<{ project: Project; idx: number }> = ({ project, idx }) => {
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
        delay: (idx % 6) * 0.1 
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
  
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="in"
      ref={cardRef}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-gray-50/80 backdrop-blur-lg shadow-lg ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:ring-black/15 min-h-[320px]"
    >
      {/* Background Image */}
      <div ref={imgRef} className="absolute inset-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-fill transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        {/* Top Section - Tag and Badge */}
        <div className="flex justify-between items-start">
          <div className="inline-flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/20 px-3 py-2 shadow-sm">
            {getTagIcon(project.tag)}
            <span className="text-sm font-medium text-white">{project.tag}</span>
          </div>
          
          <div className="rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/90 shadow-sm">
            <span className="truncate">{project.badge}</span>
          </div>
        </div>

        {/* Bottom Section - Title and CTA */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold leading-tight text-white transition-all duration-300 group-hover:translate-y-[-2px]">
            {project.title}
          </h3>
          
          <Link
            to={`/portfolio/${project.slug}`}
            className="group/btn relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-carbonGray bg-lightGray backdrop-blur-md rounded-xl hover:bg-lightGray/90 transition-all duration-300 hover:shadow-lg w-fit"
          >
            <span className="transition-transform group-hover/btn:translate-x-[-2px]">
              View Project
            </span>
            <Navigation className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Table Row Component - Clean minimal design
const TableRow: React.FC<{ project: Project; idx: number }> = ({ project, idx }) => {
  const rowRef = useRef<HTMLTableRowElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, x: -20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.6, 
        ease: "power3.out", 
        delay: (idx % 10) * 0.05 
      }
    );
  }, [idx]);

  return (
    <motion.tr
      ref={rowRef}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: (idx % 10) * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group hover:bg-gray-50/50 transition-all duration-300 relative"
    >
      {/* Project Title */}
      <td className="py-16 px-8 border-b-2 border-smoothBlack/20">
        <Link 
          to={`/portfolio/${project.slug}`}
          className="block"
        >
          <h3 className="text-5xl font-bold text-carbonGray group-hover:text-blue-700 transition-colors duration-200">
            {project.title}
          </h3>
        </Link>
      </td>

      {/* Service Tag */}
      <td className="py-6 px-8 border-b-2 border-smoothBlack/20">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-lightGray/20 rounded-xl">
          {getTagIcon(project.tag)}
          <span className="text-lg font-semibold text-carbonGray">{project.tag}</span>
        </div>
      </td>

      {/* Hover Image */}
      {isHovered && (
        <td className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="w-8 h-48 rounded-xl overflow-hidden shadow-xl ring-1 ring-black/10"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </td>
      )}
    </motion.tr>
  );
};

// Main OurProjects Component
const OurProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // const navigate = useNavigate();
  
  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [sortType, setSortType] = useState<SortType>('date');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    const filtered = PROJECTS.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesFilter = filterType === 'all' || project.tag === filterType;
      
      return matchesSearch && matchesFilter;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortType) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.tag.localeCompare(b.tag);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, filterType, sortType]);

  // const handleViewAllWorks = () => {
  //   navigate('/portfolio');
  // };

  return (
    <div className="w-full bg-lightGray py-20">
      <div className="mx-auto max-w-full px-6 lg:px-8">


        {/* Top Bar */}
        <TopBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
          sortType={sortType}
          setSortType={setSortType}
          viewMode={viewMode}
          setViewMode={setViewMode}
          totalProjects={filteredAndSortedProjects.length}
        />

        {/* Projects Display */}
        <div className="relative z-10">
          {viewMode === 'grid' ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredAndSortedProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  idx={idx}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className=" backdrop-blur-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {filteredAndSortedProjects.map((project, idx) => (
                      <TableRow
                        key={project.id}
                        project={project}
                        idx={idx}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>

        {/* Empty State */}
        {filteredAndSortedProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterType('all');
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* CTA Section - Only show when there are projects */}
        {/* {filteredAndSortedProjects.length > 0 && (
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
        )} */}
      </div>
    </div>
  );
};

export default OurProjects;