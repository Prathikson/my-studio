// import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { useNavigate } from "react-router-dom";
// import {
//   Sparkles,
//   ArrowRight,
//   Share2,
//   Code,
//   Palette,

// } from "lucide-react";

// // --------------------
// // 🔹 Type Definitions
// // --------------------
// interface ServiceItem {
//   name: string;
//   path: string;
//   description: string;
//   image: string;
// }

// interface ServiceCategory {
//   id: number;
//   title: string;
//   icon: any;
//   description: string;
//   services: ServiceItem[];
// }

// interface ServiceCardProps {
//   service: ServiceItem;
//   category: string;
//   index: number;
// }

// interface CardScrollProps {
//   service: 'Brand' | 'Social' | 'Build' | 'Design';
// }

// // --------------------
// // 🔹 Service Categories Data
// // --------------------
// const serviceCategories: Record<string, ServiceCategory> = {
//   Brand: {
//     id: 1,
//     title: "Brand",
//     icon: Sparkles,
//     description: "Create compelling brand experiences that resonate with your audience and differentiate you from competitors through strategic brand positioning.",
//     services: [
//       { 
//         name: "Creative Positioning & Brand Strategy Playbooks", 
//         path: "/services/brand/brand-strategy",
//         description: "A brand without clarity is just noise. Our Brand Playbooks define the why, who, and how of your communications, so every campaign hits with purpose. We distill your positioning, audience insights, messaging pillars, and campaign angles into one strategic guide.",
//         image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
//       },
//       { 
//         name: "Content Strategy", 
//         path: "/services/brand/360-creative",
//         description: "Holistic creative campaigns that deliver consistent brand experiences across all touchpoints and channels with strategic content planning.",
//         image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop"
//       },
//       { 
//         name: "Keyword Universe & Search Journeys", 
//         path: "/services/brand/art-direction",
//         description: "Visual storytelling that captures your brand essence through compelling design direction and creative concepts that resonate with your target audience.",
//         image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop"
//       },
//       { 
//         name: "LLM/AIO/GEO Audits & Strategy", 
//         path: "/services/brand/copywriting",
//         description: "Advanced AI-powered audits and strategic planning to optimize your digital presence across search engines and AI platforms for maximum visibility.",
//         image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop"
//       }
//     ],
//   },
//   Social: {
//     id: 2,
//     title: "Social",
//     icon: Share2,
//     description: "Amplify your social presence with data-driven strategies that engage your community and drive meaningful conversations across all platforms.",
//     services: [
//       { 
//         name: "Social Media Strategy", 
//         path: "/services/social/social-media-strategy",
//         description: "Comprehensive social media planning and execution that aligns with your business objectives and audience needs.",
//         image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop"
//       },
//       { 
//         name: "TikTok/Social Shorts", 
//         path: "/services/social/tiktok-social-shorts",
//         description: "Create viral short-form content optimized for TikTok, Instagram Reels, and YouTube Shorts platforms.",
//         image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop"
//       },
//       { 
//         name: "Influencer Campaigns", 
//         path: "/services/social/influencer-campaigns",
//         description: "Strategic partnerships with influencers to amplify your brand reach and build authentic connections.",
//         image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
//       },
//       { 
//         name: "Community Management", 
//         path: "/services/social/community-management",
//         description: "Build and nurture engaged communities that drive brand loyalty and customer advocacy.",
//         image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
//       }
//     ],
//   },
//   Build: {
//     id: 3,
//     title: "Build",
//     icon: Code,
//     description: "Transform your digital presence with cutting-edge development solutions that deliver exceptional performance and user experiences.",
//     services: [
//       { 
//         name: "Web Development", 
//         path: "/services/build/web-development",
//         description: "Custom web applications built with modern technologies for optimal performance and scalability.",
//         image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop"
//       },
//       { 
//         name: "Frontend Solutions", 
//         path: "/services/build/frontend-solutions",
//         description: "Interactive user interfaces that provide seamless experiences across all devices and browsers.",
//         image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop"
//       },
//       { 
//         name: "Mobile Apps", 
//         path: "/services/build/mobile-apps",
//         description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
//         image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
//       },
//       { 
//         name: "API Integration", 
//         path: "/services/build/api-integration",
//         description: "Seamless integration of third-party services and APIs to extend your application's capabilities.",
//         image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
//       }
//     ],
//   },
//   Design: {
//     id: 4,
//     title: "Design",
//     icon: Palette,
//     description: "Craft beautiful, functional designs that tell your story and create memorable experiences for your users across all touchpoints.",
//     services: [
//       { 
//         name: "UI/UX Design", 
//         path: "/services/design/ui-ux-design",
//         description: "User-centered design solutions that prioritize usability while delivering stunning visual experiences.",
//         image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop"
//       },
//       { 
//         name: "Website Re-Design", 
//         path: "/services/design/website-redesign",
//         description: "Transform your existing website with modern design principles and improved user experience.",
//         image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop"
//       },
//       { 
//         name: "Visual Identity", 
//         path: "/services/design/visual-identity",
//         description: "Comprehensive brand identity systems including logos, color palettes, and visual guidelines.",
//         image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
//       },
//       { 
//         name: "Print Design", 
//         path: "/services/design/print-design",
//         description: "Professional print materials that extend your brand presence into the physical world.",
//         image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop"
//       }
//     ],
//   },
// };

