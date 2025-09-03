import CTASection from "../../../home/sections/CTASection"
import { TapeSection } from "../../../home/sections/Tape"
import CTATape from "../../components/CTATape"
import FAQ, { type FAQItem } from "../../components/FAQ"
import InitialSection from "../../components/InitialSection"
import LogoTape from "../../components/LogoTape"
import RelatedProjects from "../../components/RelatedProject"
import ServiceHeader from "../../components/ServiceHeader"
import DiscoverServices from "../../sections/DiscoverServices"
import DesignApproach from "./sections/DesignApproach"


const items = [
  { type: 'text', content: 'Growth strategy' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
  { type: 'text', content: 'Starts Here' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
];


const Design = () => {
  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'What design services do you offer?',
      answer: 'We offer a wide range of design services including UI/UX design for web and mobile apps, graphic design, product design, illustrations, and digital ad creatives. We ensure every design is user-friendly, brand-aligned, and visually compelling.'
    },
    {
      id: '2',
      question: 'What is the typical timeline for a design project?',
      answer: 'The design process generally takes 2–6 weeks depending on project size and complexity. This includes discovery, wireframes, design mockups, and final design delivery. For smaller projects like social posts or ad creatives, delivery can be as quick as 2–5 business days.'
    },
    {
      id: '3',
      question: 'Can you work with existing branding guidelines?',
      answer: 'Absolutely! We’re happy to design based on your existing brand style guide, ensuring consistency across all platforms. If you don’t have one, we can help create a cohesive visual identity as part of the project.'
    },
  ];
  return (
       <main className="flex flex-col overflow-x-hidden">
            <ServiceHeader
            leftTitle="Get"
            rightTitle="Creative"
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

                  <LogoTape categories={["Design"]}/>
        <DesignApproach/>
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

export default Design