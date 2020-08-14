import React, { useEffect, useState } from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import { useParams } from 'react-router-dom';
import Message from './Message/Message';
import db from '../db';
import ChatInput from './ChatInput/ChatInput';
function Chat() {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState({});
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
    return (
        <div className="Chat">
            <ChatHeader channelName={channelDetail?.name}/>
            <div className="MessageList">
                { channelMessages.map(({ message, user, timestamp, userImage}, index) => (
                    <Message 
                    key={index}
                    message={message}
                    user={user}
                    timestamp={timestamp}
                    userImage={userImage}
                    />
                ))}
            </div>
            <ChatInput channelName={channelDetail?.name} channelId={channelId}/>
        </div>
    )
}

export default Chat
