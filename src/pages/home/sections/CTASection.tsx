import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Calendar } from 'lucide-react';

const CTASection: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 200 });

  const rotateX = useTransform(smoothMouseY, [-200, 200], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-200, 200], [-8, 8]);


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    container?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div 
      className="min-h-[400px] mb-10 bg-lightGray flex items-center justify-center px-4 md:px-12"
    >
      {/* Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl bg-smoothBlack backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden px-12 md:px-24 py-12"
      >
        {/* Contained background floral parallax */}
       

        {/* Scattered light particles contained */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-appleBlue/50 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Main content */}
        <motion.div
          className="relative z-10 text-center"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <motion.h1
            className="text-3xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Unlock 30 Minutes to
            <br />
            <span className="font-normal">Dream Together</span>
          </motion.h1>

          <motion.p
            className="text-sm md:text-lg text-lightGray mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Join us for a 30-minute conversation where we explore your ideas,
            collaborate on possibilities, and shape your vision into reality!
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              onClick={() => navigate('/contact')}
              className="group relative hover:bg-appleBlue hover:text-lightGray px-8 py-4 rounded-2xl font-medium text-sm tracking-wider uppercase bg-lightGray text-carbonBlack transition-all duration-300 flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              BOOK A CALL
              <Calendar className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
