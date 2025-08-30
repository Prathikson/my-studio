import CTASection from "../home/sections/CTASection"
import ServicesSection from "../home/sections/ServiceSection"
import { TapeSection } from "../home/sections/Tape"
import CTATape from "../services/components/CTATape"
import LogoTape from "../services/components/LogoTape"
import TestimonialSection from "../services/sections/TestimonialSection"
import AboutXtoic from "./components/AboutXtoic"
import OurHero from "./components/OurHero"
import WhatWeDo from "./sections/WhatWeDo"
import WhoWeAre from "./sections/WhoWeAre"

const items = [
  { type: 'text', content: 'Growth strategy' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
  { type: 'text', content: 'Starts Here' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
];


const About = () => {
  return (
            <main className="flex flex-col overflow-x-hidden">
            <OurHero topText="Nice To" leftText="Meet" rightText="You" description=""/>
            <WhoWeAre />
            <LogoTape/>
            <WhatWeDo/>
            <AboutXtoic/>
            <TestimonialSection/>
            <CTATape items={items} speed={10}/>
            <ServicesSection/>
            <TapeSection/>
            <CTASection/>

        
    </main>
  )
}

export default About