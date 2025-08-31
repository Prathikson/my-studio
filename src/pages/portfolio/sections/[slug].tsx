import React, { useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Share2,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight,
  X,
  Palette,
  Monitor,
  Megaphone,
  Sparkles
} from "lucide-react";
import { PROJECTS, type Project } from "../../../data/projects";
import Button from "../../../components/ui/Button";
import { MdRocketLaunch } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

// Tag Icons
function getTagIcon(tag: "Branding" | "Build" | "Design" | "Social") {
  switch (tag) {
    case "Branding": return <Sparkles className="h-5 w-5 text-orange-400" />;
    case "Build": return <Monitor className="h-5 w-5 text-green-700" />;
    case "Design": return <Palette className="h-5 w-5 text-purple-700" />;
    case "Social": return <Megaphone className="h-5 w-5 text-pink-700" />;
  }
}

// Image Gallery Component
const ImageGallery: React.FC<{ images: string[]; projectTitle: string }> = ({ 
  images, 
  projectTitle 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <div className="space-y-6">
        {/* Main Image */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-lightGray group cursor-pointer">
          <img
            src={images[currentImageIndex]}
            alt={`${projectTitle} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            onClick={() => openLightbox(currentImageIndex)}
          />
          
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </>
          )}
          
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-700">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex gap-10 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ring-2 transition-all duration-200 ${
                  currentImageIndex === index 
                    ? 'ring-blue-500 ring-offset-2' 
                    : 'ring-gray-200 hover:ring-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${projectTitle} thumbnail ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-7xl max-h-full">
            <img
              src={images[currentImageIndex]}
              alt={`${projectTitle} - Full view`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

// Stats Component
const StatsSection: React.FC<{ stats: Project['stats'] }> = ({ stats }) => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const statElements = el.querySelectorAll('.stat-card');
    
    gsap.fromTo(statElements, 
      { y: 40, opacity: 0, scale: 0.95 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div ref={statsRef} className="py-16 ">
      <div className="max-w-7xl mx-auto px-8">
        <h3 className="text-2xl font-bold text-carbonGray text-center mb-12">
          Project Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-whit/30 hover:shadow-lg hover:border-lightGray transition-all duration-300">
                <div className="text-3xl font-bold text-carbonGray mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-smoothBlack mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs text-smoothBlack/80">
                    {stat.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Related Projects Component
const RelatedProjects: React.FC<{ currentProject: Project }> = ({ currentProject }) => {
  const relatedProjects = PROJECTS
    .filter(p => p.id !== currentProject.id && 
                (p.tag === currentProject.tag || 
                 p.categories.some(cat => currentProject.categories.includes(cat))))
    .slice(0, 5);

  const navigate = useNavigate();

  return (
    <div className="py-20 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Related Works</h3>
          <p className="text-gray-600">Discover more projects from our portfolio</p>
        </div>
        <Button
          title="View All Works"
          bgColor="#f8f9fa"
          textColor="#1b1b1b"
          rightIcon={<ArrowRight className="w-4 h-4" />}
          onClick={() => navigate('/portfolio')}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group"
          >
            <Link
              to={`/portfolio/${project.slug}`}
              className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg">
                    {getTagIcon(project.tag)}
                    <span className="text-xs font-medium text-gray-700">{project.tag}</span>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-2 py-1 bg-black/20 backdrop-blur-sm text-white text-xs font-medium rounded-md">
                    {project.badge}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-carbonGray group-hover:text-blue-600 transition-colors duration-200 mb-3 line-clamp-2">
                  {project.title}
                </h4>
                <p className="text-smoothBlack/80 mb-4 line-clamp-3 text-sm">
                  {project.description}
                </p>
                
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.slice(0, 3).map((category, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                    >
                      {category}
                    </span>
                  ))}
                  {project.categories.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md">
                      +{project.categories.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Date and View Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all duration-200">
                    <span>View Project</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Main Project Detail Component
const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  const project = PROJECTS.find(p => p.slug === slug);

  useEffect(() => {
    if (!project) return;

    // Hero animation
    const hero = heroRef.current;
    if (hero) {
      gsap.fromTo(hero,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Section animations
    const sections = sectionsRef.current;
    if (sections) {
      const sectionElements = sections.querySelectorAll('.project-section');
      
      sectionElements.forEach((section) => {
        gsap.fromTo(section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-lightGray flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-carbonGray mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Button
            title="Back to Projects"
            bgColor="#1b1b1b"
            textColor="#f1f1f1"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
            onClick={() => navigate('/portfolio')}
          />
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-lightGray pb-20">
      {/* Hero Section */}
      <div ref={heroRef} className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl">
                  {getTagIcon(project.tag)}
                  <span className="text-sm font-medium text-gray-700">{project.tag}</span>
                </div>
                <div className="px-3 py-1.5 bg-smoothBlack text-lightGray text-xs font-semibold rounded-lg">
                  {project.badge}
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg"
                  >
                    <Tag className="h-3 w-3" />
                    {category}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(project.date)}</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ImageGallery images={project.images} projectTitle={project.title} />
        </div>
      </div>

      {/* Project Sections */}
      <div ref={sectionsRef} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          {project.sections.map((section, sectionIndex) => (
            <div key={section.id} className="project-section">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                sectionIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${sectionIndex % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                  {section.cta && (
                    <div>
                      <Link
                        to={section.cta.link}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-carbonGray hover:bg-smoothBlack text-white font-semibold rounded-2xl transition-all duration-200"
                      >
                        <span>{section.cta.text}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Visual Element - Using project images */}
                <div className={`${sectionIndex % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                    {project.images[sectionIndex + 1] ? (
                      <img
                        src={project.images[sectionIndex + 1] || project.images[0]}
                        alt={`${project.title} - ${section.title}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            {getTagIcon(project.tag)}
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">Section {sectionIndex + 1}</h4>
                          <p className="text-sm text-gray-600">{section.title}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay for better text contrast if using image */}
                    {project.images[sectionIndex + 1] && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <StatsSection stats={project.stats} />
      </div>

      {/* Final CTA */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-smoothBlack rounded-3xl p-12 text-lightGray">
            <h2 className="text-3xl font-bold mb-4">
              {project.finalCTA.title}
            </h2>
            <p className="text-lg text-lightGray mb-8 max-w-2xl mx-auto">
              {project.finalCTA.description}
            </p>
            <Link
              to={project.finalCTA.buttonLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-lightGray text-carbonGray font-semibold rounded-xl hover:bg-lightGray/80 transition-all duration-200"
            >
              <span>{project.finalCTA.buttonText}</span>
              <MdRocketLaunch className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <RelatedProjects currentProject={project}/>

      {/* Sticky Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-lg border-t border-gray-200/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/portfolio')}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Back to Projects</span>
            </button>
            
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200">
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;