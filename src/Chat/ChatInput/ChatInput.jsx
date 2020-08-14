import React, { useState } from 'react'
import './ChatInput.scss';
import db from '../../db';
import firebase from 'firebase';
import { useStateValue } from '../../Provider';
const ChatInput = ( { channelName, channelId }) =>{
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();
    const sendMessage = (e) => {
        e.preventDefault();
        if(channelId){
            db.collection('channels').doc(channelId)
            .collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            });
        }
    };
    return (
        <div className="ChatInput">
            <form>
                <input 
                placeholder={`Message #${channelName?.toLowerCase()}`} 
                value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

export default ChatInput
