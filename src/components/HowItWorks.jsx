
function HowItWorks() {
    return (
       <section className="bg-gray-950 px-8 py-16 text-white">
            <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center">
                How It Works
            </h2>

            <p className="mt-2 text-center text-gray-400">
                Get started with MatchSync in three simple steps.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
                    <h3 className="text-xl font-bold text-purple-400">
                        01. Find your Match
                    </h3>

                    <p className="mt-4 text-gray-400">
                        Browse avaialable scrims and tournaments to find the right competitino for your team.
                    </p>
                </div>

                 <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
                    <h3 className="text-xl font-bold text-purple-400">
                        02. Connect & Schedule
                    </h3>

                    <p className="mt-4 text-gray-400">
                        Connect with other teams, arrange match schedules, and prepare for your games.
                    </p>
                </div>

                 <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
                    <h3 className="text-xl font-bold text-purple-400">
                        0.3 Compete & Win
                    </h3>

                    <p className="mt-4 text-gray-400">
                        Play your matches, submit results, and track your team's competitive progress.
                    </p>
                </div>

            </div>
            </div>
       </section>
    )
}

export default HowItWorks
