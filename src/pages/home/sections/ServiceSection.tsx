'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import MinimalHeader from '../../../components/ui/MinimalHeader';

const services = [
  {
    id: 'brand',
    title: 'Brand',
    icon: '📷',
    gradient: ['#10b981', '#059669'],
    items: [
      'Brand Strategy',
      '360° Creative',
      'Art Direction',
      'Copywriting',
      'Editing',
      'Motion Graphics',
      'DTP',
    ],
  },
  {
    id: 'social',
    title: 'Social',
    icon: '📱',
    gradient: ['#60a5fa', '#3b82f6'],
    items: [
      'Social Media Strategy',
      'TikTok/Social Shorts',
      'Influencer Campaigns',
      'Community Management',
    ],
  },
  {
    id: 'build',
    title: 'Build',
    icon: '💻',
    gradient: ['#f97316', '#ef4444'],
    items: [
      'Web Development',
      'Frontend Solutions',
      'Mobile Apps',
      'API Integration',
      'Performance Optimization',
    ],
  },
  {
    id: 'design',
    title: 'Design',
    icon: '🎨',
    gradient: ['#a78bfa', '#ec4899'],
    items: [
      'UI/UX Design',
      'Visual Identity',
      'Print Design',
      'Design Systems',
    ],
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    setHoveredCard(index);
    gsap.to(cursorRef.current, {
      scale: 2,
      duration: 0.3,
      ease: 'back.out(1.7)',
    });

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      if (i === index) {
        gsap.to(card, {
          scale: 1.1,
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

  return (
    <div className="relative bg-lightGray min-h-screen overflow-hidden">


      <div ref={containerRef} className="container mx-auto px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <MinimalHeader pillText="Services" titleLine1="Call Us If You Need" />
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8 perspective-1000">
          {services.map((service, i) => {
            return (
              <motion.div
                key={service.id}
ref={(el: HTMLDivElement | null) => {
  if (el) cardsRef.current[i] = el;
}}
                initial={{ rotate: Math.random() * 10 - 5 }}
                whileHover={{
                  rotate: 0,
                  scale: 1.07,
                  zIndex: 100,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onMouseEnter={() => handleCardHover(i)}
                onMouseLeave={handleCardLeave}
                className="relative w-80 h-96 rounded-3xl shadow-xl transform-gpu"
                style={{
                  background: `linear-gradient(135deg, ${service.gradient[0]}, ${service.gradient[1]})`,
                }}
              >
                {/* Icon */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-black rounded-full flex items-center justify-center text-2xl rotate-12 text-white">
                  {service.icon}
                </div>

                {/* Bonus sparkles */}
                {service.id === 'social' && (
                  <div className="absolute -top-2 left-8 w-12 h-12 bg-emerald-300 rounded-full flex items-center justify-center transform -rotate-12">
                    <span className="text-sm">✨</span>
                  </div>
                )}
                {service.id === 'build' && (
                  <div className="absolute -top-3 right-16 w-14 h-14 bg-blue-300 rounded-full flex items-center justify-center transform rotate-45">
                    <span className="text-lg">⚡</span>
                  </div>
                )}
                {service.id === 'design' && (
                  <div className="absolute -top-2 -left-2 w-12 h-12 bg-pink-300 rounded-lg flex items-center justify-center transform -rotate-12">
                    <span className="text-lg">💎</span>
                  </div>
                )}

                {/* Content */}
                <div className="p-8 h-full flex flex-col text-white">
                  <h2 className="text-4xl font-bold mb-2">{service.title}</h2>
                  <div className="w-full h-0.5 bg-white mb-4" />
                  <ul className="space-y-2 flex-1">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-sm font-medium flex">
                        <span className="mr-2">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-white opacity-0 transition-opacity duration-300 ${
                    hoveredCard === i ? 'opacity-20' : ''
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
