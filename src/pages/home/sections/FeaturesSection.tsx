import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import MinimalHeader from "../../../components/ui/MinimalHeader";

interface DataRow {
  category: string;
  xtoic: string;
  bigAgency: string;
  fiverr: string;
  other: string;
}

const data: DataRow[] = [
  {
    category: "Tech Arsenal ⚔️",
    xtoic: "Cutting-edge React & Tailwind wizardry",
    bigAgency: "Legacy PHP relics with jQuery dust",
    fiverr: "Template mashups & copy-paste magic",
    other: "Stuck in the 2010s with outdated tools",
  },
  {
    category: "Speed Demon ⚡",
    xtoic: "Lightning-fast 2-3 week sprints",
    bigAgency: "Slow-cooked 1-3 month marathons",
    fiverr: "Freelancer mood swings dictate pace",
    other: "You might get it... someday",
  },
  {
    category: "Design Swagger 🎨",
    xtoic: "Custom sleek vibes that wow users",
    bigAgency: "Corporate cookie-cutter yawnfest",
    fiverr: "Mixed bag – hit or miss",
    other: "Last decade’s leftovers",
  },
  {
    category: "Price Tag 💰",
    xtoic: "Fair, clear, and wallet-friendly",
    bigAgency: "Sky-high with surprise fees",
    fiverr: "Cheap, but quality varies",
    other: "Mystery charges lurking",
  },
  {
    category: "Support Squad 🤝",
    xtoic: "Always-on, superhero-level support",
    bigAgency: "Contract locked, good luck",
    fiverr: "If you can find them...",
    other: "Crickets chirping",
  },
  {
    category: "Innovation Juice 🚀",
    xtoic: "Ahead of the curve, always experimenting",
    bigAgency: "Slow adopters stuck in the past",
    fiverr: "Limited toolbox, limited tricks",
    other: "Dusty and forgotten",
  },
];

const columns = [
  { key: "xtoic", label: "XTOIC STUDIO" },
  { key: "bigAgency", label: "Big Web Agency" },
  { key: "fiverr", label: "Fiverr Freelancers" },
  { key: "other", label: "Other Web Dev Companies" },
];

const tableVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);

  // GSAP desktop table animation on mount
  useEffect(() => {
    if (tableRef.current) {
      gsap.fromTo(
        tableRef.current.querySelectorAll(".table-row, .table-header"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    }
  }, []);

  // Toggle accordion on mobile
  const toggleIndex = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen w-full bg-lightGray p-6 md:p-12 font-sans">
      {/* Header */}
      <div className="relative mb-16 flex flex-col items-center gap-6 max-w-full mx-auto text-center px-4 md:px-0">
        <MinimalHeader pillText="Features" titleLine1="What You Get"/>
      </div>

      {/* Desktop Table */}
      <motion.div
        ref={tableRef}
        className="hidden md:grid md:grid-cols-5 max-w-full px-20 overflow-x-auto rounded-3xl shadow-lg border border-gray-300"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Row */}
        <div className="table-header p-6 bg-lightGray"></div>
        {columns.map((col) => (
          <div
            key={col.key}
            className={`table-header p-6 text-center font-semibold text-lg ${
              col.key === "xtoic"
                ? "bg-carbonBlack/80 text-lightGray rounded-tl-3xl"
                : "bg-lightGray text-mattBlack"
            }`}
          >
            {col.label}
          </div>
        ))}

        {/* Data Rows */}
        {data.map((row, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              className="table-row p-6 border-t border-mattBlack/50 font-medium text-mattBlack bg-lightGray"
              variants={rowVariants}
            >
              {row.category}
            </motion.div>

            {columns.map((col) => (
              <motion.div
                key={col.key}
                className={`table-row p-6 border-t border-mattBlack/50 ${
                  col.key === "xtoic"
                    ? `bg-carbonBlack/80 text-lightGray ${
                        idx === 0 ? "" : ""
                      } ${idx === data.length - 1 ? "rounded-br-3xl" : ""}`
                    : "text-mattBlack bg-lightGray"
                }`}
                variants={rowVariants}
              >
                {row[col.key as keyof DataRow]}
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Mobile Accordion */}
      <div className="md:hidden max-w-xl mx-auto space-y-4 px-4">
        {data.map((row, idx) => {
          const isActive = activeIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                aria-expanded={isActive}
                aria-controls={`panel-${idx}`}
              >
                <span className="text-lg font-semibold text-mattBlack">
                  {row.category}
                </span>
                <motion.span
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl text-carbonBlack"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    id={`panel-${idx}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-6 space-y-3 bg-gray-50"
                  >
                    {columns.map((col) => (
                      <div
                        key={col.key}
                        className={`flex justify-between rounded-lg p-3 ${
                          col.key === "xtoic"
                            ? "bg-carbonBlack/80 text-lightGray"
                            : "bg-lightGray text-mattBlack"
                        }`}
                      >
                        <span className="font-medium">{col.label}</span>
                        <span className="max-w-[60%] text-right text-sm">
                          {row[col.key as keyof DataRow]}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesSection;
