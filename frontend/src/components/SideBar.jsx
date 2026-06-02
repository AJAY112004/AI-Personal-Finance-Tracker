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

  return (

    <aside className="sidebar">

      <div>

        <div className="logo">

          <h1>Lumina</h1>
          <h2>Finance</h2>

          <p>Institutional Wealth</p>

        </div>

        <nav className="menu">

          <button className="menu-item active">
            <LayoutDashboard size={18} />
            Dashboard
          </button>

          <button className="menu-item">
            <ReceiptText size={18} />
            Transactions
          </button>

          <button className="menu-item">
            <Wallet size={18} />
            Budgets
          </button>

          <button className="menu-item">
            <BarChart3 size={18} />
            Analytics
          </button>

          <button className="menu-item">
            <Sparkles size={18} />
            AI Insights
          </button>

        </nav>

      </div>

      <div className="bottom-menu">

        <button className="menu-item">
          <User size={18} />
          Profile
        </button>

        <button className="menu-item">
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>

  );

}

export default SideBar;