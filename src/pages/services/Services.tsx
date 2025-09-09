import CTASection from "../home/sections/CTASection"
import PricingTabs from "../home/sections/PricingTabs"
import ServiceHeader from "./components/ServiceHeader"
import TestimonialSection from "./sections/TestimonialSection"
import OrganicMediaSection from "./sections/OrganicMediaSection"
import OurApproach from "./sections/OurApproach"
import OurServices from "./sections/OurServices"
import OurProjects from "./sections/OurProjects"
import { TapeSection } from "../home/sections/Tape"
import CTATape from "./components/CTATape"

const items = [
  { type: 'text', content: 'Growth strategy' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
  { type: 'text', content: 'Starts Here' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
];

const Services = () => {
  return (
        <main className="flex flex-col overflow-x-hidden">
            <ServiceHeader
            leftTitle="Our"
            rightTitle="Services"
            image="/assets/services/influencer.jpg"
            description="We push users along the funnel through performance-driven content marketing."
            buttonText="Let's Talk"
            />
            <OurApproach/>
            <OurServices/>
            <OrganicMediaSection/>
            <TestimonialSection/>
            <OurProjects/>
            <CTATape items={items} speed={10}/>
            <PricingTabs/>
            <TapeSection/>
            <CTASection/>
    </main>
  )
}

export default Services