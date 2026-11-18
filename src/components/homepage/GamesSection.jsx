import valorantImg from "../../assets/valorant.jpg";
import mlImg from "../../assets/Ml.jpg";
import lolImg from "../../assets/LOL.jpg";
import codImg from "../../assets/COD.jpg";

function GamesSection() {
    return (
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
    )

}

export default GamesSection