import Hero from "./experiment/Hero";
import HeroSection from "./sections/HeroSection";
import PunchSection from "./sections/PunchSection";
import { TabsShowcase } from "./sections/TabsShowcase";

const Home = () => {
  return (
    <main className="flex flex-col">
        <HeroSection/>
        <PunchSection />
        <TabsShowcase />
        <Hero/>
    </main>
  );
};

export default Home;
