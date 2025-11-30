import React, { useState, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Play, Pause, ArrowRight } from 'lucide-react';
import Button from '../../../../../components/ui/Button';

interface WhatWeDoProps {
  sectionLabel?: string;
  mainHeading?: string;
  description?: string;
  bulletPoints?: string[];
  conclusionText?: string;
  links?: Array<{
    text: string;
    href?: string;
    onClick?: () => void;
  }>;
  videoUrl?: string;
  videoPoster?: string;
  backgroundColor?: string;
  textColor?: string;
  labelColor?: string;
  className?: string;
  enableAnimations?: boolean;
}

const BrandApproach: React.FC<WhatWeDoProps> = ({
  sectionLabel = "What we do",
  mainHeading = "We are a team of organic media planners",
  description = "",
  bulletPoints = [
    "Defending your position in the market - through industry leading onsite technical and content experience",
    "Growing into new audiences, markets and channels - meeting your consumers at each stage of the journey",
    "And then innovating - in ways your competitors don't even dream of. We do content marketing work the industry copies 3 years from now",
    "We are your strategic growth partners for everything organic",
    "Chasing consumers, not algorithms in an audience-first world"
  ],
  conclusionText = "And that's why Xtoic Studio exists!",
  links = [
    { text: "Our Culture", href: "#culture" }
  ],
  videoUrl = "/assets/brand/Branding.mp4",
  videoPoster = "/assets/brand/Branding_Cover.png",
  backgroundColor = "bg-lightGray",
  textColor = "text-carbonBlack",
  labelColor = "text-carbonGray",
  className = "",
  enableAnimations = true
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const leftColumnVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const rightColumnVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
        delay: 0.2
      }
    }
  };

  const bulletVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const MotionDiv = enableAnimations ? motion.div : 'div';
  const motionProps = enableAnimations 
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        variants: containerVariants
      } 
    : {};

  return (
    <div className={`w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-32 ${backgroundColor} ${className}`}>
      <MotionDiv 
        className="max-w-full mx-auto"
        {...motionProps}
      >
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Column - Video Container */}
          <motion.div
            variants={enableAnimations ? leftColumnVariants : {}}
            className="relative order-2 lg:order-1"
          >
            {/* Video Container with Rounded Edges */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm aspect-[4/3]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={videoPoster}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                muted
                playsInline
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Button - Bottom Right */}
              <button
                onClick={togglePlayPause}
                className="absolute bottom-4 right-4 w-12 h-12 bg-lightGray/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause size={20} className="text-carbonGray group-hover:scale-110 transition-transform" />
                ) : (
                  <Play size={20} className="text-carbonGray ml-0.5 group-hover:scale-110 transition-transform" />
                )}
              </button>

              {/* Optional Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={enableAnimations ? rightColumnVariants : {}}
            className="flex flex-col justify-start space-y-6 sm:space-y-8 lg:space-y-10 order-1 lg:order-2"
          >
            
            {/* Section Label */}
            <div>
              <span className={`text-sm sm:text-base font-medium ${labelColor} tracking-wide`}>
                {sectionLabel}
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight ${textColor}`}>
                {mainHeading}
              </h2>
            </div>

            {/* Description (if provided) */}
            {description && (
              <div>
                <p className={`text-base sm:text-lg ${labelColor} leading-relaxed`}>
                  {description}
                </p>
              </div>
            )}

            {/* Bullet Points */}
            {bulletPoints && bulletPoints.length > 0 && (
              <div className="space-y-4 sm:space-y-5">
                {bulletPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    variants={enableAnimations ? bulletVariants : {}}
                    className="flex items-start gap-3"
                    style={{ 
                      animationDelay: enableAnimations ? `${index * 0.1}s` : undefined 
                    }}
                  >
                    {/* Custom Bullet Point */}
                    <div className="flex-shrink-0 mt-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${textColor === 'text-white' ? 'bg-white' : 'bg-gray-900'}`}></div>
                    </div>
                    <p className={`text-sm sm:text-base ${labelColor} leading-relaxed`}>
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Conclusion Text */}
            {conclusionText && (
              <motion.div
                variants={enableAnimations ? bulletVariants : {}}
                className="pt-2"
              >
                <p className={`text-base sm:text-lg ${textColor} font-medium`}>
                  {conclusionText}
                </p>
              </motion.div>
            )}

            {/* Links */}
            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
                {links.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={enableAnimations ? bulletVariants : {}}
                    className="group"
                  >
                      <Button
                        onClick={link.onClick}
                        title='Our Services'
                        rightIcon={<ArrowRight className='w-5 h-5' />}
                      />
      
                    
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

export default BrandApproach;