import React, { useState } from 'react';
import SidebarIcon from './SidebarIcon';
import SidebarBody from './SidebarBody';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    

    return (
        <div className={`app ${toggled ? 'toggled' : ''}`}>
            <SidebarBody
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <SidebarIcon
                toggled={toggled}
                collapsed={collapsed}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
            />
        </div>
    )
}

export default Sidebar
