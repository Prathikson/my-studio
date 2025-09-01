import React from "react";
import { motion } from "framer-motion";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  leftTitle: string;
  rightTitle: string;
  image: string;
  description: string;
  buttonText?: string;
}

const ServiceHeader: React.FC<HeaderProps> = ({
  leftTitle,
  rightTitle,
  image,
  description,
  buttonText = "Let's Talk",
}) => {

const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <motion.header
      className="w-full bg-lightGray mt-20 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Titles & Image */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
          {/* Left Title */}
          <motion.h1
            className="text-6xl sm:text-6xl lg:text-8xl font-semibold text-carbonBlack tracking-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {leftTitle}
          </motion.h1>

          {/* Image */}
          <motion.div
            className="w-20 h-20 bg-lightGray rounded-lg overflow-hidden flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src={image}
              alt={rightTitle}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Title */}
          <motion.h1
            className="text-6xl sm:text-6xl lg:text-8xl font-semibold text-carbonBlack tracking-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {rightTitle}
          </motion.h1>
        </div>

        {/* Description & Button */}
        <motion.div
          className="max-w-xl text-center lg:text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-carbonBlack text-base sm:text-lg font-medium mb-6 leading-relaxed">
            {description}
          </p>
          <Button title={buttonText} onClick={handleButtonClick} />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default ServiceHeader;
