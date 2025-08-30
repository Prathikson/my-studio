import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[400px] mb-10 flex flex-col items-center justify-center text-center px-6 py-20 bg-lightGray overflow-hidden">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-7xl xl:text-9xl leading-tight mb-10 text-carbonBlack"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="block font-bold tracking-tight">
          Let’s Make Your Vision
        </span>
        <span className="block font-medium tracking-tight">
          Come To Life
        </span>
      </motion.h1>

      {/* CTA Button */}
      <motion.button
        onClick={() => navigate('/contact')}
        className="group relative px-10 py-4 rounded-2xl font-semibold text-lg uppercase tracking-wide 
                   bg-carbonGray text-lightGray transition-all duration-300 flex items-center gap-3
                   shadow-[0_0_20px_rgba(0,113,254,0.5)] hover:bg-lightGray hover:text-carbonBlack"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        whileHover={{
          boxShadow: '0px 0px 35px rgba(0,113,254,0.9)',
        }}
        whileTap={{ scale: 0.97 }}
      >
        Book a Call
        <Calendar className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
      </motion.button>
    </div>
  );
};

export default CTASection;
