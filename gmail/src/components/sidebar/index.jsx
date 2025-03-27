import React, { useState } from "react";
import "./style.scss";
import Labels from "../label";
import icons from "../variables";
import SidebarOption from '../icon-text-item';
import Compose from "../mail-compose";

function Sidebar({ isCollapsed }) {
  const [moreBtn, setMoreBtn] = useState(false);
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  const toggleCompose = () => setIsComposeOpen(!isComposeOpen);
  const toggleMenu = () => setMoreBtn(!moreBtn);

  const navigationItems = [
    { icon: icons.inbox, text: "Inbox", path: "/gmail/inbox", isMoreItem: false },
    { icon: icons.star, text: "Starred", path: "/gmail/starred", isMoreItem: false },
    { icon: icons.snooze, text: "Snoozed", path: "/gmail/snoozed", isMoreItem: false },
    { icon: icons.sent, text: "Sent", path: "/gmail/sent", isMoreItem: false },
    { icon: icons.drafts, text: "Drafts", path: "/gmail/drafts", isMoreItem: false },
    { 
      icon: moreBtn ? icons.less : icons.more, 
      text: moreBtn ? "Less" : "More", 
      path: "#", 
      isToggle: true 
    },
    { icon: icons.star, text: "Important", path: "/gmail/important", isMoreItem: true },
    { icon: icons.snooze, text: "Timed", path: "/gmail/timed", isMoreItem: true },
    { icon: icons.trash, text: "Bin", path: "/gmail/bin", isMoreItem: true }
  ];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar__create">
        <div className="sidebar__create-compose" onClick={toggleCompose}>
          <span className="sidebar__create-compose-pen">{icons.compose}</span>
          {!isCollapsed && <p className="sidebar__create-compose-text">Compose</p>}
        </div>
      </div>

      {isComposeOpen && <Compose toggleCompose={toggleCompose} />}

      {navigationItems.map((item, index) => {
        if (!moreBtn && item.isMoreItem) return null;

        return (
          <SidebarOption
            key={index}
            icon={item.icon}
            text={isCollapsed ? "" : item.text}
            path={item.path}
            isToggle={item.isToggle}
            toggleMenu={toggleMenu}
            variant="sidemenu"
          />
        );
      })}

      <Labels isCollapsed={isCollapsed} />
    </div>
  );
}

export default Sidebar;
