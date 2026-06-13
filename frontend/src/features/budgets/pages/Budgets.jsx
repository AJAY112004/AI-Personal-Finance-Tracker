import React from "react";
import BudgetCard from "../components/BudgetCard";
import BudgetProgress from "../components/BudgetProgress";
import "./Budgets.css";

const Budgets = () => {
  const budgets = [
    {
      title: "Housing & Rent",
      spent: 3200,
      limit: 3200,
      progress: 100,
      daysLeft: 2,
      status: "fixed",
    },
    {
      title: "Dining & Groceries",
      spent: 1350,
      limit: 1500,
      progress: 90,
      daysLeft: 8,
      status: "alert",
    },
    {
      title: "Entertainment",
      spent: 420,
      limit: 800,
      progress: 52,
      daysLeft: 14,
      status: "flexible",
    },
  ];

  return (
    <div className="budgets-page">
      <div className="budget-header">
        <div>
          <h1>Budget Intelligence</h1>
          <p>
            Monitor your spending velocity and category allocations.
          </p>
        </div>

        <button className="new-budget-btn">
          + New Budget
        </button>
      </div>

      <BudgetProgress />

      <div className="allocation-header">
        <h2>Active Allocations</h2>
        <span>View All →</span>
      </div>

      <div className="budget-grid">
        {budgets.map((budget, index) => (
          <BudgetCard key={index} budget={budget} />
        ))}
      </div>
    </div>
  );
};

export default Budgets;