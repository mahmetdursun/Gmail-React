import React from "react";
import calendarIcon from '../../assets/images/calendar-icon.png'; 
import { FaRegLightbulb, FaUser, FaMinus, FaPlus } from 'react-icons/fa';
function item() {
  return (
    <>
      <div className="gmail-project__coverage-icons">
        <div className="gmail-project__coverage-icons-calendar">
          <img src={calendarIcon} alt="calendar" />
        </div>

        <div className="gmail-project__coverage-icons-light">
          <FaRegLightbulb />
        </div>

        <div className="gmail-project__coverage-icons-user">
          <FaUser />
        </div>

        <div className="gmail-project__coverage-icons-minus">
          <FaMinus />
        </div>

        <div className="gmail-project__coverage-icons-plus">
          <FaPlus />
        </div>
      </div>
    </>
  );
}

export default item;
