import React, { useEffect, useState } from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import { useParams } from 'react-router-dom';
import Message from './Message/Message';
import db from '../db';
function Chat() {
    const {channelId} = useParams();
    const [channelDetail, setChannelDetail] = useState({ name: ''});
    const [channelMessages, setChannelMessages] = useState([]);
    useEffect(() => {
        db.collection('channels').doc(channelId)
        .onSnapshot(snapShot => {
            setChannelDetail(snapShot.data());
        });
        db.collection('channels').doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapShot => {
            setChannelMessages(snapShot.docs.map(doc => doc.data()));
        });
    },[channelId]);
    const { name } = channelDetail;
    return (
        <div className="Chat">
            <ChatHeader channelName={name}/>
            {/* <p>{JSON.stringify(channelMessages)}</p> */}
            <div className="MessageList">
                { channelMessages.map(({ message, user, timestamp, userImage}) => (
                    <Message 
                    message={message}
                    user={user}
                    timestamp={timestamp}
                    userImage={userImage}
                    />
                ))}
            </div>
            {/* Message List */}
            {/* Message Input */}
        </div>
    )
}

export default Chat
