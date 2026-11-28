import HostInfoCard from './HostInfoCard';
import BookingForm from './BookingForm';



function ListingDetails({scrim, onBack, onBookingSubmit, bookingRequests, onOpenLobby}){

    const currentRequests = bookingRequests.filter(
        (request) => request.scrimId === scrim.id
    );
    return(
        <div className="min-h-screen bg-[#080b14] p-8">

            <button
            type="button"
            onClick={onBack}
            className="text-purple-400 hover:text-purple-300 mb-6 cursor-pointer"
            >
                ← Back to Scrims
                
            </button>

             <h1 className ="text-2xl font-bold text-white">
                {scrim.teamName}
            </h1>

            <div className ="mt-6 space-y-4">
                <p className ="text-slate-400">Game: <span className="text-white">{scrim.game}</span></p>

                <p className ="text-slate-400" >Region: <span className="text-white">{scrim.region}</span></p>

                <p className ="text-slate-400">Date: <span className="text-white">{scrim.date}</span></p>

                <p className ="text-slate-400">Time: <span className="text-white">{scrim.time}</span></p>

                <p className ="text-slate-400">Skill Level: <span className="text-white">{scrim.skilllevel}</span></p>

                <p className ="text-slate-400">
                    Description: <span className="text-white">
                        
                        
                        {scrim.description || "No description provided"}</span></p>

           
            

            </div>

            <HostInfoCard teamName={scrim.teamName} />
            <BookingForm 
            scrim={scrim}
            onBookingSubmit={onBookingSubmit}
            />

            <div>
                <h2> 
                    Booking Requests
                </h2>

                {currentRequests.length === 0 ? (
                    <p>No booking requests yet.</p>
                ) : (
                    <div className="mt-4 space-y-4">
                        {currentRequests.map((request, index) => (
                            <div
                            key={index}
                            className="bg-[#080b14] rounded-lg p-4"
                            >
                            <h3 className="text-white font-semibold">
                                {request.teamName}
                            </h3>

                            <p className="text-slate-400 text-sm mt-1">
                                Representative: {request.teamRep}
                            </p>

                            <p className="text-slate-400 text-sm mt-1">
                                Region: {request.region}
                            </p>

                            <p className="text-slate-400 text-sm mt-1">
                                Skill Level: {request.skilllevel}
                            </p>

                            <p className="text-slate-400 text-sm mt-1">
                                Message: {request.message || "No message provided."}
                            </p>

                            <p className="text-yellow-400 text-sm mt-2">
                                Status: {request.status}
                            </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

             <button
                type="button"
                onClick={onOpenLobby}
                className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-semibold transition cursor-pointer"
            >
                Open Private Lobby
            </button>
        </div>
    )
}

export default ListingDetails;