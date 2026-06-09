import { useEffect, useState } from "react";
import axios from "axios";

import {
  Link,
  useLocation
} from "react-router-dom";

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
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard"
    },
    {
      path: "/transactions",
      icon: <ReceiptText size={20} />,
      label: "Transactions"
    },
    {
      path: "/budgets",
      icon: <Wallet size={20} />,
      label: "Budgets"
    },
    {
      path: "/analytics",
      icon: <BarChart3 size={20} />,
      label: "Analytics"
    },
    {
      path: "/aiinsights",
      icon: <Sparkles size={20} />,
      label: "AI Insights"
    }
  ];

  return (

    <aside className="sidebar">

      {/* TOP SECTION */}

      <div>

        <div className="logo">

          <h1>
            {company?.name || "Lumina"}
          </h1>

          <h2>
            {company?.subtitle || "Finance"}
          </h2>

          <p>
            {company?.description ||
              "Institutional Wealth"}
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

      {/* BOTTOM SECTION */}

      <div className="bottom-menu">

        <Link
          to="/profile"
          className={
            location.pathname === "/profile"
              ? "menu-item active"
              : "menu-item"
          }
        >

          <User size={20} />

          <span>
            Profile
          </span>

        </Link>

        <Link
          to="/"
          className="menu-item"
        >

          <LogOut size={20} />

          <span>
            Logout
          </span>

        </Link>

      </div>

    </aside>

  );

}

export default SideBar;