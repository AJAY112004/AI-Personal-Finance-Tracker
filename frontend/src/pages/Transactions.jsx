import { useEffect, useState } from "react";
import axios from "axios";
import { Download, Plus, Search, Calendar, Tag, Filter, ChevronLeft, ChevronRight, Upload, X } from "lucide-react";

import Layout from "../components/Layout";
import "../CSS/Transactions.css";

const CATEGORIES = [
  "SaaS & Software", "Travel", "Infrastructure", "Revenue",
  "Food & Drink", "Transport", "Utilities", "Payroll", "Other"
];

const STATUSES = ["Settled", "Pending", "Failed", "Processing"];

function generateTxnId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const part1 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  const part2 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `TXN-${part1}-${part2}`;
}

function getCategoryIcon(category) {
  const icons = {
    "SaaS & Software": "💳",
    "Travel": "✈️",
    "Infrastructure": "🌐",
    "Revenue": "💼",
    "Food & Drink": "🍽️",
    "Transport": "🚗",
    "Utilities": "⚡",
    "Payroll": "👥",
    "Other": "📦",
  };
  return icons[category] || "📦";
}

const ITEMS_PER_PAGE = 10;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("expense");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("Last 30 Days");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [dragOver, setDragOver] = useState(false);
  const [receiptFile, setReceiptFile] = useState(null);

  const [formData, setFormData] = useState({
    description: "",
    category: "Food & Drink",
    amount: "",
    type: "expense",
    date: new Date().toISOString().slice(0, 16),
    status: "Settled",
    transactionId: generateTxnId(),
    notes: "",
    merchant: "",
    source: "",
  });

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/transactions/");
      setTransactions(response.data);
    } catch (error) {
      console.error("Transactions Error:", error);
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const openModal = () => {
    setFormData({
      description: "",
      category: "Food & Drink",
      amount: "",
      type: "expense",
      date: new Date().toISOString().slice(0, 16),
      status: "Settled",
      transactionId: generateTxnId(),
      notes: "",
      merchant: "",
      source: "",
    });
    setType("expense");
    setReceiptFile(null);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/transactions/", {
        ...formData,
        type,
      });
      fetchTransactions();
      setShowModal(false);
    } catch (error) {
      console.error("Add Transaction Error:", error);
      setShowModal(false);
    }
  };

  const downloadReport = () => {
    const csvContent = [
      ["Description", "Category", "Date", "Amount", "Type", "Status"],
      ...transactions.map((t) => [
        t.description, t.category, t.date, t.amount, t.type, t.status,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "transactions.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setReceiptFile(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) setReceiptFile(file);
  };

  const filteredTransactions = transactions.filter((t) => {
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      t.description?.toLowerCase().includes(q) ||
      t.transactionId?.toLowerCase().includes(q) ||
      String(t.amount)?.toLowerCase().includes(q);
    const matchCategory =
      categoryFilter === "All Categories" || t.category === categoryFilter;
    const matchType =
      typeFilter === "All Types" ||
      (typeFilter === "Income" && t.type === "income") ||
      (typeFilter === "Expense" && t.type === "expense");
    return matchSearch && matchCategory && matchType;
  });

  const totalPages = Math.max(1, Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE));
  const paginated = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  if (loading) {
    return (
      <Layout>
        <div className="transactions-content">
          <h2 className="loading-text">Loading Transactions...</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="transactions-content">

        {/* HEADER */}
        <div className="transactions-header">
          <div className="header-left">
            <h1>Transactions</h1>
            <p>Review and manage your institutional financial flows.</p>
          </div>
          <div className="header-actions">
            <button onClick={downloadReport} className="export-btn">
              <Download size={16} />
              Export CSV
            </button>
            <button onClick={openModal} className="add-btn">
              <Plus size={16} />
              Add Transaction
            </button>
          </div>
        </div>

        {/* CARD */}
        <div className="transactions-card">

          {/* FILTER BAR */}
          <div className="filter-bar">
            <div className="search-input">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search by merchant, ID, or amount..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              />
            </div>
            <div className="filter-options">
              <div className="filter-select-wrap">
                <Calendar size={14} className="select-icon" />
                <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="filter-select-wrap">
                <Tag size={14} className="select-icon" />
                <select value={categoryFilter} onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }}>
                  <option>All Categories</option>
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="filter-select-wrap">
                <Filter size={14} className="select-icon" />
                <select value={typeFilter} onChange={(e) => { setTypeFilter(e.target.value); setCurrentPage(1); }}>
                  <option>All Types</option>
                  <option>Income</option>
                  <option>Expense</option>
                </select>
              </div>
            </div>
          </div>

          {/* TABLE */}
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Transaction Details</th>
                <th>Category</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length > 0 ? (
                paginated.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="date-cell">
                      <span className="date-main">{transaction.date?.split("\n")[0]}</span>
                      <span className="date-sub">{transaction.date?.split("\n")[1] || ""}</span>
                    </td>
                    <td className="details-cell">
                      <div className="details-wrap">
                        <div className="txn-icon">
                          {getCategoryIcon(transaction.category)}
                        </div>
                        <div>
                          <div className="txn-name">{transaction.description}</div>
                          {transaction.transactionId && (
                            <div className="txn-id">ID: {transaction.transactionId}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="category-pill">{transaction.category}</span>
                    </td>
                    <td>
                      <span className={`status-pill status-${transaction.status?.toLowerCase()}`}>
                        <span className="status-dot" />
                        {transaction.status}
                      </span>
                    </td>
                    <td className={`amount-cell ${transaction.type === "income" ? "amount-income" : "amount-expense"}`}>
                      {transaction.amount}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-data">No Transactions Found</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* PAGINATION */}
          {filteredTransactions.length > 0 && (
            <div className="pagination-bar">
              <span className="pagination-info">
                Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
                {Math.min(currentPage * ITEMS_PER_PAGE, filteredTransactions.length)} of{" "}
                {filteredTransactions.length} results
              </span>
              <div className="pagination-controls">
                <button
                  className="page-btn nav-btn"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={16} />
                </button>
                {getPageNumbers().map((page, idx) =>
                  page === "..." ? (
                    <span key={`dots-${idx}`} className="page-dots">…</span>
                  ) : (
                    <button
                      key={page}
                      className={`page-btn ${currentPage === page ? "active" : ""}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  className="page-btn nav-btn"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
          <div className="modal">
            <div className="modal-header">
              <div className="modal-title-wrap">
                <Plus size={20} className="modal-title-icon" />
                <h2>Add Transaction</h2>
              </div>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>

            <form className="transaction-form" onSubmit={handleSubmit}>

              {/* TYPE TOGGLE */}
              <div className="type-toggle">
                <button
                  type="button"
                  className={type === "expense" ? "active" : ""}
                  onClick={() => setType("expense")}
                >
                  Expense
                </button>
                <button
                  type="button"
                  className={type === "income" ? "active" : ""}
                  onClick={() => setType("income")}
                >
                  Income
                </button>
              </div>

              {/* AMOUNT */}
              <div className="amount-box">
                <span className="currency">$</span>
                <div className="amount-content">
                  <label>AMOUNT</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  />
                </div>
              </div>

              {/* SOURCE / MERCHANT */}
              <div className="input-group full-width">
                <label>{type === "income" ? "Source / Entity" : "Merchant"}</label>
                <input
                  type="text"
                  placeholder={
                    type === "income"
                      ? "e.g. Client Name, Employer, or Dividend Source"
                      : "e.g., Starbucks, Amazon, Apple"
                  }
                  className="form-input with-icon"
                  value={type === "income" ? formData.source : formData.merchant}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [type === "income" ? "source" : "merchant"]: e.target.value,
                    })
                  }
                />
              </div>

              {/* DATE + CATEGORY */}
              <div className="date-category-row">
                <div className="input-group">
                  <label>Date & Time</label>
                  <input
                    type="datetime-local"
                    className="form-input date-input"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label>Category</label>
                  <div className="select-wrap">
                    <select
                      className="form-select"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* STATUS + TRANSACTION ID */}
              <div className="date-category-row">
                <div className="input-group">
                  <label>Status</label>
                  <div className="select-wrap">
                    <select
                      className="form-select"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      {STATUSES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="input-group">
                  <label>Transaction ID</label>
                  <input
                    type="text"
                    className="form-input txn-id-input"
                    value={formData.transactionId}
                    readOnly
                  />
                </div>
              </div>

              {/* NOTES */}
              <div className="input-group full-width">
                <label>Notes</label>
                <textarea
                  className="form-textarea"
                  placeholder="Add optional details about this transaction..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                />
              </div>

              {/* RECEIPT UPLOAD */}
              <div className="input-group full-width">
                <label>Receipt Attachment</label>
                <div
                  className={`upload-zone ${dragOver ? "drag-over" : ""} ${receiptFile ? "has-file" : ""}`}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("receipt-input").click()}
                >
                  <input
                    id="receipt-input"
                    type="file"
                    accept=".svg,.png,.jpg,.jpeg,.pdf"
                    style={{ display: "none" }}
                    onChange={handleFileInput}
                  />
                  <Upload size={28} className="upload-icon" />
                  {receiptFile ? (
                    <p className="upload-text">
                      <strong>{receiptFile.name}</strong>
                    </p>
                  ) : (
                    <>
                      <p className="upload-text">
                        <span className="upload-link">Click to upload</span> or drag and drop
                      </p>
                      <p className="upload-hint">PNG, JPG or PDF up to 5MB</p>
                    </>
                  )}
                </div>
              </div>

              {/* ACTIONS */}
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  <Plus size={16} />
                  Add {type === "income" ? "Income" : "Expense"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Transactions;