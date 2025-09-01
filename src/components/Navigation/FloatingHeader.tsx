import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLogo } from "./AnimatedLogo";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuItem {
  name: string;
  path: string;
  hasArrow?: boolean;
}

interface FloatingNavProps {
  menuItems?: MenuItem[];
  ctaText?: string;
  onCtaClick?: () => void;
  showNewsletter?: boolean;
  className?: string;// Add navigation handler
}

const FloatingNav: React.FC<FloatingNavProps> = ({
  menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT", path: "/contact" }
  ],
  ctaText = "LET'S TALK",
  onCtaClick,
  showNewsletter = true,
  className = "",

}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
    // Sync active item with route
  useEffect(() => {
    const current = menuItems.find((item) => item.path === location.pathname);
    if (current) {
      setActiveItem(current.name);
    }
  }, [location, menuItems]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const handleAudioToggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        await audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Audio toggle failed:", error);
    }
  };

  const handleMenuItemClick = (item: MenuItem) => {
    setActiveItem(item.name);
    navigate(item.path)
    // Close menu after navigation
    setIsMenuOpen(false);
  };

    const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      navigate("/contact");
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`text-white relative overflow-hidden ${className}`}>
      {/* Desktop Header Controls */}
      <div className="hidden md:flex items-center gap-4">
        {/* Audio Wave Button */}
        <motion.button
          onClick={handleAudioToggle}
          whileHover={{ scale: 1.002 }}
          className="w-10 h-10 rounded-full bg-smoothBlack backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden"
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
          <motion.svg
            viewBox="0 0 100 20"
            className="w-6 h-4"
            preserveAspectRatio="none"
          >
            <motion.path
              fill="transparent"
              stroke={isPlaying ? "white" : "white"}
              strokeWidth="2"
              initial={false}
              animate={{
                d: isPlaying
                  ? [
                      "M0 10 Q25 5, 50 10 T100 10",  // Wave up
                      "M0 10 Q25 15, 50 10 T100 10", // Wave down
                      "M0 10 Q25 5, 50 10 T100 10"   // Wave up again
                    ]
                  : "M0 10 H100", // Straight line
              }}
              transition={{
                duration: 2.4, // Slow and smooth
                ease: "easeInOut",
                repeat: isPlaying ? Infinity : 0,
              }}
            />
          </motion.svg>
        </motion.button>
        <audio ref={audioRef} loop src="/audio/audio.mp3" />

        {/* CTA Button */}
        <motion.button
          onClick={handleCtaClick}
          whileHover={{ scale: 1.002 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full text-carbonBlack bg-lightGray backdrop-blur-sm border border-smoothBlack/20 hover:bg-smoothBlack hover:text-lightGray text-sm font-medium tracking-wide flex items-center gap-2"
        >
          {ctaText}
          <span className="w-2 h-2 bg-smoothBlack rounded-full" />
        </motion.button>

        {/* Menu Toggle */}
        <motion.button
          onClick={toggleMenu}
          whileHover={{ scale: 1.002 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-appleBlue backdrop-blur-sm border border-white/20 text-sm font-medium tracking-wide flex items-center gap-2"
        >
          MENU
        </motion.button>
      </div>

      {/* Mobile Menu Toggle: Circle with Two Dots */}
      <div className="md:hidden flex justify-start">
        <motion.button
          onClick={toggleMenu}
          whileHover={{ scale: 1.002 }}
          className="w-10 h-10 rounded-full bg-black backdrop-blur-sm flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.button>
      </div>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-carbonBlack/10 backdrop-blur-lg"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-12 h-12   text-carbonBlack flex items-center justify-center text-xl font-bold cursor-pointer select-none"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <AnimatedLogo iconOnly={true} color="#f1f1f1" />
              </motion.div>
              <motion.button
                onClick={handleAudioToggle}
                whileHover={{ scale: 1.002 }}
                className="w-10 h-10 rounded-full bg-smoothBlack backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden"
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
              >
                <motion.svg
                  viewBox="0 0 100 20"
                  className="w-6 h-4"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    fill="transparent"
                    stroke={isPlaying ? "white" : "white"}
                    strokeWidth="2"
                    initial={false}
                    animate={{
                      d: isPlaying
                        ? [
                            "M0 10 Q25 5, 50 10 T100 10",  // Wave up
                            "M0 10 Q25 15, 50 10 T100 10", // Wave down
                            "M0 10 Q25 5, 50 10 T100 10"   // Wave up again
                          ]
                        : "M0 10 H100", // Straight line
                    }}
                    transition={{
                      duration: 2.4, // Slow and smooth
                      ease: "easeInOut",
                      repeat: isPlaying ? Infinity : 0,
                    }}
                  />
                </motion.svg>
              </motion.button>
              <motion.button
                onClick={handleCtaClick}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="px-6 py-3 rounded-full bg-lightGray/80 backdrop-blur-sm border text-smoothBlack text-sm font-medium tracking-wide flex items-center gap-2"
              >
                {ctaText}
                <span className="w-2 h-2 bg-black rounded-full"></span>
              </motion.button>

              <motion.button
                onClick={toggleMenu}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-appleBlue/90 backdrop-blur-sm border border-white/20 text-sm font-medium tracking-wide flex items-center gap-2"
              >
                CLOSE <span className="text-xs">⋯</span>
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-8 max-w-6xl mx-auto">
              {/* Nav Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex-1 bg-smoothBlack/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                <nav className="space-y-2">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => handleMenuItemClick(item)}
                      className={`relative flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                        activeItem === item.name
                          ? "bg-appleBlue/30 text-white"
                          : hoveredItem === item.name
                          ? "bg-white/5 text-white"
                          : "text-lightGray hover:text-white"
                      }`}
                    >
                      <span className="text-xl md:text-2xl font-light tracking-wide">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-3">
                        {/* Dot */}
                        <AnimatePresence>
                          {activeItem === item.name && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              {/* Newsletter & Labs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex-1 lg:max-w-md space-y-8"
              >
                {showNewsletter && (
                  <div className="bg-smoothBlack/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <h3 className="text-2xl md:text-3xl font-light mb-8">
                      Subscribe to<br />receive Promotions & Discounts
                    </h3>
                    <form onSubmit={handleSubmit} className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none pr-16"
                        required
                      />
                      <motion.button
                        type="submit"
                        className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-carbonBlack/20 rounded-xl flex items-center justify-center text-xl"
                        aria-label="Submit email"
                      >
                        →
                      </motion.button>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingNav;