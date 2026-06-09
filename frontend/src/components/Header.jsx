import { useEffect, useState } from "react";
import axios from "axios";

import {
  Search,
  Bell,
  Moon,
} from "lucide-react";

import "../CSS/Header.css";

function Header() {

  const [user, setUser] = useState({
    profileImage: "",
  });

  useEffect(() => {

    const fetchHeaderData = async () => {

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/header/"
        );

        setUser(response.data);

      } catch (error) {

        console.error(
          "Header Error:",
          error
        );

      }

    };

    fetchHeaderData();

  }, []);

  return (

    <header className="header">

      {/* SEARCH */}

      <div className="search-box">

        <Search
          size={20}
          className="search-icon"
        />

        <input
          type="text"
          placeholder="Search..."
        />

      </div>

      {/* RIGHT SIDE */}

      <div className="header-right">

        <button className="header-icon">

          <Bell size={22} />

        </button>

        <button className="header-icon">

          <Moon size={22} />

        </button>

        <img
          src={
            user.profileImage ||
            "https://i.pravatar.cc/100"
          }
          alt="Profile"
          className="header-avatar"
        />

      </div>

    </header>

  );

}

export default Header;