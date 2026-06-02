import { useEffect, useState } from "react";

import axios from "axios";

import Layout from "../components/Layout";
import StatCard from "../components/StatCard";

import "../CSS/Dashboard.css";

import {
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";

function Dashboard() {

  /* =========================
     DASHBOARD SUMMARY
  ========================= */

  const [summary, setSummary] = useState({
    balance: 2450890,
    income: 145200,
    expense: 32450,
    savings: 77.6,
  });

  /* =========================
     CHART DATA
  ========================= */

  const chartData = [
    { value: 20 },
    { value: 25 },
    { value: 18 },
    { value: 15 },
    { value: 24 },
    { value: 42 },
    { value: 55 },
    { value: 50 },
    { value: 46 },
    { value: 65 }
  ];

  /* =========================
     FETCH BACKEND DATA
  ========================= */

  useEffect(() => {

    const fetchDashboardData = async () => {

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/dashboard-summary/"
        );

        setSummary(response.data);

      } catch (error) {

        console.error(
          "Dashboard fetch error:",
          error
        );

      }

    };

    fetchDashboardData();

  }, []);

  return (

    <Layout>

      <div className="dashboard-content">

        {/* =========================
            HEADER
        ========================= */}

        <div className="dashboard-header">

          <h1>Overview</h1>

          <p>
            Welcome back. Here is your portfolio summary.
          </p>

        </div>

        {/* =========================
            STAT CARDS
        ========================= */}

        <div className="stats-grid">

          <StatCard
            title="Total Balance"
            value={summary.balance}
            subtitle="+2.4% vs last month"
            type="up"
          />

          <StatCard
            title="Monthly Income"
            value={summary.income}
            subtitle="+5.1%"
            type="up"
          />

          <StatCard
            title="Monthly Expense"
            value={summary.expense}
            subtitle="-1.2%"
            type="warning"
          />

          <StatCard
            title="Savings Rate"
            value={summary.savings}
            subtitle="+0.8%"
            type="target"
          />

        </div>

        {/* =========================
            BOTTOM SECTION
        ========================= */}

        <div className="dashboard-bottom">

          {/* =========================
              CAPITAL FLOW
          ========================= */}

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

            {/* CHART */}

            <div className="chart-wrapper">

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <AreaChart data={chartData}>

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
                        stopColor="#d9d4e8"
                        stopOpacity={0.8}
                      />

                      <stop
                        offset="95%"
                        stopColor="#d9d4e8"
                        stopOpacity={0.1}
                      />

                    </linearGradient>

                  </defs>

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#d9d4e8"
                    strokeWidth={4}
                    fill="url(#colorFlow)"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* =========================
              RIGHT SIDE CARDS
          ========================= */}

          <div className="side-cards">

            {/* AI INSIGHT */}

            <div className="follow-card">

              <div className="follow-top">

                <span className="promoted">
                  AI Insight
                </span>

              </div>

              <p className="quote">

                Your operational expenses have
                decreased by 4% this quarter,
                largely driven by optimized
                vendor contracts.

              </p>

            </div>

            {/* ALLOCATION */}

            <div className="follow-card">

              <div className="follow-top">

                <span className="promoted">
                  Allocation
                </span>

              </div>

              <ul className="allocation-list">

                <li>
                  <span>Equities</span>
                  <span>65%</span>
                </li>

                <li>
                  <span>Fixed Income</span>
                  <span>25%</span>
                </li>

                <li>
                  <span>Cash</span>
                  <span>10%</span>
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </Layout>

  );

}

export default Dashboard;