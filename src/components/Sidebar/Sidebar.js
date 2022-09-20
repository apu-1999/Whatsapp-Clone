import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src='https://i.pinimg.com/550x/1b/30/03/1b30035e27d189ac55a495d48b888351.jpg'/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
              <SearchOutlined/>
              <input placeholder="Search or start new chat" type="text" /> 
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>       
      </div>
    </div>
  );
};

export default Sidebar;
