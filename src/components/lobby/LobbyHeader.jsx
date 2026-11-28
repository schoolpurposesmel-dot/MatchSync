
function LobbyHeader({scrim}){
    return(
        <div  className="bg-[#111522] border border-white/10 rounded-xl p-6 mt-6">
            <h2  className="text-2xl font-bold text-white">
                {scrim.teamName}
            </h2>

            <p className="text-slate-400 mt-2">
                {scrim.game}
            </p>

            <p className="text-green-400 text-sm mt-3" > Match Confirmed </p>
        </div>
    )
}

export default LobbyHeader;