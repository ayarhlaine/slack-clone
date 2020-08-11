import React from 'react';
import './SideBarOption.scss';
const SideBarOption = ( { Icon, title } ) => {
    return (
        <div className="SideBarOption">
            { Icon &&  <Icon className="SideBarOption__Icon"/> }
            { Icon ? 
                <h3>{title}</h3> :
                <h3 className="SideBarOption__Channel"> <span className="SideBarOption__Hash"> # </span> {title} </h3>
            }
        </div>
    )
}

export default SideBarOption
