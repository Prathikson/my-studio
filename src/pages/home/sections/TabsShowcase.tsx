"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import gsap from "gsap";

export type TabType = {
  key: string;
  label: string;
  shortcut: string;
  title: string;
  description: string;
  imageUrl?: string;
};

type TabsShowcaseProps = {
  tabs?: TabType[];
  defaultTabKey?: string;
};

// Image preloader hook
const useImagePreloader = (imageUrls: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]));
          resolve();
        };
        img.onerror = () => resolve(); // Continue even if image fails
        img.src = src;
      });
    };

    const preloadAllImages = async () => {
      const validUrls = imageUrls.filter(url => url && url.trim() !== '');
      await Promise.allSettled(validUrls.map(preloadImage));
      setIsLoading(false);
    };

    if (imageUrls.length > 0) {
      preloadAllImages();
    } else {
      setIsLoading(false);
    }
  }, [imageUrls]);

  return { loadedImages, isLoading };
};

// Optimized Image component with lazy loading and error handling
const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  onLoad 
}: { 
  src: string; 
  alt: string; 
  className: string; 
  isLoaded: boolean;
  onLoad?: () => void;
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setImageLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  if (imageError) {
    return (
      <div className={`${className} bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center`}>
        <div className="text-gray-500 text-center p-8">
          <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Loading skeleton */}
      {!imageLoaded && (
        <div className={`${className} bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse flex items-center justify-center`}>
          <div className="text-gray-400 text-center">
            <svg className="w-12 h-12 mx-auto mb-2 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-xs">Loading...</p>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading="eager" // Load immediately for better UX
        decoding="async"
        draggable={false}
        style={{
          position: imageLoaded ? 'relative' : 'absolute',
          top: imageLoaded ? 'auto' : 0,
          left: imageLoaded ? 'auto' : 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export const TabsShowcase = ({
  tabs = defaultTabs,
  defaultTabKey = "branding", // Fixed default key
}: TabsShowcaseProps) => {
  const [activeTabKey, setActiveTabKey] = useState<string>(defaultTabKey);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Memoize active tab calculation
  const activeTab = useMemo(() => 
    tabs.find((tab) => tab.key === activeTabKey) || tabs[0], 
    [tabs, activeTabKey]
  );

  // Extract and preload all image URLs
  const imageUrls = useMemo(() => 
    tabs.map(tab => tab.imageUrl).filter((url): url is string => !!url), 
    [tabs]
  );

  const { loadedImages } = useImagePreloader(imageUrls);

  // Memoize keyboard handler
  const keyboardHandler = useCallback((e: KeyboardEvent) => {
    for (const tab of tabs) {
      const [mod, rawKey] = tab.shortcut.toLowerCase().split(" + ");
      const keyCodeMap: Record<string, string> = {
        "1": "Digit1", "2": "Digit2", "3": "Digit3", "4": "Digit4", "5": "Digit5",
        "6": "Digit6", "7": "Digit7", "8": "Digit8", "9": "Digit9", "0": "Digit0",
      };
      const expectedCode = keyCodeMap[rawKey] || `Key${rawKey.toUpperCase()}`;
      const isMatch =
        ((mod === "shift" && e.shiftKey) ||
          (mod === "ctrl" && e.ctrlKey) ||
          (mod === "alt" && e.altKey)) &&
        e.code === expectedCode;

      if (isMatch) {
        e.preventDefault();
        setActiveTabKey(tab.key);
        break;
      }
    }
  }, [tabs]);

  // Initialize section animation
  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  // Image transition animation
  useEffect(() => {
    if (imageRef.current && loadedImages.has(activeTab.imageUrl || '')) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeTabKey, loadedImages, activeTab.imageUrl]);

  // Keyboard shortcuts
  useEffect(() => {
    window.addEventListener("keydown", keyboardHandler);
    return () => window.removeEventListener("keydown", keyboardHandler);
  }, [keyboardHandler]);

  // Memoize tab buttons to prevent unnecessary re-renders
  const tabButtons = useMemo(() => 
    tabs.map((tab) => {
      const isActive = activeTabKey === tab.key;
      return (
        <motion.button
          key={tab.key}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setActiveTabKey(tab.key)}
          className={`relative px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg flex items-center gap-2 tracking-wide transition-all duration-250 border
            ${
              isActive
                ? "bg-white text-smoothBlack border-white shadow-lg"
                : "bg-lightGray text-smoothBlack border-transparent hover:bg-gray-300"
            }`}
        >
          <AnimatePresence>
            {isActive && (
              <motion.div
                key="highlight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-appleBlue via-purple-500 to-zoroRed shadow-md filter blur-md"
                style={{ zIndex: -1 }}
              />
            )}
          </AnimatePresence>
          <span className="bg-white text-black text-[10px] px-1.5 py-0.5 rounded font-mono">
            {tab.shortcut}
          </span>
          {tab.label}
        </motion.button>
      );
    }),
    [tabs, activeTabKey]
  );

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-[95vw] mx-auto bg-gradient-to-tr from-[carbonGray] to-[smoothBlack] rounded-3xl py-14 px-4 sm:px-6 md:px-16 mt-16 md:mt-20 mb-24 overflow-hidden"
    >
      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-lightGray rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Text & Tabs */}
        <div className="flex flex-col justify-center w-full">
          <LayoutGroup>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              {tabButtons}
            </div>
          </LayoutGroup>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.key}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-full"
            >
              <motion.h2
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight text-white drop-shadow-lg"
              >
                {activeTab.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-sm sm:text-base leading-relaxed"
              >
                {activeTab.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Optimized Image */}
        <motion.div
          ref={imageRef}
          key={activeTab.imageUrl}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full rounded-3xl overflow-hidden shadow-xl"
        >
          {activeTab.imageUrl && (
            <OptimizedImage
              src={activeTab.imageUrl}
              alt={activeTab.title}
              className="w-full h-48 sm:h-64 md:h-[70vh] object-fill rounded-3xl"
              isLoaded={loadedImages.has(activeTab.imageUrl)}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

const defaultTabs: TabType[] = [
  {
    key: "branding",
    label: "Branding",
    shortcut: "Shift + 1",
    title: "Branding",
    description:
      "We craft memorable brand identities from scratch. Every element—from logos to color palettes—is designed with strategy and creativity to make your brand stand out. Our work ensures your brand is not only beautiful but impactful.",
    imageUrl: "/assets/home/Brand.png",
  },
  {
    key: "social",
    label: "Social",
    shortcut: "Shift + 2",
    title: "Social Media & Campaigns",
    description:
      "We design social media campaigns that engage, convert, and build community. From scroll-stopping visuals to viral-ready content, we help your brand tell its story where it matters most—online.",
    imageUrl: "/assets/home/Social.png",
  },
  {
    key: "design",
    label: "Design",
    shortcut: "Shift + 3",
    title: "Design",
    description:
      "Our design team transforms concepts into visually stunning realities. Whether UI/UX, print, or immersive experiences, every design is purposeful, clear, and tailored to your audience to inspire and delight.",
    imageUrl: "/assets/home/Design.png",
  },
  {
    key: "build",
    label: "Build",
    shortcut: "Shift + 4",
    title: "Development & Implementation",
    description:
      "We bring creative visions to life with flawless execution. From websites to apps and interactive platforms, our development team ensures your digital presence is fast, functional, and future-proof.",
    imageUrl: "/assets/home/Build.png",
  },
];