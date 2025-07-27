import React, { useState, useEffect, useRef, useCallback } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

interface Sticker {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  rotation: number;
  createdAt: number;
  id: number;
  imgIndex: number; // Index to pick image from the array
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return !localStorage.getItem("hasVisited");
    }
    return true;
  });

  const [progress, setProgress] = useState(0);
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const stickerIdRef = useRef(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Preload multiple images
  useEffect(() => {
    const imgPaths = ["/icon_1.svg", "/icon_2.svg", "/icon_3.svg", "/icon_4.svg", "/icon_5.svg"];
    const loadedImages: HTMLImageElement[] = [];

    imgPaths.forEach((src) => {
      const img = new Image();
      img.src = src;
      loadedImages.push(img);
    });

    imagesRef.current = loadedImages;
  }, []);

  // Mouse move handler to create stickers
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isVisible || imagesRef.current.length === 0) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSticker: Sticker = {
      x,
      y,
      opacity: 1,
      scale: 1 + Math.random() * 0.5,
      rotation: Math.random() * 360,
      createdAt: Date.now(),
      id: stickerIdRef.current++,
      imgIndex: Math.floor(Math.random() * imagesRef.current.length),
    };

    setStickers(prev => [...prev, newSticker]);
  }, [isVisible]);

  // Draw stickers with random image
  const drawStickers = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const imgs = imagesRef.current;
    if (!canvas || !ctx || imgs.length === 0) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stickers.forEach(sticker => {
      const age = Date.now() - sticker.createdAt;
      const fadeStart = 1500;
      const maxAge = 2000;

      let opacity = sticker.opacity;
      if (age > fadeStart) {
        opacity = Math.max(0, 1 - (age - fadeStart) / (maxAge - fadeStart));
      }

      if (opacity <= 0) return;

      const img = imgs[sticker.imgIndex];
      if (!img) return;

      ctx.save();
      ctx.translate(sticker.x, sticker.y);
      ctx.rotate((sticker.rotation * Math.PI) / 180);
      ctx.scale(sticker.scale, sticker.scale);
      ctx.globalAlpha = opacity;

      const size = 100;
      ctx.drawImage(img, -size / 2, -size / 2, size, size);

      ctx.restore();
    });
  }, [stickers]);

  const animate = useCallback(() => {
    drawStickers();
    const now = Date.now();
    setStickers(prev => prev.filter(sticker => now - sticker.createdAt < 2000));
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [drawStickers]);

  useEffect(() => {
    if (!isVisible) {
      onComplete?.();
      return;
    }

    const duration = 7000;
    const startTime = performance.now();
    const easeOutQuad = (t: number) => t * (2 - t);

    const animateProgress = (time: number) => {
      const elapsed = time - startTime;
      const linearProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(linearProgress);
      setProgress(easedProgress * 100);

      if (linearProgress < 1) {
        requestAnimationFrame(animateProgress);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          if (typeof window !== "undefined") {
            localStorage.setItem("hasVisited", "true");
          }
          onComplete?.();
        }, 500);
      }
    };
    requestAnimationFrame(animateProgress);
  }, [isVisible, onComplete]);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, handleMouseMove, animate]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-50 overflow-hidden">
      <div className={`w-full h-full ${progress >= 99 ? 'slide-up' : ''}`}>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 cursor-crosshair"
          style={{ background: 'transparent' }}
        />
        <div className="absolute bottom-8 right-8 text-9xl counter font-extrabold text-smoothBlack">
          {Math.round(progress)}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
