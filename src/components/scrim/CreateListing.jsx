
function CreateListing(){
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
                className="text-slate-400 hover:text-white text-xl"
                >
                    &times;
                </button>

                </div>

                    <div className="mb-4">
                        <label className="block text-sm text-slate-300 mb-2">
                            Team Name
                        </label>

                        <input
                        type="text"
                        placeholder="Enter your team name"
                        className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none"
                        />

                        </div>

                        

                        <div className="mb-4">
                            <label className="block text-sm text-slate-300 mb-2">
                                Game
                            </label>

                            <select
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
                                  className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none"
                                />
                               

                            </div>


                            <div className="mb-4">
                                <label className="block text-sm text-slate-300 mb-2">
                                    Time
                                </label>


                                <input
                                type="time"
                                className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm text-slate-300 mb-2">
                                    Skill Level
                                </label>


                                <input
                                type="text"
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
                                placeholder="Add details about the scrim..."
                                className="w-full bg-[#080b14] border border-white/10 rounded-lg px-4 py-3 text-white outline-none resize-none"
                                ></textarea>
                                
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                type="button"
                                className="px-4 py-2 rounded-lg text-slate-300 hover:bg-white/5 transition">
                                    Cancel
                                </button>

                                <button
                                type="button"
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">
                                    Create listing
                                </button>
                            </div>
                            

                         
                

                
            
                        </div>
            
        </div>
        
    )
}

export default CreateListing;