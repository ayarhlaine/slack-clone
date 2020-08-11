import React from 'react'
import './AppBody.scss';
import SideBar from '../SideBar/SideBar';
import Chat from '../Chat/Chat';
function AppBody() {
    return (
        <div className="AppBody">
            <SideBar />
            <Chat />
        </div>
    )
}

export default AppBody
