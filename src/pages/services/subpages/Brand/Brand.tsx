import CTATape from "../../components/CTATape"
import LogoTape from "../../components/LogoTape"
import ServiceHeader from "../../components/ServiceHeader"

const items = [
  { type: 'text', content: 'Growth strategy' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
  { type: 'text', content: 'Starts Here' },
  { type: 'image', content: '/assets/services/influencer.jpg', alt: 'Description' },
];



const Brand = () => {
  return (
    <main className="flex flex-col overflow-x-hidden">
            <ServiceHeader
            leftTitle="Branding"
            rightTitle="Services"
            image="/assets/services/influencer.jpg"
            description="We push users along the funnel through performance-driven content marketing."
            buttonText="Let's Talk"
            />
        <LogoTape categories={["Brand"]}/>
        <CTATape items={items}  speed={60}/>
    </main>
  )
}

export default Brand