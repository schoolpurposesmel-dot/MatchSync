import ScrimCard from './ScrimCard';
import CreateListing from './CreateListing';
import ListingDetails from './ListingDetails';
import PrivateLobby from '../lobby/PrivateLobby';
import { useState } from 'react';




function ScrimCardGrid(){
    const [showCreateListing, setShowCreateListing] = useState(false);
    const [scrims, setScrims] = useState([
        {
            
                id: 1,
                teamName: "Team META",
                status: "Open",
                game: "Valorant",
                region: "Asia",
                date: "November 28, 2026",
                time: "7:00 PM",
                skilllevel: "Immortal"
        },
        {    

                id: 2,
                teamName: "Team Phoenix",
                status: "Open",
                game: "Mobile Legends",
                region: "Asia",
                date: "November 29, 2026",
                time: "8:00 PM",
                skilllevel: "Mythical Honor"                
        },
        {     

                id: 3,
                teamName:"Team Alpha",
                status:"Open",
                game:"League of Legends",
                region: "North America",
                date: "November 30, 2026",
                time: "6:00 PM",
                skilllevel: "Platinum"
        }        
                
    ]);

    const [selectedScrim, setSelectedScrim] = useState(null);

    const[bookingRequests, setBookingRequests] = useState([]);
    const [showLobby, setShowLobby] = useState(false);

    function handleViewDetails(id){
        const selected = scrims.find((scrim) => scrim.id === id);

        setSelectedScrim(selected);
    }

    function handleCreateListing(newScrim){
        setScrims([...scrims, {
            ...newScrim,
            id: Date.now(),
            status: "Open"
        }])
    }

    function handleBookingSubmit(newRequest){
        setBookingRequests([...bookingRequests, newRequest]);

        console.log("All Booking Requests: ", [...bookingRequests, newRequest]);
    }
    return(

       
        
        <div className = "mt-8">

                {showLobby ? (
                <PrivateLobby
                    scrim={selectedScrim}
                /> 
            ) : 
              selectedScrim ? (
                <ListingDetails 
                scrim={selectedScrim}
                onBack={() => setSelectedScrim(null)}
                onBookingSubmit={handleBookingSubmit} 
                bookingRequests={bookingRequests}
                onOpenLobby={() => setShowLobby(true)}
                />
             ) : (
                <>
                

             <div className = "flex items-center justify-between mb-5">
            <div>
                <h2 className = "text-xl font-bold text-white">
                    Available Scrims
                </h2>

                <p> Browse scrim opportunities from other teams. </p>
            </div>

            <button
            onClick={() => setShowCreateListing(true)}
            type = "button"
            className = "bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-semibold transition cursor-pointer"
            >
                + Create Listing

            </button>
          </div>  

            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {scrims.map((scrim) => (

                    <ScrimCard
                    key={scrim.id}
                    id={scrim.id}
                    teamName={scrim.teamName}
                    status={scrim.status}
                    game={scrim.game}
                    region={scrim.region}
                    date={scrim.date}
                    time={scrim.time}
                    skilllevel={scrim.skilllevel}
                    onViewDetails={handleViewDetails}
                    />
                ))
                }


            </div>

             {showCreateListing && (
                <CreateListing 
                        onClose={() => setShowCreateListing(false)}
                        onCreateListing={handleCreateListing}
                />
             )}

           
                </>
             )}
        </div>
        
        
    )
}

export default ScrimCardGrid;