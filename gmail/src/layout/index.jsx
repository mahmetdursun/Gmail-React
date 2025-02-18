import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import Tools from '../components/tools/tools';
import './style.scss';

function GmailLayout() {
  const location = useLocation();  // Mevcut URL'yi almak için
  console.log("Current Route:", location.pathname);  // Log ile kontrol et

  return (
    <div className='layout'>
      <Navbar />

      <div className='layout__box'>
        <div className='layout__box-sidebar'>
          <Sidebar />
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
