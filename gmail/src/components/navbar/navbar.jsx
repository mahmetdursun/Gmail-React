import React, { useState } from 'react';
import gmailIcon from '../../assets/images/gmail-icon.png'; 
import businessIcon from '../../assets/images/business-icon.png'
import calendarIcon from '../../assets/images/calendar-icon.png'
import driveIcon from '../../assets/images/drive-icon.png'
import gIcon from '../../assets/images/g-icon.png'
import photosIcon from '../../assets/images/google-photos-icon.png'
import mapIcon from '../../assets/images/map-icon.png'
import meetIcon from '../../assets/images/meet-icon.png'
import newsIcon from '../../assets/images/news-icon.png'
import translateIcon from '../../assets/images/translate-icon.png'
import voiceIcon from '../../assets/images/voice-icon.png'
import youtubeIcon from '../../assets/images/youtube-icon.png'
import './navbar.scss';
import icons from '../variables/variables'; 

const Navbar = () => {

  const [appButton, setAppButton] = useState(false);

  const appItems = [
    { image: gIcon, text: 'Search'},
    { image: mapIcon, text: 'Maps'},
    { image: youtubeIcon, text: 'Youtube'},
    { image: newsIcon, text: 'News'},
    { image: gmailIcon, text: 'Gmail'},
    { image: meetIcon, text: 'Meeting'},
    { image: driveIcon, text: 'Drive'},
    { image: calendarIcon, text: 'Calendar'},
    { image: photosIcon, text: 'Photos'},
    { image: businessIcon, text: 'Business'},
    { image: translateIcon, text: 'Translate'},
    { image: voiceIcon, text: 'Voice'},
  ];

  return (
    <div className="nav">
      <div className="nav__catagory">
        <div className="nav__catagory-menu">
         <span className='nav__catagory-menu-icon'>{icons.menu}</span> 
        </div>

        <div className="nav__catagory-icon">
          <img src={gmailIcon} alt="Gmail Icon" />
        </div>

        <div className="nav__catagory-text">
          <p className="nav__catagory-text-mail">Gmail</p>
        </div>
      </div>

      <div className="nav__search">
        <div className="nav__search-icon">
          {icons.search}
        </div>

        <div className="nav__search-input">
          <input
            className="nav__search-input-form"
            type="email"
            placeholder="Search Mail"
          />
        </div>

        <div className="nav__search-settings">
          {icons.tune}
        </div>
      </div>

      <div className="nav__select">
        <div className="nav__select-question">
          {icons.help}
        </div>

        <div className="nav__select-gear">
          {icons.settings}
        </div>

        <div className="nav__select-grid" onClick={()=> setAppButton(!appButton)}>
          {icons.grid}
        </div>

        <div className="nav__select-user">
          {icons.user}
        </div>
      </div>

      {appButton && (
        <div className="nav__apps">
          {appItems.map((item, index) => (
            <div key={index} className="nav__apps-item">
              <img src={item.image} alt={item.text} className="nav__apps-item-icon" />
              <p className="nav__apps-item-text">{item.text}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Navbar;
