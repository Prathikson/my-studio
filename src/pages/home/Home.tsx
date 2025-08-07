import Hero from "./experiment/Hero";
import FeaturesSection from "./sections/FeaturesSection";
import PricingTabs from "./sections/PricingTabs";
import ServicesSection from "./sections/ServiceSection";
import { TabsShowcase } from "./sections/TabsShowcase";
import { TapeSection } from "./sections/Tape";

const Home = () => {
  return (
    <main className="flex flex-col overflow-x-hidden">
        <Hero/>
        <ServicesSection/>
        <TapeSection/>
        <TabsShowcase />
        <FeaturesSection/>
        <PricingTabs/>
    </main>
  );
};

export default Home;
