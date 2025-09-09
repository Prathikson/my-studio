import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palette, Pen, Eye, Layers, Sparkles, MousePointer, Brush } from "lucide-react";
import Button from "../../../../../components/ui/Button";
import { Services } from "../../../../../data/services";
import CTATape from "../../../components/CTATape";
import DiscoverServices from "../../../sections/DiscoverServices";
import RelatedProjects from "../../../components/RelatedProject";
import { TapeSection } from "../../../../home/sections/Tape";
import CTASection from "../../../../home/sections/CTASection";

gsap.registerPlugin(ScrollTrigger);

const DesignServices: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  
  const heroRef = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Get Design category data
  const designCategory = Services.find(category => category.id === 4);
  const currentService = designCategory?.items.find(item => item.slug === slug);
  
  useEffect(() => {
    if (!heroRef.current || !philosophyRef.current || !statsRef.current || !sectionsRef.current || !ctaRef.current) return;

    // Hero animations with artistic flair
    const tl = gsap.timeline();
    tl.from(heroRef.current.querySelector('.hero-icon'), { 
      duration: 1.2, 
      scale: 0, 
      rotation: -270,
      ease: "elastic.out(1, 0.5)" 
    })
    .from(heroRef.current.querySelector('.hero-title'), { 
      duration: 1, 
      y: 100, 
      opacity: 0, 
      ease: "power3.out" 
    }, "-=0.8")
    .from(heroRef.current.querySelector('.hero-description'), { 
      duration: 0.8, 
      y: 50, 
      opacity: 0, 
      ease: "power2.out" 
    }, "-=0.5")
    .from(heroRef.current.querySelector('.hero-button'), { 
      duration: 0.6, 
      scale: 0.8, 
      opacity: 0, 
      ease: "back.out(1.7)" 
    }, "-=0.3");

    // Philosophy section with creative morphing animations
    gsap.from(philosophyRef.current.querySelectorAll('.philosophy-item'), {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: philosophyRef.current,
        start: "top 80%",
        end: "bottom 20%",
      }
    });

    // Add subtle rotation animation to philosophy items
    gsap.to(philosophyRef.current.querySelectorAll('.philosophy-icon'), {
      duration: 6,
      rotation: 360,
      ease: "none",
      repeat: -1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: philosophyRef.current,
        start: "top 80%",
        end: "bottom 20%",
      }
    });

    // Stats with creative reveal
    gsap.from(statsRef.current.querySelectorAll('.stat-card'), {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 75%",
        end: "bottom 25%",
      }
    });

    // Process sections with design-focused animations
    gsap.from(sectionsRef.current.querySelectorAll('.section-card'), {
      duration: 1.2,
      y: 80,
      opacity: 0,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionsRef.current,
        start: "top 75%",
        end: "bottom 25%",
      }
    });

    // CTA with sparkle effect
    gsap.from(ctaRef.current, {
      duration: 1.2,
      scale: 0.9,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  if (!currentService) {
    return <div>Service not found</div>;
  }

  const handleContactClick = () => {
    navigate(`/contact`);
  };

      const items = [
  { type: 'text', content: 'Growth strategy' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
  { type: 'text', content: 'Starts Here' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
      ];
  return (
    <div className="min-h-screen bg-lightGray">
      {/* Hero Section */}
      <motion.header
        ref={heroRef}
        className="w-full bg-lightGray mt-20 py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
              <h1 className="hero-title text-6xl sm:text-7xl lg:text-8xl font-semibold text-carbonBlack tracking-tight">
                {currentService.name.split(' ')[0]}
              </h1>
              
              <div className="hero-icon w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl overflow-hidden flex items-center justify-center">
                <Palette className="w-12 h-12 text-white" />
              </div>
              
              {currentService.name.split(' ').slice(1).join(' ') && (
                <h1 className="hero-title text-6xl sm:text-7xl lg:text-8xl font-semibold text-carbonBlack tracking-tight">
                  {currentService.name.split(' ').slice(1).join(' ')}
                </h1>
              )}
            </div>

            <div className="max-w-xl text-center lg:text-right">
              <p className="hero-description text-carbonBlack text-lg font-medium mb-8 leading-relaxed">
                {currentService.heroDescription}
              </p>
              <div className="hero-button">
                <Button title="Create Something Beautiful" onClick={handleContactClick} />
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Design Philosophy Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-lightGray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-carbonBlack mb-6">
              Design That Connects
            </h2>
            <p className="text-lg text-smoothBlack max-w-3xl mx-auto">
              Great design isn't just about aesthetics—it's about creating meaningful experiences 
              that resonate with users and drive business results.
            </p>
          </div>
          
          <div ref={philosophyRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="philosophy-item text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-purple-600 philosophy-icon" />
              </div>
              <h3 className="text-xl font-bold text-carbonBlack mb-2">User-Centered Vision</h3>
              <p className="text-smoothBlack text-sm">Every design decision starts with understanding user needs</p>
            </div>
            
            <div className="philosophy-item text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brush className="w-8 h-8 text-pink-600 philosophy-icon" />
              </div>
              <h3 className="text-xl font-bold text-carbonBlack mb-2">Creative Excellence</h3>
              <p className="text-smoothBlack text-sm">Pushing creative boundaries while maintaining usability</p>
            </div>
            
            <div className="philosophy-item text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-indigo-600 philosophy-icon" />
              </div>
              <h3 className="text-xl font-bold text-carbonBlack mb-2">Systematic Approach</h3>
              <p className="text-smoothBlack text-sm">Building scalable design systems for consistency</p>
            </div>
            
            <div className="philosophy-item text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MousePointer className="w-8 h-8 text-amber-600 philosophy-icon" />
              </div>
              <h3 className="text-xl font-bold text-carbonBlack mb-2">Interactive Design</h3>
              <p className="text-smoothBlack text-sm">Creating engaging interactions that delight users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Creative Process Showcase */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-lightGray">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl flex items-center justify-center">
                    <Pen className="w-8 h-8 text-purple-700" />
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl flex items-center justify-center">
                    <Brush className="w-6 h-6 text-pink-700" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-video bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-indigo-700" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl flex items-center justify-center">
                    <Layers className="w-8 h-8 text-amber-700" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-teal-200 to-teal-300 rounded-2xl flex items-center justify-center">
                    <MousePointer className="w-8 h-8 text-teal-700" />
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-rose-200 to-rose-300 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-rose-700" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
                <Palette className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-carbonBlack mb-6">
                Design That Tells Your Story
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every brand has a unique story, and every user has specific needs. Our design process 
                bridges these two worlds, creating visual experiences that communicate your message 
                while solving real user problems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-700">Brand-Aligned Creativity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-700">User Research-Driven Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MousePointer className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-700">Interactive Prototyping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-lightGray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-carbonBlack mb-4">
              Design Impact Metrics
            </h2>
            <p className="text-lg text-gray-600">
              Measuring the success of our {currentService.name.toLowerCase()} solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {currentService.stats.map((stat, index) => (
              <div key={index} className="stat-card text-center">
                <div className="bg-lightGray rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-purple-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-carbonBlack mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div ref={sectionsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-lightGray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-carbonBlack mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600">
              From concept to final design - our systematic approach to {currentService.name.toLowerCase()}
            </p>
          </div>
          
          <div className="space-y-20">
            {currentService.sections.map((section, index) => (
              <div key={index} className="section-card">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-purple-600 font-bold text-lg">{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-carbonBlack">
                        {section.heading}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {section.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Palette className="w-5 h-5 text-purple-500" />
                      <span className="text-sm text-gray-500">Creative excellence guaranteed</span>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden">
                        <img 
                          src={currentService.images[index]?.src || '/images/design-placeholder.jpg'} 
                          alt={section.heading}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                        <Brush className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    <CTATape items={items}  speed={60}/>
        <DiscoverServices  />
          <RelatedProjects tags={["Build"]} />
          <TapeSection/>
          <CTASection/>
      
    </div>
  );
};

export default DesignServices;