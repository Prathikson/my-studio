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
  speed?: number;
}

const logoData: Logo[] = [
  /* ---------------------- SOCIAL ---------------------- */
  { name: "Instagram", category: "Social", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg" },
  { name: "Facebook", category: "Social", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
  { name: "TikTok", category: "Social", imageSrc: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
  { name: "YouTube", category: "Social", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/youtube/youtube-original.svg" },
  { name: "Snapchat", category: "Social", imageSrc: "https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg" },
  { name: "LinkedIn", category: "Social", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
  { name: "Pinterest", category: "Social", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" },
  { name: "X (Twitter)", category: "Social", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" },
  { name: "Reddit", category: "Social", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reddit/reddit-original.svg" },

  /* ---------------------- DESIGN ---------------------- */
  { name: "Figma", category: "Design", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Canva", category: "Design", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Canva_Logo.png" },
  { name: "Adobe Photoshop", category: "Design", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { name: "Adobe Illustrator", category: "Design", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "Adobe XD", category: "Design", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
  { name: "Adobe After Effects", category: "Design", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" },
  { name: "Adobe Premiere Pro", category: "Design", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
  { name: "Blender", category: "Design", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },

  /* ---------------------- BRAND ---------------------- */
  { name: "Apple", category: "Brand", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
  { name: "Microsoft", category: "Brand", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" },
  { name: "Google", category: "Brand", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Amazon AWS", category: "Brand", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },

  /* ---------------------- BUILD ---------------------- */
  { name: "React", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "HTML5", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Three.js", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },

  { name: "Node.js", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

  { name: "WordPress", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
  { name: "PHP", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },

  { name: "MongoDB", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Firebase", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },

  { name: "Git", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", category: "Build", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

const LogoTape: React.FC<LogoScrollerProps> = ({
  categories = ["Brand", "Social", "Design", "Build"],
  text = "Channels we drive demand & discovery on",
  speed = 0.5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredLogos = useMemo(
    () => logoData.filter((logo) => categories.includes(logo.category)),
    [categories]
  );

  const repeatedLogos = useMemo(() => {
    const minRepeats = 4;
    const totalRepeats = Math.max(minRepeats, Math.ceil(24 / filteredLogos.length));
    return Array(totalRepeats).fill(filteredLogos).flat();
  }, [filteredLogos]);

  const baseDurationPerLogo = 3;
  const duration = (repeatedLogos.length * baseDurationPerLogo) / speed;

  return (
    <div className="relative w-full overflow-hidden bg-lightGray py-10 sm:py-16">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-12 space-y-6 sm:space-y-0 px-4 sm:px-6 w-full">
        
        {/* Left Text */}
        <div className="flex-shrink-0 text-center sm:text-left sm:w-64">
          <p className="text-carbonGray font-medium text-base sm:text-lg leading-relaxed">{text}</p>
        </div>

        {/* Logo Scroller */}
        <div className="relative flex-1 overflow-hidden w-full">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 w-8 sm:w-10 h-full bg-gradient-to-r backdrop-blur-md from-white/40 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-8 sm:w-10 h-full bg-gradient-to-l backdrop-blur-md from-white/40 to-transparent z-10 pointer-events-none"></div>

          <motion.div
            ref={containerRef}
            className="flex items-center space-x-10 sm:space-x-20"
            style={{ width: "max-content" }}
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {[...repeatedLogos, ...repeatedLogos].map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2 sm:mb-3">
                  <img
                    src={logo.imageSrc}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
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
                <span className="text-xs sm:text-sm text-smoothBlack font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
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
