import React from 'react'
import Navbar from './Navbar';
import OrderContent from './OrderContent';
import Sidebar from './Sidebar';

function Orders() {
  return (
    <div>
        <Navbar />
        <div className="content-container">
          <Sidebar />
          <OrderContent />
        </div>
        
    </div>
  )
}

export default Orders;