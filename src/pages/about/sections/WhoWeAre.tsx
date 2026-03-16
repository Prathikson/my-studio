import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface WhoWeAreProps {
  sectionLabel?: string;
  mainHeading?: string;
  description?: string;
  links?: Array<{
    text: string;
    href?: string;
    onClick?: () => void;
  }>;
  backgroundColor?: string;
  textColor?: string;
  labelColor?: string;
  className?: string;
  enableAnimations?: boolean;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({
  sectionLabel = "Who Are We",
  mainHeading = "A creative powerhouse crafting digital excellence for bold brands and ambitious startups",
  description = "",
  links = [
    { text: "Our Works", href: "/portfolio" },
    { text: "Our Services", href: "/services" }
  ],
  backgroundColor = "bg-lightGray",
  textColor = "text-carbonBlack",
  labelColor = "text-smoothBlack",
  className = "",
  enableAnimations = true
}) => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const leftColumnVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const rightColumnVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
        delay: 0.2
      }
    }
  };

  const linkVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const MotionDiv = enableAnimations ? motion.div : 'div';
  const motionProps = enableAnimations 
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        variants: containerVariants
      } 
    : {};

  return (
    <div className={`w-full h-[400px] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-4 ${backgroundColor} ${className}`}>
      <MotionDiv 
        className="max-w-7xl mx-auto"
        {...motionProps}
      >
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column - Section Label */}
          <motion.div
            variants={enableAnimations ? leftColumnVariants : {}}
            className="flex flex-col justify-center"
          >
            <h3 className={`text-xl sm:text-5xl font-semibold ${labelColor} tracking-normal`}>
              {sectionLabel}
            </h3>
          </motion.div>

          {/* Right Column - Main Content */}
          <motion.div
            variants={enableAnimations ? rightColumnVariants : {}}
            className="flex flex-col justify-start space-y-8 lg:space-y-12 "
          >
            
            {/* Main Heading */}
            <div>
              <h1 className={`text-3xl justify-start items-start sm:text-3xl lg:text-3xl xl:text-4xl font-regular leading-tight ${textColor}`}>
                {mainHeading}
              </h1>
            </div>

            {/* Description (if provided) */}
            {description && (
              <div>
                <p className={`text-lg sm:text-xl ${labelColor} leading-relaxed max-w-2xl`}>
                  {description}
                </p>
              </div>
            )}

            {/* Links Container */}
            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-8 sm:gap-12 pt-4">
                {links.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={enableAnimations ? linkVariants : {}}
                    whileHover={enableAnimations ? { 
                      x: 5,
                      transition: { duration: 0.2 }
                    } : {}}
                    className="group"
                  >
                    {link.href ? (
                      <a
                        href={link.href}
                        className={`inline-flex items-center text-sm sm:text-base font-medium ${textColor} hover:opacity-70 transition-all duration-300 gap-2 group-hover:gap-3`}
                      >
                        <span className="relative">
                          {link.text}
                          <span className="absolute left-0 -bottom-1 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ArrowRight 
                          size={14} 
                          className="transition-transform duration-300 group-hover:translate-x-1" 
                        />
                      </a>
                    ) : (
                      <button
                        onClick={link.onClick}
                        className={`inline-flex items-center text-sm sm:text-base font-medium ${textColor} hover:opacity-70 transition-all duration-300 gap-2 group-hover:gap-3`}
                      >
                        <span className="relative">
                          {link.text}
                          <span className="absolute left-0 -bottom-1 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ArrowRight 
                          size={14} 
                          className="transition-transform duration-300 group-hover:translate-x-1" 
                        />
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </MotionDiv>
    </div>
  );
};

export default WhoWeAre;