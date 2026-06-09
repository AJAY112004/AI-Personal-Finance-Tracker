import "../CSS/Header.css";
import {
  Bell,
  Moon,
  Settings,
  Search
} from "lucide-react";

function Header() {

  return (

    <header className="header">

  <div className="search-box">

    <Search size={20} />

    <input
      type="text"
      placeholder="Search..."
    />

  </div>

  <div className="header-right">

    <div className="header-icon">
      <Bell size={22} />
    </div>

    <div className="header-icon">
      <Moon size={22} />
    </div>

    <div className="header-icon">
      <Settings size={22} />
    </div>

    <img
      
      src="https://i.pravatar.cc/50"
      alt="profile"
      className="profile-image"
    />

  </div>

</header>


  );

}

export default Header;