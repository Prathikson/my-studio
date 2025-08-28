import { SEO } from "../../components/Seo/SEO";
import Hero from "./experiment/Hero";
import CTASection from "./sections/CTASection";
import FeaturesSection from "./sections/FeaturesSection";
import PricingTabs from "./sections/PricingTabs";
import ProjectSection from "./sections/ProjectSection";
import ServicesSection from "./sections/ServiceSection";
import { TabsShowcase } from "./sections/TabsShowcase";
import { TapeSection } from "./sections/Tape";

const Home = () => {
  return (
    <>
    <SEO 
        title="XTOIC STUDIO - Digital Experience Studio"
        description="We create stunning websites and digital experiences"
        ogUrl="https://my-studio-three.vercel.app/"
      />
    <main className="flex flex-col overflow-x-hidden">
        <Hero/>
        <ServicesSection/>
        <TapeSection/>
        <TabsShowcase />
        <ProjectSection/>
        <FeaturesSection/>
        <PricingTabs/>
        <CTASection/>
    </main>
    </>
  );
};

export default Home;
