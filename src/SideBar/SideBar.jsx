import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import './SideBar.scss';
function SideBar() {
    return (
        <div className="SideBar">
            <div className="SideBar__Header">
                <div className="SideBar__Info">
                    <h2>Slack Clone</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Ayar Hlaine
                    </h3>
                </div>
                <div className="SideBar__Message">
                    <CreateIcon />
                </div>
            </div>
        </div>
    )
}

export default SideBar
