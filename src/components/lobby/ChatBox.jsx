import {useState} from 'react';

function ChatBox(){

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    function handleSend(e){
        e.preventDefault();

        if (message.trim() === ''){
            return;
        }

        setMessages([...messages, message]);
        setMessage('');
    }
    return(
        
        <div className="bg-[#111522] border border-white/10 rounded-xl p-6 mt-6">
            <h2 className="text-xl font-bold text-white">
                Match Chat
            </h2 >

            <p className="text-slate-400 text-sm mt-1">
                Communicate with the opposing team.
            </p>

             <div className="bg-[#080b14] rounded-xl p-4 mt-5 min-h-40 flex flex-col gap-3">

                    {messages.length === 0 ? (
                        <p className="text-slate-500 text-sm">
                            No messages yet. Start the conversation!
                        </p>
                    ) : (
                        messages.map((msg, index) => (
                            <div
                                key={index}
                                className="max-w-[85%] bg-[#211438] border border-purple-500/20 rounded-xl px-4 py-3"
                            >
                                <p className="text-purple-400 text-xs font-semibold mb-2">
                                    Team META
                                </p>

                                <p className="text-slate-200 text-sm leading-relaxed">
                                    {msg}
                                </p>
                            </div>
                        ))
                    )}

                </div>

            <form
                className="flex gap-3 mt-4"
                onSubmit={handleSend}
            >
                <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-[#080b14] border border-white/10 rounded-lg p-3 text-white"
                />

                
                <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-semibold transition"
                >
                Send
                </button>
                
            </form>
        </div>
        
        
        
    )
}

export default ChatBox;