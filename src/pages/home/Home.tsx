import Hero from "./experiment/Hero";
import FeaturesSection from "./sections/FeaturesSection";
import ServicesSection from "./sections/ServiceSection";
import { TabsShowcase } from "./sections/TabsShowcase";
import { TapeSection } from "./sections/Tape";

const Home = () => {
  return (
    <main className="flex flex-col">
        <Hero/>
        <ServicesSection/>
        <TapeSection/>
        <TabsShowcase />
        <FeaturesSection/>
    </main>
  );
};

export default Home;
