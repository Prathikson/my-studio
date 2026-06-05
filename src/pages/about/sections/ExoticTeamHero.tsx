"use client";

import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

// --- Types ---
interface TeamMember {
  id: number;
  image: string;
}

interface CardPhysicsState {
  el: HTMLDivElement | null;
  rest: { x: number; y: number; rotation: number };
  current: { x: number; y: number; rotation: number };
  v: { x: number; y: number; r: number };
}

interface Force {
  fx: number;
  fy: number;
}

interface BreakpointLayout {
  cardSize: number;
  x: number[];
  y: number[];
  rotation: number[];
  proximityRadius: number;
  pushForce: number;
}

// --- Configuration ---
const TILT_AMOUNT = 0.08;
const NEIGHBOR_INFLUENCE = 0.25;
const SPRING_STIFFNESS = 0.04;
const BOUNCE_FRICTION = 0.82;
const CURSOR_SMOOTHING = 0.75;

const teamMembers: TeamMember[] = [
  { id: 1, image: "/assets/team/design.png" },
  { id: 2, image: "/assets/team/social.png" },
  { id: 3, image: "/assets/team/dev.png" },
  { id: 4, image: "/assets/team/hr.png" },
];


// Dynamically compute layout based on viewport width
const getLayout = (vw: number): BreakpointLayout => {
  if (vw < 480) {
    // Mobile — tighter fan, smaller cards
    return {
      cardSize: Math.min(vw * 0.55, 200),
      x: [-90, -30, 30, 90],
      y: [15, -10, 8, 20],
      rotation: [-10, -4, 4, 10],
      proximityRadius: 300,
      pushForce: 6,
    };
  } else if (vw < 768) {
    // Large mobile / small tablet
    return {
      cardSize: Math.min(vw * 0.45, 240),
      x: [-130, -43, 43, 130],
      y: [18, -12, 10, 24],
      rotation: [-9, -3, 4, 9],
      proximityRadius: 380,
      pushForce: 7,
    };
  } else if (vw < 1024) {
    // Tablet
    return {
      cardSize: 280,
      x: [-200, -65, 65, 200],
      y: [20, -14, 10, 28],
      rotation: [-8, -3, 4, 8],
      proximityRadius: 480,
      pushForce: 7,
    };
  } else if (vw < 1440) {
    // Desktop
    return {
      cardSize: 340,
      x: [-260, -85, 85, 260],
      y: [20, -15, 10, 30],
      rotation: [-8, -3, 4, 8],
      proximityRadius: 560,
      pushForce: 8,
    };
  } else {
    // Large desktop
    return {
      cardSize: 400,
      x: [-320, -105, 105, 320],
      y: [20, -15, 10, 30],
      rotation: [-8, -3, 4, 8],
      proximityRadius: 640,
      pushForce: 8,
    };
  }
};

