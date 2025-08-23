import { motion, type Easing, useTransform, useScroll } from "framer-motion";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SvgLogo from "./SvgLogo";

const MotionSvgLogo = motion(SvgLogo);

type AnimatedLogoProps = {
  iconOnly: boolean;
  color?: string;
  className?: string;
};

export const AnimatedLogo = ({ 
  iconOnly, 
  color = "#000", 
  className = "" 
}: AnimatedLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Infinite scroll-based rotation
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, (value) => value * 0.5); // Infinite rotation

  const handleClick = () => {
    if (location.pathname === '/') {
      // If already on home page, refresh the page
      window.location.reload();
    } else {
      // Navigate to home page
      navigate('/');
    }
  };

  // Subtle floating animation
  const floatAnimation = {
    y: [0, -3, 3, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as Easing,
    },
  };

  return (
    <motion.div
      className={`flex items-center space-x-3 cursor-pointer select-none focus:outline-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ outline: 'none', border: 'none' }}
    >
      {/* Logo with minimal hover effect */}
      <MotionSvgLogo
        width={40}
        height={40}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: isHovered ? 1.1 : 1,
          y: floatAnimation.y,
        }}
        style={{ 
          stroke: color, 
          fill: color,
          rotate: rotate, // Smooth scroll-based rotation
        }}
        transition={{
          scale: { duration: 0.2, ease: "easeOut" },
          y: floatAnimation.transition,
          opacity: { duration: 0.4 }
        }}
        whileTap={{ scale: 0.95 }}
      />

      {/* Text with subtle hover effect */}
      {!iconOnly && (
        <motion.span
          className="text-3xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ 
            duration: 0.5,
            scale: { duration: 0.2, ease: "easeOut" }
          }}
          style={{ color }}
        >
          XTOIC
        </motion.span>
      )}
    </motion.div>
  );
};