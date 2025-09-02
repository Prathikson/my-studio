'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MinimalHeader from '../../../components/ui/MinimalHeader';
import Button from '../../../components/ui/Button';
import { ChevronRight} from 'lucide-react';
import { Services} from '../../../data/services.ts'

const services = Services

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredCard] = useState<number | null>(null);
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

      <div ref={containerRef} className="container mx-auto px-8 py-20 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <MinimalHeader pillText="Services" titleLine1="Call Us If You Need" />
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
                className="relative w-80 h-96 rounded-3xl shadow-2xl transform-gpu backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${service.gradient[0]}, ${service.gradient[1]})`,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                }}
              >

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
                  {service.emoji}
                </motion.div>

                {/* Enhanced Sparkles */}
                <AnimatePresence>
                  {hoveredCard === i && (
                    <>
                      {service.title === 'social' && (
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
                      {service.title === 'build' && (
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
                      {service.title === 'design' && (
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
                      const itemKey = getItemKey(service.title, item.name);
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
         <Button rightIcon={<ChevronRight className="h-5 w-5"/>} title="View Services" to="/services"/>
        </motion.div>
      </div>
    </div>
  );
}