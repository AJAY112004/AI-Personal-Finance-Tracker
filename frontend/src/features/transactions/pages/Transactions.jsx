import React from "react";
import TransactionFilters from "../components/TransactionFilters";
import TransactionTable from "../components/TransactionTable";
import "./Transactions.css";

const Transactions = () => {
  return (
    <div className="transactions-page">
      <div className="page-header">
        <div>
          <h1>Transactions</h1>
          <p>Review and manage your institutional financial flows.</p>
        </div>

        <div className="header-actions">
          <button className="export-btn">
            Export CSV
          </button>

          <button className="add-btn">
            + Add Transaction
          </button>
        </div>
      </div>

      <TransactionFilters />
      <TransactionTable />
    </div>
  );
};

export default Transactions;