// // --------------------
// // 🔹 Individual Service Card Component
// // --------------------
// const ServiceCard: React.FC<ServiceCardProps> = ({ service, category }) => {
//   const navigate = useNavigate();
//   const [isHovered, setIsHovered] = useState(false);

//   const handleClick = () => {
//     navigate(service.path);
//   };

//   return (
//     <motion.div
//       className="flex-shrink-0 w-80 mx-4 cursor-pointer bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={handleClick}
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.35, ease: "easeOut" }}
//     >
//       {/* Top - Image Container */}
//       <motion.div
//         className="relative w-full overflow-hidden p-2 rounded-3xl"
//         animate={{ height: isHovered ? 280 : 260 }}
//         transition={{ duration: 0.35, ease: "easeInOut" }}
//       >
//         <motion.img
//           src={service.image}
//           alt={service.name}
//           className="w-full h-full object-cover rounded-3xl transition-transform duration-500"
//           animate={{ scale: isHovered ? 1.1 : 1 }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
//         <div className="absolute top-4 left-4">
//           <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800">
//             {category}
//           </div>
//         </div>
//       </motion.div>

//       {/* Bottom - Text Container */}
//       <div className="p-6 pt-4">
//         <h3 className="text-lg font-semibold text-gray-900 leading-tight">
//           {service.name}
//         </h3>

//           <motion.button
//             className="mt-4 bg-gray-900 text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 group w-fit"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Learn More
//             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// // --------------------
// // 🔹 Card Scroll Component
// // --------------------
// const CardScroll: React.FC<CardScrollProps> = ({ service }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isPaused, setIsPaused] = useState(false);

//   const selectedCategory = serviceCategories[service];
//   const selectedServices = selectedCategory.services;
//   const duplicatedServices = [
//     ...selectedServices,
//     ...selectedServices,
//     ...selectedServices,
//   ];

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const cardWidth = 352;
//     const totalWidth = selectedServices.length * cardWidth;

//     const scrollAnimation = gsap.to(container, {
//       x: -totalWidth,
//       duration: selectedServices.length * 8,
//       ease: "none",
//       repeat: -1,
//     });

//     if (isPaused) {
//       scrollAnimation.pause();
//     } else {
//       scrollAnimation.play();
//     }

//     return () => {
//       scrollAnimation.kill();
//     };
//   }, [selectedServices, isPaused]);

//   return (
//     <div className="w-full py-16 bg-gradient-to-br from-white/20 to-transparent">
//       <div className="max-w-full mx-auto">
//         {/* Header */}
//         <div className="mb-12 text-center">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <selectedCategory.icon className="w-8 h-8 text-gray-900" />
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//               {selectedCategory.title} Services
//             </h2>
//           </div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             {selectedCategory.description}
//           </p>
//         </div>

//         {/* Marquee Container */}
//         <div className="relative overflow-hidden">
//           <div
//             className="flex py-8"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             <div ref={containerRef} className="flex">
//               {duplicatedServices.map((serviceItem, index) => (
//                 <ServiceCard
//                   key={`${serviceItem.name}-${index}`}
//                   service={serviceItem}
//                   category={selectedCategory.title}
//                   index={index}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Gradient edges */}
//           <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white/20 blur-md to-transparent pointer-events-none z-10" />
//           <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white/20 blur-md  to-transparent pointer-events-none z-10" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CardScroll;