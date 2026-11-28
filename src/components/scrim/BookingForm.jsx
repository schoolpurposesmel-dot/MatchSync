import {useState} from 'react';

function BookingForm( {scrim, onBookingSubmit}){

    const[teamName, setTeamName] = useState('');
    const[teamRep, setTeamRep] = useState('');
    const[message, setMessage] = useState('');
    const[region, setRegion] = useState('');
    const[skilllevel, setSkillLevel] = useState('');
    const[submitted, setSubmitted] = useState('');
    


    function handleSubmit(e){

        e.preventDefault();

        const bookingRequest = {
            scrimId: scrim.id,
            hostTeam: scrim.teamName,
            teamName,
            teamRep,
            region,
            skilllevel,
            message,
            status:'Pending'
        };

        

        console.log(bookingRequest);
        onBookingSubmit(bookingRequest);

        setSubmitted(true);
        setTeamName('');
        setTeamRep('');
        setMessage('');

    }

    
    return(
        <div  className="bg-[#111522] border border-white/10 rounded-xl p-6 mt-8">
            <h2  className="text-xl font-bold text-white"> Request to Join Scrim </h2>

            <p className="text-slate-400 text-sm mt-2">Send a booking request to the host team.</p>

            <form 
            onSubmit={handleSubmit}
            className="mt-6 space-y-5"
            >
                

                <div>
                    <label className="block text-sm text-slate-300 mb-2">
                        Requesting Team Name
                    </label>

                    <input
                    type="text"
                    placeholder="Enter your name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full bg-[#080b14] border border-white/10 rounded-lg p-3 text-white"                    
                    
                    />
                </div>

                <div>
                    <label className="block text-sm text-slate-300 mb-2">
                        Team Representative
                    </label>

                    <input 
                    type="text"
                    placeholder="Enter representative's name"
                    value={teamRep}
                    onChange={(e) => setTeamRep(e.target.value)}
                    className="w-full bg-[#080b14] border border-white/10 rounded-lg p-3 text-white"
                    />
                </div>

                <div>
                    <label>
                        Region:
                    </label>

                    <input
                    type="text"
                    placeholder="Enter region"
                    value={skilllevel}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-[#080b14] border border-white/10 rounded-lg p-3 text-white"
                />
                </div>
                <div>
                    <label>
                        Skill Level:
                    </label>

                    <input
                    type="text"
                    placeholder="Enter skill level range"
                    value={skilllevel}
                    onChange={(e) => setSkillLevel(e.target.value)}
                    className="w-full bg-[#080b14] border border-white/10 rounded-lg p-3 text-white"
                />
                </div>
                
                <div>
                    <label>Message to Host (Optional) </label>


                    <textarea
                    placeholder='Write a message to the host team...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full bg-[#080b14] border border-white/10 rounded-lg p-3 text-white"
                    />
                </div>

                <button
                type="submit"

                >
                 Submit Request   
                </button>
            </form>

            {submitted && (
                <p className="text-green-400 mt-4">Booking request submitted successfully!</p>
            )}
        </div>
    )
}

export default BookingForm;