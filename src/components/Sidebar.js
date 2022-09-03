import React from "react";

function Sidebar() {
  return (
    <aside>
      <p>Seerat's Dashboard</p>

      <hr />

      <ul className="sidebar-links">
        <li className="active" >
          <span className="material-icons-outlined">home</span>
          <span className="link-text" >Dashboard</span>
        </li>
        <li>
          <span className="material-icons-outlined">storefront</span>
          <span className="link-text" >Orders</span>
        </li>
        <li>
          <span className="material-icons-outlined">inventory</span>
          <span className="link-text" > Products</span>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
