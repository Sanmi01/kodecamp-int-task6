import React from 'react'
import { FaHeart, FaBars } from 'react-icons/fa';

const SidebarIcon = ({ collapsed, handleToggleSidebar, handleCollapsedChange,}) => {
    return (
        <div>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
        </div>
    )
}

export default SidebarIcon
