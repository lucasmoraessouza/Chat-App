import React from "react";
import * as C from "./styles";
import SidebarHeader from "./../SidebarHeader";
import SideBarChats from "./../SidebarChats";

function Sidebar({ setUserChat, userChat }) {
  return (
    <C.Container>
      <SidebarHeader setUserChat={setUserChat} />
      <SideBarChats setUserChat={setUserChat} userChat={userChat} />
    </C.Container>
  );
}

export default Sidebar;
