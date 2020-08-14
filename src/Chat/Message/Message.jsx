import React from 'react'
import './Message.scss';
const Message = ( { message, timestamp, user, userImage }) =>{
    const time = timestamp ? new Date(timestamp.toDate()).toUTCString() : new Date().toUTCString()
    return (
        <div className="Message">
            <img className="Message__UserImage" src={userImage} alt={user}/>
            <div className="Message__Info">
                <h4>
                    {user} 
                    <span className="Message__Timestamp">
                    {time}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
