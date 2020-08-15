import React from 'react'
import './AppBody.scss';
import SideBar from '../SideBar/SideBar';
import Chat from '../Chat/Chat';
import { Route } from 'react-router-dom';
function AppBody() {
    return (
        <div className="AppBody">
            <SideBar />
            <Route path={`/channel/:channelId`}>
                <Chat />
            </Route>
        </div>
    )
}

export default AppBody
