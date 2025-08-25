import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  TrendingUp,
  Lightbulb,
  Target,
  ArrowDownRightFromCircle,
} from "lucide-react";
import Button from "../../../components/ui/Button";

const OurServices = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const services = [
    {
      id: 1,
      title: "Search Strategy",
      categories: ["SEO Strategy", "Search Marketing", "Performance Analytics"],
      description:
        "Our search strategy team are your growth partners - navigating the digital landscape of today and tomorrow. And every Rise at Seven client gets one!",
      icon: Search,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Growth Strategy",
      categories: ["Growth Marketing", "Conversion Strategy", "User Acquisition"],
      description:
        "Accelerate your business growth with comprehensive strategies designed to expand your market reach and increase revenue through data-driven approaches.",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Brand & Creative Strategy",
      categories: ["Brand Strategy", "Creative Direction", "Visual Identity"],
      description:
        "Think bigger with creative strategies that resonate with your audience and differentiate you from competitors through compelling brand experiences.",
      icon: Lightbulb,
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Digital Strategy",
      categories: [
        "Digital Transformation",
        "Technology Integration",
        "Innovation Strategy",
      ],
      description:
        "Transform your digital presence with strategic solutions that prepare your business for tomorrow's challenges and opportunities.",
      icon: Target,
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&q=80",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".services-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      tl.from(
        ".service-item",
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-lightGray py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="services-header mb-16 text-center">
          <h2 className="text-4xl lg:text-7xl text-carbonBlack font-bold mb-4">
            Search & Growth Strategy
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLast = index === services.length - 1;

            return (
              <div
                key={service.id}
                className={`service-item group transition-transform duration-300 hover:translate-y-1 ${
                  !isLast ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 py-12 lg:py-16 items-center">
                  {/* Content Left */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                          Strategy
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-semibold text-carbonBlack mb-3">
                        {service.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.categories.map((category, idx) => (
                          <span
                            key={idx}
                            className="text-sm text-carbonGray bg-white px-3 py-1 rounded-full border border-gray-200"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-smoothBlack/80 leading-relaxed text-lg mb-8 max-w-lg">
                      {service.description}
                    </p>

                    <div className="inline-block">
                      <Button
                        title="View Services"
                        rightIcon={
                          <ArrowDownRightFromCircle className="w-5 h-5" />
                        }
                      />
                    </div>
                  </div>

                  {/* Image Right */}
                  <div className="flex items-center justify-center lg:justify-end">
                    <div className="relative w-full max-w-xl lg:max-w-2xl">
                      <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-500">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Think Bigger Overlay for Brand Strategy */}
                      {service.id === 3 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-blue-600 text-white px-6 py-3 rounded-lg transform rotate-2 shadow-lg">
                            <span className="font-bold text-lg">THINK</span>
                            <br />
                            <span className="font-bold text-lg">BIGGER.</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
