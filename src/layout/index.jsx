import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Outlet } from 'react-router-dom';
import Tools from '../components/tools';
import './style.scss';

function GmailLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className={`layout ${isCollapsed ? "collapsed" : ""}`}>
      <Navbar toggleSidebar={toggleSidebar} />

      <div className='layout__box'>
        <div className='layout__box-sidebar'>
          <Sidebar isCollapsed={isCollapsed} />
        </div>

        <div className='layout__box-outlet'>
          <Outlet />
        </div>

        <div className='layout__box-item'>
          <Tools />
        </div>
      </div>
    </div>
  );
}

export default GmailLayout;
