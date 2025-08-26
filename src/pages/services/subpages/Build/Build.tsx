import LogoTape from "../../components/LogoTape"
import ServiceHeader from "../../components/ServiceHeader"

const Build = () => {
  return (
       <main className="flex flex-col overflow-x-hidden">
            <ServiceHeader
            leftTitle="Build"
            rightTitle="the Future"
            image="/assets/services/influencer.jpg"
            description="We push users along the funnel through performance-driven content marketing."
            buttonText="Let's Talk"
            />
        <LogoTape categories={["Build"]}/>
    </main>
  )
}

export default Build