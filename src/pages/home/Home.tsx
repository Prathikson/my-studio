import Hero from "./experiment/Hero";
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


    </main>
  );
};

export default Home;
