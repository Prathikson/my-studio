import {useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Share2,
  Code,
  Palette,
  Sparkles,
  ExternalLink,
  Sparkle
} from "lucide-react";
import Button from "../../../components/ui/Button";
import MinimalHeader from "../../../components/ui/MinimalHeader";

const OurServices = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Brand",
      icon: Sparkles,
      emoji: "📷",
      gradient: ["#10b981", "#059669"],
      description:
        "Create compelling brand experiences that resonate with your audience and differentiate you from competitors through strategic brand positioning.",
      services: [
        { name: "Brand Strategy", path: "/services/brand/brand-strategy" },
        { name: "360° Creative", path: "/services/brand/360-creative" },
        { name: "Art Direction", path: "/services/brand/art-direction" },
        { name: "Copywriting", path: "/services/brand/copywriting" },
        { name: "Editing", path: "/services/brand/editing" },
        { name: "Motion Graphics", path: "/services/brand/motion-graphics" }
      ],
    },
    {
      id: 2,
      title: "Social",
      icon: Share2,
      emoji: "📱",
      gradient: ["#60a5fa", "#3b82f6"],
      description:
        "Amplify your social presence with data-driven strategies that engage your community and drive meaningful conversations across all platforms.",
      services: [
        { name: "Social Media Strategy", path: "/services/social/social-media-strategy" },
        { name: "TikTok/Social Shorts", path: "/services/social/tiktok-social-shorts" },
        { name: "Influencer Campaigns", path: "/services/social/influencer-campaigns" },
        { name: "Community Management", path: "/services/social/community-management" },
        { name: "Content Creation", path: "/services/social/content-creation" }
      ],
    },
    {
      id: 3,
      title: "Build",
      icon: Code,
      emoji: "💻",
      gradient: ["#f97316", "#ef4444"],
      description:
        "Transform your digital presence with cutting-edge development solutions that deliver exceptional performance and user experiences.",
      services: [
        { name: "Web Development", path: "/services/build/web-development" },
        { name: "Frontend Solutions", path: "/services/build/frontend-solutions" },
        { name: "Mobile Apps", path: "/services/build/mobile-apps" },
        { name: "API Integration", path: "/services/build/api-integration" },
        { name: "Performance Optimization", path: "/services/build/performance-optimization" },
        { name: "Search Engine Optimization", path: "/services/build/seo" }
      ],
    },
    {
      id: 4,
      title: "Design",
      icon: Palette,
      emoji: "🎨",
      gradient: ["#a78bfa", "#ec4899"],
      description:
        "Craft beautiful, functional designs that tell your story and create memorable experiences for your users across all touchpoints.",
      services: [
        { name: "UI/UX Design", path: "/services/design/ui-ux-design" },
        { name: "Website Re-Design", path: "/services/design/website-redesign" },
        { name: "Visual Identity", path: "/services/design/visual-identity" },
        { name: "Print Design", path: "/services/design/print-design" },
        { name: "Design Systems", path: "/services/design/design-systems" }
      ],
    },
  ];


  const handleServiceClick = (path: string, itemKey: string) => {
    setClickedItem(itemKey);
    setTimeout(() => {
      navigate(path);
    }, 150);
  };

  const handleViewServicesClick = (serviceTitle: string) => {
    const servicePath = `/services/${serviceTitle.toLowerCase()}`;
    navigate(servicePath);
  };

  const getItemKey = (serviceId: number, itemName: string) => {
    return `${serviceId}-${itemName}`;
  };

  return (
    <div ref={sectionRef} className="relative bg-lightGray py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="services-header mb-16 text-center">
          <MinimalHeader pillText="Our Services" titleLine1="What We Offer" />
        </div>

        {/* Services Grid with Equal Height Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === service.id;

            return (
              <motion.div
                key={service.id}
                className="service-card group relative h-full"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Main Card */}
                <motion.div
                  className="relative rounded-3xl p-8 shadow-xl h-full flex flex-col justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradient[0]}, ${service.gradient[1]})`,
                    zIndex: 3,
                  }}
                  initial={{ 
                    transform: "translate3d(0, 0, 0) scale(1)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  animate={{
                    transform: isHovered 
                      ? "translate3d(0, -2px, 0) scale(1.02)" 
                      : "translate3d(0, 0, 0) scale(1)",
                    boxShadow: isHovered
                      ? "0 32px 64px -12px rgba(0, 0, 0, 0.35)"
                      : "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm text-white relative overflow-hidden"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-6 h-6 relative z-10" />
                        <motion.div
                          className="absolute inset-0 bg-white"
                          initial={{ x: "-100%" }}
                          animate={{ x: isHovered ? "100%" : "-100%" }}
                          transition={{ duration: 0.6 }}
                          style={{ opacity: 0.2 }}
                        />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                    <motion.div
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.emoji}
                    </motion.div>
                  </div>

                  {/* Services List */}
                  <div className="space-y-2 mb-8">
                    <h4 className="font-semibold text-white mb-4">Services Include:</h4>
                    {service.services.map((serviceItem, idx) => {
                      const itemKey = getItemKey(service.id, serviceItem.name);
                      const isItemHovered = hoveredItem === itemKey;
                      const isClicked = clickedItem === itemKey;

                      return (
                        <motion.button
                          key={idx}
                          className="w-full text-left p-3 -m-3 rounded-xl transition-all duration-200 group/item flex items-center justify-between"
                          onMouseEnter={() => setHoveredItem(itemKey)}
                          onMouseLeave={() => setHoveredItem(null)}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleServiceClick(serviceItem.path, itemKey);
                          }}
                          whileHover={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            x: 4,
                          }}
                          whileTap={{ scale: 0.98 }}
                          animate={{
                            backgroundColor: isClicked
                              ? "rgba(255, 255, 255, 0.2)"
                              : "transparent",
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <motion.div
                              animate={{
                                scale: isItemHovered ? 1.2 : 1,
                                rotate: isItemHovered ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <Sparkle className="w-3 h-3 text-white/80" />
                            </motion.div>
                            <span className="text-white/90 group-hover/item:text-white font-medium transition-colors duration-200">
                              {serviceItem.name}
                            </span>
                          </div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: isItemHovered ? 1 : 0,
                              x: isItemHovered ? 0 : -10,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-4 h-4 text-white/60" />
                          </motion.div>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-between items-center mt-auto">
                    <Button
                      title="View Services"
                      bgColor="#f1f1f1"
                      textColor="carbonGray"
                      rightIcon={<ExternalLink className="w-4 h-4" />}
                      onClick={() => handleViewServicesClick(service.title)}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;