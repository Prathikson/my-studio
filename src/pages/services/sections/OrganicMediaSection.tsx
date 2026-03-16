import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight } from "lucide-react";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const OrganicMediaSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  
  const handleViewAllWorks = () => {
    navigate('/portfolio');
  };

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

      tl.from(".section-image", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      tl.from(
        ".section-content",
        {
          x: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

      tl.from(
        ".feature-item",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-lightGray py-16 lg:py-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="section-image">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-lightGray max-w-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/assets/brand/Branding_Cover.png"
                  alt="Creative workspace showcasing design excellence"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="section-content flex flex-col justify-start">
            <div className="mb-6">
              <p className="text-sm font-medium text-smoothBlack uppercase tracking-wider mb-4">
                Our Expertise
              </p>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-carbonBlack leading-tight mb-8 max-w-2xl">
                Strategic Creative Services That Drive Results
              </h2>
            </div>

            <div className="space-y-6 mb-10 max-w-2xl">
              <p className="text-smoothBlack/80 leading-relaxed text-base">
                We specialize in crafting compelling digital experiences that don't just look good—they perform. 
                From brand strategy to full-scale content production, our services are designed to help you 
                connect with your audience, build lasting relationships, and achieve measurable growth.
              </p>
              <p className="text-smoothBlack/80 leading-relaxed text-base">
                Whether you need a complete brand overhaul, ongoing content creation, or a high-impact campaign 
                that cuts through the noise, we bring the creative firepower and strategic thinking to make it happen. 
                Our approach blends data-driven insights with bold creativity to deliver work that works.
              </p>
            </div>

            {/* Service Features */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Brand Strategy & Identity",
                "Website Design & Development",
                "Content Production & Marketing",
                "Social Media Management",
                "SEO & Digital Marketing",
                "Video & Motion Graphics",
                "UI/UX Design Services",
                "Creative Campaigns",
              ].map((text, i) => (
                <div
                  key={i}
                  className="feature-item flex items-center gap-3 group"
                >
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-carbonGray text-sm font-medium group-hover:text-carbonBlack transition-colors duration-300">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                title="View Our Works"
                bgColor="#1b1b1b"
                textColor="#f1f1f1"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={handleViewAllWorks}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicMediaSection;