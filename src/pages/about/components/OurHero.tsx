import React, { useState, useRef, useCallback } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';

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

interface SpawnedImage {
  id: string;
  x: number;
  y: number;
  imageUrl: string;
  timestamp: number;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

const OurHero: React.FC<OurHeroProps> = ({
  topText = "Nice to",
  leftText = "",
  rightText = "",
  imageUrl = "/icon_1.svg",
  imageAlt = "Profile image",
  description = "If you were heading where we're heading, you'd Rise at Seven too",
  textSize = 'xl',
  className = "",
  teamImages = [
    "/icon_2.svg", // Portrait
    "icon_3.svg", // Landscape
    "icon_4.svg", // Landscape
    "icon_5.svg", // Landscape

  ],
  enableMouseSpawn = true
}) => {
  // State for spawned images
  const [spawnedImages, setSpawnedImages] = useState<SpawnedImage[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnTime = useRef<number>(0);
  const imageIndex = useRef<number>(0);

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

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

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

  const spawnedImageVariants: Variants = {
    initial: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -10
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "backOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.3,
      rotate: 10,
      transition: {
        duration: 0.2
      }
    }
  };

  // Function to detect image aspect ratio
  const detectAspectRatio = useCallback((imageUrl: string): 'portrait' | 'landscape' | 'square' => {
    // Extract dimensions from URL if available (Unsplash format)
    const urlMatch = imageUrl.match(/[?&]w=(\d+).*[?&]h=(\d+)/);
    if (urlMatch) {
      const width = parseInt(urlMatch[1]);
      const height = parseInt(urlMatch[2]);
      const ratio = width / height;
      
      if (ratio > 1.1) return 'landscape';
      if (ratio < 0.9) return 'portrait';
      return 'square';
    }
    
    // Default fallback - cycle through different ratios
    const index = imageIndex.current % 3;
    return index === 0 ? 'portrait' : index === 1 ? 'landscape' : 'square';
  }, []);

  // Handle mouse movement to spawn images
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableMouseSpawn || !containerRef.current) return;

    const now = Date.now();
    const timeSinceLastSpawn = now - lastSpawnTime.current;

    // Only spawn if enough time has passed (throttling)
    if (timeSinceLastSpawn < 200) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Get random team image
    const randomImageUrl = teamImages[imageIndex.current % teamImages.length];
    const aspectRatio = detectAspectRatio(randomImageUrl);
    imageIndex.current++;

    // Calculate offset based on aspect ratio for centering
    let offsetX = 80; // Default for portrait
    let offsetY = 100;
    
    if (aspectRatio === 'landscape') {
      offsetX = 100;
      offsetY = 75;
    } else if (aspectRatio === 'square') {
      offsetX = 90;
      offsetY = 90;
    }

    const newImage: SpawnedImage = {
      id: `${now}-${Math.random()}`,
      x: x - offsetX, // Center the image on cursor
      y: y - offsetY, // Center the image on cursor
      imageUrl: randomImageUrl,
      timestamp: now,
      aspectRatio
    };

    setSpawnedImages(prev => [...prev, newImage]);
    lastSpawnTime.current = now;

    // Remove image after 2 seconds
    setTimeout(() => {
      setSpawnedImages(prev => prev.filter(img => img.id !== newImage.id));
    }, 2000);
  }, [enableMouseSpawn, teamImages, detectAspectRatio]);

  // Clean up old images periodically
  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setSpawnedImages(prev => prev.filter(img => (now - img.timestamp) < 2100));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className={`relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-lightGray overflow-hidden ${className}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      onMouseMove={handleMouseMove}
    >
      {/* Spawned Team Images */}
      <AnimatePresence>
        {spawnedImages.map((img) => {
          // Dynamic classes based on aspect ratio
          const getImageClasses = (aspectRatio: string | undefined) => {
            switch (aspectRatio) {
              case 'portrait':
                return 'w-32 h-40 sm:w-40 sm:h-50 md:w-44 md:h-56 lg:w-48 lg:h-60'; // 4:5 ratio
              case 'landscape':
                return 'w-40 h-30 sm:w-50 sm:h-40 md:w-56 md:h-44 lg:w-60 lg:h-48'; // 5:4 ratio
              case 'square':
              default:
                return 'w-36 h-36 sm:w-45 sm:h-45 md:w-50 md:h-50 lg:w-54 lg:h-54'; // 1:1 ratio
            }
          };

          return (
            <motion.div
              key={img.id}
              className="absolute pointer-events-none z-10"
              style={{
                left: img.x,
                top: img.y,
              }}
              variants={spawnedImageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="relative group">
                <img
                  src={img.imageUrl}
                  alt="Team member"
                  className={`${getImageClasses(img.aspectRatio)} object-cover rounded-3xl shadow-2xl border-3 border-white transition-all duration-300`}
                  style={{ 
                    filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))'
                  }}
                  loading="lazy"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Custom Cursor (when mouse spawn is enabled) */}
      {enableMouseSpawn && (
        <motion.div
          className="fixed pointer-events-none z-50 w-4 h-4 bg-gray-800 rounded-full mix-blend-difference"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: 0,
            top: 0,
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
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

export default OurHero;