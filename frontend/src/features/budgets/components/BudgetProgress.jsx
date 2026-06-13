import React from "react";

const BudgetProgress = () => {
  return (
    <div className="budget-overview">
      <div className="runway-card">
        <div className="runway-top">
          <div>
            <h3>Monthly Runway</h3>
            <small>
              Total spend vs projected budget
            </small>
          </div>

          <span>Oct 2023</span>
        </div>

        <h1>
          $12,450 <small>/ $15,000</small>
        </h1>

        <div className="runway-chart">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </div>

      <div className="budget-side-panel">
        <div className="alert-card">
          <h4>Budget Alert</h4>

          <p>
            Dining Out category has exceeded
            90% of its monthly allocation.
          </p>

          <a href="/">Review Transactions →</a>
        </div>

        <div className="insight-card">
          <h4>Velocity Insights</h4>

          <div className="insight-row">
            <span>Daily Avg Spend</span>
            <strong>$415.00</strong>
          </div>

          <div className="insight-row">
            <span>Fixed Costs</span>
            <strong>$5,200</strong>
          </div>

          <div className="insight-row">
            <span>Est. Savings</span>
            <strong>$2,550</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetProgress;