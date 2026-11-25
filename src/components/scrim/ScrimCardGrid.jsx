import ScrimCard from './ScrimCard';



function ScrimCardGrid(){
    return(

       
        
        <div className = "mt-8">

             <div className = "flex items-center justify-between mb-5">
            <div>
                <h2 className = "text-xl font-bold text-white">
                    Available Scrims
                </h2>

                <p> Browse scrim opportunities from other teams. </p>
            </div>

            <button
            type = "button"
            className = "bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-semibold transition cursor-pointer"
            >
                + Create Listing

            </button>
          </div>  

            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                <ScrimCard 
                teamName = "Team META"
                status = "Open"
                game = "Valorant"
                region = "Asia"
                date = "November 28, 2026"
                time = "7:00 PM"
                skilllevel = "Immortal"
                />

                <ScrimCard 
                teamName = "Team Phoenix"
                status = "Open"
                game = "Mobile Legends"
                region = "Asia"
                date = "November 29, 2026"
                time = "8:00 PM"
                skilllevel = "Mythical Honor"                
                />

                <ScrimCard 
                teamName="Team Alpha"
                status="Open"
                game="League of Legends"
                region = "North America"
                date = "November 30, 2026"
                time = "6:00 PM"
                skilllevel= "Platinum"
                
                />

            </div>

            
        </div>
        
    )
}

export default ScrimCardGrid;