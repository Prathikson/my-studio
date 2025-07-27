import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import MinimalHeader from '../../../components/ui/MinimalHeader';

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 'brand',
      title: 'brand',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-500',
      icon: '📷',
      items: [
        'Brand Strategy',
        '360° Creative',
        'Art Direction',
        'Copywriting',
        'Editing',
        'Motion Graphics',
        'DTP'
      ]
    },
    {
      id: 'social',
      title: 'social',
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-400',
      icon: '📱',
      items: [
        'Social Media Strategy',
        'Social Media Creative',
        'TikTok/Social Shorts',
        'Influencer Campaigns',
        'Scheduling Support',
        'Community Management',
        'Social Listening'
      ]
    },
    {
      id: 'build',
      title: 'build',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500',
      icon: '💻',
      items: [
        'Web Development',
        'Frontend Solutions',
        'Backend Systems',
        'E-commerce Platforms',
        'Mobile Applications',
        'API Integration',
        'Performance Optimization'
      ]
    },
    {
      id: 'design',
      title: 'design',
      color: 'from-purple-400 to-pink-400',
      bgColor: 'bg-purple-400',
      icon: '🎨',
      items: [
        'Web Design',
        'Graphic Design',
        'UI/UX Design',
        'Visual Identity',
        'Print Design',
        'Digital Assets',
        'Design Systems'
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(cardsRef.current.filter(Boolean), {
        scale: 1,
        x: 0,
        rotationY: 0,
        transformPerspective: 1000
      });

      // Custom cursor follow
      const handleMouseMove = (e: MouseEvent) => {
        if (cursorRef.current) {
          gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'power2.out'
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

    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 2,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      if (i === index) {
        gsap.to(card, {
          scale: 1.1,
          z: 50,
          duration: 0.4,
          ease: 'back.out(1.7)'
        });
      } else {
        const direction = i < index ? -20 : 20;
        gsap.to(card, {
          x: direction,
          scale: 0.95,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    });
  };

  const handleCardLeave = () => {
    setHoveredCard(null);

    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    cardsRef.current.forEach((card) => {
      if (!card) return;

      gsap.to(card, {
        scale: 1,
        x: 0,
        z: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
  };

  return (
    <div className="min-h-screen bg-lightGray relative overflow-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-black rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      <div ref={containerRef} className="container mx-auto px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <MinimalHeader pillText="Services" titleLine1="Call Us If You Need" />
        </div>

        {/* Cards Container */}
        <div className="flex justify-center items-center gap-4 perspective-1000 flex-wrap">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`relative w-72 h-96 rounded-3xl shadow-xl cursor-none transform-gpu`}
              style={{
                background: `linear-gradient(135deg, ${
                  service.color.includes('emerald')
                    ? '#10b981, #059669'
                    : service.color.includes('blue')
                    ? '#60a5fa, #3b82f6'
                    : service.color.includes('orange')
                    ? '#f97316, #ef4444'
                    : '#a78bfa, #ec4899'
                })`
              }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              {/* Decorative Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-black rounded-full flex items-center justify-center text-2xl transform rotate-12">
                {service.icon}
              </div>

              {/* Decorative stickers */}
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

              {/* Card Content */}
              <div className="p-8 h-full flex flex-col">
                <h2 className="text-4xl font-bold text-white mb-2">
                  {service.title}
                </h2>
                <div className="w-full h-0.5 bg-white mb-6"></div>

                <ul className="space-y-3 flex-1">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-white flex items-center"
                    >
                      <span className="mr-3 text-xl">✦</span>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-20' : ''
                } bg-white`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
