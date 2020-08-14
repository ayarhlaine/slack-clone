import React from 'react'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import './ChatHeader.scss';
const ChatHeader = ( { channelName }) => {
    return (
        <div className="ChatHeader">
            <div className="ChatHeader__Left">
                <h4 className="ChatHeader__ChannelName">
                    <strong> # {channelName}  </strong>
                    <StarBorderOutlinedIcon />
                </h4>
            </div>
            <div className="ChatHeader__Right">
                <p className="ChatHeader__Detail">
                    <InfoOutlinedIcon />
                    Details
                </p>
            </div>
        </div>
    )
}

export default ChatHeader
