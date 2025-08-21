import React, { useEffect, useRef } from "react";
import { motion, useAnimation, type Variants } from "framer-motion";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import MinimalHeader from "../../../components/ui/MinimalHeader";

// ---- Demo data (replace with your API data) -------------------------------
const POSTS = [
  {
    id: 1,
    tag: "Environmental",
    title: "Fighting Canada’s Record Wildfires",
    image:
      "https://images.unsplash.com/photo-1594964614550-83df0be3f4fc?q=80&w=1400&auto=format&fit=crop",
    badge: "Microsoft",
  },
  {
    id: 2,
    tag: "Capital Planning",
    title: "GovLab Impact Report 2023–2024",
    image:
      "https://images.unsplash.com/photo-1664575602554-208d8f2f9e9b?q=80&w=1400&auto=format&fit=crop",
    badge: "GovLab — ai",
  },
  {
    id: 3,
    tag: "Environmental",
    title: "Alberta Looking at AI to Predict Wildfires",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    badge: "THE CANADIAN PRESS",
  },
];

// ---- Utilities ------------------------------------------------------------
const cardVariants: Variants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  in: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 16 } },
};

// Create an inward curved (concave) bottom-right corner using CSS mask.
const inwardCornerMask: React.CSSProperties = {
  WebkitMaskImage:
    "radial-gradient(64px 64px at calc(100% + 32px) calc(100% + 32px), transparent 63px, black 64px)",
  maskImage:
    "radial-gradient(64px 64px at calc(100% + 32px) calc(100% + 32px), transparent 63px, black 64px)",
};

// ---- Read More Button (dot → arrow with liquid morph) --------------------
const ReadMore = ({ className = "" }: { className?: string }) => {
  const controls = useAnimation();

  return (
    <motion.button
      onHoverStart={() => controls.start("hover")}
      onHoverEnd={() => controls.start("rest")}
      initial="rest"
      animate={controls}
      className={`group relative inline-flex items-center gap-2 text-sm font-medium ${className}`}
      aria-label="Read more"
    >
      <span className="relative">Read More</span>

      {/* Gooey SVG overlay used purely as an effect container */}
      <svg width="52" height="26" viewBox="0 0 52 26" className="overflow-visible">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
        <g filter="url(#goo)">
          {/* Base bubble that stretches into a pill */}
          <motion.rect
            x="26"
            y="6"
            rx="12"
            width="12"
            height="12"
            fill="currentColor"
            variants={{
              rest: { x: 26, width: 12 },
              hover: { x: 10, width: 30, transition: { type: "spring", stiffness: 120, damping: 12 } },
            }}
          />
          {/* Trailing dot that merges into the pill */}
          <motion.circle
            cx="46"
            cy="12"
            r="6"
            fill="currentColor"
            variants={{
              rest: { cx: 46, opacity: 1 },
              hover: { cx: 40, opacity: 0.9, transition: { type: "spring", stiffness: 120, damping: 12 } },
            }}
          />
        </g>
      </svg>

      {/* Arrow glides in on hover */}
      <motion.span
        variants={{ rest: { x: -12, opacity: 0 }, hover: { x: -2, opacity: 1 } }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="-ml-5 grid h-6 w-6 place-items-center"
      >
        <ChevronRight className="h-4 w-4" />
      </motion.span>
    </motion.button>
  );
};

// ---- Card -----------------------------------------------------------------
const BlogCard: React.FC<{
  post: (typeof POSTS)[number];
  idx: number;
}> = ({ post, idx }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    // Entry animation
    gsap.fromTo(
      el,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: idx * 0.08 }
    );

    // Subtle 3D tilt + parallax image
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = -((y / rect.height) - 0.5) * 6; // tilt X
      const ry = ((x / rect.width) - 0.5) * 8;  // tilt Y
      gsap.to(el, { rotateX: rx, rotateY: ry, transformPerspective: 700, duration: 0.35, ease: "power2.out" });
      gsap.to(img, { x: (x - rect.width / 2) * 0.04, y: (y - rect.height / 2) * 0.04, duration: 0.35, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
      gsap.to(img, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [idx]);

  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      animate="in"
      ref={cardRef}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/90 p-4 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-xl"
      style={{ ...inwardCornerMask }}
    >
      {/* Media */}
      <div ref={imgRef} className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-x-4 bottom-3 flex items-center justify-between rounded-xl bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          <span className="truncate">{post.badge}</span>
        </div>
      </div>

      {/* Body */}
      <div className="mt-4 flex flex-1 flex-col">
        <span className="inline-flex w-fit items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200">
          {post.tag}
        </span>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-900">
          {post.title}
        </h3>

        <div className="mt-auto flex items-center justify-between">
          <ReadMore className="mt-4 text-sky-700" />
          {/* little accent dot that pulses on hover */}
          <span className="mt-4 mr-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>

      {/* soft corner highlight to emphasize the inward bend */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-sky-200/40 to-transparent blur-2xl" />
    </motion.article>
  );
};

// ---- Section --------------------------------------------------------------
const BlogSection: React.FC = () => {
  return (
    <div className="w-full bg-lightGray py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">

          <div>
            <MinimalHeader pillText="Latest News" titleLine1="Insights & Case Studies"/>
          </div>
          <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white">
            View All
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <BlogCard key={p.id} post={p} idx={i} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
