// import React, { useRef, useEffect, useState } from 'react';
// import { motion, useMotionValue, useSpring, type PanInfo } from 'framer-motion';
// import { gsap } from 'gsap';

// export interface CardData {
//   id: string | number;
//   title: string;
//   subtitle?: string;
//   description?: string;
//   image?: string;
//   avatar?: string;
//   stats?: {
//     value: string | number;
//     label?: string;
//     trend?: 'up' | 'down' | 'neutral';
//   };
//   badge?: string;
//   color?: string;
//   gradient?: string;
//   chart?: 'line' | 'dots' | 'triangles';
// }

// interface CardMarqueeProps {
//   cards: CardData[];
//   speed?: number;
//   pauseOnHover?: boolean;
//   dragEnabled?: boolean;
//   cardWidth?: number;
//   gap?: number;
//   className?: string;
//   cardClassName?: string;
//   direction?: 'left' | 'right';
//   showControls?: boolean;
// }

// const CardMarquee: React.FC<CardMarqueeProps> = ({
//   cards,
//   speed = 1,
//   pauseOnHover = true,
//   dragEnabled = true,
//   cardWidth = 280,
//   gap = 20,
//   className = '',
//   cardClassName = '',
//   direction = 'left',
//   showControls = false,
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const marqueeRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
  
//   const x = useMotionValue(0);
//   const springX = useSpring(x, { damping: 50, stiffness: 400 });
  
//   // Calculate total width for seamless loop
//   const totalWidth = (cardWidth + gap) * cards.length;
  
//   useEffect(() => {
//     if (!marqueeRef.current) return;
    
//     const marquee = marqueeRef.current;
//     const animation = gsap.to(marquee, {
//       x: direction === 'left' ? -totalWidth : totalWidth,
//       duration: totalWidth / (speed * 50),
//       ease: 'none',
//       repeat: -1,
//       paused: isHovered && pauseOnHover,
//     });
    
//     return () => animation.kill();
//   }, [totalWidth, speed, direction, isHovered, pauseOnHover]);

//   const handleDragStart = () => {
//     setIsDragging(true);
//   };

//   const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
//     setIsDragging(false);
    
//     // Add momentum to the drag
//     const velocity = info.velocity.x;
//     gsap.to(marqueeRef.current, {
//       x: `+=${velocity * 0.1}`,
//       duration: 2,
//       ease: 'power3.out',
//     });
//   };

//   const renderChart = (type: string, color: string) => {
//     switch (type) {
//       case 'triangles':
//         return (
//           <div className="flex flex-wrap gap-1 mb-2">
//             {Array.from({ length: 12 }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 className={`w-3 h-3 ${color} clip-triangle`}
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: i * 0.1 }}
//                 style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
//               />
//             ))}
//           </div>
//         );
//       case 'dots':
//         return (
//           <div className="grid grid-cols-8 gap-1 mb-2">
//             {Array.from({ length: 24 }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 className={`w-2 h-2 rounded-full ${color}`}
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: i * 0.05 }}
//               />
//             ))}
//           </div>
//         );
//       case 'line':
//         return (
//           <div className="h-16 mb-2 relative overflow-hidden">
//             <svg className="w-full h-full" viewBox="0 0 100 50">
//               <motion.path
//                 d="M0,40 Q20,20 40,25 T80,15 L100,20"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 fill="none"
//                 className="text-white"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ duration: 2, ease: "easeInOut" }}
//               />
//               <motion.circle
//                 r="3"
//                 fill="currentColor"
//                 className="text-white"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.5 }}
//               >
//                 <animateMotion dur="3s" repeatCount="indefinite">
//                   <mpath href="#path" />
//                 </animateMotion>
//               </motion.circle>
//             </svg>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const Card = ({ card, index }: { card: CardData; index: number }) => (
//     <motion.div
//       className={`flex-shrink-0 rounded-2xl p-6 backdrop-blur-sm border border-white/10 overflow-hidden relative group cursor-pointer ${cardClassName}`}
//       style={{ 
//         width: cardWidth,
//         background: card.gradient || card.color || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       }}
//       whileHover={{ 
//         scale: 1.05,
//         y: -10,
//         rotateY: 5,
//         rotateX: 5,
//       }}
//       whileTap={{ scale: 0.98 }}
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ 
//         delay: index * 0.1,
//         type: "spring",
//         stiffness: 400,
//         damping: 25,
//       }}
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
//         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
//         <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-4">
//           {card.avatar && (
//             <motion.div 
//               className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20"
//               whileHover={{ scale: 1.1, rotate: 5 }}
//             >
//               <img src={card.avatar} alt="" className="w-full h-full object-cover" />
//             </motion.div>
//           )}
//           {card.badge && (
//             <motion.div 
//               className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium"
//               whileHover={{ scale: 1.05 }}
//             >
//               {card.badge}
//             </motion.div>
//           )}
//         </div>

