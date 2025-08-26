import React, { useMemo, useRef } from "react";
import { motion } from "framer-motion";

type Category = "Brand" | "Social" | "Design" | "Build";

interface Logo {
  name: string;
  category: Category;
  imageSrc: string;
}

interface LogoScrollerProps {
  categories?: Category[];
  text?: string;
  speed?: number; // Speed multiplier (0.1 = very slow, 1 = normal, 2 = fast)
}

const logoData: Logo[] = [
  { name: "Instagram", category: "Social", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg" },
  { name: "Microsoft Bing", category: "Brand", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" },
  { name: "YouTube", category: "Social", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/youtube/youtube-original.svg" },
  { name: "Snapchat", category: "Social", imageSrc: "https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg" },
  { name: "LinkedIn", category: "Brand", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
  { name: "Pinterest", category: "Social", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" },
  { name: "Apple", category: "Brand", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
  { name: "GitHub", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Figma", category: "Design", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe", category: "Design", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" },
];

const LogoTape: React.FC<LogoScrollerProps> = ({
  categories = ["Brand", "Social", "Design", "Build"],
  text = "Channels we drive demand & discovery on",
  speed = 0.5, // Super slow default
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredLogos = useMemo(
    () => logoData.filter((logo) => categories.includes(logo.category)),
    [categories]
  );

  // Create a smooth infinite loop with enough logos
  const repeatedLogos = useMemo(() => {
    const minRepeats = 4; // Minimum repetitions for smooth loop
    const totalRepeats = Math.max(minRepeats, Math.ceil(24 / filteredLogos.length));
    return Array(totalRepeats).fill(filteredLogos).flat();
  }, [filteredLogos]);

  // Calculate duration based on number of logos and desired speed
  const baseDurationPerLogo = 3; // 3 seconds per logo at normal speed
  const duration = (repeatedLogos.length * baseDurationPerLogo) / speed;

  return (
    <div className="relative w-full overflow-hidden bg-lightGray py-16">
      <div className="flex items-center space-x-12 px-6 w-full  mx-auto">
        {/* Left Text */}
        <div className="flex-shrink-0 w-64 text-left">
          <p className="text-gray-700 font-medium text-base leading-relaxed">{text}</p>
        </div>

        {/* Logo Scroller */}
        <div className="relative flex-1 overflow-hidden">
          {/* Smooth gradient masks */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white/20  to-transparent blur-md z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white/20  to-transparent blur-md z-10 pointer-events-none"></div>

          {/* Ultra-smooth scrolling motion */}
          <motion.div
            ref={containerRef}
            className="flex items-center space-x-20"
            style={{ width: "max-content" }}
            animate={{ 
              x: [0, -50 + "%"] // Move exactly half the width for seamless loop
            }}
            transition={{
              duration: duration,
              ease: "linear", // Perfectly consistent speed
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {/* Duplicate the logos exactly once for perfect seamless loop */}
            {[...repeatedLogos, ...repeatedLogos].map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <img
                    src={logo.imageSrc}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 
                             group-hover:grayscale-0 group-hover:opacity-100 
                             transition-all duration-500 ease-out"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="8" fill="#e5e7eb"/>
                          <text x="24" y="28" text-anchor="middle" font-family="system-ui" 
                                font-size="12" font-weight="500" fill="#6b7280">
                            ${logo.name.charAt(0)}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 font-medium opacity-80 group-hover:opacity-100 
                               transition-opacity duration-300">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTape;