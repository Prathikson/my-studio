import React, { useEffect, useRef, useState } from "react";

interface ParticleWordProps {
  words: string[];
  particleColor?: string;
  particleSize?: number;
  dissolveDuration?: number;
  reformDuration?: number;
  holdDuration?: number;
  fontFamily?: string;
  fontWeight?: string | number;
  baseFontSize?: number; // A scaling base instead of fixed size
}

interface Particle {
  x: number;
  y: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  alpha: number;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInCubic = (t: number) => t * t * t;

const ParticleWord: React.FC<ParticleWordProps> = ({
  words,
  particleColor = "#0071fe",
  particleSize = 2,
  dissolveDuration = 1200,
  reformDuration = 1200,
  holdDuration = 700,
  fontFamily = "sans-serif",
  fontWeight = "bold",
  baseFontSize = 0.15, // relative to canvas height
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 250 });

  const totalCycle = dissolveDuration + reformDuration + holdDuration;

  const createParticlesForWord = (
    ctx: CanvasRenderingContext2D,
    word: string,
    width: number,
    height: number,
    fontSize: number
  ) => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = particleColor;
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(word, width / 2, height / 2);
    const imgData = ctx.getImageData(0, 0, width, height);

    const particles: Particle[] = [];
    const gap = 4;

    for (let y = 0; y < height; y += gap) {
      for (let x = 0; x < width; x += gap) {
        const index = (y * width + x) * 4;
        const alpha = imgData.data[index + 3];
        if (alpha > 128) {
          particles.push({
            x: 0,
            y: 0,
            startX: 0,
            startY: 0,
            targetX: x,
            targetY: y,
            alpha: 0,
          });
        }
      }
    }

    particles.forEach((p) => {
      p.startX = width / 2 + (Math.random() - 0.5) * 200;
      p.startY = height / 2 + (Math.random() - 0.5) * 200;
      p.x = p.startX;
      p.y = p.startY;
      p.alpha = 0;
    });

    return particles;
  };

  const animate = (time: number) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const { width, height } = dimensions;
    const fontSize = height * baseFontSize;

    if (!startTimeRef.current) startTimeRef.current = time;
    const elapsed = time - startTimeRef.current;
    const cycleTime = elapsed % totalCycle;
    const particles = particlesRef.current;

    ctx.clearRect(0, 0, width, height);

    if (cycleTime < reformDuration) {
      const t = cycleTime / reformDuration;
      particles.forEach((p) => {
        p.x = p.startX + (p.targetX - p.startX) * easeOutCubic(t);
        p.y = p.startY + (p.targetY - p.startY) * easeOutCubic(t);
        p.alpha = t;
      });
    } else if (cycleTime < reformDuration + holdDuration) {
      particles.forEach((p) => {
        p.x = p.targetX;
        p.y = p.targetY;
        p.alpha = 1;
      });
    } else {
      const t = (cycleTime - reformDuration - holdDuration) / dissolveDuration;
      particles.forEach((p) => {
        p.x = p.targetX + (p.startX - p.targetX) * easeInCubic(t);
        p.y = p.targetY + (p.startY - p.targetY) * easeInCubic(t);
        p.alpha = 1 - t;
      });
    }

    particles.forEach((p) => {
      ctx.fillStyle = `rgba(${hexToRgb(particleColor)},${p.alpha.toFixed(2)})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
      ctx.fill();
    });

    // advance word
    if (elapsed >= totalCycle * (Math.floor(elapsed / totalCycle) + 1) - 16) {
      setCurrentWordIndex((i) => (i + 1) % words.length);
    }

    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({
          width: Math.floor(width),
          height: Math.floor(height),
        });
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const { width, height } = dimensions;
    const fontSize = height * baseFontSize;

    startTimeRef.current = performance.now();
    particlesRef.current = createParticlesForWord(
      ctx,
      words[currentWordIndex],
      width,
      height,
      fontSize
    );
  }, [currentWordIndex, dimensions]);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
      startTimeRef.current = 0;
    };
  }, []);

  function hexToRgb(hex: string) {
    let c = hex.substring(1);
    if (c.length === 3) {
      c = c.split("").map((ch) => ch + ch).join("");
    }
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `${r},${g},${b}`;
  }

  return (
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
  );
};

export default ParticleWord;