//         {/* Chart/Visual */}
//         {card.chart && (
//           <div className="mb-4">
//             {renderChart(card.chart, 'bg-white/30')}
//           </div>
//         )}

//         {/* Stats */}
//         {card.stats && (
//           <motion.div 
//             className="mb-4"
//             whileHover={{ scale: 1.02 }}
//           >
//             <div className="text-4xl font-bold text-white mb-1">
//               {card.stats.value}
//               {card.stats.trend === 'up' && (
//                 <span className="text-green-300 text-lg ml-2">↗</span>
//               )}
//               {card.stats.trend === 'down' && (
//                 <span className="text-red-300 text-lg ml-2">↘</span>
//               )}
//             </div>
//             {card.stats.label && (
//               <div className="text-white/70 text-sm">{card.stats.label}</div>
//             )}
//           </motion.div>
//         )}

//         {/* Title and Description */}
//         <div>
//           <motion.h3 
//             className="text-white font-semibold text-lg mb-2"
//             whileHover={{ x: 5 }}
//           >
//             {card.title}
//           </motion.h3>
//           {card.subtitle && (
//             <p className="text-white/80 text-sm mb-2">{card.subtitle}</p>
//           )}
//           {card.description && (
//             <p className="text-white/60 text-xs leading-relaxed">{card.description}</p>
//           )}
//         </div>

//         {/* Hover Effect */}
//         <motion.div
//           className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
//           initial={false}
//         />
//       </div>

//       {/* Shine Effect */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-[-200%]"
//         transition={{ duration: 0.6 }}
//       />
//     </motion.div>
//   );

//   return (
//     <div className={`relative overflow-hidden ${className}`} ref={containerRef}>
//       <motion.div
//         ref={marqueeRef}
//         className="flex"
//         style={{ 
//           gap: `${gap}px`,
//           x: dragEnabled ? springX : undefined,
//         }}
//         drag={dragEnabled ? "x" : false}
//         dragConstraints={containerRef}
//         onDragStart={handleDragStart}
//         onDragEnd={handleDragEnd}
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => setIsHovered(false)}
//         whileDrag={{ scale: 0.98 }}
//       >
//         {/* First set of cards */}
//         {cards.map((card, index) => (
//           <Card key={`${card.id}-1`} card={card} index={index} />
//         ))}
        
//         {/* Duplicate set for seamless loop */}
//         {cards.map((card, index) => (
//           <Card key={`${card.id}-2`} card={card} index={index} />
//         ))}
//       </motion.div>

//       {/* Gradient Overlays */}
//       <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10" />
//       <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10" />

//       {/* Controls */}
//       {showControls && (
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
//           <motion.button
//             className="text-white/70 hover:text-white transition-colors"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setIsHovered(!isHovered)}
//           >
//             {isHovered ? '▶' : '⏸'}
//           </motion.button>
          
//           <div className="text-white/50 text-xs">
//             {isDragging ? 'Dragging...' : isHovered ? 'Paused' : 'Playing'}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardMarquee;