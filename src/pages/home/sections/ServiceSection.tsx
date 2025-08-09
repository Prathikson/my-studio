'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MinimalHeader from '../../../components/ui/MinimalHeader';

const services = [
  {
    id: 'brand',
    title: 'Brand',
    icon: '📷',
    gradient: ['#10b981', '#059669'],
    items: [
      { name: 'Brand Strategy', path: '/services/brand-strategy' },
      { name: '360° Creative', path: '/services/360-creative' },
      { name: 'Art Direction', path: '/services/art-direction' },
      { name: 'Copywriting', path: '/services/copywriting' },
      { name: 'Editing', path: '/services/editing' },
      { name: 'Motion Graphics', path: '/services/motion-graphics' }
    ],
  },
  {
    id: 'social',
    title: 'Social',
    icon: '📱',
    gradient: ['#60a5fa', '#3b82f6'],
    items: [
      { name: 'Social Media Strategy', path: '/services/social-media-strategy' },
      { name: 'TikTok/Social Shorts', path: '/services/tiktok-social-shorts' },
      { name: 'Influencer Campaigns', path: '/services/influencer-campaigns' },
      { name: 'Community Management', path: '/services/community-management' },
    ],
  },
  {
    id: 'build',
    title: 'Build',
    icon: '💻',
    gradient: ['#f97316', '#ef4444'],
    items: [
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'Frontend Solutions', path: '/services/frontend-solutions' },
      { name: 'Mobile Apps', path: '/services/mobile-apps' },
      { name: 'API Integration', path: '/services/api-integration' },
      { name: 'Performance Optimization', path: '/services/performance-optimization' },
      { name: 'Search Engine Optimization (SEO)', path: '/services/seo' }
    ],
  },
  {
    id: 'design',
    title: 'Design',
    icon: '🎨',
    gradient: ['#a78bfa', '#ec4899'],
    items: [
      { name: 'UI/UX Design', path: '/services/ui-ux-design' },
      { name: 'Website Re-Design', path: '/services/website-redesign' },
      { name: 'Visual Identity', path: '/services/visual-identity' },
      { name: 'Print Design', path: '/services/print-design' },
      { name: 'Design Systems', path: '/services/design-systems' },
    ],
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current.filter(Boolean), {
        scale: 1,
        x: 0,
        rotationY: 0,
        transformPerspective: 1000,
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (cursorRef.current) {
          gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'power2.out',
          });
        }
      };

      document.addEventListener('mousemove', handleMouseMove);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (index: number) => {
    if (hoveredItem) return; // Don't animate cards if hovering items
    
    setHoveredCard(index);
    gsap.to(cursorRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: 'back.out(1.7)',
    });

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      if (i === index) {
        gsap.to(card, {
          scale: 1.02,
          z: 50,
          duration: 0.4,
          ease: 'back.out(1.7)',
        });
      } else {
        gsap.to(card, {
          x: i < index ? -20 : 20,
          scale: 0.95,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    });
  };

  const handleCardLeave = () => {
    if (hoveredItem) return; // Don't reset if still hovering items
    
    setHoveredCard(null);
    gsap.to(cursorRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });

    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.to(card, {
        scale: 1,
        x: 0,
        z: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  };

  const handleServiceClick = (path: string, itemKey: string) => {
    setClickedItem(itemKey);
    
    // Add a small delay for click animation
    setTimeout(() => {
      console.log('Navigating to:', path);
      navigate(path);
    }, 150);
  };

  const getItemKey = (serviceId: string, itemName: string) => {
    return `${serviceId}-${itemName}`;
  };

  return (
    <div className="relative bg-lightGray min-h-screen overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%), radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)',
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div ref={containerRef} className="container mx-auto px-8 py-20 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <MinimalHeader pillText="Services" titleLine1="Call Us If You Need" />
          <motion.p 
            className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover our comprehensive range of digital solutions designed to elevate your brand
          </motion.p>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8 perspective-1000">
          {services.map((service, i) => {
            return (
              <motion.div
                key={service.id}
                ref={(el: HTMLDivElement | null) => {
                  if (el) cardsRef.current[i] = el;
                }}
                initial={{ 
                  rotate: Math.random() * 10 - 5,
                  opacity: 0,
                  y: 50
                }}
                animate={{ 
                  rotate: 0,
                  opacity: 1,
                  y: 0
                }}
                transition={{ 
                  delay: i * 0.1,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.02,
                  zIndex: 100,
                }}
                onMouseEnter={() => handleCardHover(i)}
                onMouseLeave={handleCardLeave}
                className="relative w-80 h-96 rounded-3xl shadow-2xl transform-gpu backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${service.gradient[0]}, ${service.gradient[1]})`,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Enhanced Glow Ring */}
                <motion.div
                  className="absolute -inset-1 rounded-3xl opacity-0"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradient[0]}, ${service.gradient[1]})`,
                  }}
                  animate={{
                    opacity: hoveredCard === i ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Enhanced Icon */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-black rounded-full flex items-center justify-center text-2xl text-white shadow-xl"
                  whileHover={{ 
                    scale: 1.05
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: 'linear-gradient(135deg, #000000, #1f1f1f)',
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Enhanced Sparkles */}
                <AnimatePresence>
                  {hoveredCard === i && (
                    <>
                      {service.id === 'social' && (
                        <motion.div 
                          className="absolute -top-2 left-8 w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ duration: 0.4, type: 'spring' }}
                        >
                          <span className="text-sm">✨</span>
                        </motion.div>
                      )}
                      {service.id === 'build' && (
                        <motion.div 
                          className="absolute -top-3 right-16 w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center shadow-lg"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 45 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ duration: 0.4, type: 'spring' }}
                        >
                          <span className="text-lg">⚡</span>
                        </motion.div>
                      )}
                      {service.id === 'design' && (
                        <motion.div 
                          className="absolute -top-2 -left-2 w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center shadow-lg"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: -12 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ duration: 0.4, type: 'spring' }}
                        >
                          <span className="text-lg">💎</span>
                        </motion.div>
                      )}
                    </>
                  )}
                </AnimatePresence>

                {/* Enhanced Content */}
                <div className="p-8 h-full flex flex-col text-white relative z-20">
                  <motion.h2 
                    className="text-4xl font-bold mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h2>
                  
                  <motion.div 
                    className="w-full h-0.5 bg-white/70 mb-6"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  />
                  
                  <div className="space-y-3 flex-1">
                    {service.items.map((item, idx) => {
                      const itemKey = getItemKey(service.id, item.name);
                      const isHovered = hoveredItem === itemKey;
                      const isClicked = clickedItem === itemKey;
                      
                      return (
                        <motion.div
                          key={idx}
                          className="relative z-30"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx, duration: 0.4 }}
                        >
                          <motion.button
                            className="w-full text-left text-sm font-medium flex items-center group cursor-pointer select-none p-2 -m-2 rounded-lg transition-all duration-200"
                            onMouseEnter={() => setHoveredItem(itemKey)}
                            onMouseLeave={() => setHoveredItem(null)}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleServiceClick(item.path, itemKey);
                            }}
                            whileHover={{ 
                              x: 8,
                              backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }}
                            whileTap={{ 
                              scale: 0.95,
                              backgroundColor: 'rgba(255, 255, 255, 0.2)'
                            }}
                            animate={{
                              backgroundColor: isClicked ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0)',
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          >
                            {/* Enhanced Icon */}
                            <motion.span 
                              className="mr-3 text-white/70 group-hover:text-white transition-colors duration-200"
                              animate={{
                                rotate: isHovered ? 180 : 0,
                                scale: isHovered ? 1.3 : 1,
                                color: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'
                              }}
                              transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                            >
                              ✦
                            </motion.span>
                            
                            {/* Enhanced Text with Better Underline */}
                            <span className="relative flex-1">
                              <motion.span 
                                className="inline-block transition-all duration-300"
                                animate={{
                                  color: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
                                  textShadow: isHovered ? '0 0 8px rgba(255, 255, 255, 0.3)' : 'none'
                                }}
                              >
                                {item.name}
                              </motion.span>
                              
                              {/* Multi-layer Enhanced Underline */}
                              <motion.div
                                className="absolute -bottom-1 left-0 h-0.5 bg-white rounded-full"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{
                                  width: isHovered ? '100%' : 0,
                                  opacity: isHovered ? 1 : 0,
                                }}
                                transition={{ 
                                  duration: 0.4, 
                                  ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
                                }}
                              />
                              
                              {/* Glow underline */}
                              <motion.div
                                className="absolute -bottom-1 left-0 h-0.5 bg-white rounded-full blur-sm"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{
                                  width: isHovered ? '100%' : 0,
                                  opacity: isHovered ? 0.6 : 0,
                                }}
                                transition={{ 
                                  duration: 0.4, 
                                  ease: [0.25, 0.46, 0.45, 0.94],
                                  delay: 0.1
                                }}
                              />
                              
                              {/* Subtle background highlight */}
                              <motion.div
                                className="absolute -inset-x-1 -inset-y-0.5 bg-white/10 rounded"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{
                                  opacity: isHovered ? 1 : 0,
                                  scaleX: isHovered ? 1 : 0
                                }}
                                transition={{ duration: 0.2 }}
                              />
                            </span>
                            
                            {/* Enhanced Arrow with Animation */}
                            <motion.div
                              className="flex items-center overflow-hidden"
                              initial={{ width: 0 }}
                              animate={{ width: isHovered ? 24 : 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <motion.span
                                className="text-white/70 group-hover:text-white text-sm"
                                animate={{
                                  x: isHovered ? 0 : -10,
                                  opacity: isHovered ? 1 : 0,
                                  rotate: isHovered ? 0 : -90
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                →
                              </motion.span>
                            </motion.div>
                          </motion.button>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Enhanced Card Effects */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent"
                  animate={{
                    opacity: hoveredCard === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border border-white/20"
                  animate={{
                    opacity: hoveredCard === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced CTA with Pencil Underline */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            className="relative group px-8 py-4 text-carbonGray text-lg font-medium cursor-pointer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10">View All Services</span>
            
            {/* Pencil Stroke Underline */}
            <svg
              className="absolute bottom-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              width="180"
              height="12"
              viewBox="0 0 180 12"
              fill="none"
            >
              <motion.path
                d="M2 8C20 4 40 2 60 5C80 8 100 6 120 4C140 2 160 6 178 8"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                }}
                transition={{
                  pathLength: { duration: 0.8, ease: "easeInOut" },
                  opacity: { duration: 0.3 }
                }}
              />
              <motion.path
                d="M2 8.5C20 4.5 40 2.5 60 5.5C80 8.5 100 6.5 120 4.5C140 2.5 160 6.5 178 8.5"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 0.6,
                }}
                transition={{
                  pathLength: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
                  opacity: { duration: 0.3, delay: 0.1 }
                }}
              />
              
              {/* Pencil tip */}
              <motion.circle
                cx="2"
                cy="8"
                r="2"
                fill="#fbbf24"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                }}
                transition={{ duration: 0.3, delay: 0.6 }}
              />
              <motion.circle
                cx="2"
                cy="8"
                r="1"
                fill="#f59e0b"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                }}
                transition={{ duration: 0.2, delay: 0.7 }}
              />
            </svg>
            
            {/* Subtle highlight on hover */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}