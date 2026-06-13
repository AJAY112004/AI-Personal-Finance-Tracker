import React from "react";
import { FaSearch } from "react-icons/fa";

const TransactionFilters = () => {
  return (
    <div className="filter-container">
      <div className="search-box">
        <FaSearch />
        <input
          type="text"
          placeholder="Search by merchant, ID or amount..."
        />
      </div>

      <select>
        <option>Last 30 Days</option>
        <option>Last 7 Days</option>
        <option>Last 90 Days</option>
      </select>

      <select>
        <option>All Categories</option>
        <option>Revenue</option>
        <option>Travel</option>
        <option>Infrastructure</option>
      </select>

      <select>
        <option>All Types</option>
        <option>Credit</option>
        <option>Debit</option>
      </select>
    </div>
  );
};

export default TransactionFilters;