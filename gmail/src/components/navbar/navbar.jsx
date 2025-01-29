import React from 'react';
import gmailIcon from '../../assets/images/gmail-icon.png'; 
import './navbar.scss';
import icons from '../variables/variables'; // Doğru import

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__catagory">
        <div className="nav__catagory-menu">
          {icons.menu} {/* Hata olmadan çalışacak */}
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

        <div className="nav__select-users">
          {icons.grid}
        </div>

        <div className="nav__select-user">
          {icons.user}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
