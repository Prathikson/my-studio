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
        title="XTOIC Studio – Creative Agency for Web, Branding & Digital Growth"
        description="XTOIC Studio builds high-performing websites, stunning brand identities, and audience-first digital experiences designed to help brands grow organically and outperform competitors."
        keywords="
          web design agency, 
          creative studio canada, 
          branding services, 
          website development, 
          SEO agency, 
          UI UX design, 
          React developer, 
          Next.js development, 
          marketing agency, 
          content strategy,
          full-service studio,
          digital branding,
          custom website design
        "
        canonical="https://www.xtoicstudio.com/"
        ogUrl="https://www.xtoicstudio.com/"
        siteName="XTOIC STUDIO"
        type="website"
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
