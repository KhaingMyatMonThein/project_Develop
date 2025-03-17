import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link to="/admin/UserPage">User Management</Link></li>
      </ul>
    </div>
  );
};

export default DashboardPage;
