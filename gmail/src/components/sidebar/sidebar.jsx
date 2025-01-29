import React from 'react';
import './sidebar.scss';
import Labels from '../label/Labels';
import icons from '../variables/variables'; 

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__create">
        <div className="sidebar__create-compose">
          {icons.compose} {/* 🟢 FaPen ikonunu çağırdık */}
          <p className="sidebar__create-compose-text">Compose</p>
        </div>
      </div>

      <div className="sidebar__headline">
        <div className="sidebar__headline-inbox">
          {icons.inbox} {/* 🟢 MdInbox */}
          <p className="sidebar__headline-inbox-text">Inbox</p>
        </div>
      </div>

      <div className="sidebar__headline">
        <div className="sidebar__headline-star">
          {icons.star} {/* 🟢 AiOutlineStar */}
          <p className="sidebar__headline-star-text">Starred</p>
        </div>
      </div>

      <div className="sidebar__headline">
        <div className="sidebar__headline-clock">
          {icons.snooze} {/* 🟢 AiOutlineClockCircle */}
          <p className="sidebar__headline-clock-text">Snoozed</p>
        </div>
      </div>

      <div className="sidebar__headline">
        <div className="sidebar__headline-sent">
          {icons.sent} {/* 🟢 AiOutlineCaretRight */}
          <p className="sidebar__headline-sent-text">Sent</p>
        </div>
      </div>

      <div className="sidebar__headline">
        <div className="sidebar__headline-file">
          {icons.drafts} {/* 🟢 AiOutlineFile */}
          <p className="sidebar__headline-file-text">Drafts</p>
        </div>
      </div>

      <div className="sidebar__headline">
        <div className="sidebar__headline-more" id="more-btn">
          {icons.more} {/* 🟢 AiOutlineDown */}
          <p className="sidebar__headline-more-text">More</p>
        </div>
      </div>

      <div className="sidebar__menu" id="menu">
        <div className="sidebar__menu-item">
          {icons.star}
          <p className="sidebar__menu-item-text">Important</p>
        </div>

        <div className="sidebar__menu-item">
          {icons.snooze}
          <p className="sidebar__menu-item-text">Timed</p>
        </div>

        <div className="sidebar__menu-item">
          {icons.trash} {/* 🟢 AiFillDelete */}
          <p className="sidebar__menu-item-text">Bin</p>
        </div>
      </div>

      {/* Labels bileşeni */}
      <Labels />
    </div>
  );
}

export default Sidebar;
