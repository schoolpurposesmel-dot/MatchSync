
function App() {
 
  

  return (
    <div>
      <nav className = "flex items-center justify-between bg-gray-950 px-8 py-5 text-white">
        <h2 className = "text-2xl font-bold text - purple-500"> MATCHSYNC </h2>

        <div className = "flex items-center gap-8">
          <a href="#" classsName = "text-gray-300 hover:text-white"> Home </a>
          <a href="#" className = "text-gray-300 hover:text-white"> Scrims </a>
          <a href="#" className = "text-gray-300 hover:text-white"> Tournaments </a>
          <a href="#" className = "text-gray-300 hover:text-white"> Dashboard </a>
        </div>

        <button className = "rounded-lg bg-purple-600 px-5 py-2 font-semibold hover:bg-purple-700">Sign Up</button>

      </nav>

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

      
        <section className = "bg-gray-900 px-5 py-16 text-white">
            <div className = "mx-auto max-w-7xl">
              <h2 className = "text-3xl font-bold"> Games Available </h2>
              <p className = "mt-2 text-gray-400">
                Choose your game and find teams to compete against.
              </p>


            <div className = "mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className = "rounded-xl border border-gray-800 bg-gray-950 p-6">
                <h3 className = "text-xl font-bold">
                  Valorant
                </h3>
                <p className = "mt-2 text-sm text-gray-400">
                  Tactical FPS
                </p>
              </div>
            
            <div className = "rounded -xl border border-gray-800 bg-gray-950 p-6">
                <h3 className = "text-xl font-bold">
                  Mobile Legends
                </h3>
                <p className = "mt-2 text-sm text-gray-400">
                  MOBA
                </p>
              </div>
            
            <div className = "rounded-xl border border-gray-800 bg-gray-950 p-6">
                <h3 className = "text-xl font-bold">
                  League of Legends
                </h3>
                <p className = "mt-2 text-sm text-gray-400">
                  MOBA
                </p>
              </div>

            <div className = "rounded-xl border border-gray-800 bg-gray-950 p-6">
                <h3 className = "text-xl font-bold">
                  Call of Duty
                </h3>
                <p className = "mt-2 text-sm text-gray-400">
                  FPS
                </p>
              </div>

            </div>
            
            </div>
          </section>
     </div>
  )
}


export default App
