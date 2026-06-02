import { Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  ReceiptText,
  Wallet,
  BarChart3,
  Sparkles,
  User,
  LogOut
} from "lucide-react";

import "../CSS/SideBar.css";

function SideBar() {

  const location = useLocation();

  return (

    <aside className="sidebar">

      <div>

        {/* Logo */}

        <div className="logo">

          <h1>Lumina</h1>

          <h2>Finance</h2>

          <p>Institutional Wealth</p>

        </div>

        {/* Navigation */}

        <nav className="menu">

          <Link
            to="/dashboard"
            className={`menu-item ${
              location.pathname === "/dashboard"
                ? "active"
                : ""
            }`}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            to="/transactions"
            className={`menu-item ${
              location.pathname === "/transactions"
                ? "active"
                : ""
            }`}
          >
            <ReceiptText size={18} />
            Transactions
          </Link>

          <Link
            to="/budgets"
            className={`menu-item ${
              location.pathname === "/budgets"
                ? "active"
                : ""
            }`}
          >
            <Wallet size={18} />
            Budgets
          </Link>

          <Link
            to="/analytics"
            className={`menu-item ${
              location.pathname === "/analytics"
                ? "active"
                : ""
            }`}
          >
            <BarChart3 size={18} />
            Analytics
          </Link>

          <Link
            to="/ai-insights"
            className={`menu-item ${
              location.pathname === "/ai-insights"
                ? "active"
                : ""
            }`}
          >
            <Sparkles size={18} />
            AI Insights
          </Link>

        </nav>

      </div>

      {/* Bottom Menu */}

      <div className="bottom-menu">

        <Link
          to="/profile"
          className={`menu-item ${
            location.pathname === "/profile"
              ? "active"
              : ""
          }`}
        >
          <User size={18} />
          Profile
        </Link>

        <Link
          to="/"
          className="menu-item"
        >
          <LogOut size={18} />
          Logout
        </Link>

      </div>

    </aside>

  );

}

export default SideBar;