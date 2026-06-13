import React, { useState } from "react";

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    merchant: "",
    amount: "",
    category: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      merchant: "",
      amount: "",
      category: "",
      status: "",
    });
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>

      <input
        type="text"
        name="merchant"
        placeholder="Merchant"
        value={formData.merchant}
        onChange={handleChange}
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="">Select Status</option>
        <option value="Settled">Settled</option>
        <option value="Pending">Pending</option>
        <option value="Failed">Failed</option>
      </select>

      <button type="submit">
        Save Transaction
      </button>
    </form>
  );
};

export default TransactionForm;