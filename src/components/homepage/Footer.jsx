
function Footer() {
    return(
       <footer className="border-t border-purple-500/40 shadow-[0_-4px_15px_rgba(168,85,247,0.15)] bg-gray-950 px-8 py-12 text-white">
        <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <div>
                    <h2 className="text-2xl font-bold">
                        MATCH<span className="text-2xl font-bold text-purple-400">SYNC</span>
                    </h2>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                        MatchSync connects esports teams for competitive scrims and tournaments. Find opponents, schedule matches, and prove your skills.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">
                        Quick Links
                    </h3>

                    <ul className="mt-4 space-y-3 text-sm text-gray-400">
                        <li>
                            <a href="#home" className="transition hover:text-purple-400">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#Scrims" className="transition hover:text-purple-400">
                                Scrims
                            </a>
                        </li>

                        <li>
                            <a href="#Tournaments" className="transition hover:text-purple-400">
                                Tournaments
                            </a>
                        </li>

                        <li>
                            <a href="#HowItWorks" className="transition hover:text-purple-400">
                                How It Works
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                <p>
                     © 2026 MatchSync. All rights reserved.
                </p>
            </div>
        </div>

       </footer>
    )

}

export default Footer;