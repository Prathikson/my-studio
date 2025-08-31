import Header from "../contact/sections/Header"
import CTASection from "../home/sections/CTASection"
import ServicesSection from "../home/sections/ServiceSection"
import { TapeSection } from "../home/sections/Tape"
import CTATape from "../services/components/CTATape"
import TestimonialSection from "../services/sections/TestimonialSection"
import OurProjects from "./sections/OurProjects"

const items = [
  { type: 'text', content: 'Growth strategy' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
  { type: 'text', content: 'Starts Here' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
];

const Portfolio = () => {
  return (
    <main className="flex flex-col overflow-x-hidden">
        <Header
            textSize="md"
            topText="Discover"
            description=""
            leftText="Our"
            rightText="Work"
            imageUrl="/icon_3.svg"
          />
        <OurProjects/>
        <CTATape items={items} speed={10}/>
        <ServicesSection/>
        <TapeSection/>
        <TestimonialSection/>
        <CTASection/>
    </main>
  )
}

export default Portfolio