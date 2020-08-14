import React from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import { useParams } from 'react-router-dom';
function Chat() {
    const {channelId} = useParams();
    return (
        <div className="Chat">
            <ChatHeader />
            <p>you are in {channelId}</p>
            {/* Message List */}
            {/* Message Input */}
        </div>
    )
}

export default Chat
