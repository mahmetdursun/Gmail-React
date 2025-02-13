import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import Item from '../components/item/item';
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
          <div>sadasşld</div>
        </div>

        <div className='layout__box-item'>
          <Item />
        </div>
      </div>
    </div>
  );
}

export default GmailLayout;
