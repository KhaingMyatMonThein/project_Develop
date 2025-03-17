import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/admin/DashboardPage">Dashboard</Link></li>
        <li><Link to="/admin/UserPage">User Management</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
