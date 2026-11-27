import HostInfoCard from './HostInfoCard';


function ListingDetails({scrim, onBack}){
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
        </div>
    )
}

export default ListingDetails;