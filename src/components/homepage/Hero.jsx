
function Hero(){
    return(
        <section className = "bg-gradient-to-br from-gray-900 via-gray-950 to-purple-950 px-8 py-24 text-white" >
                <div className = "mx-auto max-w-7xl">
                <h1 className="text-5xl font-bold text-purple-500">
                  Find Your Next <span className="text-purple-500">Rival</span>
                </h1>
        
                <p className = "mt-6 max-w-2xl text-lg text-gray-400">
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
              </section>
    )
}

export default Hero