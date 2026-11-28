
function RoomCredentials(){
    return(
        <div className="bg-[#111522] border border-white/10 rounded-xl p-6 mt-6">
            <h2 className="text-xl font-bold text-white">
                Room Credentials
            </h2>
            <div className="mt-5 space-y-4">
            <div>
                <p className="text-slate-400 text-sm">
                    Room ID
                </p>

                <p className="text-white font-semibold mt-1"> MATCH-2026-001</p>
            </div>

            <div>
                <p className="text-slate-400 text-sm"> Room Password </p>
                <p className="text-white font-semibold mt-1"> 123456</p>
            </div>
            </div>
        </div>
    )
}

export default RoomCredentials;