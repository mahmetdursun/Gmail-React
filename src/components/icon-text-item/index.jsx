import React from "react";
import "./style.scss";
import { useLocation } from "react-router-dom";

function sidebarOption({icon, text, path, color, isToggle, toggleMenu, onClick, variant,}) {
  // inbox vs maviliği için yaptık
  const location = useLocation();

  // Aktif sınıfı belirle
  const isActive = path && location.pathname.startsWith(path);
  const containerClass = `option__${variant} ${isActive ? "active" : ""}`;
 
   return (
     <div className="option">
       <div
         className={containerClass}
         onClick={isToggle ? toggleMenu : onClick}
       >
         <div className={`option__${variant}-box`}>
           <span
             className={`option__${variant}-box-icon`}
             style={{ color }}
           >
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
