

function PrivacyToggle(){
    const [isPrivate, setIsPrivate] = useState(true);
    return(
        
        <div>
            <h2>
                Lobby Privacy
            </h2>
            <p>
                Control your lobby visibility
            </p>

            <div>
                <div>
                    <p>
                        {isPrivate ? 'Private Lobby' : 'Public Lobby'}
                    </p>

                    <p>
                        {isPrivate ? 'Only invited teams can access the lobby.' : 
                        'The lobby is open for other teams to find.'}
                    </p>
                </div>

                <button
                type="button"
                onClick={() => isSetPrivate(!isPrivate)}
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