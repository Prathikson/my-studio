import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface InitialSectionProps {
  sectionLabel?: string;
  mainHeading?: string;
  description?: string;
  links?: Array<{
    text: string;
    href?: string;
    onClick?: () => void;
  }>;
  backgroundColor?: string;
  textColor?: string;
  labelColor?: string;
  className?: string;
  enableAnimations?: boolean;
}

const InitialSection: React.FC<InitialSectionProps> = ({
  sectionLabel = "Section Label",
  mainHeading = "Your heading goes here, fully customizable",
  description = "This is a reusable section component. Pass in text, colors, and links as props to fit any page.",
  links = [
    { text: "Learn More", href: "#" },
    { text: "Contact Us", href: "#" },
  ],
  backgroundColor = "bg-white",
  textColor = "text-gray-900",
  labelColor = "text-gray-700",
  className = "",
  enableAnimations = true,
}) => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const MotionDiv = enableAnimations ? motion.div : "div";
  const motionProps = enableAnimations
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        variants: containerVariants,
      }
    : {};

  return (
    <div
      className={`w-full px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 ${backgroundColor} ${className}`}
    >
      <MotionDiv className="max-w-7xl mx-auto" {...motionProps}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-start">
          {/* Left column */}
          <motion.div
            variants={enableAnimations ? leftVariants : {}}
            className="flex flex-col justify-start"
          >
            <h3
              className={`text-lg sm:text-xl md:text-2xl font-semibold ${labelColor}`}
            >
              {sectionLabel}
            </h3>
          </motion.div>

          {/* Right column */}
          <motion.div
            variants={enableAnimations ? rightVariants : {}}
            className="flex flex-col justify-start space-y-6 sm:space-y-8"
          >
            {/* Heading */}
            <h1
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight ${textColor}`}
            >
              {mainHeading}
            </h1>

            {/* Description */}
            {description && (
              <p
                className={`text-base sm:text-lg ${labelColor} leading-relaxed max-w-2xl`}
              >
                {description}
              </p>
            )}

            {/* Links */}
            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-6 sm:gap-10 pt-2">
                {links.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={enableAnimations ? linkVariants : {}}
                    whileHover={
                      enableAnimations
                        ? { x: 5, transition: { duration: 0.2 } }
                        : {}
                    }
                    className="group"
                  >
                    {link.href ? (
                      <a
                        href={link.href}
                        className={`inline-flex items-center text-sm sm:text-base font-medium ${textColor} hover:opacity-70 transition-all duration-300 gap-2`}
                      >
                        <span className="relative">
                          {link.text}
                          <span className="absolute left-0 -bottom-1 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    ) : (
                      <button
                        onClick={link.onClick}
                        className={`inline-flex items-center text-sm sm:text-base font-medium ${textColor} hover:opacity-70 transition-all duration-300 gap-2`}
                      >
                        <span className="relative">
                          {link.text}
                          <span className="absolute left-0 -bottom-1 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    )}
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

export default InitialSection;
