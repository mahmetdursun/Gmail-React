import React from "react";
import "./style.scss";

function sidebarOption({icon, text, path, color, isToggle, toggleMenu, onClick, variant,}) {
  return (
    <div className="option">
      <div className={`option__${variant}`}onClick={isToggle ? toggleMenu : onClick}>
        <div className={`option__${variant}-box`}>
          <span className={`option__${variant}-box-icon`} style={{ color }}>
            {icon}
          </span>
          {path ? (
            <a href={path} className={`option__${variant}-box-text`}>
              {text}
            </a>
          ) : (
            <p className={`option__${variant}-box-text`}>{text}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default sidebarOption;
