import React from "react";

const BudgetCard = ({ budget }) => {
  return (
    <div className={`budget-card ${budget.status}`}>
      <div className="budget-card-header">
        <span className="badge">
          {budget.status.toUpperCase()}
        </span>
      </div>

      <h3>{budget.title}</h3>

      <div className="budget-amount">
        ${budget.spent.toLocaleString()}
        <small>
          / ${budget.limit.toLocaleString()}
        </small>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${budget.progress}%`,
          }}
        ></div>
      </div>

      <div className="budget-footer">
        <span>{budget.progress}% utilized</span>
        <span>{budget.daysLeft} days left</span>
      </div>
    </div>
  );
};

export default BudgetCard;