import React from "react";
import {
  FaHome,
  FaExchangeAlt,
  FaWallet,
  FaChartLine,
  FaRobot,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Lumina Finance</h2>
        <span>Institutional Wealth</span>
      </div>

      <nav>
        <NavLink to="/dashboard">
          <FaHome /> Dashboard
        </NavLink>

        <NavLink to="/transactions">
          <FaExchangeAlt /> Transactions
        </NavLink>

        <NavLink to="/budgets">
          <FaWallet /> Budgets
        </NavLink>

        <NavLink to="/analytics">
          <FaChartLine /> Analytics
        </NavLink>

        <NavLink to="/insights">
          <FaRobot /> AI Insights
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/profile">
          <FaUser /> Profile
        </NavLink>

        <button>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;