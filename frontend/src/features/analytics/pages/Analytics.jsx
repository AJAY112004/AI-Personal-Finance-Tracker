import React from "react";
import "./Analytics.css";

const Analytics = () => {
  return (
    <div className="analytics-page">
      {/* Header */}
      <div className="analytics-header">
        <div>
          <h1>Advanced Analytics</h1>
          <p>
            Comprehensive view of your financial trajectory.
          </p>
        </div>

        <div className="period-selector">
          <button>1M</button>
          <button>3M</button>
          <button>1Y</button>
          <button className="active">ALL</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="analytics-cards">
        <div className="analytics-card">
          <h4>Total Net Worth</h4>
          <h2>$1.42M</h2>
          <span className="positive">
            ↗ +12.4% vs last year
          </span>
        </div>

        <div className="analytics-card">
          <h4>YTD Spending</h4>
          <h2>$84,200</h2>
          <span className="negative">
            ↗ +3.1% vs projection
          </span>
        </div>

        <div className="analytics-card">
          <h4>Savings Rate</h4>
          <h2>42.8%</h2>
          <span className="positive">
            ✓ Exceeding 40% target
          </span>
        </div>
      </div>

      {/* Growth Chart */}
      <div className="growth-card">
        <div className="card-header">
          <h3>Financial Growth Comparison</h3>
          <div className="legend">
            <span className="asset-dot"></span> Assets
            <span className="liability-dot"></span> Liabilities
          </div>
        </div>

        <p>Assets vs Liabilities over 12 months</p>

        <div className="growth-chart">
          <div className="chart-area"></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-analytics">
        <div className="heatmap-card">
          <h3>Spending Intensity</h3>
          <p>
            Daily transaction volume over last 30 days
          </p>

          <div className="heatmap">
            {[...Array(28)].map((_, i) => (
              <div
                key={i}
                className={`cell level-${(i % 5) + 1}`}
              ></div>
            ))}
          </div>
        </div>

        <div className="savings-card">
          <h3>Savings Trajectory</h3>
          <p>Current month vs Target</p>

          <div className="progress-ring">
            <div className="progress-inner">
              <span>Current Rate</span>
              <h2>62%</h2>
            </div>
          </div>

          <div className="savings-footer">
            <div>
              <small>Monthly Target</small>
              <h4>40.0%</h4>
            </div>

            <div>
              <small>Projected End</small>
              <h4 className="green">
                65.2%
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;