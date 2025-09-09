import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MonitorSmartphone, Code, Smartphone, Zap, Shield, Rocket} from "lucide-react";
import { Services } from "../../../../../data/services";
import CTATape from "../../../components/CTATape";
import DiscoverServices from "../../../sections/DiscoverServices";
import RelatedProjects from "../../../components/RelatedProject";
import { TapeSection } from "../../../../home/sections/Tape";
import CTASection from "../../../../home/sections/CTASection";

gsap.registerPlugin(ScrollTrigger);

const BuildServices: React.FC = () => {
  // const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  
  const heroRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Get Build category data
  const buildCategory = Services.find(category => category.id === 3);
  const currentService = buildCategory?.items.find(item => item.slug === slug);
  
  useEffect(() => {
    if (!heroRef.current || !techRef.current || !statsRef.current || !sectionsRef.current || !ctaRef.current) return;

    // Hero animations with tech-inspired effects
    const tl = gsap.timeline();
    tl.from(heroRef.current.querySelector('.hero-icon'), { 
      duration: 1, 
      scale: 0, 
      rotation: 360,
      ease: "back.out(2)" 
    })
    .from(heroRef.current.querySelector('.hero-title'), { 
      duration: 1.2, 
      y: 100, 
      opacity: 0, 
      ease: "power3.out" 
    }, "-=0.6")
    .from(heroRef.current.querySelector('.hero-description'), { 
      duration: 0.8, 
      y: 50, 
      opacity: 0, 
      ease: "power2.out" 
    }, "-=0.4")
    .from(heroRef.current.querySelector('.hero-button'), { 
      duration: 0.6, 
      scale: 0.8, 
      opacity: 0, 
      ease: "back.out(1.7)" 
    }, "-=0.2");

    // Tech stack animation with floating effect
    gsap.from(techRef.current.querySelectorAll('.tech-item'), {
      duration: 1,
      y: 80,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: techRef.current,
        start: "top 80%",
        end: "bottom 20%",
      }
    });

    // Add floating animation to tech items
    gsap.to(techRef.current.querySelectorAll('.tech-item'), {
      duration: 3,
      y: -10,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: techRef.current,
        start: "top 80%",
        end: "bottom 20%",
      }
    });

    // Stats with building/scaling effect
    gsap.from(statsRef.current.querySelectorAll('.stat-card'), {
      duration: 1.2,
      scale: 0,
      opacity: 0,
      stagger: 0.15,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 75%",
        end: "bottom 25%",
      }
    });

    // Process sections with building blocks animation
    gsap.from(sectionsRef.current.querySelectorAll('.section-card'), {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionsRef.current,
        start: "top 75%",
        end: "bottom 25%",
      }
    });

    // CTA with rocket launch effect
    gsap.from(ctaRef.current, {
      duration: 1.5,
      y: 150,
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

  // const handleContactClick = () => {
  //   navigate(`/contact?service=${currentService.slug}`);
  // };

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
              
              <div className="hero-icon w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl overflow-hidden flex items-center justify-center">
                <MonitorSmartphone className="w-12 h-12 text-white" />
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
        <div className="space-y-4">
          {[
            { icon: Zap, text: "Platform-Optimized Content" },
            { icon: Code, text: "Clean Code" },
            { icon: Smartphone, text: "Responsive& Performant" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center space-x-3"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <item.icon className="w-6 h-6 text-blue-500" />
              <span className="text-gray-700">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</div>

      {/* Tech Stack Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-lightGray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-carbonBlack mb-6">
              {currentService.sections[2].heading}
            </h2>
            <p className="text-lg text-smoothBlack/80 max-w-3xl mx-auto">
              {currentService.sections[2].description}
            </p>
          </div>
          
          <div ref={techRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="tech-item text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-carbonBlack mb-2">Frontend Excellence</h3>
              <p className="text-smoothBlack text-sm">React, Next.js, Vue.js for dynamic interfaces</p>
            </div>
            
            <div className="tech-item text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-carbonBlack mb-2">Mobile Native</h3>
              <p className="text-smoothBlack text-sm">iOS, Android, and cross-platform solutions</p>
            </div>
            
            <div className="tech-item text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-carbonBlack mb-2">Performance Optimized</h3>
              <p className="text-smoothBlack text-sm">Lightning-fast load times and smooth interactions</p>
            </div>
            
            <div className="tech-item text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-carbonBlack mb-2">Security First</h3>
              <p className="text-smoothBlack text-sm">Enterprise-grade security and data protection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Development Process Showcase */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-lightGray">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-carbonBlack mb-6">
                From Concept to Launch
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our development process is designed for success. We combine agile methodologies 
                with robust testing and continuous integration to deliver products that exceed expectations 
                and drive business growth.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-carbonBlack mb-1">Discovery & Planning</h4>
                    <p className="text-gray-600">Requirements analysis and technical architecture</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-carbonBlack mb-1">Agile Development</h4>
                    <p className="text-gray-600">Iterative development with regular feedback</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-carbonBlack mb-1">Testing & Optimization</h4>
                    <p className="text-gray-600">Comprehensive testing and performance tuning</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl overflow-hidden">
                <img 
                  src="/images/development-process.jpg" 
                  alt="Development Process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
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
              Development Excellence
            </h2>
            <p className="text-lg text-gray-600">
              {currentService.name} performance and delivery metrics
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {currentService.stats.map((stat, index) => (
              <div key={index} className="stat-card text-center">
                <div className="bg-lightGray rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
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
          <RelatedProjects tags={["Build"]} />
          <TapeSection/>
          <CTASection/>

    </div>
  );
};

export default BuildServices;