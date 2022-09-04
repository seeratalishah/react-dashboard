import React from 'react'
import DashboardContent from './DashboardContent';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {Outlet} from 'react-router-dom';

function Dashboard({setIsLoggedIn}) {

  return (
    <div className='dashboard' >
        <Navbar setIsLoggedIn={setIsLoggedIn}  />
        <div className="content-container">
          <Sidebar />
          <Outlet />
          {/* <DashboardContent /> */}
        </div>
        
    </div>
  )
}

export default Dashboard