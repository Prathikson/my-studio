import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedLogo } from "../Navigation/AnimatedLogo";
import { useScrollPosition } from "../Navigation/useScrollPosition";
import { useEffect, useState } from "react";

const Header = () => {
  const scrolled = useScrollPosition();
  const [isDarkBg, setIsDarkBg] = useState(false);

  useEffect(() => {
    setIsDarkBg(scrolled);
  }, [scrolled]);

  // Decide logo color only, header bg unchanged
  const logoColor = isDarkBg ? "#fff" : "#000"; // white or black logo

  return (
    <motion.header
      initial={{ y: -40, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        fixed top-0 left-0 w-full px-8 py-4
        flex items-center justify-between z-50
        transition-colors duration-500
        bg-transparent  /* or whatever your bg is */
      "
    >
      <Link
        to="/"
        onClick={() => {
          if (window.location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="z-50 select-none cursor-pointer"
      >
        <AnimatedLogo iconOnly={scrolled} color={logoColor} />
      </Link>
    </motion.header>
  );
};

export default Header;
