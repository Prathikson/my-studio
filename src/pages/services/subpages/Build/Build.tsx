import { SEO } from "../../../../components/Seo/SEO";
import CTASection from "../../../home/sections/CTASection";
import { TapeSection } from "../../../home/sections/Tape";
import CTATape from "../../components/CTATape";
import FAQ , { type FAQItem } from "../../components/FAQ";
import InitialSection from "../../components/InitialSection"
import LogoTape from "../../components/LogoTape"
import RelatedProjects from "../../components/RelatedProject";
import ServiceHeader from "../../components/ServiceHeader"
import DiscoverServices from "../../sections/DiscoverServices";
import BuildApproach from "./sections/BuildApproach";

const items = [
  { type: 'text', content: 'Growth strategy' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
  { type: 'text', content: 'Starts Here' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
];

const Build = () => {
  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'What does a full web development package include?',
      answer: 'Our full web development package includes custom website design and development, responsive layouts for all devices, SEO optimization, content management system (CMS) integration, performance optimization, and deployment. We also provide web hosting guidance, domain setup, and ongoing maintenance support.'
    },
    {
      id: '2',
      question: 'How long does it take to build a website or web app?',
      answer: 'The timeline varies based on the complexity of your project. A standard business website typically takes 4–6 weeks, while more complex web applications may take 8–12 weeks. This includes planning, design, development, testing, and deployment. We also offer expedited services for urgent projects at an additional cost.'
    },
    {
      id: '3',
      question: 'Do you develop both websites and web applications?',
      answer: 'Yes! We specialize in both websites and fully functional web applications. Whether you need a simple marketing site, an e-commerce platform, or a complex SaaS product, we provide scalable solutions with a focus on performance, user experience, and security.'
    },
  ];
  return (
       <main className="flex flex-col overflow-x-hidden">
<SEO
  title="Web Development & Startup Website Solutions | XTOIC Studio | Edmonton, Alberta"
  description="High-performance Next.js websites for startups starting at just $500. Includes full SEO optimization, custom development, and free appointment booking setup for businesses in Edmonton and across Alberta."
  keywords="
    web development edmonton, 
    startup websites alberta, 
    next.js developer edmonton, 
    affordable web design alberta, 
    appointment booking website setup, 
    SEO included websites, 
    YEG web development, 
    React developer alberta,
    XTOIC Studio build services
  "
  canonical="https://www.xtoicstudio.com/services/build"
  ogUrl="https://www.xtoicstudio.com/services/build"
  ogImage="https://www.xtoicstudio.com/assets/build/Build_Cover.png" 
  siteName="XTOIC Studio"
  type="website"
/>

            <ServiceHeader
            leftTitle="Build"
            rightTitle="the Future"
            image="/assets/services/influencer.jpg"
            description="We push users along the funnel through performance-driven content marketing."
            buttonText="Let's Talk"
            />

                          
            <InitialSection
            sectionLabel="Development Services"
            mainHeading="Build what you can think of. Creativity has no Limits"
            description="Our Developers  help your business stand out with a unique identity, messaging, and visual presence. We craft strategies to position your brand as a market leader."
            links={[
              { text: "Our Development Process", href: "#dev-process" },
              { text: "Contact Us", href: "/contact" },
            ]}
            backgroundColor="bg-lightGray"
            textColor="text-CarbonGray"
            labelColor="text-carbonGray"
            enableAnimations={true}
          />
        <LogoTape categories={["Build"]}/>
        <BuildApproach/>
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
          <RelatedProjects tags={["Build"]} />
          <TapeSection/>
          <CTASection/>
    </main>
  )
}

export default Build