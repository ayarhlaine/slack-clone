import React from 'react';
import { useHistory } from 'react-router-dom';
import db from '../../db';
import './SideBarOption.scss';
const SideBarOption = ( { Icon, id, title, addChannelOption } ) => {
    const history = useHistory();
    const selectChannel = () => {
        if(id) {
            history.push(`/channel/${id}`);
        }
        else {
            history.push(`/channel/${title}`);
        }
    };
    const addChannel = () => {
        const channelName = prompt('Create a channel');
        if(channelName) {
            db.collection('channels').add({
                name: channelName,
            });
        }
    };
    return (
        <div className="SideBarOption"
        onClick={addChannelOption ? addChannel : selectChannel}
        >
            { Icon &&  <Icon className="SideBarOption__Icon"/> }
            { Icon ? 
                <h3>{title}</h3> :
                <h3 className="SideBarOption__Channel"> <span className="SideBarOption__Hash"> # </span> {title} </h3>
            }
        </div>
    )
}

export default SideBarOption
