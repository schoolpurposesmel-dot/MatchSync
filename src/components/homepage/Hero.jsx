import hero_bg from "../../assets/hero_bg.jpg";
function Hero(){
    return(
        <section
                className="relative bg-gray-950 px-8 py-24 text-white"
                style={{
                  backgroundImage: `url(${hero_bg})`,
                  backgroundSize: '100% auto',
                  backgroundPosition: '100% 45%',
                  backgroundRepeat: 'no-repeat'
                }}
                
                >
               
                <div className = "mx-auto max-w-7xl">
                <h1 className="text-8xl font-bold">
                  MATCH<span className="text-purple-500">SYNC</span>
                </h1>

                <div className = "mx-auto max-w-7xl">
                <h1 className="mt-2 text-2xl font-bold text-purple-500">
                  Find Your Next Rival
                </h1>
        
                <p className = "mt-3 max-w-2xl text-lg text-gray-400">
                  MatchSync connects esports teams for competitive scrims and tournaments.
                  Find opponents, schedule matches, and prove your skills.
                </p> 
        
              
                <div className = "mt-8 flex gap-4">
                <button className = "rounded-lg bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700"> 
                  Find Scrims 
                  </button>
                <button className = "rounded-lg bg-gray-600 px-6 py-3 font-semibold hover:bg-gray-700"> 
                  View Tournaments 
                  </button>
                </div>
                </div>
                </div>
              </section>
             
    )
}

export default Hero