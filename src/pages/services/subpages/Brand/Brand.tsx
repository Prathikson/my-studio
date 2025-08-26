import LogoTape from "../../components/LogoTape"
import ServiceHeader from "../../components/ServiceHeader"

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
    </main>
  )
}

export default Brand