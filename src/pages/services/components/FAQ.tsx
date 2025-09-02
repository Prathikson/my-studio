import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Plus } from 'lucide-react';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  itemClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
  iconType?: 'chevron' | 'plus' | 'custom';
  allowMultiple?: boolean;
  animationDuration?: number;
  staggerDelay?: number;
  theme?: 'light' | 'dark' | 'custom';
  customColors?: {
    background?: string;
    questionBg?: string;
    questionText?: string;
    answerBg?: string;
    answerText?: string;
    border?: string;
    accent?: string;
  };
}

const FAQ: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  subtitle,
  items,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  itemClassName = "",
  questionClassName = "",
  answerClassName = "",
  iconType = 'plus',
  allowMultiple = false,
  animationDuration = 0.4,
  staggerDelay = 0.1,
  theme = 'light',
  customColors = {}
}) => {
  const [activeItems, setActiveItems] = useState<Set<string>>(new Set());
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const answerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const iconRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Theme configurations
  const themes = {
    light: {
      background: 'bg-lightGray',
      questionBg: 'bg-white',
      questionText: 'text-gray-900',
      answerBg: 'bg-gray-50',
      answerText: 'text-gray-700',
      border: 'border-gray-200',
      accent: 'text-blue-600',
    },
    dark: {
      background: 'bg-smoothBlack',
      questionBg: 'bg-gray-800',
      questionText: 'text-white',
      answerBg: 'bg-gray-800',
      answerText: 'text-gray-300',
      border: 'border-gray-700',
      accent: 'text-blue-400',
    },
    custom: customColors
  };

  const currentTheme = themes[theme];

  useEffect(() => {
    // Initial animation for the container
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: staggerDelay,
          ease: "power3.out"
        }
      );
    }
  }, [staggerDelay]);

  const toggleItem = (itemId: string) => {
    const newActiveItems = new Set(activeItems);
    
    if (activeItems.has(itemId)) {
      newActiveItems.delete(itemId);
    } else {
      if (!allowMultiple) {
        // Close all other items first
        activeItems.forEach(activeId => {
          if (activeId !== itemId) {
            animateClose(activeId);
          }
        });
        newActiveItems.clear();
      }
      newActiveItems.add(itemId);
    }
    
    setActiveItems(newActiveItems);
    
    // Animate the clicked item
    if (newActiveItems.has(itemId)) {
      animateOpen(itemId);
    } else {
      animateClose(itemId);
    }
  };

  const animateOpen = (itemId: string) => {
    const answerElement = answerRefs.current[itemId];
    const iconElement = iconRefs.current[itemId];
    const itemElement = itemRefs.current[itemId];
    
    if (answerElement) {
      // Set initial state
      gsap.set(answerElement, { height: 'auto' });
      const height = answerElement.offsetHeight;
      gsap.set(answerElement, { height: 0 });
      
      // Animate answer opening
      gsap.to(answerElement, {
        height: height,
        duration: animationDuration,
        ease: "power3.out"
      });
      
      // Animate answer content
      gsap.fromTo(answerElement.children,
        { opacity: 0, y: -20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: animationDuration * 0.8,
          delay: animationDuration * 0.2,
          ease: "power2.out"
        }
      );
    }
    
    // Animate icon
    if (iconElement) {
      gsap.to(iconElement, {
        rotation: iconType === 'chevron' ? 180 : 45,
        scale: 1.1,
        duration: animationDuration,
        ease: "back.out(1.7)"
      });
    }
    
    // Animate item container
    if (itemElement) {
      gsap.to(itemElement, {
        scale: 1.02,
        duration: 0.2,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      });
    }
  };

  const animateClose = (itemId: string) => {
    const answerElement = answerRefs.current[itemId];
    const iconElement = iconRefs.current[itemId];
    
    if (answerElement) {
      // Animate answer content out first
      gsap.to(answerElement.children, {
        opacity: 0,
        y: -10,
        duration: animationDuration * 0.4,
        ease: "power2.in"
      });
      
      // Then animate height
      gsap.to(answerElement, {
        height: 0,
        duration: animationDuration,
        delay: animationDuration * 0.2,
        ease: "power3.in"
      });
    }
    
    // Animate icon
    if (iconElement) {
      gsap.to(iconElement, {
        rotation: 0,
        scale: 1,
        duration: animationDuration,
        ease: "back.out(1.7)"
      });
    }
  };

  const handleMouseEnter = (itemId: string) => {
    const itemElement = itemRefs.current[itemId];
    if (itemElement) {
      gsap.to(itemElement, {
        y: -2,
        boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = (itemId: string) => {
    const itemElement = itemRefs.current[itemId];
    if (itemElement) {
      gsap.to(itemElement, {
        y: 0,
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const renderIcon = () => {
    switch (iconType) {
      case 'chevron':
        return <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'plus':
        return <Plus className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Plus className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`w-full max-w-full mx-auto p-10 ${currentTheme.background} ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Header - Left on desktop, top on mobile/tablet */}
        <div className="lg:col-span-4 lg:sticky lg:top-8 lg:self-start">
          <div className="text-center lg:text-left">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${currentTheme.questionText} ${titleClassName}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-base sm:text-lg lg:text-xl ${currentTheme.answerText} ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* FAQ Items - Right on desktop, below header on mobile/tablet */}
        <div className="lg:col-span-8 space-y-4">
          {items.map((item) => (
          <div
            key={item.id}
                          ref={el => { itemRefs.current[item.id] = el; }}
            className={`
              ${currentTheme.questionBg} 
              ${currentTheme.border}
              border rounded-xl overflow-hidden shadow-sm
              transition-all duration-300 cursor-pointer
              ${itemClassName}
            `}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
          >
            {/* Question */}
            <div
              onClick={() => toggleItem(item.id)}
              className={`
                p-4 sm:p-6 flex items-center justify-between
                hover:${currentTheme.answerBg} transition-colors duration-200
                ${questionClassName}
              `}
            >
              <h3 className={`text-base sm:text-lg font-semibold pr-4 ${currentTheme.questionText}`}>
                {item.question}
              </h3>
              <div
                                  ref={el => { iconRefs.current[item.id] = el; }}
                className={`
                  flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center
                  ${currentTheme.accent} transition-colors duration-200
                `}
              >
                {renderIcon()}
              </div>
            </div>

            {/* Answer */}
            <div
              ref={el => { answerRefs.current[item.id] = el; }}
              className="overflow-hidden"
              style={{ height: 0 }}
            >
              <div className={`
                px-4 pb-4 sm:px-6 sm:pb-6 ${currentTheme.answerBg} ${currentTheme.answerText}
                ${answerClassName}
              `}>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default FAQ;
