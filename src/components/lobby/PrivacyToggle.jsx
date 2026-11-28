import {useState} from 'react';

function PrivacyToggle(){
    const [isPrivate, setIsPrivate] = useState(true);
    return(
        
        <div className="bg-[#111522] border border-white/10 rounded-xl p-6 mt-6">
            <h2 className="text-xl font-bold text-white">
                Lobby Privacy
            </h2>
            <p className="text-slate-400 text-sm mt-2">
                Control your lobby visibility
            </p>

            <div className="flex items-center justify-between mt-5">
                <div>
                    <p className="text-white font-semibold">
                    {isPrivate ? 'Private Lobby' : 'Public Lobby'}
                </p>

                <p className="text-slate-400 text-sm mt-1">
                    {isPrivate
                        ? 'Only invited teams can access the lobby.'
                        : 'The lobby is open for other teams to find.'}
                </p>
                </div>

                <button
                type="button"
                onClick={() => setIsPrivate(!isPrivate)}
                className={`w-14 h-7 rounded-full transition cursor-pointer ${
                        isPrivate ? 'bg-purple-600' : 'bg-slate-600'
                    }`}
                >

                    <span
                        className={`block w-5 h-5 bg-white rounded-full transition-transform ${
                            isPrivate ? 'translate-x-8' : 'translate-x-1'
                        }`}
                    />

                </button>
            </div>
        </div>

    )
}

export default PrivacyToggle;