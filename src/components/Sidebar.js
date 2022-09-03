import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <p>Seerat's Dashboard</p>

      <hr />

      <ul className="sidebar-links">
        <li >
          <NavLink to='/' className="active" >
           <span className="material-icons-outlined">home</span>
           <span className="link-text" >Dashboard</span>
          </NavLink>
          
        </li>
        <li>
          <NavLink to='/orders' >
           <span className="material-icons-outlined">storefront</span>
           <span className="link-text" >Orders</span>
          </NavLink>
          
        </li>
        <li>
          <NavLink to='/products' >
           <span className="material-icons-outlined">inventory</span>
           <span className="link-text" > Products</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
