import React, { useEffect, useRef, useCallback  } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const PunchSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const setTextRef = useCallback((el: HTMLDivElement | null, index: number) => {
    textRefs.current[index] = el;
  }, []);
  

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRefs.current, { opacity: 0, y: 100, scale: 0.8 });

      gsap.to(textRefs.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.5
      });

      gsap.to(".floating-image", {
        y: "-20px",
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const createTextBlock = (text: string, _index: number, alignment: "left" | "right") => (
    <div
      ref={(el) => setTextRef(el, 0)}
      className={`text-center lg:text-${alignment}`}
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-black">
        {text}
      </h1>
    </div>
  );

  return (
    <div
      ref={containerRef}
      id='next-section'
      className="min-h-screen bg-lightGray text-black flex items-center mb-12  justify-center overflow-hidden relative"
    >
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center text-sm font-medium text-smoothBlack">
            <span className="w-2 h-2 bg-black rounded-full mr-2" />
            Unlocking Intelligence Together
          </span>
        </motion.div>

        {/* Research Themed Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {createTextBlock("PIONEERING", 0, "right")}

          <div className="floating-image relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600">
              <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-black rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {createTextBlock("THOUGHT", 1, "left")}
          {createTextBlock("DRIVEN", 2, "right")}

          <div className="floating-image relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600">
              <div className="absolute inset-0 bg-white/10 flex items-center justify-center">
                <div className="text-white text-xs font-bold bg-black/70 px-2 py-1 rounded">
                  AI FOCUS
                </div>
              </div>
            </div>
          </div>

          {createTextBlock("INNOVATION", 3, "left")}
          {createTextBlock("FOR AI", 4, "right")}

          <div className="floating-image relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400">
              <div className="absolute inset-0 bg-white/30 flex items-center justify-center">
                <div className="w-12 h-8 bg-gradient-to-r from-black to-gray-700 rounded opacity-80" />
              </div>
            </div>
          </div>

          {createTextBlock("RESEARCH", 5, "left")}
        </div>
      </div>

      {/* Ambient black particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-black rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PunchSection;
