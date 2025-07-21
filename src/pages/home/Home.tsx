import Hero from "./experiment/Hero";
import HeroSection from "./sections/HeroSection";
import PunchSection from "./sections/PunchSection";
import { TabsShowcase } from "./sections/TabsShowcase";
import { TapeSection } from "./sections/Tape";

const Home = () => {
  return (
    <main className="flex flex-col">
        <HeroSection/>
        <PunchSection />
        <TapeSection/>
        <TabsShowcase />
        <Hero/>
    </main>
  );
};

export default Home;
