import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  ExternalLink,
  Sparkle,
  type LucideIcon,
} from "lucide-react";
import Button from "../../../components/ui/Button";
import MinimalHeader from "../../../components/ui/MinimalHeader";
import { Services } from "../../../data/services";

type ServiceType = "Brand" | "Social" | "Build" | "Design";

interface DiscoverServicesProps {
  include?: ServiceType[];
  exclude?: ServiceType[];
}

const DiscoverServices: React.FC<DiscoverServicesProps> = ({ include, exclude }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const navigate = useNavigate();

  // Filter services based on include/exclude
  let filteredServices = Services;
  if (include?.length) {
    filteredServices = filteredServices.filter((s) =>
      include.includes(s.title as ServiceType)
    );
  }
  if (exclude?.length) {
    filteredServices = filteredServices.filter(
      (s) => !exclude.includes(s.title as ServiceType)
    );
  }

  const headerText = "Discover Other Services"

//   const headerText = include?.length
//     ? `Discover ${include.join(" & ")} Services`
//     : exclude?.length
//     ? `Discover All Services Except ${exclude.join(" & ")}`
//     : "Discover Our Services";

  const handleServiceClick = (path: string, itemKey: string) => {
    setClickedItem(itemKey);
    setTimeout(() => {
      navigate(path);
    }, 150);
  };

  const handleViewServicesClick = (serviceTitle: string) => {
    navigate(`/services/${serviceTitle.toLowerCase()}`);
  };

  const getItemKey = (serviceId: string, itemName: string) =>
    `${serviceId}-${itemName}`;

  const renderIcon = (icon: string | LucideIcon) => {
    if (typeof icon === "string") {
      return <span className="text-2xl">{icon}</span>;
    }
    const Lucide = icon;
    return <Lucide className="w-6 h-6" />;
  };

  // Dynamic grid columns based on card count
  const gridColsClass = (() => {
    const count = filteredServices.length;
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-1 sm:grid-cols-2";
    if (count === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  })();

  return (
    <div
      ref={sectionRef}
      className="relative bg-lightGray py-20 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Dynamic Header */}
        <div className="services-header mb-16 text-center">
          <MinimalHeader pillText="Our Services" titleLine1={headerText} />
        </div>

        {/* Responsive Grid */}
        <div className={`grid gap-8 lg:gap-12 mb-16 items-stretch ${gridColsClass}`}>
          {filteredServices.map((service, index) => {
            const isHovered = hoveredService === service.title;

            return (
              <motion.div
                key={service.id}
                className="service-card group relative h-full"
                onMouseEnter={() => setHoveredService(service.title)}
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
                  }}
                  animate={{
                    transform: isHovered
                      ? "translateY(-4px)"
                      : "translateY(0) scale(1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 text-white"
                        whileHover={{ scale: 1.02 }}
                      >
                        {renderIcon(service.icon)}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="space-y-2 mb-8">
                    <h4 className="font-semibold text-white mb-4">
                      Services Include:
                    </h4>
                    {service.items.map((serviceItem, idx) => {
                      const itemKey = getItemKey(service.title, serviceItem.name);
                      const isClicked = clickedItem === itemKey;

                      return (
                        <motion.button
                          key={idx}
                          className="w-full text-left p-3 -m-3 rounded-xl flex items-center justify-between"
                          onClick={(e) => {
                            e.preventDefault();
                            handleServiceClick(serviceItem.path, itemKey);
                          }}
                          whileHover={{
                            backgroundColor: "rgba(255,255,255,0.1)",
                            x: 4,
                          }}
                          animate={{
                            backgroundColor: isClicked
                              ? "rgba(255,255,255,0.2)"
                              : "transparent",
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <Sparkle className="w-3 h-3 text-white/80" />
                            <span className="text-white/90">
                              {serviceItem.name}
                            </span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/60" />
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
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

export default DiscoverServices;
