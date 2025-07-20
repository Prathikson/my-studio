import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import "./styles.css";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Type definitions
interface TextAnimationItem {
  segment: Element;
  originalIndex: number;
}

interface DuplicateIcon extends HTMLElement {
  parentNode: ParentNode | null;
}

// Extend Window interface to include duplicateIcons
declare global {
  interface Window {
    duplicateIcons: DuplicateIcon[] | null;
  }
}

const Hero: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Query DOM elements with proper selectors
    const animatedIcons = document.querySelector('.animated-icons') as HTMLElement;
    const iconElements = document.querySelectorAll('.animated-icon') as NodeListOf<HTMLElement>;
    const textSegments = document.querySelectorAll('.text-segment') as NodeListOf<HTMLElement>;
    const placeholders = document.querySelectorAll('.placeholder-icon') as NodeListOf<HTMLElement>;
    const heroHeader = document.querySelector('.hero-header') as HTMLElement;
    const heroSection = document.querySelector('#hero') as HTMLElement; // Fixed selector

    if (!animatedIcons || !iconElements.length || !heroHeader || !heroSection) {
      console.warn('Required DOM elements not found');
      return;
    }

    // Create text animation order array with proper typing
    const textAnimationOrder: TextAnimationItem[] = [];
    textSegments.forEach((segment, index) => {
      textAnimationOrder.push({ segment, originalIndex: index });
    });

    // Fisher-Yates shuffle algorithm
    for (let i = textAnimationOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [textAnimationOrder[i], textAnimationOrder[j]] = [
        textAnimationOrder[j],
        textAnimationOrder[i],
      ];
    }

    // Calculate responsive values
    const isMobile = window.innerWidth < 1000;
    const headerIconSize = isMobile ? 30 : 60;
    const currentIconSize = iconElements[0].getBoundingClientRect().width;
    const exactScale = headerIconSize / currentIconSize;

    // Create ScrollTrigger animation
    ScrollTrigger.create({
      trigger: '#hero', // Fixed trigger selector
      start: 'top top',
      end: `+=${window.innerHeight * 8}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        // Reset text segments opacity
        textSegments.forEach((segment) => {
          gsap.set(segment, { opacity: 0 });
        });

        if (progress < 0.3) {
          const moveProgress = progress / 0.3;
          const containerMoveY = -window.innerHeight * 0.3 + moveProgress;

          // Header animation phase
          if (progress < 0.15) {
            const headerProgress = progress / 0.15;
            const headerMoveY = -50 * headerProgress;
            const headerOpacity = 1 - headerProgress;

            gsap.set(heroHeader, {
              transform: `translate(-50%, calc(-50% + ${headerMoveY}px))`,
              opacity: headerOpacity,
            });
          } else {
            gsap.set(heroHeader, {
              transform: `translate(-50%, calc(-50% + -50px))`,
              opacity: 0,
            });
          }

          // Clean up duplicate icons
          if (window.duplicateIcons) {
            window.duplicateIcons.forEach((duplicate) => {
              if (duplicate.parentNode) {
                duplicate.parentNode.removeChild(duplicate);
              }
            });
            window.duplicateIcons = null;
          }

          gsap.set(animatedIcons, {
            x: 0,
            y: containerMoveY,
            scale: 1,
            opacity: 1,
          });

          iconElements.forEach((icon, index) => {
            const staggerDelay = index * 0.1;
            const iconStart = staggerDelay;
            const iconEnd = staggerDelay + 0.5;

            const iconProgress = gsap.utils.mapRange(
              iconStart,
              iconEnd,
              0,
              1,
              moveProgress
            );
            const clampedProgress = Math.max(0, Math.min(1, iconProgress));

            const startOffset = -containerMoveY;
            const individualY = startOffset * (1 - clampedProgress);

            gsap.set(icon, {
              x: 0,
              y: individualY,
            });
          });
        } else if (progress <= 0.6) {
          const scaleProgress = (progress - 0.3) / 0.3;

          gsap.set(heroHeader, {
            transform: `translate(-50%, calc(-50% + -50px))`,
            opacity: 0,
          });

          // Background color change
          if (scaleProgress >= 0.5) {
            heroSection.style.backgroundColor = '#f1f1f1';
          } else {
            heroSection.style.backgroundColor = '#141414';
          }

          // Clean up duplicate icons
          if (window.duplicateIcons) {
            window.duplicateIcons.forEach((duplicate) => {
              if (duplicate.parentNode) {
                duplicate.parentNode.removeChild(duplicate);
              }
            });
            window.duplicateIcons = null;
          }

          // Center and scale animation
          const targetCenterY = window.innerHeight / 2;
          const targetCenterX = window.innerWidth / 2;
          const containerRect = animatedIcons.getBoundingClientRect();
          const currentCenterX = containerRect.left + containerRect.width / 2;
          const currentCenterY = containerRect.top + containerRect.height / 2;
          const deltaX = (targetCenterX - currentCenterX) * scaleProgress;
          const deltaY = (targetCenterY - currentCenterY) * scaleProgress;
          const baseY = -window.innerHeight * 0.3;
          const currentScale = 1 + (exactScale - 1) * scaleProgress;

          gsap.set(animatedIcons, {
            x: deltaX,
            y: baseY + deltaY,
            scale: currentScale,
            opacity: 1,
          });

          iconElements.forEach((icon) => {
            gsap.set(icon, { x: 0, y: 0 });
          });
        } else if (progress <= 0.75) {
          const moveProgress = (progress - 0.6) / 0.15;

          gsap.set(heroHeader, {
            transform: `translate(-50%, calc(-50% + -50px))`,
            opacity: 0,
          });

          heroSection.style.backgroundColor = '#f1f1f1';

          const targetCenterY = window.innerHeight / 2;
          const targetCenterX = window.innerWidth / 2;
          const containerRect = animatedIcons.getBoundingClientRect();
          const currentCenterX = containerRect.left + containerRect.width / 2;
          const currentCenterY = containerRect.top + containerRect.height / 2;
          const deltaX = targetCenterX - currentCenterX;
          const deltaY = targetCenterY - currentCenterY;
          const baseY = -window.innerHeight * 0.3;

          gsap.set(animatedIcons, {
            x: deltaX,
            y: baseY + deltaY,
            scale: exactScale,
            opacity: 0,
          });

          iconElements.forEach((icon) => {
            gsap.set(icon, { x: 0, y: 0 });
          });

          // Create duplicate icons
          if (!window.duplicateIcons) {
            window.duplicateIcons = [];

            iconElements.forEach((icon) => {
              const duplicate = icon.cloneNode(true) as DuplicateIcon;
              duplicate.className = 'duplicate-icon';
              duplicate.style.position = 'absolute';
              duplicate.style.width = headerIconSize + 'px';
              duplicate.style.height = headerIconSize + 'px';

              document.body.appendChild(duplicate);
              window.duplicateIcons!.push(duplicate);
            });
          }

          // Animate duplicate icons
          if (window.duplicateIcons) {
            window.duplicateIcons.forEach((duplicate, index) => {
              if (index < placeholders.length) {
                const iconRect = iconElements[index].getBoundingClientRect();
                const startCenterX = iconRect.left + iconRect.width / 2;
                const startCenterY = iconRect.top + iconRect.height / 2;
                const startPageX = startCenterX + window.pageXOffset;
                const startPageY = startCenterY + window.pageYOffset;

                const targetRect = placeholders[index].getBoundingClientRect();
                const targetCenterX = targetRect.left + targetRect.width / 2;
                const targetCenterY = targetRect.top + targetRect.height / 2;
                const targetPageX = targetCenterX + window.pageXOffset;
                const targetPageY = targetCenterY + window.pageYOffset;

                const moveX = targetPageX - startPageX;
                const moveY = targetPageY - startPageY;

                let currentX = 0;
                let currentY = 0;

                if (moveProgress <= 0.5) {
                  const verticalProgress = moveProgress / 0.5;
                  currentY = moveY * verticalProgress;
                } else {
                  const horizontalProgress = (moveProgress - 0.5) / 0.5;
                  currentY = moveY;
                  currentX = moveX * horizontalProgress;
                }

                const finalPageX = startPageX + currentX;
                const finalPageY = startPageY + currentY;

                duplicate.style.left = finalPageX - headerIconSize / 2 + 'px';
                duplicate.style.top = finalPageY - headerIconSize / 2 + 'px';
                duplicate.style.opacity = '1';
                duplicate.style.display = 'flex';
              }
            });
          }
        } else {
          // Final phase
          gsap.set(heroHeader, {
            transform: `translate(-50%, calc(-50% + -100px))`,
            opacity: 0,
          });

          heroSection.style.backgroundColor = '#f1f1f1';
          gsap.set(animatedIcons, { opacity: 0 });

          // Position duplicate icons at final positions
          if (window.duplicateIcons) {
            window.duplicateIcons.forEach((duplicate, index) => {
              if (index < placeholders.length) {
                const targetRect = placeholders[index].getBoundingClientRect();
                const targetCenterX = targetRect.left + targetRect.width / 2;
                const targetCenterY = targetRect.top + targetRect.height / 2;
                const targetPageX = targetCenterX + window.pageXOffset;
                const targetPageY = targetCenterY + window.pageYOffset;

                duplicate.style.left = targetPageX - headerIconSize / 2 + 'px';
                duplicate.style.top = targetPageY - headerIconSize / 2 + 'px';
                duplicate.style.opacity = '1';
                duplicate.style.display = 'flex';
              }
            });
          }

          // Text animation
          textAnimationOrder.forEach((item, randomIndex) => {
            const segmentStart = 0.75 + randomIndex * 0.03;
            const segmentEnd = segmentStart + 0.015;

            const segmentProgress = gsap.utils.mapRange(
              segmentStart,
              segmentEnd,
              0,
              1,
              progress
            );

            const clampedProgress = Math.max(0, Math.min(1, segmentProgress));

            gsap.set(item.segment, {
              opacity: clampedProgress,
            });
          });
        }
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      
      // Clean up duplicate icons
      if (window.duplicateIcons) {
        window.duplicateIcons.forEach((duplicate) => {
          if (duplicate.parentNode) {
            duplicate.parentNode.removeChild(duplicate);
          }
        });
        window.duplicateIcons = null;
      }
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-header">
        <h1 className='text-white text-5xl uppercase md:text-9xl'>Welcome to XTOIC Studio</h1>
        <p className='text-white text-lg md:text-2xl'>The Gateway of Digital Experience</p>
      </div>
      <div className="animated-icons">
        <div className="animated-icon icon-1">
          <img src="/icon_1.png" alt="Coding icon" />
        </div>
        <div className="animated-icon icon-2">
          <img src="/icon_2.png" alt="Development icon" />
        </div>
        <div className="animated-icon icon-3">
          <img src="/icon_3.png" alt="Tutorial icon" />
        </div>
        <div className="animated-icon icon-4">
          <img src="/icon_4.png" alt="Learning icon" />
        </div>
        <div className="animated-icon icon-5">
          <img src="/icon_5.png" alt="Code grid icon" />
        </div>
      </div>
      <h1 className="animated-text">
        <div className="placeholder-icon"></div>
        <span className="text-segment">Delve into Coding</span>
        <div className="placeholder-icon"></div>
        <span className="text-segment">Without Clutter.</span>
        <span className="text-segment">Unlock Source code </span>
        <div className="placeholder-icon"></div>
        <span className="text-segment">for every tutorial</span>
        <div className="placeholder-icon"></div>
        <span className="text-segment">Published on the codegrid</span>
        <div className="placeholder-icon"></div>
      </h1>
    </section>
  );
};

export default Hero;