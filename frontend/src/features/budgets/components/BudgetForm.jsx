import React, { useState } from "react";

const BudgetForm = () => {
  const [budget, setBudget] = useState({
    category: "",
    amount: "",
    month: "",
  });

  const handleChange = (e) => {
    setBudget({
      ...budget,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(budget);

    setBudget({
      category: "",
      amount: "",
      month: "",
    });
  };

  return (
    <form
      className="budget-form"
      onSubmit={handleSubmit}
    >
      <h3>Create Budget</h3>

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={budget.category}
        onChange={handleChange}
      />

      <input
        type="number"
        name="amount"
        placeholder="Budget Amount"
        value={budget.amount}
        onChange={handleChange}
      />

      <input
        type="month"
        name="month"
        value={budget.month}
        onChange={handleChange}
      />

      <button type="submit">
        Save Budget
      </button>
    </form>
  );
};

export default BudgetForm;