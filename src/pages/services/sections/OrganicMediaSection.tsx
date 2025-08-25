import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight } from "lucide-react";

const OrganicMediaSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

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
      className="bg-lightGray py-16 lg:py-24 px-4 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="section-image pr-8">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-lightGray max-w-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Team member in office environment"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="section-content pl-8 flex flex-col justify-start">
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">
                Where we fit in the mix
              </p>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 leading-tight mb-8 max-w-2xl">
                We're organic media planners by trade chasing consumers not
                algorithms
              </h2>
            </div>

            <div className="space-y-6 mb-10 max-w-2xl">
              <p className="text-gray-700 leading-relaxed text-base">
                Whilst everyone else is chasing algorithms whether it's learning
                to manipulate Google or hack TikTok, we're chasing consumers. We
                know people better than anyone else and their needs (because
                they're telling us in what they search).
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                We plan our organic media content multi-channel based on where
                the search volume, engagement and traffic opportunities are. We
                create content for SEO, social and the media and we do it in all
                forms. Our studio team have done large scale production shoots
                both product and on location, we're producing assets for organic
                social and paid, and large scale content marketing programmes.
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
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 rounded-2xl text-gray-900 font-medium hover:bg-gray-50 transition-all duration-200 group shadow-md hover:shadow-lg">
                <span>Take A Look At Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicMediaSection;
