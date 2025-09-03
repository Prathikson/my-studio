import CTASection from "../../../home/sections/CTASection";
import { TapeSection } from "../../../home/sections/Tape";
import CTATape from "../../components/CTATape";
import FAQ, { type FAQItem } from "../../components/FAQ";
import InitialSection from "../../components/InitialSection";
import LogoTape from "../../components/LogoTape"
import RelatedProjects from "../../components/RelatedProject";
import ServiceHeader from "../../components/ServiceHeader"
import DiscoverServices from "../../sections/DiscoverServices";
import SocialApproach from "./sections/SocialApproach";

const items = [
  { type: 'text', content: 'Growth strategy' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
  { type: 'text', content: 'Starts Here' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
];


const Social = () => {

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'What does your social media marketing package include?',
      answer: 'Our social media marketing package includes strategy development, content creation, post scheduling, platform management, engagement tracking, paid advertising campaigns, and monthly performance reporting to ensure your brand reaches the right audience.'
    },
    {
      id: '2',
      question: 'How often do you post content for clients?',
      answer: 'Posting frequency is tailored to your goals and chosen plan. Most clients receive 3–5 posts per week per platform. We also provide story content, reels, and ad creatives to maintain a strong online presence.'
    },
    {
      id: '3',
      question: 'Can you help grow followers and engagement?',
      answer: 'Yes! We focus on organic growth through strategic content, trend analysis, and engagement strategies, combined with targeted ad campaigns to boost reach, engagement, and conversions.'
    },
  ];
  return (
   <main className="flex flex-col overflow-x-hidden">
            <ServiceHeader
            leftTitle="Social"
            rightTitle="Media"
            image="/assets/services/influencer.jpg"
            description="We push users along the funnel through performance-driven content marketing."
            buttonText="Let's Talk"
            />
         <InitialSection
            sectionLabel="Design Services"
            mainHeading="Design Your Identity"
            description="Our experts help your business stand out with a unique identity, messaging, and visual presence. We craft strategies to position your brand as a market leader."
            links={[
              { text: "Our Designing Process", href: "#design-process" },
              { text: "Contact Us", href: "/contact" },
            ]}
            backgroundColor="bg-lightGray"
            textColor="text-CarbonGray"
            labelColor="text-carbonGray"
            enableAnimations={true}
          />

                  <LogoTape categories={["Social"]}/>
        <SocialApproach/>
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
          <RelatedProjects tags={["Design"]} />
          <TapeSection/>
          <CTASection/>
    </main>
  )
}

export default Social