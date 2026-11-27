
function ScrimCard({id,teamName, status, game, region, date, time, skilllevel, onViewDetails}){
    return(
        <div className = "bg-[#111522] border border-white/10 rounded-xl p-5">
            <div className = "flex items-center justify-between">
            <h3 className = "text-lg font-bold text-white">
                {teamName}
            </h3>

            <span className="text-xs bg-green-500/10 text-green-400 px-3 py-1 rounded-full">
                {status}
            </span>
             </div>

        <p className="text-sm text-slate-400 mt-3">
            {game}
        </p>

        <p className="text-sm text-slate-400 mt-2">
            Region: {region}
        </p>

            <div className="mt-4 space-y-2">
            <p className="text-sm text-slate-300">
                <span className="text-slate-500">Date:</span> {date}
            </p>

            <p className="text-sm text-slate-300">
                <span className="text-slate-500">Time:</span> {time}
            </p>

            <p className="text-sm text-slate-300">
                <span className="text-slate-500">Skill Level: </span> {skilllevel}
            </p>
            </div>

            <button
            type = "button"
            onClick={() => onViewDetails(id)}
            className = "w-full mt-5 bg-purple-600 hover:bg-purple-900 text-white font-semibold py-2.5 rounded-lg transition cursor-pointer"
            >
                View Details
            </button>
        </div>
    )
}

export default ScrimCard;