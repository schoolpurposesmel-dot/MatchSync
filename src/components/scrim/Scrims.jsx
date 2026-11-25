

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

            <div className = "bg-[#111522] border border-white/10 rounded-xl p-5 mb-8">
                <h2 className="text-lg font-semibold mb-4">
                    Search Scrims
                </h2>

                <input
                type="text"
                placeholder="Search by team name..."
                className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none"
                />
            </div>
            
        </div>
        </div>
    )
}

export default Scrims;