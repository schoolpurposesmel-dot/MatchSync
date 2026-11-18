import valorantImg from './assets/valorant.jpg'
import mlImg from './assets/Ml.jpg'
import lolImg from './assets/LOL.jpg'
import codImg from './assets/COD.jpg'



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
              <div className = "overflow-hiddenrounded-xl border border-gray-800 bg-gray-950 transition duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10">
                <img
                src = {valorantImg}
                alt="Valorant"
                className = "h-84 w-full rounded-lg object-cover"
                />
                <h3 className = "text-xl font-bold">
                  Valorant
                </h3>
                <p className = "mt-2 text-sm text-gray-400">
                  Tactical FPS
                </p>
              </div>
            
            <div className = "overflow-hidden rounded-xl border border-gray-800 bg-gray-950 transition duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10">
                <img
                src = {mlImg}
                alt="Mobile Legends"
                className = "h-84 w-full rounded-lg object-cover"
                />
                <h3 className = "text-xl font-bold">
                  Mobile Legends
                </h3>
                <p className = "mt-2 text-sm text-gray-400">
                  MOBA
                </p>
              </div>
            
            <div className = "overflow-hidden rounded-xl border border-gray-800 bg-gray-950 transition duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10">
                <img
                src = {lolImg}
                alt="League of Legends"
                className = "h-84 w-full rounded-lg object-cover"
                />
                <h3 className = "text-xl font-bold">
                  League of Legends
                </h3>
                <p className = "mt-2 text-sm text-gray-400">
                  MOBA
                </p>
              </div>

            <div className = "overflow-hidden rounded-xl border border-gray-800 bg-gray-950 transition duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10">
                <img
                src = {codImg}
                alt="Call of Duty"
                className = "h-84 w-full rounded-lg object-cover"
                />
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
        

          <section className = "bg-gray-950 px-8 py-16 text-white">
            <div className = "mx-auto max-w-7xl space-y-5">
              <h2 className = "text-3xl font-bold"> Featured Scrims </h2>
              <p className = "text-gray-400 py-3">
                Find teams looking for their next opponent.
              </p>
            
              <div className = "flex flex-col gap-5 rounded-xl border border-gray-800 bg-gray-900 md:flex-row md:items-center">
                 <img
                  src = {valorantImg}
                  alt="Valorant"
                 className = "h-60 w-150 shrink-0rounded-lg object-cover"
                />
              
                  <div className = "flex flex-1 flex-col justify-center gap-4">
                    
                     <h3 className = "text-5xl font-bold"> Team Shadow</h3>
                  
                  <div className = "flex items-center gap-3">
                  <span className = "rounded-md bg-purple-500/10 px-3 py-1 text-sm text-purple-400"> 
                  Valorant 
                  </span>

                  <span className = "text-sm text-green-400"> 
                    Open 
                    </span>
                  </div>
              
                <p className = "text-sm text-gray-400">
                  Looking for a competitive opponent.
                </p>
                
                
                
                <div className = "flex flex-wrap gap-4 text-sm text-sm text-gray-400">
                  <span> Rank: Diamond </span>
                  <span> Region: Asia Pacific </span>
                  <span> Mode: 5V5 </span>

                </div>
                </div>

                <button className = "rounded-lg bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-700 md: w-auto self-center shrink-0 mr-6">
                  View Scrim
                </button>
              </div>

              <div className = "flex flex-col gap-5 rounded-xl border border-gray-800 bg-gray-900  md:flex-row md:items-center">
                 <img
                  src = {codImg}
                  alt="Call of Duty"
                 className = "h-60 w-150 shrink-0rounded-lg object-cover"
                />
              
                  <div className = "flex flex-1 flex-col justify-center gap-4">
                    
                     <h3 className = "text-5xl font-bold"> Team Alter Ego</h3>
                  
                  <div className = "flex items-center gap-3">
                  <span className = "rounded-md bg-purple-500/10 px-3 py-1 text-sm text-purple-400"> 
                  Call of Duty Mobile
                  </span>

                  <span className = "text-sm text-green-400"> 
                    Open 
                    </span>
                  </div>
              
                <p className = "text-sm text-gray-400">
                  Looking for a competitive opponent.
                </p>
                
                
                
                <div className = "flex flex-wrap gap-4 text-sm text-sm text-gray-400">
                  <span> Rank: Legendary </span>
                  <span> Region: Asia Pacific </span>
                  <span> Mode: 5V5 </span>

                </div>

                </div>

                <button className = "rounded-lg bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-700 md: w-auto self-center shrink-0 mr-6">
                  View Scrim
                </button>
              </div>

              <div className = "flex flex-col gap-5 rounded-xl border border-gray-800 bg-gray-900 md:flex-row md:items-center">
                 <img
                  src = {mlImg}
                  alt="Mobile Legends"
                 className = "h-60 w-150 shrink-0rounded-lg object-cover"
                />
              
                  <div className = "flex flex-1 flex-col justify-center gap-4">
                    
                     <h3 className = "text-5xl font-bold"> Team Nexplay</h3>
                  
                  <div className = "flex items-center gap-3">
                  <span className = "rounded-md bg-purple-500/10 px-3 py-1 text-sm text-purple-400"> 
                  Mobile Legends 
                  </span>

                  <span className = "text-sm text-green-400"> 
                    Open 
                    </span>
                  </div>
              
                <p className = "text-sm text-gray-400">
                  Looking for a competitive opponent.
                </p>
                
                
                
                <div className = "flex flex-wrap gap-4 text-sm text-sm text-gray-400">
                  <span> Rank: Mythical Immortal </span>
                  <span> Region: Asia Pacific </span>
                  <span> Mode: 5V5 </span>

                </div>
                </div>

                <button className = "rounded-lg bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-700 md: w-auto self-center shrink-0 mr-6">
                  View Scrim
                </button>
              </div>
              
            </div>
          </section>
          
     </div>
  )
}


export default App
