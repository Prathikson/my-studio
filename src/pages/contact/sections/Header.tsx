import React, { useRef} from 'react';
import { motion, type Variants} from 'framer-motion';

interface OurHeroProps {
  topText?: string;
  bottomText?: string;
  leftText?: string;
  rightText?: string;
  imageUrl?: string;
  imageAlt?: string;
  description?: string;
  textSize?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  teamImages?: string[];
  enableMouseSpawn?: boolean;
}


const Header: React.FC<OurHeroProps> = ({
  topText = "Nice to",
  leftText = "",
  rightText = "",
  imageUrl = "/icon_4.svg",
  imageAlt = "Profile image",
  description = "If you were heading where we're heading, you'd Rise at Seven too",
  textSize = 'xl',
  className = "",
}) => {
  // State for spawned images
  const containerRef = useRef<HTMLDivElement>(null);


  // Text size configurations
  const textSizes = {
    sm: {
      main: 'text-4xl md:text-6xl lg:text-7xl',
      description: 'text-sm md:text-base',
      spacing: 'space-y-2'
    },
    md: {
      main: 'text-5xl md:text-7xl lg:text-8xl',
      description: 'text-base md:text-lg',
      spacing: 'space-y-4'
    },
    lg: {
      main: 'text-6xl md:text-8xl lg:text-9xl',
      description: 'text-lg md:text-xl',
      spacing: 'space-y-6'
    },
    xl: {
      main: 'text-7xl md:text-9xl lg:text-[12rem]',
      description: 'text-xl md:text-2xl',
      spacing: 'space-y-8'
    }
  };

  const currentSize = textSizes[textSize];


  const textVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -5
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const descriptionVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      className={`relative max-h-screen h-[200px] lg:h-[500px] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-lightGray overflow-hidden ${className}`}
      initial="hidden"
      animate="visible"
    >
     
      {/* Main Content Container */}
      <div className={`w-full max-w-6xl mx-auto text-center ${currentSize.spacing}`}>

        

        {/* Top Text */}
        <motion.div variants={textVariants}>
          <h1 className={`font-bold text-carbonBlack leading-tight uppercase ${currentSize.main}`}>
            {topText}
          </h1>
        </motion.div>

        {/* Image and Bottom Text Row */}
        <div className="relative flex flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6 xl:gap-8">
          
          {/* Bottom Text - "meet" (left side) */}
          <motion.div 
            className="flex-1 text-right"
            variants={textVariants}
          >
            <h1 className={`font-bold text-carbonBlack leading-tight uppercase ${currentSize.main}`}>
              {leftText}
            </h1>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="flex-shrink-0 mx-2 sm:mx-4"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Bottom Text - "you" (right side) */}
          <motion.div 
            className="flex-1 text-left"
            variants={textVariants}
          >
            <h1 className={`font-bold text-carbonBlack leading-tight uppercase ${currentSize.main}`}>
              {rightText}
            </h1>
          </motion.div>
        </div>



        {/* Description */}
        {description && (
          <motion.div 
            className="mt-8 lg:mt-16 max-w-md mx-auto"
            variants={descriptionVariants}
          >
            <p className={`text-smoothBlack leading-relaxed ${currentSize.description}`}>
              {description}
            </p>
          </motion.div>
        )}
      </div>

    </motion.div>
  );
};

export default Header;