import React, { useState, useEffect } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import db from '../db';
import './SideBar.scss';
import SideBarOption from './SideBarOption/SideBarOption';
import { useStateValue } from '../Provider';
const SideBar = () => {
    const [{user}] = useStateValue();
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        db.collection('channels').onSnapshot(snapShot => {
            setChannels(snapShot.docs.map((doc) =>  ( { id: doc.id, name: doc.data().name})))
        });
    },[]);
    return (
        <div className="SideBar">
            <div className="SideBar__Header">
                <div className="SideBar__Info">
                    <h2>Slack Clone</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <div className="SideBar__Message">
                    <CreateIcon />
                </div>
            </div>
            <SideBarOption Icon={MessageRoundedIcon} title={'Threads'}/>
            <SideBarOption Icon={InboxIcon} title={'Mentions & reactions'}/>
            <SideBarOption Icon={DraftsIcon} title={'Drafts'}/>
            <SideBarOption Icon={BookmarkBorderIcon} title={'Saved items'}/>
            <SideBarOption Icon={PeopleAltIcon} title={'People & user groups'}/>
            <SideBarOption Icon={AppsIcon} title={'Apps'}/>
            <SideBarOption Icon={FileCopyIcon} title={'File browser'}/>
            <SideBarOption Icon={ArrowUpwardIcon} title={'Show less'}/>
            <hr/>
            <SideBarOption Icon={ArrowDropDownIcon} title={'Channels'}/>
            <hr/>
            <SideBarOption Icon={AddIcon} title={'Add Channel'} addChannelOption={true}/>
            {channels.map((channel) => (
                <SideBarOption key={channel.id} id={channel.id} title={channel.name}/>
            ))}
        </div>
    )
}

export default SideBar
