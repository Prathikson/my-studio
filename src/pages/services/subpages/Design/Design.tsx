import LogoTape from "../../components/LogoTape"
import ServiceHeader from "../../components/ServiceHeader"

const Design = () => {
  return (
       <main className="flex flex-col overflow-x-hidden">
            <ServiceHeader
            leftTitle="Get"
            rightTitle="Creative"
            image="/assets/services/influencer.jpg"
            description="We push users along the funnel through performance-driven content marketing."
            buttonText="Let's Talk"
            />
        <LogoTape categories={["Design"]}/>
    </main>
  )
}

export default Design