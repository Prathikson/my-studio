import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, ArrowRight, Palette, Monitor, Megaphone, Sparkles } from 'lucide-react';
import MinimalHeader from '../../../components/ui/MinimalHeader';
import Button from '../../../components/ui/Button';

interface Project {
  id: number;
  title: string;
  category: string;
  tag: 'Design' | 'Build' | 'Social' | 'Branding';
  image: string;
  description: string;
}

interface DragState {
  x: number;
  scrollLeft: number;
}

interface CursorPosition {
  x: number;
  y: number;
}

const ProjectSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<DragState>({ x: 0, scrollLeft: 0 });
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  // Project data with new tag system
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Application",
      tag: "Build",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=800&fit=crop&crop=center",
      description: "Modern e-commerce solution with advanced analytics and AI-powered recommendations."
    },
    {
      id: 2,
      title: "Banking Dashboard",
      category: "Financial Tech",
      tag: "Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop&crop=center",
      description: "Comprehensive banking dashboard with real-time analytics and transaction monitoring."
    },
    {
      id: 3,
      title: "Social Platform",
      category: "Mobile App",
      tag: "Social",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=800&fit=crop&crop=center",
      description: "Next-generation social platform with real-time collaboration and content creation tools."
    },
    {
      id: 4,
      title: "Fitness Tracker",
      category: "Health App",
      tag: "Build",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&crop=center",
      description: "AI-powered fitness tracking app with personalized workout recommendations."
    },
    {
      id: 5,
      title: "Brand Identity",
      category: "Visual Identity",
      tag: "Branding",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=800&fit=crop&crop=center",
      description: "Complete brand identity system with logo design and visual guidelines."
    },
    {
      id: 6,
      title: "Marketing Campaign",
      category: "Digital Marketing",
      tag: "Social",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=800&fit=crop&crop=center",
      description: "Comprehensive digital marketing campaign with social media strategy."
    }
  ];

  // Get icon for tag
  const getTagIcon = (tag: Project['tag']) => {
    const iconProps = { className: "w-4 h-4" };
    switch (tag) {
      case 'Design':
        return <Palette {...iconProps} />;
      case 'Build':
        return <Monitor {...iconProps} />;
      case 'Social':
        return <Megaphone {...iconProps} />;
      case 'Branding':
        return <Sparkles {...iconProps} />;
      default:
        return <Monitor {...iconProps} />;
    }
  };

  // Generate project URL
  const getProjectUrl = (title: string): string => {
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return `/portfolio/${slug}`;
  };

  // Handle mouse move for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const container = containerRef.current;
    if (container) {
      setDragStart({
        x: e.pageX - container.offsetLeft,
        scrollLeft: container.scrollLeft
      });
    }
  };

  const handleMouseMoveForDrag = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = containerRef.current;
    if (container) {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - dragStart.x) * 2;
      container.scrollLeft = dragStart.scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMoveForDrag);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMoveForDrag);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  // Navigate to portfolio
  const navigateToPortfolio = () => {
    window.location.href = '/portfolio';
  };

  // Navigate to specific project
  const navigateToProject = (title: string) => {
    window.location.href = getProjectUrl(title);
  };

  return (
    <div className="w-full py-24 bg-lightGray relative overflow-hidden">
      {/* Custom Cursor */}
      {isHovering && (
        <div 
          className="fixed pointer-events-none z-50 bg-lightGray/20 text-white px-6 py-4 rounded-full text-sm font-medium shadow-lg transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            left: cursorPosition.x, 
            top: cursorPosition.y,
            transition: 'all 0.1s ease-out'
          }}
        >
          Drag ↔
        </div>
      )}

      <div className="w-full px-6">
        {/* Header */}
        <div className="relative mb-16 flex flex-col items-center gap-6 max-w-7xl mx-auto text-center">
        <MinimalHeader pillText="Projects" titleLine1="Our Featured Projects"/>
        </div>

        {/* Projects Container - Full Width */}
        <div 
          ref={containerRef}
          className={`w-full overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div 
            ref={wrapperRef}
            className="flex gap-8 pb-4 pl-6"
            style={{ width: 'max-content' }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="group w-[450px] bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 flex-shrink-0"
                style={{ height: '700px' }}
              >
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Tag Badge with Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      {getTagIcon(project.tag)}
                      <span>{project.tag}</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 h-80 flex flex-col">
                  <h3 className="text-2xl font-semibold text-black mb-4 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Button */}
                  <button 
                    onClick={() => navigateToProject(project.title)}
                    className="group relative w-full h-14 border-2  rounded-full overflow-hidden transition-all duration-300 group-hover:bg-appleBlue"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 text-black  group-hover:text-lightGray  transition-colors duration-300 font-medium">
                      View Project
                      <ExternalLink className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-20">
          <Button 
            onClick={navigateToPortfolio}
          >
            
            <span className="flex items-center gap-4">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-100/50 to-orange-100/50 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default ProjectSection;