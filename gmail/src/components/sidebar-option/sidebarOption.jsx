import React from 'react'
import "./sidebarOption.scss";

function sidebarOption({ icon, text, path, color, isToggle, toggleMenu }) {
  return (
    <div className="soption">
      <div 
        className="soption__box"
        onClick={isToggle ? toggleMenu : undefined}
      >
        <span className="soption__box-icon" style={{ color }}>
          {icon}
        </span>
        {path ? (
          <a href={path} className="soption__box-text">
            {text}
          </a>
        ) : (
          <p className="soption__box-text">{text}</p>
        )}
      </div>
    </div>
  )
}

export default sidebarOption