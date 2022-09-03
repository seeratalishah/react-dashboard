import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div>
        <Navbar />
        <Sidebar />
    </div>
  )
}

export default Dashboard