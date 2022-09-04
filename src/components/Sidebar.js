import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const location =useLocation();
  console.log(location);
// location.pathname === /dashboard

  return (
    <aside>
      <p>Seerat's Dashboard</p>

      <hr />

      <ul className="sidebar-links">
        <li>
          <NavLink to="/dashboard" className={({isActive})=> location.pathname === '/dashboard'? 'active' : '' } >
            <span className="material-icons-outlined">home</span>
            <span className="link-text">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/orders">
            <span className="material-icons-outlined">storefront</span>
            <span className="link-text">Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/products">
            <span className="material-icons-outlined">inventory</span>
            <span className="link-text"> Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/profile">
            <span class="material-icons-outlined">account_circle</span>
            <span className="link-text"> User Profile</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
