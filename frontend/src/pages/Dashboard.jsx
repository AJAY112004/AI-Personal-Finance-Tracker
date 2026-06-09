import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import StatCard from "../components/StatCard";

import "../CSS/Dashboard.css";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function Dashboard() {

  const [loading, setLoading] = useState(true);

  const [dashboardData, setDashboardData] = useState({
    summary: {
      balance: 2450890,
      income: 145200,
      expense: 32450,
      savings: 77.6,
    },

    insight:
      "Your operational expenses have decreased by 4% this quarter, largely driven by optimized vendor contracts.",

    allocation: {
      equities: 65,
      fixed_income: 25,
      cash: 10,
    },

    chart: [
      { month: "Jan", value: 150000 },
      { month: "Feb", value: 170000 },
      { month: "Mar", value: 145000 },
      { month: "Apr", value: 180000 },
      { month: "May", value: 220000 },
      { month: "Jun", value: 280000 },
    ],

    transactions: [
      {
        entity: "Acme Corp Dividend",
        date: "Oct 24, 2023",
        amount: 12500,
        status: "Completed",
      },
      {
        entity: "Stripe Payment",
        date: "Oct 22, 2023",
        amount: -4230,
        status: "Completed",
      },
      {
        entity: "Wire Transfer",
        date: "Oct 21, 2023",
        amount: -50000,
        status: "Processing",
      },
    ],
  });

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/dashboard/"
        );

        setDashboardData(response.data);

      } catch (error) {

        console.log(
          "Backend not connected. Using mock data."
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

        {/* SUMMARY CARDS */}

        <div className="stats-grid">

          <StatCard
            title="Total Balance"
            value={`${dashboardData.summary.balance.toLocaleString()}`}
            subtitle="+2.4% vs last month"
            type="up"
          />

          <StatCard
            title="Monthly Income"
            value={`${dashboardData.summary.income.toLocaleString()}`}
            subtitle="+5.1%"
            type="up"
          />

          <StatCard
            title="Monthly Expense"
            value={`${dashboardData.summary.expense.toLocaleString()}`}
            subtitle="-1.2%"
            type="warning"
          />

          <StatCard
            title="Savings Rate"
            value={`${dashboardData.summary.savings}%`}
            subtitle="+0.8%"
            type="target"
          />

        </div>

        {/* MIDDLE SECTION */}

        <div className="middle-section">

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
                height={300}
              >

                <AreaChart
                  data={dashboardData.chart}
                >

                  <defs>

                    <linearGradient
                      id="flowGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >

                      <stop
                        offset="5%"
                        stopColor="#7C5CFF"
                        stopOpacity={0.7}
                      />

                      <stop
                        offset="95%"
                        stopColor="#7C5CFF"
                        stopOpacity={0.05}
                      />

                    </linearGradient>

                  </defs>

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#7C5CFF"
                    strokeWidth={3}
                    fill="url(#flowGradient)"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          <div className="right-panel">

            <div className="follow-card">

              <h4>AI Insight</h4>

              <p>
                {dashboardData.insight}
              </p>

            </div>

            <div className="follow-card">

              <h4>Allocation</h4>

              <ul className="allocation-list">

                <li>
                  <span>Equities</span>
                  <span>
                    {dashboardData.allocation.equities}%
                  </span>
                </li>

                <li>
                  <span>Fixed Income</span>
                  <span>
                    {dashboardData.allocation.fixed_income}%
                  </span>
                </li>

                <li>
                  <span>Cash</span>
                  <span>
                    {dashboardData.allocation.cash}%
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

              {dashboardData.transactions.map(
                (transaction, index) => (

                  <tr key={index}>

                    <td>
                      {transaction.entity}
                    </td>

                    <td>
                      {transaction.date}
                    </td>

                    <td>
                      ₹{transaction.amount.toLocaleString()}
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
              )}

            </tbody>

          </table>

        </div>

      </div>

    </Layout>

  );

}

export default Dashboard;