import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { Home, Info, Sparkles, Folder, Contact } from "lucide-react";

type IconNode = React.ReactNode;

interface RouteSkin {
  bg: string; // Tailwind gradient classes
  label: string;
  icon: IconNode;
}

interface TransitionProps {
  children: React.ReactNode;
}

// 🎨 Gradient palette for unknown routes
const GRADIENTS = [
  "from-blue-500 to-indigo-700",
  "from-fuchsia-500 to-pink-600",
  "from-emerald-500 to-teal-700",
  "from-amber-500 to-orange-600",
  "from-cyan-500 to-sky-700",
  "from-violet-500 to-purple-700",
];

// 🗺️ Predefined skins for top-level routes
const ROUTE_SKINS: Record<string, RouteSkin> = {
  "/": { bg: "from-blue-500 to-indigo-700", label: "HOME", icon: <Home className="w-14 h-14 mb-3" /> },
  "/about": { bg: "from-pink-500 to-red-600", label: "ABOUT", icon: <Info className="w-14 h-14 mb-3" /> },
  "/contact": { bg: "from-green-500 to-emerald-700", label: "CONTACT", icon: <Contact className="w-14 h-14 mb-3" /> },
  "/portfolio": { bg: "from-purple-500 to-indigo-700", label: "PORTFOLIO", icon: <Folder className="w-14 h-14 mb-3" /> },
  "/services": { bg: "from-orange-500 to-amber-600", label: "SERVICES", icon: <Folder className="w-14 h-14 mb-3" /> },
};

// 🔢 Fallback hashing for unknown paths
function hashPathToIndex(path: string) {
  let h = 0;
  for (let i = 0; i < path.length; i++) h = (h * 31 + path.charCodeAt(i)) >>> 0;
  return h % GRADIENTS.length;
}

const Transition: React.FC<TransitionProps> = ({ children }) => {
  const location = useLocation();
  const [animating, setAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  // 🎨 Pick a skin based on top-level route
  const skin: RouteSkin = useMemo(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const basePath = segments.length ? `/${segments[0]}` : "/";
    const known = ROUTE_SKINS[basePath];
    if (known) return known;

    const idx = hashPathToIndex(location.pathname);
    return {
      bg: GRADIENTS[idx],
      label: location.pathname.replace("/", "").toUpperCase() || "PAGE",
      icon: <Folder className="w-14 h-14 mb-3" />,
    };
  }, [location.pathname]);

  // 🌀 Page Transition Animation
  useLayoutEffect(() => {
  if (!overlayRef.current || !iconRef.current) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  setAnimating(true);

  const tl = gsap.timeline({
    defaults: { ease: "power4.inOut" },
    onComplete: () => setAnimating(false),
  });

  gsap.set(overlayRef.current, { yPercent: 100, opacity: 1, pointerEvents: "auto" });
  gsap.set(iconRef.current, { scale: 0.8, opacity: 0 });

  if (prefersReduced) {
    // Minimal Motion Mode
    tl.to(overlayRef.current, { yPercent: 0, duration: 0.5 })
      .to(iconRef.current, { opacity: 1, duration: 0.3 }, "<")
      .to(overlayRef.current, { yPercent: -100, duration: 0.5, delay: 0.2 })
      .set(overlayRef.current, { pointerEvents: "none" });
  } else {
    // Slow Cinematic Transition (~3s total)
    tl.to(overlayRef.current, { yPercent: 0, duration: 1.0 }) // Sweep In
      .to(iconRef.current, { opacity: 1, scale: 1, duration: 1.0, ease: "back.out(1.6)" }, "-=0.5")
      .to(iconRef.current, { opacity: 0, scale: 0.9, duration: 0.6, ease: "power2.out", delay: 0.4 })
      .to(overlayRef.current, { yPercent: -100, duration: 1.0 }) // Sweep Out
      .set(overlayRef.current, { pointerEvents: "none" });
  }

  return () => {
    tl.kill(); // Clean up timeline
  };
}, [location.pathname]);

  const contentKey = location.pathname;

  return (
    <>
      {/* 🌐 Page Content */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={contentKey}
          className="min-h-screen"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* 🔥 Overlay (Portal) */}
      {createPortal(
        <div
          aria-hidden={!animating}
          ref={overlayRef}
          className={`fixed inset-0 z-[9999] bg-gradient-to-br ${skin.bg} flex items-center justify-center`}
        >
          <div ref={iconRef} className="text-white flex flex-col items-center">
            <Sparkles className="w-8 h-8 mb-4 opacity-90 animate-pulse" />
            {skin.icon}
            <span className="font-bold text-2xl tracking-[0.25em]">{skin.label}</span>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Transition;
