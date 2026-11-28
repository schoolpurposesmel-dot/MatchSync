
function LobbyHeader({scrim}){
    return(
        <div className="text-green-400 text-sm mt-3">
            <h2 className="text-green-400 text-sm mt-3">
                {scrim.teamName}
            </h2>

            <p className="text-green-400 text-sm mt-3">
                {scrim.game}
            </p>

            <p className="text-green-400 text-sm mt-3" > Match Confirmed </p>
        </div>
    )
}

export default LobbyHeader;