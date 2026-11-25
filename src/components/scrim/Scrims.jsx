

function Scrims(){
    return (
        <div className="min-h-screen bg-[#080b14] text-white px-6 py-10">
            <div className = "max-w-7xl mx-auto">

            <div className = "mb-8">
                <h1 className = "text-3xl font-bold">
                    Find Scrims
                </h1>

                <p className = "text-slate-400 mt-2">
                    Find teams to compete against and schedule your next match.
                </p>
            </div>

            <div className = "grid grid-cols-1 md:grid-cols-2 gap-4">
              

                <input
                type="text"
                placeholder="Search by team name..."
                className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none"
                />

                <select className = "w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-slate-300 outline-none">
                <option value=""> All Games</option>
                <option value="valorant">Valorant</option>
                <option value="mlbb">Mobile Legends</option>
                <option value="codm">Call of Duty Mobile</option>
                <option value="lol">League of Legends</option>
                </select>
            </div>
            
        </div>
        </div>
    )
}

export default Scrims;