import CTASection from "../home/sections/CTASection"
import PricingTabs from "../home/sections/PricingTabs"
import ServiceHeader from "./components/ServiceHeader"
import TestimonialSection from "./sections/TestimonialSection"
import OrganicMediaSection from "./sections/OrganicMediaSection"
import OurApproach from "./sections/OurApproach"
import OurServices from "./sections/OurServices"
import OurProjects from "./sections/OurProjects"


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
            <PricingTabs/>
            <CTASection/>
    </main>
  )
}

export default Services