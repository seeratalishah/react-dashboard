import React from 'react'
import DashboardContent from './DashboardContent';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div>
        <Navbar />
        <div className="content-container">
          <Sidebar />
          <DashboardContent />
        </div>
        
    </div>
  )
}

export default Dashboard