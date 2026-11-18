import valorantImg from "../../assets/valorant.jpg";
import mlImg from "../../assets/Ml.jpg"
import lolImg from "../../assets/LOL.jpg";


function FeaturedTournaments(){
    return (
        <section className="bg-gray-900 px-8 py-16 text-white">
            <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold">
                Featured Tournaments 
            </h2>

            <p className="mt-2 text-gray-400">
                Join upcoming tournaments and compete for victory.
            </p> 

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-gray-800 bg-gray-950 p-6">
                    <img
                    src={valorantImg}
                    alt="Valorant Championship"
                    className="h-60 w-full rounded-lg object-cover"
                    />
                    <h3 className="text-xl font-bold text-center mt-4">
                        VALORANT MASTERS 2026   
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                        Valorant
                    </p>

                    <p className="mt-4 text-sm text-gray-300">
                        Date: December 5, 2026
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                        Prize Pool: ₱30,000
                    </p>

                     <span className="mx-auto mt-1 block rounded-md bg-green-500/10 px-2 py-1 text-sm text-green-400 text-center">
                        Registration Open
                    </span>

                    <button className="mt-6 w-full rounded-lg bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-700">
                        Join Tournament
                    </button>

                </div>

                 <div className="rounded-xl border border-gray-800 bg-gray-950 p-6">
                    <img
                    src={mlImg}
                    alt="ESPORTS WORLD CUP (MLBB) 2026"
                    className="h-60 w-full rounded-lg object-cover"
                    />
                    <h3 className="text-xl font-bold text-center mt-4">
                        ESPORTS WORLD CUP (MLBB) 2026   
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                        Mobile Legends: Bang Bang
                    </p>

                    <p className="mt-4 text-sm text-gray-300">
                        Date: December 12, 2026
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                        Prize Pool: ₱40,000
                    </p>

                     <span className="mx-auto mt-1 block rounded-md bg-green-500/10 px-2 py-1 text-sm text-green-400 text-center">
                        Registration Open
                    </span>

                    <button className="mt-6 w-full rounded-lg bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-700">
                        Join Tournament
                    </button>

                </div>

                 <div className="rounded-xl border border-gray-800 bg-gray-950 p-6">
                    <img
                    src={lolImg}
                    alt="LEAGUE OF LEGENDS SUMMONER'S CUP 2026"
                    className="h-60 w-full rounded-lg object-cover"
                    />
                    <h3 className="text-xl font-bold text-center mt-4">
                        LEAGUE OF LEGENDS SUMMONER'S CUP 2026   
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                        League of Legends
                    </p>

                    <p className="mt-4 text-sm text-gray-300">
                        Date: December 16, 2026
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                        Prize Pool: ₱50,000
                    </p>

                     <span className="mx-auto mt-1 block rounded-md bg-green-500/10 px-2 py-1 text-sm text-green-400 text-center">
                        Registration Open
                    </span>

                    <button className="mt-6 w-full rounded-lg bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-700">
                        Join Tournament
                    </button>

                </div>

            </div>
            </div>
        </section>
    )
}

export default FeaturedTournaments