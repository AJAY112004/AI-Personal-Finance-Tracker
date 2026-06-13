import React from "react";
import SummaryCards from "../components/SummaryCards";
import RecentTransactions from "../components/RecentTransactions";
import AIInsightsCard from "../components/AIInsightsCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Overview</h1>
          <p>Welcome back. Here is your portfolio summary.</p>
        </div>
      </div>

      <SummaryCards />

      <div className="dashboard-middle">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Capital Flow</h3>
            <div className="chart-tabs">
              <button>1M</button>
              <button className="active">6M</button>
              <button>1Y</button>
            </div>
          </div>

          <div className="chart-placeholder">
            <div className="wave"></div>
          </div>
        </div>

        <AIInsightsCard />
      </div>

      <RecentTransactions />
    </div>
  );
};

export default Dashboard;