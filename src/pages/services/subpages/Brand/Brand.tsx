import { SEO } from "../../../../components/Seo/SEO";
import CTASection from "../../../home/sections/CTASection";
import { TapeSection } from "../../../home/sections/Tape";
import CTATape from "../../components/CTATape"
import FAQ, {type FAQItem} from "../../components/FAQ";
import InitialSection from "../../components/InitialSection";
import LogoTape from "../../components/LogoTape"
import RelatedProjects from "../../components/RelatedProject";
import ServiceHeader from "../../components/ServiceHeader"
import DiscoverServices from "../../sections/DiscoverServices";
import BrandApproach from "./sections/BrandApproach";


const items = [
  { type: 'text', content: 'Growth strategy' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
  { type: 'text', content: 'Starts Here' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
];



const Brand = () => {
   const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'What does a complete branding package include?',
      answer: 'Our complete branding package includes logo design, brand identity system, color palette, typography guidelines, brand voice and messaging, business card design, letterhead, and a comprehensive brand style guide. We also provide digital assets optimized for web and social media platforms.'
    },
    {
      id: '2',
      question: 'How long does the branding process typically take?',
      answer: 'The branding process usually takes 4-8 weeks depending on the scope of work. This includes initial discovery and strategy (1-2 weeks), concept development and design (2-3 weeks), revisions and refinement (1-2 weeks), and final deliverables and brand guide creation (1 week). Rush projects can be accommodated with additional fees.'
    },
    {
      id: '3',
      question: 'Do you offer rebranding services for existing businesses?',
      answer: 'Absolutely! We specialize in rebranding existing businesses that need to evolve their image, reach new markets, or stay competitive. Our rebranding process includes brand audit, market analysis, stakeholder interviews, and a strategic approach to ensure brand continuity while refreshing your identity.'
    },

  ];
  return (
    <main className="flex flex-col overflow-x-hidden">
       <SEO
  title="Brand Identity, Strategy & Positioning Services | XTOIC Studio"
  description="Build a memorable brand with XTOIC Studio — offering brand identity design, strategy, messaging, visual systems, and complete brand transformation for modern companies."
  keywords="branding services, brand identity design, brand strategy, brand guidelines, logo design, visual identity, brand messaging, rebranding agency, brand consulting"
  canonical="https://www.xtoicstudio.com/services/brand"
  ogUrl="https://www.xtoicstudio.com/services/brand"
  siteName="XTOIC Studio"
  type="website"
/>
     
            <ServiceHeader
                  leftTitle="Branding"
                  rightTitle="Services"
                  image="/assets/services/influencer.jpg"
                  description="We push users along the funnel through performance-driven content marketing."
                  buttonText="Let's Talk"
              />
                  
            <InitialSection
            sectionLabel="Branding Services"
            mainHeading="Build a bold and consistent identity that your customers love."
            description="Our branding experts help your business stand out with a unique identity, messaging, and visual presence. We craft strategies to position your brand as a market leader."
            links={[
              { text: "Our Branding Process", href: "#branding-process" },
              { text: "Contact Us", href: "/contact" },
            ]}
            backgroundColor="bg-lightGray"
            textColor="text-CarbonGray"
            labelColor="text-carbonGray"
            enableAnimations={true}
          />
          <LogoTape categories={["Brand"]}/>
          <BrandApproach/>
          <FAQ
        title="Branding Services FAQ"
        subtitle="Everything you need to know about our branding process, deliverables, and how we help businesses create powerful brand identities."
        items={faqItems}
        iconType="plus"
        allowMultiple={false}
        animationDuration={0.5}
        staggerDelay={0.1}
        className="py-12"
      />
          <CTATape items={items}  speed={60}/>
           <DiscoverServices  />
          <RelatedProjects tags={["Branding"]} />
          <TapeSection/>
          <CTASection/>

    </main>
  )
}

export default Brand