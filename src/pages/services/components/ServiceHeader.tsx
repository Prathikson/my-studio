import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

const ServiceHeader: React.FC = () => {
  return (
    <motion.header
      className="w-full bg-lightGray mt-20 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left side - Services heading with avatar */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <motion.h1
            className="text-6xl sm:text-6xl lg:text-8xl font-semibold text-carbonBlack tracking-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our
          </motion.h1>

          {/* Avatar placeholder */}
          <motion.div
            className="w-20 h-20 bg-lightGray rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-400 rounded-md"></div>
          </motion.div>

          <motion.h1
            className="text-6xl sm:text-6xl lg:text-8xl font-semibold text-carbonBlack tracking-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Services
          </motion.h1>
        </div>

        {/* Right side - Description and CTA */}
        <motion.div
          className="max-w-xl text-center lg:text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-carbonBlack text-base sm:text-lg font-medium mb-6 leading-relaxed">
            We push users along the funnel through
            <br className="hidden sm:block" />
            performance driven content marketing
          </p>
          <Button title="Let's Talk" />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default ServiceHeader;
