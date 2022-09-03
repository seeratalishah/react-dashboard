import React from 'react'
import DashboardContent from './DashboardContent';
import Navbar from './Navbar';
import ProductsContent from './ProductsContent';
import Sidebar from './Sidebar';

function Products() {
  return (
    <div>
        <Navbar />
        <div className="content-container">
          <Sidebar />
          <ProductsContent />
        </div>
        
    </div>
  )
}

export default Products