import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import StatCard from "../components/StatCard";

import "../CSS/Dashboard.css";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip
} from "recharts";

function Dashboard() {

  const [loading, setLoading] = useState(true);

  const [dashboardData, setDashboardData] = useState({
    summary: {
      balance: 0,
      income: 0,
      expense: 0,
      savings: 0,
    },
    insight: "No insights available.",
    allocation: {
      equities: 0,
      fixed_income: 0,
      cash: 0,
    },
    chart: [],
    transactions: [],
  });

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/dashboard/"
        );

        setDashboardData(response.data);

      } catch (error) {

        console.error(
          "Dashboard Error:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchDashboard();

  }, []);

  if (loading) {

    return (
      <Layout>
        <div className="dashboard-content">
          <h2>Loading Dashboard...</h2>
        </div>
      </Layout>
    );

  }

  return (

    <Layout>

      <div className="dashboard-content">

        {/* HEADER */}

        <div className="dashboard-header">

          <h1>Overview</h1>

          <p>
            Welcome back. Here is your portfolio summary.
          </p>

        </div>

        {/* STATS */}

        <div className="stats-grid">

          <StatCard
            title="Total Balance"
            value={dashboardData?.summary?.balance || 0}
            subtitle="Current balance"
            type="up"
          />

          <StatCard
            title="Monthly Income"
            value={dashboardData?.summary?.income || 0}
            subtitle="Income this month"
            type="up"
          />

          <StatCard
            title="Monthly Expense"
            value={dashboardData?.summary?.expense || 0}
            subtitle="Expenses this month"
            type="warning"
          />

          <StatCard
            title="Savings Rate"
            value={dashboardData?.summary?.savings || 0}
            subtitle="Savings percentage"
            type="target"
          />

        </div>

        {/* MIDDLE SECTION */}

        <div className="middle-section">

          {/* CAPITAL FLOW */}

          <div className="capital-card">

            <div className="capital-top">

              <h3>Capital Flow</h3>

              <div className="time-buttons">

                <button>1M</button>

                <button className="active-time">
                  6M
                </button>

                <button>1Y</button>

              </div>

            </div>

            <div className="chart-wrapper">

              <ResponsiveContainer
                width="100%"
                height={320}
              >

                <AreaChart
                  data={dashboardData.chart}
                >

                  <defs>

                    <linearGradient
                      id="colorFlow"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >

                      <stop
                        offset="5%"
                        stopColor="#cfc8f4"
                        stopOpacity={0.8}
                      />

                      <stop
                        offset="95%"
                        stopColor="#cfc8f4"
                        stopOpacity={0.1}
                      />

                    </linearGradient>

                  </defs>

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#6c4df6"
                    strokeWidth={3}
                    fill="url(#colorFlow)"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className="right-panel">

            <div className="follow-card">

              <div className="follow-top">

                <span className="promoted">
                  AI Insight
                </span>

              </div>

              <p className="quote">
                {dashboardData.insight}
              </p>

            </div>

            <div className="follow-card">

              <div className="follow-top">

                <span className="promoted">
                  Allocation
                </span>

              </div>

              <ul className="allocation-list">

                <li>
                  <span>Equities</span>
                  <span>
                    {dashboardData?.allocation?.equities || 0}%
                  </span>
                </li>

                <li>
                  <span>Fixed Income</span>
                  <span>
                    {dashboardData?.allocation?.fixed_income || 0}%
                  </span>
                </li>

                <li>
                  <span>Cash</span>
                  <span>
                    {dashboardData?.allocation?.cash || 0}%
                  </span>
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* TRANSACTIONS */}

        <div className="transactions-card">

          <div className="transactions-header">

            <h2>Recent Transactions</h2>

            <span>View All</span>

          </div>

          <table className="transactions-table">

            <thead>

              <tr>

                <th>ENTITY</th>
                <th>DATE</th>
                <th>AMOUNT</th>
                <th>STATUS</th>

              </tr>

            </thead>

            <tbody>

              {dashboardData.transactions.length > 0 ? (

                dashboardData.transactions.map(
                  (transaction, index) => (

                    <tr key={index}>

                      <td>
                        {transaction.entity}
                      </td>

                      <td>
                        {transaction.date}
                      </td>

                      <td>
                        ₹
                        {Number(
                          transaction.amount
                        ).toLocaleString()}
                      </td>

                      <td>

                        <span
                          className={`status ${
                            transaction.status === "Completed"
                              ? "completed"
                              : "processing"
                          }`}
                        >

                          {transaction.status}

                        </span>

                      </td>

                    </tr>

                  )
                )

              ) : (

                <tr>

                  <td
                    colSpan="4"
                    style={{
                      textAlign: "center",
                      padding: "20px"
                    }}
                  >

                    No Transactions Found

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </Layout>

  );

}

export default Dashboard;