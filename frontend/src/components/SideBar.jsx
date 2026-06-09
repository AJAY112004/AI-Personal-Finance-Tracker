import { useEffect, useState } from "react";
import axios from "axios";

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

  const [company, setCompany] = useState({
    name: "Lumina",
    subtitle: "Finance",
    description: "Institutional Wealth"
  });

  useEffect(() => {

    const fetchCompany = async () => {

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/sidebar/"
        );

        setCompany(response.data);

      } catch (error) {

        console.error(
          "Sidebar Error:",
          error
        );

      }

    };

    fetchCompany();

  }, []);

  const menuItems = [
    {
      path: "/Dashboard",
      icon: <LayoutDashboard size={18} />,
      label: "Dashboard"
    },
    {
      path: "/Transactions",
      icon: <ReceiptText size={18} />,
      label: "Transactions"
    },
    {
      path: "/Budgets",
      icon: <Wallet size={18} />,
      label: "Budgets"
    },
    {
      path: "/Analytics",
      icon: <BarChart3 size={18} />,
      label: "Analytics"
    },
    {
      path: "/AIInsights",
      icon: <Sparkles size={18} />,
      label: "AI Insights"
    }
  ];

  return (

    <aside className="sidebar">

      <div>

        <div className="logo">

          <h1>
            {company.name}
          </h1>

          <h2>
            {company.subtitle}
          </h2>

          <p>
            {company.description}
          </p>

        </div>

        <nav className="menu">

          {menuItems.map((item) => (

            <Link
              key={item.path}
              to={item.path}
              className={
                location.pathname === item.path
                  ? "menu-item active"
                  : "menu-item"
              }
            >

              {item.icon}

              <span>
                {item.label}
              </span>

            </Link>

          ))}

        </nav>

      </div>

      <div className="bottom-menu">

        <Link
          to="/Profile"
          className={
            location.pathname === "/Profile"
              ? "menu-item active"
              : "menu-item"
          }
        >

          <User size={18} />

          <span>
            Profile
          </span>

        </Link>

        <Link
          to="/"
          className="menu-item"
        >

          <LogOut size={18} />

          <span>
            Logout
          </span>

        </Link>

      </div>

    </aside>

  );

}

export default SideBar;