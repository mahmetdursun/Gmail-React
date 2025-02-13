import React, { useState } from 'react';
import './sidebar.scss';
import Labels from '../label/Labels';
import icons from '../variables/variables';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [moreBtn, setMoreBtn] = useState(false);

  const toggleMenu = () => {
    setMoreBtn(!moreBtn);
  };

  // Navigation Items
  const navigationItems = [
    { icon: icons.inbox, text: 'Inbox', path: '/gmail/inbox', isMoreItem: false },
    { icon: icons.star, text: 'Starred', path: '/gmail/starred', isMoreItem: false },
    { icon: icons.snooze, text: 'Snoozed', path: '/gmail/snoozed', isMoreItem: false },
    { icon: icons.sent, text: 'Sent', path: '/gmail/sent', isMoreItem: false },
    { icon: icons.drafts, text: 'Drafts', path: '/gmail/drafts', isMoreItem: false },
    { icon: moreBtn ? icons.less : icons.more, text: moreBtn ? 'Less' : 'More', path: '#', isToggle: true },
    { icon: icons.star, text: 'Important', path: '/gmail/important', isMoreItem: true },
    { icon: icons.snooze, text: 'Timed', path: '/gmail/timed', isMoreItem: true },
    { icon: icons.trash, text: 'Bin', path: '/gmail/bin', isMoreItem: true }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__create">
        <div className="sidebar__create-compose">
          <span className='sidebar__create-compose-pen'>{icons.compose}</span>
          <a href="/compose" className="sidebar__create-compose-text">Compose</a>
        </div>
      </div>

      {navigationItems.map((item, index) => {
        // Eğer moreBtn false ve item bir moreItem ise, o öğeyi gösterme
        if (!moreBtn && item.isMoreItem) return null;

        return (
          <div className="sidebar__headline" key={index}>
            <div 
              className="sidebar__headline-box" 
              onClick={item.isToggle ? toggleMenu : undefined}
            >
              <span className='sidebar__headline-box-icon'>{item.icon}</span>
              {item.isToggle ? (
                <p className="sidebar__headline-box-text">{item.text}</p>
              ) : (
                <a href={item.path} className="sidebar__headline-box-text">
                  {item.text}
                </a>
              )}
            </div>
          </div>
        );
      })}

      <Labels />
    </div>
  );
}

export default Sidebar;







