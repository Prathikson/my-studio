import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  id: string;
  title: string;
  features: string[];
  icon: JSX.Element; // pass Lucide Icon or <img src="" />
  index: number;
}

const Card: React.FC<CardProps> = ({ id, title, features, icon, index }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = cardRef.current;

    if (!el) return;

    gsap.fromTo(
      el,
      {
        y: index * 60,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        duration: 1,
        ease: 'power3.out',
        delay: index * 0.15,
      }
    );
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className={clsx(
        'relative bg-gradient-to-br from-neutral-50 to-neutral-100',
        'rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-200/50',
        'backdrop-blur-sm hover:shadow-2xl transition-all duration-300',
        index === 1 && 'md:mt-8',
        index === 2 && 'md:mt-16'
      )}
      style={{ zIndex: 3 - index }}
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-neutral-500 bg-neutral-200 px-3 py-1 rounded-full">
              {String(index + 1).padStart(3, '0')}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-800">
              {title}
            </h3>
          </div>

          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="text-neutral-600 text-lg leading-relaxed flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="flex-shrink-0"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-3xl pointer-events-none"></div>
    </motion.div>
  );
};

export default Card;
