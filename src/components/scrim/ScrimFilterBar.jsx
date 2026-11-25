
function ScrimFilterBar(){
    return(
        <div className = "grid grid-cols-1 md:grid-cols-3 gap-4">

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

                <select className = "w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-slate-300 outline-none">
                <option value=""> All Regions </option>
                <option value="asia"> Asia </option>
                <option value="north-america"> North America </option>
                <option value="europe"> Europe </option>
                <option value = "south-america"> South America </option>
                </select>
        </div>
    )
}

export default ScrimFilterBar;