import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "../../../components/ui/Button";
import AltButton from "../../../components/ui/AltButton";
import ParticleWord from "../components/ParticleWord";

const words = ["Digital", "Modern", "Stunning", "Beautiful"];

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-x-hidden bg-lightGray">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(#0071fe,transparent_0.5px),linear-gradient(90deg,#0071ff,transparent_0.5px)] bg-[size:60px_60px]" />

      {/* Grid Fade Top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-lightGray to-transparent z-10" />

      {/* Grid Fade Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-lightGray to-transparent z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-6 text-center">
        {/* Tagline */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium bg-lightGray text-appleBlue rounded-full border border-blue-200 shadow-sm transition-all ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="w-2 h-2 bg-appleBlue rounded-full animate-ping" />
          Available for new projects
        </div>

        {/* Main Title */}
        <h1
          className={`font-extrabold text-smoothBlack text-5xl md:text-9xl leading-tight transition-all duration-700 flex flex-col justify-center items-center`}
          style={{ minWidth: 400, minHeight: 120 }}
        >
          <span>We Build</span>

          <div
            className="relative inline-block text-appleBlue mt-2"
            style={{ width: 400, height: 120 }}
          >
<ParticleWord
  words={words}
  particleColor="#0071fe"
  particleSize={2}
  baseFontSize={0.9} 
/>
          </div>

          <span className="text-smoothBlack mt-4">Experiences</span>
        </h1>

        <p
          className={`mt-6 max-w-xl text-lg md:text-xl text-gray-500 font-normal transition-all ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Crafting thoughtful user interfaces with bold typography, clarity, and cutting-edge code.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <Button
            bgColor="bg-black"
            hoverBgColor="hover:bg-gray-900"
            textSize="text-lg"
            className="rounded-xl px-8 py-4 hover:scale-102 transition"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Start Your Project
          </Button>
          <AltButton
            fillColor="#141414"
            borderColor="border-black/80"
            hoverTextColor="hover:text-white"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            View Our Work
          </AltButton>
        </div>

        {/* Scroll Down Indicator */}
        <div
          className={`absolute bottom-10 flex flex-col items-center text-gray-400 transition-all ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <span className="text-xs mb-1 tracking-wide">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-black rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `yFloat 6s ease-in-out ${Math.random() * 2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
