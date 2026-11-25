import { useState } from 'react';



function CreateListing({ onClose, onCreateListing}){
    const [teamName, setTeamName] = useState('');
    const [game, setGame] = useState('');
    const [region, setRegion] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [skilllevel, setSkilllevel] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        const newScrim={
        teamName,
        game,
        region,
        date,
        time,
        skilllevel,
        description
        };

        onCreateListing(newScrim);
        onClose();
    }
    return (
        
        <div className = "fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-[#111522] border border-white/10 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">


            <div className="flex items-center justify-between mb-6">
                <div>

                    <h2 className="text-xl font-bold text-white">
                        Create Scrim Listing
                    </h2>

                    <p className = "text-sm text-slate-400 mt-1">
                        Find another team to compete against.
                    </p>

                
                </div>

                    <button
                
                type="button"
                onClick={onClose}
                className="text-slate-400 hover:text-white text-xl"
                >
                    &times;
                </button>

                </div>
                    <form onSubmit ={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm text-slate-300 mb-2">
                            Team Name
                        </label>

                        <input
                        type="text"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        placeholder="Enter your team name"
                        className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none"
                        />

                        </div>

                        

                        <div className="mb-4">
                            <label className="block text-sm text-slate-300 mb-2">
                                Game
                            </label>

                            <select
                                value={game}
                                onChange={(e) => setGame(e.target.value)}
                                 className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none"
                            >
                                <option value="">Select a game</option>
                                <option value="Valorant">Valorant</option>
                                <option value="Mobile Legends">Mobile Legends</option>
                                <option value="Call of Duty Mobile">Call Of Duty Mobile</option>
                                <option value="lol">League of Legends</option>
                            </select>

                            </div>

                            <div className="mb-4">
                            <label className="block text-sm text-slate-300 mb-2">
                                Region
                            </label>

                            <select
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                                 className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none"
                            >
                                <option value="">Select a region</option>
                                <option value="Asia">Asia</option>
                                <option value="North America">North America</option>
                                <option value="Europe">Europe</option>
                                <option value="South America">South America</option>
                            </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm text-slate-300 mb-2">
                                    Scrim Date
                                </label>

                                <input
                                 type="date"
                                 value={date}
                                 onChange={(e) => setDate(e.target.value)}
                                  className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none"
                                />
                               

                            </div>


                            <div className="mb-4">
                                <label className="block text-sm text-slate-300 mb-2">
                                    Time
                                </label>


                                <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm text-slate-300 mb-2">
                                    Skill Level
                                </label>


                                <input
                                type="text"
                                value={skilllevel}
                                onChange={(e) => setSkilllevel(e.target.value)}
                                placeholder="e.g. Radiant, Mythical Glory, Legendary"
                                className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none"
                                />
                            </div>

                            <div className ="mb-4">
                                <label className = "block text-sm text-slate-300 mb-2">
                                    Description
                                </label>

                                <textarea
                                rows="3"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Add details about the scrim..."
                                className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none resize-none"
                                ></textarea>
                                
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 rounded-lg text-slate-300 hover:bg-white/5 transition">
                                    Cancel
                                </button>

                                <button
                                type="submit"
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">
                                    Create listing
                                </button>
                            </div>

                            </form>
                            

                         
                

                
            
                        </div>
            
        </div>
        
    )
}

export default CreateListing;