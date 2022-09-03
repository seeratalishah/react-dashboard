import React from 'react'
import Sidebar from './Sidebar'

function DashboardContent() {
  return (
    <div className='dashboard-content' >
        <h1>Dashboard Content</h1>
        <div className="cards-container">
            <div className="card">
                <div className="card-header">
                  <span className='square'></span>
                  <h2>Overview</h2>
                </div>
                <div className="card-body">
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor 
                     sit amet consectetur adipisicing elit. 
                     Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
                     Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
                  </p>
                </div>
                <div className="card-footer">
                   <span className='pill' >20%</span>
                   <span className='pill' >40%</span>
                   <span className='pill' >80%</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardContent