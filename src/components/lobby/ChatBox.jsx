import {useState} from 'react';

function ChatBox(){

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    return(
        
        <div>
            <h2>
                Match Chat
            </h2>

            <p>
                Communicate with the opposing team.
            </p>
        </div>
        
    )
}

export default ChatBox;