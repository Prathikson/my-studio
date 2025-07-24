import { motion, type Easing } from "framer-motion";
import SvgLogo from "./SvgLogo";

const MotionSvgLogo = motion(SvgLogo);

type AnimatedLogoProps = {
  iconOnly: boolean;
  color?: string;
};

export const AnimatedLogo = ({ iconOnly, color = "#000" }: AnimatedLogoProps) => {
  const floatTransition = {
    y: [0, -4, 4, -3, 3, 0],
    rotate: [0, 2, -2, 1, -1, 0],
    scale: [1, 1.05, 0.95, 1.03, 0.97, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as Easing,
    },
  };

  return (
    <motion.div
      className="flex items-center space-x-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <MotionSvgLogo
        width={40}
        height={40}
        initial={{ scale: 0.9, opacity: 0, y: 0, rotate: 0 }}
        animate={{
          scale: floatTransition.scale,
          opacity: 1,
          y: floatTransition.y,
          rotate: floatTransition.rotate,
          // Animate fill color here
          stroke: color,
          fill: color,
        }}
        transition={floatTransition.transition}
        // Add style to enable stroke/fill animation
        style={{ stroke: color, fill: color }}
      />

      {!iconOnly && (
        <motion.span
          className="text-3xl font-bold tracking-tight select-none"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0, color }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.7 }}
          style={{ color }}
        >
        XTOIC
        </motion.span>
      )}
    </motion.div>
  );
};
