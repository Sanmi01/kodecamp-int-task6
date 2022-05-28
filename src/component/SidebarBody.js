import React from "react";
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';


const SidebarBody = ({ collapsed, toggled, handleToggleSidebar}) => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
      <>
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
          }}><Link to="/dashboard">Dashboard</Link></MenuItem>
    <MenuItem style={{
            padding: '0.5rem 0.6rem',
          }}><Link to="/coursePages">Courses</Link></MenuItem>
    <MenuItem style={{
            padding: '0.5rem 0.6rem',
          }}><Link to="/profile">Profile</Link></MenuItem>
  </Menu>
  </SidebarContent>
  <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <p
            className="sidebar-btn logout-button"
            onClick={handleLogout}
          >
            Logout
          </p>
        </div>
      </SidebarFooter>
      </ProSidebar>
    {/* </div> */}
    </>
  );
};

export default SidebarBody;
