"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";

interface HeroTriangleProps {
  size?: number | string;       
  videoSrc?: string | null;    
  fillColor?: string;        
}

const HeroTriangle: React.FC<HeroTriangleProps> = ({
  size = 600,
  videoSrc = "/assets/mountain-loop.mp4",
  fillColor = "#000000",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoMaskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (videoMaskRef.current) {
      gsap.fromTo(
        videoMaskRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }

    const split = new SplitType(".hero-text", { types: "words" });
    gsap.from(split.words, {
      opacity: 0,
      y: 30,
      stagger: 0.05,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.2,
    });
  }, []);

  // Convert size prop to CSS value
  const sizeValue = typeof size === "number" ? `${size}px` : size;

  return (
    <section
      ref={sectionRef}
      className="bg-transparent flex items-center justify-center overflow-hidden"
      style={{ width: sizeValue, height: sizeValue, minWidth: sizeValue, minHeight: sizeValue }}
    >
      <div
        ref={videoMaskRef}
        className="video-mask relative w-full h-full overflow-hidden"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      >
        <svg
          viewBox="0 0 375 375"
          preserveAspectRatio="xMidYMid slice"
          className="absolute top-0 left-0 w-full h-full"
        >
          <defs>
            <clipPath id="starShapeClip" clipPathUnits="userSpaceOnUse">
              {/* Left point */}
              <path d="M 12.898438 296.613281 L 76.015625 187.484375 L 12.898438 78.355469 L 79.902344 78.355469 L 143.023438 187.484375 L 79.902344 296.613281 Z" />
              {/* Right point */}
              <path d="M 362.023438 78.355469 L 298.902344 187.484375 L 362.023438 296.613281 L 295.015625 296.613281 L 231.898438 187.484375 L 295.015625 78.355469 Z" />
              {/* Bottom point */}
              <path d="M 296.589844 362.046875 L 187.460938 298.925781 L 78.332031 362.046875 L 78.332031 295.039062 L 187.460938 231.921875 L 296.589844 295.039062 Z" />
              {/* Top point */}
              <path d="M 78.332031 12.921875 L 187.460938 76.039062 L 296.589844 12.921875 L 296.589844 79.925781 L 187.460938 143.046875 L 78.332031 79.925781 Z" />
            </clipPath>
          </defs>

          {videoSrc ? (
            <foreignObject
              x="0"
              y="0"
              width="375"
              height="375"
              clipPath="url(#starShapeClip)"
            >
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </foreignObject>
          ) : (
            // If no video, render a simple filled rect clipped to star
            <rect
              width="375"
              height="375"
              fill={fillColor}
              clipPath="url(#starShapeClip)"
            />
          )}
        </svg>
      </div>
    </section>
  );
};

export default HeroTriangle;
