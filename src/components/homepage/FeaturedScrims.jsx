import valorantImg from "../../assets/valorant.jpg";
import mlImg from "../../assets/Ml.jpg";
import codImg from "../../assets/COD.jpg";

function FeaturedScrims() {
    return (
        <section className="bg-gray-950 px-8 py-16 text-white">
            <div className = "relative z-10 mx-auto max-w-7xl space-y-5">
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
    )
}

export default FeaturedScrims