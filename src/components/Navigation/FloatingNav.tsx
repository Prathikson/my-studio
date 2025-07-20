import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  {
    id: "solutions",
    label: "Solutions",
    overview: "Explore how we help industries innovate and thrive.",
    subLabel: "Industries",
    submenu: [
      { label: "Technology", path: "/solutions/technology" },
      { label: "Finance", path: "/solutions/finance" },
      { label: "Healthcare", path: "/solutions/healthcare" },
      { label: "Manufacturing", path: "/solutions/manufacturing" },
      { label: "Commercial", path: "/solutions/commercial" },
      { label: "Industrial", path: "/solutions/industrial" },
    ],
    path: "/solutions",
  },
  {
    id: "company",
    label: "Company",
    overview: "Get to know our team, culture, and story.",
    subLabel: "About Us",
    submenu: [
      { label: "About", path: "/company/about" },
      { label: "Careers", path: "/company/careers" },
      { label: "Newsroom", path: "/company/newsroom" },
      { label: "Podcasts", path: "/company/podcast" },
    ],
    path: "/company",
  },
  {
    id: "research",
    label: "Research",
    overview: "Explore our latest studies, reports, and innovations.",
    path: "/research",
  },
  {
    id: "login",
    label: "Log In",
    overview: "Access your dashboard and personalized insights.",
    path: "/login",
    isButton: true,
  },
  {
    id: "contact",
    label: "Contact",
    overview: "Let’s connect and build something together.",
    path: "/contact",
    isButton: true,
  },
];

const FloatingNav = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const navigate = useNavigate();

  const containerHeight = (() => {
    if (!hovered) return 48;
    const item = navItems.find((i) => i.id === hovered);
    if (item?.submenu) return 60 + item.submenu.length * 36;
    return 100;
  })();

  return (
    <>
      {/* 🖥️ Desktop Nav */}
      <motion.nav
        onMouseLeave={() => setHovered(null)}
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="hidden lg:flex fixed top-3 right-6 z-[999] bg-white/90 rounded-xl  px-8 py-3 text-sm text-carbonGray backdrop-blur-md shadow-2xl min-w-[760px]"
      >
        <motion.div
          animate={{ height: containerHeight }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col w-full overflow-hidden"
        >
          {/* Main Row: Nav Left, Buttons Right */}
          <div className="flex justify-between items-center w-full">
            {/* Left: Nav Links */}
            <div className="flex gap-6 items-center">
              {navItems
  .filter((item) => !item.isButton)
  .map((item) => {
    const hasSubmenu = !!item.submenu;

    return hasSubmenu ? (
      <div
        key={item.id}
        onMouseEnter={() => setHovered(item.id)}
        className="relative font-medium text-gray-600 hover:text-black transition-all duration-200 cursor-default"
      >
        {item.label}
      </div>
    ) : (
      <Link
        key={item.id}
        to={item.path}
        onMouseEnter={() => setHovered(item.id)}
        className="relative font-medium text-gray-600 hover:text-black transition-all duration-200 cursor-pointer"
      >
        {item.label}
      </Link>
    );
  })}

            </div>

            {/* Right: Buttons */}
            <div className="flex gap-4 items-center">
              <button
            className="px-6 py-2 text-white bg-gradient-to-tr from-black to-gray-800 hover:from-appleBlue hover:to-black rounded-lg font-medium transition-all duration-300"
                onClick={() => navigate("/login")}
                onMouseEnter={() => setHovered("signin")}
              >
                Log In
              </button>
              <button
                className="px-5 py-2 rounded-lg bg-appleBlue text-white border  transition-all duration-300 hover:bg-black"
                onClick={() => navigate("/contact")}
                onMouseEnter={() => setHovered("contact")}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Submenu / Overview Section */}
          <AnimatePresence mode="wait">
            {hovered && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3 }}
                className="flex w-full justify-between gap-10 mt-4 px-1"
              >
                {navItems.find((i) => i.id === hovered)?.submenu ? (
                  <>
                    <div className="flex flex-col min-w-[160px] space-y-[6px]">
                      <span className="text-[10px] font-semibold uppercase text-carbonGray tracking-widest">
                        {
                          navItems.find((i) => i.id === hovered)
                            ?.subLabel
                        }
                      </span>
                      {navItems
                        .find((i) => i.id === hovered)
                        ?.submenu?.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            className="text-gray-600 hover:text-appleBlue transition-colors leading-relaxed"
                            onClick={() => setOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                    </div>
                    <div className="flex-1 text-xs text-right text-gray-500 leading-relaxed max-w-[240px]">
                      {navItems.find((i) => i.id === hovered)?.overview}
                    </div>
                  </>
                ) : (
                  <div className="flex-1 text-xs text-left text-gray-500 leading-relaxed max-w-[400px]">
                    {navItems.find((i) => i.id === hovered)?.overview}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>

      {/* 📱 Mobile Hamburger */}
      <div className="lg:hidden fixed top-4 right-4 z-[999]">
        <button
          onClick={() => setOpen(!open)}
          className="text-black bg-white p-2 rounded-xl shadow-md"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {open && (
        <motion.div
  initial={{ y: -10, opacity: 0, scale: 0.98 }}
  animate={{ y: 0, opacity: 1, scale: 1 }}
  exit={{ y: -10, opacity: 0, scale: 0.98 }}
  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
  className="lg:hidden fixed top-20 right-4 w-[90%] max-w-sm bg-white/80 backdrop-blur-md shadow-2xl border border-white/20 rounded-2xl z-[998] p-6 text-carbonGray space-y-4"
>
            {navItems.map((item) => {
  if (item.isButton) {
    return (
      <button
        key={item.id}
        className="btn-contact w-full text-center"
        onClick={() => {
          navigate(item.path);
          setOpen(false);
        }}
      >
        <span>{item.label}</span>
      </button>
    );
  }

  const hasSubmenu = !!item.submenu;

  return hasSubmenu ? (
    <div key={item.id}>
      <div
  className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
  onClick={() => setExpanded(expanded === item.id ? null : item.id)}
>
  <span className="font-medium text-base">{item.label}</span>
  <motion.div
    animate={{ rotate: expanded === item.id ? 180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <ChevronDown size={18} className="text-gray-500" />
  </motion.div>
</div>
      <AnimatePresence>
  {expanded === item.id && (
    <motion.ul
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pl-5 mt-2 space-y-1 text-sm text-gray-600"
    >
      {item.submenu.map((sub) => (
        <li key={sub.label}>
          <Link
            to={sub.path}
            onClick={() => setOpen(false)}
            className="block py-1 px-2 rounded-md hover:bg-gray-100 transition-all duration-200"
          >
            {sub.label}
          </Link>
        </li>
      ))}
    </motion.ul>
  )}
</AnimatePresence>

    </div>
  ) : (
  <Link
  to={item.path}
  onClick={() => setOpen(false)}
  className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-gray-100 transition-all duration-200"
>
  {item.label}
</Link>
  );
})}

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;
