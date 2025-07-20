import { useEffect, useRef, useState, type ComponentType } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { gsap } from "gsap";

interface AnimatedHeaderProps {
  title: string;
  subtitleTop?: string;
  subtitleBottom?: string;
  SvgComponent?: ComponentType;
}

const AnimatedHeader = ({
  title,
  subtitleTop = "",
  subtitleBottom = "",
  SvgComponent,
}: AnimatedHeaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Motion values for orb dragging
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const branchRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const branchScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", updateScrollY);
    return () => window.removeEventListener("scroll", updateScrollY);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Animate text elements
      gsap.set(".hero-text", { opacity: 0, y: 30 });
      gsap.set(".hero-subtitle", { opacity: 0, y: 20 });

      gsap.to(".hero-text", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.to(".hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.7,
      });

      // Continuous morphing animation for the orb
      gsap.to(".liquid-orb", {
        scale: 1.1,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Subtle rotation
      gsap.to(".orb-inner", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const wiggleIntensity = Math.sin(scrollY * 0.02) * 5;

  return (
    <motion.header
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Draggable Liquid Orb - Behind text */}
      <motion.div
        ref={orbRef}
        drag
        dragMomentum={false}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{ x: springX, y: springY }}
        className="absolute z-10 cursor-grab active:cursor-grabbing"
        whileDrag={{
          scale: 1.1,
          cursor: "grabbing",
        }}
        initial={{ x: 0, y: 100 }}
      >
        <div className="liquid-orb relative w-80 h-80 md:w-96 md:h-96">
          {/* Main orb with blur effect */}
          <div className="orb-inner absolute inset-0 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 blur-xl opacity-60">
            {/* Inner gradient layers for depth */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-gray-200 to-gray-400 opacity-80"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-bl from-white to-gray-300 opacity-70"></div>
            <div className="absolute inset-12 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 opacity-60"></div>
          </div>

          {/* Additional blur layers for liquid effect */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-t from-gray-400 to-gray-200 blur-2xl opacity-40"></div>
          <div className="absolute inset-6 rounded-full bg-gradient-to-b from-white to-gray-300 blur-lg opacity-50"></div>

          {/* Highlight spots */}
          <div className="absolute top-8 left-12 w-16 h-16 rounded-full bg-white blur-md opacity-30"></div>
          <div className="absolute bottom-12 right-8 w-12 h-12 rounded-full bg-gray-100 blur-sm opacity-40"></div>
        </div>
      </motion.div>

      <div className="relative z-20">
        <motion.div style={{ y: textY }} className="relative text-center">
          {subtitleTop && (
            <motion.div
              className="mb-4 hero-subtitle text-lg md:text-xl uppercase text-darkGray font-medium"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {subtitleTop}
            </motion.div>
          )}

          <motion.h1
            className="hero-text text-6xl md:text-8xl lg:text-[10rem] mb-6 font-black uppercase text-carbonGray tracking-tight leading-none"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            {title}
          </motion.h1>

          <motion.div
            className="absolute -right-10 top-6 md:-right-14 md:top-10 lg:-right-20 lg:top-14"
            style={{
              rotate: branchRotate,
              scale: branchScale,
              x: wiggleIntensity,
              y: Math.cos(scrollY * 0.03) * 3,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          >
            {SvgComponent && <SvgComponent />}
          </motion.div>
        </motion.div>
      </div>

      {(subtitleBottom || subtitleTop) && (
        <motion.div
          className="mt-6 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {subtitleBottom && (
            <p className="text-lg md:text-xl uppercase spac text-gray-600 font-medium">
              {subtitleBottom}
            </p>
          )}
        </motion.div>
      )}

      {/* Interaction hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        Drag the orb to move it around
      </motion.div>
    </motion.header>
  );
};

export default AnimatedHeader;
