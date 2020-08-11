import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import './Header.scss';
function Header() {
    const onInputChange = () => {

    }
    return (
        <div className="Header">
            <div className="Header__Left">
                <AccessTimeIcon />
            </div>
            <div className="Header__Search">
                <SearchIcon />
                <input type="text" value="Search Ayar Hlaine" onChange={onInputChange}/>
            </div>
            <div className="Header__Right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
