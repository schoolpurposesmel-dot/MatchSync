import Navbar from './components/homepage/Navbar'
import Hero from './components/homepage/Hero'
import GamesSection from './components/homepage/GamesSection'
import FeaturedScrims from './components/homepage/FeaturedScrims'
import FeaturedTournaments from './components/homepage/FeaturedTournaments'
import HowItWorks from './components/homepage/HowItWorks'
import Footer from './components/homepage/Footer'



function App() {
 
  

  return (
    <div>
      
      <Navbar />

      <Hero />

      <GamesSection />
        
      <FeaturedScrims />

      <FeaturedTournaments />    
        
      <HowItWorks />

      <Footer />

     </div>
  )
}


export default App
