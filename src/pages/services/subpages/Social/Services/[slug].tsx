import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {  useParams } from "react-router-dom";
import { gsap } from "gsap";
import {TrendingUp, Heart, Zap } from "lucide-react";
import { Services } from "../../../../../data/services";
import CTATape from "../../../components/CTATape";
import DiscoverServices from "../../../sections/DiscoverServices";
import RelatedProjects from "../../../components/RelatedProject";
import { TapeSection } from "../../../../home/sections/Tape";
import CTASection from "../../../../home/sections/CTASection";
import ServiceHeader from "../../../components/ServiceHeader";
import InitialSection from "../../../components/InitialSection";

const SocialServices: React.FC = () => {
//   const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  
  const heroIconRef = useRef<HTMLDivElement>(null);
  
  // Get Social category data
  const socialCategory = Services.find(category => category.id === 2);
  const currentService = socialCategory?.items.find(item => item.slug === slug);
  
  useEffect(() => {
    // Simple hero icon animation only
    if (heroIconRef.current) {
      gsap.fromTo(heroIconRef.current, 
        { scale: 0, rotation: -180 },
        { 
          scale: 1, 
          rotation: 0, 
          duration: 1, 
          ease: "back.out(1.7)",
          delay: 0.5 
        }
      );
    }
  }, []);

  if (!currentService) {
    return <div>Service not found</div>;
  }

//   const handleContactClick = () => {
//     navigate(`/contact`);
//   };

  const items = [
  { type: 'text', content: 'Growth strategy' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
  { type: 'text', content: 'Starts Here' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
];

  return (
    <div className="min-h-screen bg-lightGray">

                          <ServiceHeader
            leftTitle={currentService.name.split(' ')[0]}
            rightTitle={currentService.name.split(' ').slice(1).join(' ')}
            image="/assets/services/influencer.jpg"
            description={currentService.heroDescription}
            buttonText="Amplify Your Brand"
            />

         <InitialSection
            sectionLabel={currentService.name}
            mainHeading={currentService.sections[0].heading}
            description={currentService.sections[0].description}
            backgroundColor="bg-lightGray"
            textColor="text-CarbonGray"
            labelColor="text-carbonGray"
            enableAnimations={true}
          />
      {/* Creative Showcase Section */}
    {/* Creative Showcase Section */}
<div className="py-20 px-4 sm:px-6 lg:px-8 bg-lightGray">
  <div className="max-w-full mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Images Showcase */}
      <motion.div 
        className="relative w-full"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <motion.img 
              src="/images/showcase1.jpg"
              alt="Creative work 1"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img 
              src="/images/showcase2.jpg"
              alt="Creative work 2"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
          <div className="space-y-6 pt-10">
            <motion.img 
              src="/images/showcase3.jpg"
              alt="Creative work 3"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img 
              src="/images/showcase4.jpg"
              alt="Creative work 4"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </div>
      </motion.div>
      
      {/* Text Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-carbonBlack mb-6">
          {currentService.sections[1].heading}
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {currentService.sections[1].description}
        </p>
        <div className="space-y-4">
          {[
            { icon: Zap, text: "Platform-Optimized Content" },
            { icon: TrendingUp, text: "Trend-Aware Strategies" },
            { icon: Heart, text: "Engagement-Driven Design" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center space-x-3"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <item.icon className="w-6 h-6 text-blue-500" />
              <span className="text-gray-700">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</div>

      {/* Stats Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-lightGray">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-carbonBlack mb-4">
              Social Results That Matter
            </h2>
            <p className="text-lg text-gray-600">
              {currentService.name} performance metrics from our recent campaigns
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {currentService.stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className=" p-8">
                  <div className="text-6xl font-bold text-CarbonGray mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-carbonBlack mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    <CTATape items={items}  speed={60}/>
        <DiscoverServices  />
          <RelatedProjects tags={["Social"]} />
          <TapeSection/>
          <CTASection/>
    </div>
  );
};

export default SocialServices;