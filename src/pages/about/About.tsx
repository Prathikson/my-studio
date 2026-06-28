import { SEO } from "../../components/Seo/SEO"
import CTASection from "../home/sections/CTASection"
import ServicesSection from "../home/sections/ServiceSection"
import { TapeSection } from "../home/sections/Tape"
import CTATape from "../services/components/CTATape"
import LogoTape from "../services/components/LogoTape"
import TestimonialSection from "../services/sections/TestimonialSection"
import AboutXtoic from "./components/AboutXtoic"
import OurHero from "./components/OurHero"
import ExoticTeamHero from "./sections/ExoticTeamHero"
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
              <SEO
  title="About XTOIC Studio – Strategy. Creativity. Growth."
  description="Learn about XTOIC Studio — a forward-thinking creative & development studio based in Edmonoton focused on building scalable digital experiences through design, engineering, and brand strategy."
  keywords="about creative agency, about web design studio, digital agency canada, design and development team, branding experts, UI UX agency, tech studio overview"
  canonical="https://www.xtoicstudio.com/about"
  ogUrl="https://www.xtoicstudio.com/about"
  siteName="XTOIC Studio"
  type="website"
/>

            <OurHero topText="Nice To" leftText="Meet" rightText="You" description=""/>
            <WhoWeAre />
            <LogoTape/>
            <WhatWeDo/>
            <AboutXtoic/>
            <ExoticTeamHero/>
            <TestimonialSection/>
            <CTATape items={items} speed={10}/>
            <ServicesSection/>
            <TapeSection/>
            <CTASection/>

        
    </main>
  )
}

export default About