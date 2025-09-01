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
      <div className="bg-lightGray pt-20 pb-16 max-w-full">
        <Header
            textSize="md"
            topText="Discover"
            description=""
            leftText="Our"
            rightText="Work"
            imageUrl="/icon_3.svg"
          />
        <OurProjects/>
        <TapeSection/>
        <ServicesSection/>
        <TestimonialSection/>
          <CTATape items={items} speed={10}/>
        <CTASection/>
      </div>
    </main>
  )
}

export default Portfolio