import Navbar from './Navbar'
import Hero from './Hero'
import GamesSection from './GamesSection'
import FeaturedScrims from './FeaturedScrims'
import FeaturedTournaments from './FeaturedTournaments'
import HowItWorks from './HowItWorks'
import Footer from './Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <GamesSection />
      <FeaturedScrims />
      <FeaturedTournaments />
      <HowItWorks />
      <Footer />
    </>
  )
}

export default HomePage