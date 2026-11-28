import LobbyHeader from './LobbyHeader';
import RoomCredentials  from './RoomCredentials';
import ChatBox from './ChatBox';

function PrivateLobby({scrim}){
    return(
        <div className="min-h-screen bg-[#080b14] text-white p-8">
            <h1 className="text-3xl font-bold">
                Private Match Lobby
            </h1>

            <p className="text-slate-400 mt-2"> Coordinate with your opponent team before the match. </p>
        
            <LobbyHeader scrim={scrim} />
            <RoomCredentials />
            <ChatBox />
        </div>
        
    )
}

export default PrivateLobby;