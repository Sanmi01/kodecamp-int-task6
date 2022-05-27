import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";


const SidebarBody = ({ collapsed, toggled, handleToggleSidebar}) => {
    

  return (
      <>
    {/* <div className="h-100"> */}
      <ProSidebar
        collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Classroom
        </div>
      </SidebarHeader>
  <SidebarContent>
  <Menu>
  <MenuItem style={{
            padding: '0.5rem 0.6rem',
          }}>Dashboard</MenuItem>
    <MenuItem style={{
            padding: '0.5rem 0.6rem',
          }}>Courses</MenuItem>
    <MenuItem style={{
            padding: '0.5rem 0.6rem',
          }}>Profile</MenuItem>
  </Menu>
  </SidebarContent>
  <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            Logout
          </a>
        </div>
      </SidebarFooter>
      </ProSidebar>
    {/* </div> */}
    </>
  );
};

export default SidebarBody;