const ExoticTeamHero = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cursor = useRef({ x: 0, y: 0, vx: 0, vy: 0 });
  const prevCursor = useRef({ x: 0, y: 0 });
  const cardPhysics = useRef<CardPhysicsState[]>([]);
  const layoutRef = useRef<BreakpointLayout>(getLayout(
    typeof window !== "undefined" ? window.innerWidth : 1280
  ));

  // Re-initialise physics rest positions when layout changes (resize)
  const applyLayout = useCallback(() => {
    const layout = getLayout(window.innerWidth);
    layoutRef.current = layout;

    cardPhysics.current.forEach((card, i) => {
      card.rest.x = layout.x[i];
      card.rest.y = layout.y[i];
      card.rest.rotation = layout.rotation[i];
      // Snap current to rest so there's no jarring drift
      card.current.x = layout.x[i];
      card.current.y = layout.y[i];
      card.current.rotation = layout.rotation[i];
      card.v = { x: 0, y: 0, r: 0 };

      if (card.el) {
        // Update card size
        card.el.style.width = `${layout.cardSize}px`;
        card.el.style.height = `${layout.cardSize}px`;

        gsap.set(card.el, {
          x: layout.x[i],
          y: layout.y[i],
          rotation: layout.rotation[i],
          xPercent: -50,
          yPercent: -50,
          zIndex: i,
        });
      }
    });
  }, []);

  useEffect(() => {
    if (!spotlightRef.current || !cardsContainerRef.current) return;

    const layout = getLayout(window.innerWidth);
    layoutRef.current = layout;

    // Initialise physics state
    cardPhysics.current = teamMembers.map((_, i) => {
      const el = cardsRef.current[i];
      if (el) {
        el.style.width = `${layout.cardSize}px`;
        el.style.height = `${layout.cardSize}px`;
      }

      gsap.set(el, {
        x: layout.x[i],
        y: layout.y[i],
        rotation: layout.rotation[i],
        xPercent: -50,
        yPercent: -50,
        zIndex: i,
      });

      return {
        el,
        rest: { x: layout.x[i], y: layout.y[i], rotation: layout.rotation[i] },
        current: { x: layout.x[i], y: layout.y[i], rotation: layout.rotation[i] },
        v: { x: 0, y: 0, r: 0 },
      };
    });

    // Mouse / touch handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rawVx = e.clientX - prevCursor.current.x;
      const rawVy = e.clientY - prevCursor.current.y;
      cursor.current.vx =
        cursor.current.vx * CURSOR_SMOOTHING + rawVx * (1 - CURSOR_SMOOTHING);
      cursor.current.vy =
        cursor.current.vy * CURSOR_SMOOTHING + rawVy * (1 - CURSOR_SMOOTHING);
      cursor.current.x = e.clientX;
      cursor.current.y = e.clientY;
      prevCursor.current.x = e.clientX;
      prevCursor.current.y = e.clientY;
    };

    // Touch — simulate cursor velocity from touch move
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      const rawVx = t.clientX - prevCursor.current.x;
      const rawVy = t.clientY - prevCursor.current.y;
      cursor.current.vx =
        cursor.current.vx * CURSOR_SMOOTHING + rawVx * (1 - CURSOR_SMOOTHING);
      cursor.current.vy =
        cursor.current.vy * CURSOR_SMOOTHING + rawVy * (1 - CURSOR_SMOOTHING);
      cursor.current.x = t.clientX;
      cursor.current.y = t.clientY;
      prevCursor.current.x = t.clientX;
      prevCursor.current.y = t.clientY;
    };

    const handleTouchEnd = () => {
      cursor.current.vx = 0;
      cursor.current.vy = 0;
    };

    // Resize — debounced
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(applyLayout, 120);
    };

    const spotlight = spotlightRef.current;
    spotlight.addEventListener("mousemove", handleMouseMove);
    spotlight.addEventListener("touchmove", handleTouchMove, { passive: true });
    spotlight.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("resize", handleResize);

    const calculatePushForce = (card: CardPhysicsState): Force => {
      const layout = layoutRef.current;
      const speed = Math.sqrt(cursor.current.vx ** 2 + cursor.current.vy ** 2);
      if (speed < 0.5) return { fx: 0, fy: 0 };
      const container = cardsContainerRef.current;
      if (!container) return { fx: 0, fy: 0 };

      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2 + card.rest.x;
      const cy = rect.top + rect.height / 2 + card.rest.y;

      const dist = Math.sqrt(
        (cursor.current.x - cx) ** 2 + (cursor.current.y - cy) ** 2
      );
      if (dist > layout.proximityRadius) return { fx: 0, fy: 0 };

      const weight = Math.pow(1 - dist / layout.proximityRadius, 3);
      return {
        fx: cursor.current.vx * layout.pushForce * weight,
        fy: cursor.current.vy * layout.pushForce * weight,
      };
    };

    const applyNeighborInfluence = (forces: Force[], index: number): Force => {
      let fx = forces[index].fx;
      let fy = forces[index].fy;
      forces.forEach((force, j) => {
        if (index === j) return;
        const falloff = Math.pow(NEIGHBOR_INFLUENCE, Math.abs(index - j));
        fx += force.fx * falloff;
        fy += force.fy * falloff * 0.6;
      });
      return { fx, fy };
    };

    const tick = () => {
      const forces = cardPhysics.current.map((card) => calculatePushForce(card));
      cardPhysics.current.forEach((card, i) => {
        const { fx, fy } = applyNeighborInfluence(forces, i);

        card.v.x =
          (card.v.x + (card.rest.x + fx - card.current.x) * SPRING_STIFFNESS) *
          BOUNCE_FRICTION;
        card.current.x += card.v.x;

        card.v.y =
          (card.v.y + (card.rest.y + fy - card.current.y) * SPRING_STIFFNESS) *
          BOUNCE_FRICTION;
        card.current.y += card.v.y;

        card.v.r =
          (card.v.r +
            (card.rest.rotation + fx * TILT_AMOUNT - card.current.rotation) *
              SPRING_STIFFNESS) *
          BOUNCE_FRICTION;
        card.current.rotation += card.v.r;

        if (card.el) {
          gsap.set(card.el, {
            x: card.current.x,
            y: card.current.y,
            rotation: card.current.rotation,
          });
        }
      });
    };

    gsap.ticker.add(tick);

    return () => {
      spotlight.removeEventListener("mousemove", handleMouseMove);
      spotlight.removeEventListener("touchmove", handleTouchMove);
      spotlight.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      gsap.ticker.remove(tick);
    };
  }, [applyLayout]);

  return (
    <section
      ref={spotlightRef}
      className="relative w-full h-screen bg-lightGray overflow-hidden"
    >
      {/* Top Branding */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center pt-4 sm:pt-8 md:pt-10 z-10 pointer-events-none px-4">
        <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-carbonBlack/40 uppercase mb-2 sm:mb-4">
          Edmonton • Digital Agency
        </p>
        <h1 className="text-carbonBlack text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-center">
          #wearextoic
        </h1>
      </div>

      {/* Fanned Momentum Cards — anchored to true viewport center */}
      <div
        ref={cardsContainerRef}
        className="absolute inset-0 pointer-events-none"
      >
        {teamMembers.map((member, i) => (
          <div
            key={member.id}
            ref={(el) => { cardsRef.current[i] = el; }}
            className="absolute pointer-events-auto rounded-[1.5rem] sm:rounded-[2rem] shadow-xl overflow-hidden"
            style={{ willChange: "transform", top: "50%", left: "50%" }}
          >
            <img
              src={member.image}
              alt="Team member"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom Title */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-8 sm:pb-12 md:pb-16 z-10 pointer-events-none px-4">
        <h2 className="text-smoothBlack/20 text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none text-center">
          Our Team
        </h2>
        <p className="mt-4 sm:mt-6 md:mt-8 text-smoothBlack/80 text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-center">
          Visualizing the future of digital experience
        </p>
      </div>
    </section>
  );
};

export default ExoticTeamHero;