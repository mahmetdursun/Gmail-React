//uygulama isimlendirmesi yap
import React from 'react'
import calendarIcon from '../../assets/images/calendar-icon.png'; 
import { FaRegLightbulb, FaUser, FaMinus, FaPlus } from 'react-icons/fa';
import './style.scss'

function tools() {
  return (
    <div className="icons">
        <div className="icons-calendar">
          <img src={calendarIcon} alt="calendar" />
        </div>

        <div className="icons-light">
          <FaRegLightbulb />
        </div>

        <div className="icons-user">
          <FaUser />
        </div>

        <div className="icons-minus">
          <FaMinus />
        </div>

        <div className="icons-plus">
          <FaPlus />
        </div>
      </div>
  )
}

export default tools