import Banner from "../../Components/Banner/Banner"
import NewsLetter from "../../Components/NewsLetter/NewsLetter"
import OurService from "../../Components/OurService/OurService"
import Testomunials from "../../Components/Testomunials/Testomunials"
import TrusteUs from "../../Components/TrustUs/TrusteUs"

const Home = () => {
  return (
    <div>
      <Banner />
      <TrusteUs />
      <OurService />
      <Testomunials />
      <NewsLetter />
    </div>
  )
}

export default Home
