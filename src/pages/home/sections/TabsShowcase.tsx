"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import gsap from "gsap";

export type TabType = {
  key: string;
  label: string;
  shortcut: string;
  title: string;
  description: string;
  imageUrl?: string;
};

type TabsShowcaseProps = {
  tabs?: TabType[];
  defaultTabKey?: string;
};

export const TabsShowcase = ({
  tabs = defaultTabs,
  defaultTabKey = "identities",
}: TabsShowcaseProps) => {
  const [activeTabKey, setActiveTabKey] = useState<string>(defaultTabKey);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const activeTab = tabs.find((tab) => tab.key === activeTabKey) || tabs[0];

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeTabKey]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      for (const tab of tabs) {
        const [mod, rawKey] = tab.shortcut.toLowerCase().split(" + ");
        const keyCodeMap: Record<string, string> = {
          "1": "Digit1",
          "2": "Digit2",
          "3": "Digit3",
          "4": "Digit4",
          "5": "Digit5",
          "6": "Digit6",
          "7": "Digit7",
          "8": "Digit8",
          "9": "Digit9",
          "0": "Digit0",
        };
        const expectedCode = keyCodeMap[rawKey] || `Key${rawKey.toUpperCase()}`;
        const isMatch =
          ((mod === "shift" && e.shiftKey) ||
            (mod === "ctrl" && e.ctrlKey) ||
            (mod === "alt" && e.altKey)) &&
          e.code === expectedCode;

        if (isMatch) {
          e.preventDefault();
          setActiveTabKey(tab.key);
          break;
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [tabs]);

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: "600px" }}
  className="w-full max-w-[90vw] mx-auto bg-smoothBlack rounded-2xl py-24 px-10 mb-28"
    >
  <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center">
          <LayoutGroup>
            <div className="flex flex-wrap gap-3 mb-8">
  {tabs.map((tab) => {
    const isActive = activeTabKey === tab.key;
    return (

      <motion.button
        key={tab.key}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setActiveTabKey(tab.key)}
        className={`relative px-4 py-2 text-sm transition-all duration-200 border rounded-md flex items-center gap-2 font-medium tracking-tight
          ${
            isActive
              ? "text-white border-white shadow-md"
              : "bg-gray-100 text-gray-600 border-transparent hover:bg-lightGray"
          }`}
      >
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="highlight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 z-[-1] bg-black rounded-md shadow-md filter blur-sm"
            />
          )}
        </AnimatePresence>

        <span className="bg-white text-black text-xs px-2 py-1 rounded select-none">
          {tab.shortcut}
        </span>
        {tab.label}
      </motion.button>
    );
  })}
</div>

          </LayoutGroup>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-semibold mb-4 tracking-tight text-white"
              >
                {activeTab.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lightGray text-base leading-relaxed max-w-lg"
              >
                {activeTab.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          ref={imageRef}
          key={activeTab.imageUrl}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full"
        >
          {activeTab.imageUrl && (
            <img
              src={activeTab.imageUrl}
              alt={activeTab.title}
              className="w-full h-[70dvh] object-cover rounded-2xl"
            />
          )}
        </motion.div>

         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(25)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-lightGray rounded-full opacity-30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -100, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
      </div>
      
    </section>
  );
};

const defaultTabs: TabType[] = [
  {
    key: "identities",
    label: "Identities",
    shortcut: "Shift + 1",
    title: "Identities",
    description:
      "Craft brand identities from the ground up and transform raw ideas into cohesive and compelling brand experiences.",
    imageUrl: "/assets/home6.png",
  },
  {
    key: "refreshes",
    label: "Refreshes",
    shortcut: "Shift + 2",
    title: "Refreshes",
    description:
      "Rejuvenate outdated designs and breathe new life into your digital presence with thoughtful visual updates.",
    imageUrl: "/assets/home4.png",
  },
  {
    key: "application",
    label: "Application",
    shortcut: "Shift + 3",
    title: "Application",
    description:
      "Apply branding across products and touchpoints with consistency and purpose to ensure an impactful experience.",
    imageUrl: "/assets/home2.png",
  },
]