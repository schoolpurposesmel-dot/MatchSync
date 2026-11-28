import LobbyHeader from './LobbyHeader';
import RoomCredentials  from './RoomCredentials';
import ChatBox from './ChatBox';
import PrivacyToggle from './PrivacyToggle';

function PrivateLobby({scrim, onBack}){
    return(
        <div className="min-h-screen bg-[#080b14] text-white p-8">

            <button
                type="button"
                onClick={onBack}
                className="text-purple-400 hover:text-purple-300 mb-6 cursor-pointer"
            >
                ← Back to Scrim Details
            </button>
            <h1 className="text-3xl font-bold">
                Private Match Lobby
            </h1>

            <p className="text-slate-400 mt-2"> Coordinate with your opponent team before the match. </p>
            <div className="grid grid-cols-2 gap-6">
            <LobbyHeader scrim={scrim} />
            
            <PrivacyToggle />
            </div>
            <RoomCredentials />
            <ChatBox />
        </div>
        
    )
}

export default PrivateLobby;