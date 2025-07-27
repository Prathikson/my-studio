"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type FaceState = "neutral" | "smile" | "surprised" | "sleepy";

type OrbCursorProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};

const ease = { stiffness: 300, damping: 30 };
const maxStretch = 1.15;
const minStretch = 0.85;

const OrbCursor: React.FC<OrbCursorProps> = ({ containerRef }) => {
  // Position motion values (relative to container)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const orbX = useSpring(mouseX, ease);
  const orbY = useSpring(mouseY, ease);

  // Bubble morph scale values
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);

  // Gentle wiggle rotation
  const rotate = useMotionValue(0);

  // Face expression state
  const [faceState, setFaceState] = useState<FaceState>("neutral");

  // Eye offset (move opposite direction of mouse velocity, clamped)
  const eyeOffsetX = useMotionValue(0);
  const eyeOffsetY = useMotionValue(0);

  // Track previous position/time for velocity and movement speed
  const prevPos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const idleTimeout = useRef<number | null>(null);

  // Scroll velocity tracking
  const prevScrollY = useRef(window.scrollY);
  const scrollVelocity = useRef(0);

  // Wiggle loop for rotation
  useEffect(() => {
    let frameId: number;
    const wiggle = () => {
      // Wiggle rotation ±4deg with sine wave
      rotate.set(Math.sin(Date.now() / 150) * 4);
      frameId = requestAnimationFrame(wiggle);
    };
    wiggle();
    return () => cancelAnimationFrame(frameId);
  }, [rotate]);

  // Mouse move inside container: update position, velocity, face state
  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      // Relative coords inside container
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      // Clamp inside container
      x = Math.min(Math.max(x, 0), rect.width);
      y = Math.min(Math.max(y, 0), rect.height);

      mouseX.set(x);
      mouseY.set(y);

      const now = Date.now();
      const dt = now - lastTime.current || 16;
      const dx = x - prevPos.current.x;
      const dy = y - prevPos.current.y;

      const vx = dx / dt; // px/ms
      const vy = dy / dt;

      // Bubble stretch based on velocity, clamp scale
      let stretchH = 1 + vx * 0.7;
      let stretchV = 1 - vy * 0.7;
      stretchH = Math.min(Math.max(stretchH, minStretch), maxStretch);
      stretchV = Math.min(Math.max(stretchV, minStretch), maxStretch);
      scaleX.set(stretchH);
      scaleY.set(stretchV);

      // Eyes move opposite velocity, max ±6px
      const eyeX = Math.min(Math.max(-vx * 30, -6), 6);
      const eyeY = Math.min(Math.max(-vy * 30, -6), 6);
      eyeOffsetX.set(eyeX);
      eyeOffsetY.set(eyeY);

      // Face state changes:
      // - Smile if hovering on button with [data-cursor="button"]
      // - Surprised if fast movement (>0.7 px/ms velocity magnitude)
      // - Sleepy if idle > 1.5s
      // - Else neutral

      const speed = Math.sqrt(vx * vx + vy * vy);

      // Reset idle timer on move
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
        idleTimeout.current = null;
      }

      if (speed > 0.7) {
        setFaceState("surprised");
      } else {
        const target = e.target as HTMLElement;
        if (target.closest('[data-cursor="button"]')) {
          setFaceState("smile");
        } else {
          // Start idle timer for sleepy face
          idleTimeout.current = window.setTimeout(() => {
            setFaceState("sleepy");
          }, 1500);
          setFaceState("neutral");
        }
      }

      prevPos.current = { x, y };
      lastTime.current = now;
    }

    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", onMouseMove);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", onMouseMove);
      }
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
      }
    };
  }, [containerRef, mouseX, mouseY, scaleX, scaleY, eyeOffsetX, eyeOffsetY]);

  // Scroll velocity tracking, affects orb vertical scale (squish)
  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY;
      const deltaY = currentY - prevScrollY.current;
      scrollVelocity.current = deltaY;

      // Map scroll deltaY to vertical scale squish (max 0.8 - 1.2)
      let scrollScale = 1 - deltaY * 0.005;
      scrollScale = Math.min(Math.max(scrollScale, 0.8), 1.2);
      scaleY.set(scrollScale);

      prevScrollY.current = currentY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scaleY]);

  // Render SVG faces for each state
  const renderFace = () => {
    switch (faceState) {
      case "smile":
        return (
          <>
            {/* Eyes */}
            <motion.g style={{ translateX: eyeOffsetX, translateY: eyeOffsetY }}>
              <circle cx="25" cy="30" r="6" fill="#333" />
              <circle cx="55" cy="30" r="6" fill="#333" />
              <circle cx="25" cy="30" r="3" fill="#fff" />
              <circle cx="55" cy="30" r="3" fill="#fff" />
            </motion.g>
            {/* Smile Mouth */}
            <path
              d="M 22 52 Q 40 72 58 52"
              stroke="#111"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </>
        );
      case "surprised":
        return (
          <>
            {/* Wide eyes */}
            <motion.g style={{ translateX: eyeOffsetX, translateY: eyeOffsetY }}>
              <circle cx="25" cy="30" r="8" fill="#333" />
              <circle cx="55" cy="30" r="8" fill="#333" />
              <circle cx="25" cy="30" r="5" fill="#fff" />
              <circle cx="55" cy="30" r="5" fill="#fff" />
            </motion.g>
            {/* Open round mouth */}
            <circle
              cx="40"
              cy="60"
              r="8"
              stroke="#333"
              strokeWidth="3"
              fill="none"
            />
          </>
        );
      case "sleepy":
        return (
          <>
            {/* Half-closed eyes */}
            <motion.g style={{ translateX: eyeOffsetX, translateY: eyeOffsetY }}>
              <path
                d="M 19 30 Q 25 20 31 30"
                stroke="#333"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 49 30 Q 55 20 61 30"
                stroke="#333"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.g>
            {/* Small straight mouth */}
            <path
              d="M 25 58 L 55 58"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </>
        );
      case "neutral":
      default:
        return (
          <>
            {/* Eyes */}
            <motion.g style={{ translateX: eyeOffsetX, translateY: eyeOffsetY }}>
              <circle cx="25" cy="30" r="6" fill="#333" />
              <circle cx="55" cy="30" r="6" fill="#333" />
              <circle cx="25" cy="30" r="3" fill="#fff" />
              <circle cx="55" cy="30" r="3" fill="#fff" />
            </motion.g>
            {/* Neutral mouth */}
            <path
              d="M 25 55 Q 40 60 55 55"
              stroke="#333"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </>
        );
    }
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        translateX: orbX,
        translateY: orbY,
        scaleX,
        scaleY,
        rotate,
        width: 80,
        height: 80,
        pointerEvents: "none",
        borderRadius: "50%",
        background: "rgba(255 255 255 / 0.8)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255 255 255 / 0.6)",
        boxShadow: "0 8px 20px rgb(0 0 0 / 0.12)",
        userSelect: "none",
        zIndex: 9999,
      }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderFace()}
      </svg>
    </motion.div>
  );
};

export default OrbCursor;
