import React from "react";
import {
  FaBell,
  FaMoon,
  FaCog,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />

      <div className="navbar-actions">
        <FaBell />
        <FaMoon />
        <FaCog />

        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="profile-avatar"
        />
      </div>
    </header>
  );
};

export default Navbar;