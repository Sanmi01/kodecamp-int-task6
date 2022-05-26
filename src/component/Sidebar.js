import React from "react";
import SidebarMenu, { SidebarMenuNav } from "react-bootstrap-sidebar-menu";

const Sidebar = () => {
  return (
    <div>
      <SidebarMenu>
        <SidebarMenu.Header>
          <SidebarMenu.Brand>ABC</SidebarMenu.Brand>
          <SidebarMenu.Toggle />
        </SidebarMenu.Header>
        <SidebarMenu.Body>
        <SidebarMenu.Nav>
        <SidebarMenu.Nav.Link>
        <SidebarMenu.Nav.Icon>
          Ic
        </SidebarMenu.Nav.Icon>
        <SidebarMenu.Nav.Title>
          TITLE
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Nav.Link> 
        </SidebarMenu.Nav>
        </SidebarMenu.Body>
      </SidebarMenu>
    </div>
  );
};

export default Sidebar;
