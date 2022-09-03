import React from "react";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <p>Seerat's Dashboard</p>

      <hr />

      <ul className="sidebar-links">
        <li >
          <Link to='/' className="active" >
           <span className="material-icons-outlined">home</span>
           <span className="link-text" >Dashboard</span>
          </Link>
          
        </li>
        <li>
          <Link to='/orders' >
           <span className="material-icons-outlined">storefront</span>
           <span className="link-text" >Orders</span>
          </Link>
          
        </li>
        <li>
          <Link to='/products' >
           <span className="material-icons-outlined">inventory</span>
           <span className="link-text" > Products</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
