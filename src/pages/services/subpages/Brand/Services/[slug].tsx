import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparklesIcon, TrendingUp, Users, Target, Award } from "lucide-react";
import Button from "../../../../../components/ui/Button";
import { Services } from "../../../../../data/services";
import CTATape from "../../../components/CTATape";
import DiscoverServices from "../../../sections/DiscoverServices";
import RelatedProjects from "../../../components/RelatedProject";
import { TapeSection } from "../../../../home/sections/Tape";
import CTASection from "../../../../home/sections/CTASection";

gsap.registerPlugin(ScrollTrigger);

const BrandServices: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Get Brand category data
  const brandCategory = Services.find(category => category.id === 1);
  const currentService = brandCategory?.items.find(item => item.slug === slug);
  
  useEffect(() => {
    if (!heroRef.current || !statsRef.current || !sectionsRef.current || !ctaRef.current) return;

    // Hero animations
    const tl = gsap.timeline();
    tl.from(heroRef.current.querySelector('.hero-title'), { 
      duration: 1, 
      y: 100, 
      opacity: 0, 
      ease: "power3.out" 
    })
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

    // Stats animation
    gsap.from(statsRef.current.querySelectorAll('.stat-card'), {
      duration: 0.8,
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
        end: "bottom 20%",
      }
    });

    // Sections animation
    gsap.from(sectionsRef.current.querySelectorAll('.section-card'), {
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionsRef.current,
        start: "top 75%",
        end: "bottom 25%",
      }
    });

    // CTA animation
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
              
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl overflow-hidden flex items-center justify-center">
                <SparklesIcon className="w-12 h-12 text-white" />
              </div>
              
              {currentService.name.split(' ').length > 1 && (
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
                <Button title="Get Started" onClick={handleContactClick} />
              </div>
            </div>
          </div>
        </div>
      </motion.header>



      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-lightGray">
  <div className="max-w-full mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Images Showcase */}
      <motion.div 
        className="relative w-full"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <motion.img 
              src="/images/showcase1.jpg"
              alt="Creative work 1"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img 
              src="/images/showcase2.jpg"
              alt="Creative work 2"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
          <div className="space-y-6 pt-10">
            <motion.img 
              src="/images/showcase3.jpg"
              alt="Creative work 3"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img 
              src="/images/showcase4.jpg"
              alt="Creative work 4"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </div>
      </motion.div>
      
      {/* Text Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-carbonBlack mb-6">
          {currentService.sections[0].heading}
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {currentService.sections[0].description}
        </p>
    
      </motion.div>

    </div>
  </div>
</div>

      {/* Brand Story Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-lightGray">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-carbonBlack mb-6">
                {currentService.sections[1].heading}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {currentService.sections[1].description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Strategic Brand Positioning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Audience-Centric Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Measurable Results</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-3xl overflow-hidden">
                <img 
                  src="/images/brand-excellence.jpg" 
                  alt="Brand Excellence"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-2xl flex items-center justify-center">
                <Award className="w-16 h-16 text-white" />
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
              Proven Results
            </h2>
            <p className="text-lg text-gray-600">
              Our {currentService.name.toLowerCase()} delivers measurable impact
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {currentService.stats.map((stat, index) => (
              <div key={index} className="stat-card text-center">
                <div className="bg-lightGray rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-green-500 mb-2">
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
    <CTATape items={items}  speed={60}/>
        <DiscoverServices  />
          <RelatedProjects tags={["Branding"]} />
          <TapeSection/>
          <CTASection/>
    </div>
  );
};

export default BrandServices;