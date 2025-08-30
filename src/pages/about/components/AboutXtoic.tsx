import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight } from "lucide-react";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";


const AboutXtoic = () => {
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
      className="bg-lightGray py-16 lg:py-24 px-4 "
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="section-image pr-8">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-lightGray max-w-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/assets/founder.JPG"
                  alt="Team member in office environment"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="section-content pl-8 flex flex-col justify-start">
<div className="mb-6">
  <p className="text-sm font-medium text-smoothBlack uppercase tracking-wider mb-4">
    The Story Behind the Vision
  </p>
  <h2 className="text-xl lg:text-2xl xl:text-3xl text-carbonBlack leading-tight mb-8 max-w-2xl">
    Xtoic Studio: Crafting Timeless Visual Narratives That Move People
  </h2>
</div>

<div className="space-y-6 mb-10 max-w-2xl">
  <p className="text-smoothBlack/80 leading-relaxed text-base">
    Xtoic Studio is a creative powerhouse built to transform ideas into captivating stories that
    resonate with audiences worldwide. Specializing in brand identity, high-end content production,
    and immersive digital experiences, we merge artistry with strategy to deliver work that doesn’t
    just stand out but leaves a lasting impression. Every project is crafted with precision, emotion,
    and purpose, making your brand impossible to ignore.  
  </p>
  <p className="text-smoothBlack/80 leading-relaxed text-base">
    Founded by <span className="font-semibold">Prathikson Jeyakumar</span>, a visionary creative
    director and entrepreneur, Xtoic Studio reflects his passion for design, innovation, and
    storytelling. With a relentless focus on quality and authenticity, Prathikson leads a team
    committed to elevating brands, pushing creative boundaries, and shaping visuals that define
    culture.  
  </p>
</div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Content for website/SEO",
                "Creative content marketing/production",
                "UGC & organic social content",
                "PR/Media stories",
              ].map((text, i) => (
                <div
                  key={i}
                  className="feature-item flex items-center gap-3 group"
                >
                  <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-carbonGray group-hover:text-carbonBlack transition-colors duration-300">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
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

export default AboutXtoic;
