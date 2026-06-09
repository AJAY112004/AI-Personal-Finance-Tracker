import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import "../CSS/Analytics.css";

function Analytics() {

  const [loading, setLoading] = useState(true);

  const [analytics, setAnalytics] = useState({
    netWorth: 0,
    netWorthGrowth: 0,

    spending: 0,
    spendingGrowth: 0,

    savingsRate: 0,
    savingsTarget: 0,

    growthChart: [],
    heatmap: [],
    savingsTrajectory: {},
  });

  const [range, setRange] = useState("1Y");

  useEffect(() => {

    const fetchAnalytics = async () => {

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/analytics/"
        );

        setAnalytics(response.data);

      } catch (error) {

        console.error(
          "Analytics Error:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchAnalytics();

  }, []);

  if (loading) {

    return (

      <Layout>

        <div className="analytics-loading">

          Loading Analytics...

        </div>

      </Layout>

    );

  }

  return (

    <Layout>

      <div className="analytics-page">

        {/* HEADER */}

        <div className="analytics-header">

          <div>

            <h1>
              Advanced Analytics
            </h1>

            <p>
              Comprehensive view of your
              financial trajectory.
            </p>

          </div>

          <div className="range-buttons">

            <button
              className={range === "1M" ? "active" : ""}
              onClick={() => setRange("1M")}
            >
              1M
            </button>

            <button
              className={range === "3M" ? "active" : ""}
              onClick={() => setRange("3M")}
            >
              3M
            </button>

            <button
              className={range === "1Y" ? "active" : ""}
              onClick={() => setRange("1Y")}
            >
              1Y
            </button>

            <button
              className={range === "ALL" ? "active" : ""}
              onClick={() => setRange("ALL")}
            >
              ALL
            </button>

          </div>

        </div>

        {/* KPI CARDS */}

        <div className="analytics-stats">

          <div className="stat-card">

            <span>
              Total Net Worth
            </span>

            <h2>
              ₹{analytics.netWorth}
            </h2>

            <p className="positive">

              +{analytics.netWorthGrowth}% vs last year

            </p>

          </div>

          <div className="stat-card">

            <span>
              YTD Spending
            </span>

            <h2>
              ₹{analytics.spending}
            </h2>

            <p className="negative">

              +{analytics.spendingGrowth}% vs projection

            </p>

          </div>

          <div className="stat-card">

            <span>
              Savings Rate
            </span>

            <h2>
              {analytics.savingsRate}%
            </h2>

            <p className="positive">

              Exceeding {analytics.savingsTarget}% target

            </p>

          </div>

        </div>

        {/* GROWTH CHART */}

        <div className="chart-card">

          <div className="card-header">

            <div>

              <h2>
                Financial Growth Comparison
              </h2>

              <p>
                Assets vs Liabilities over 12 months
              </p>

            </div>

            <div className="legend">

              <span className="asset-dot"></span>
              Assets

              <span className="liability-dot"></span>
              Liabilities

            </div>

          </div>

          <div className="chart-placeholder">

            Growth Chart Here

          </div>

        </div>

        {/* BOTTOM GRID */}

        <div className="analytics-grid">

          {/* HEATMAP */}

          <div className="heatmap-card">

            <h2>
              Spending Intensity
            </h2>

            <p>
              Daily transaction volume
              over the last 30 days.
            </p>

            <div className="heatmap-placeholder">

              Heatmap Here

            </div>

          </div>

          {/* SAVINGS */}

          <div className="savings-card">

            <h2>
              Savings Trajectory
            </h2>

            <p>
              Current month vs target
            </p>

            <div className="circle-placeholder">

              {analytics.savingsRate}%

            </div>

            <div className="target-footer">

              <div>

                <span>
                  Monthly Target
                </span>

                <h3>
                  {analytics.savingsTarget}%
                </h3>

              </div>

              <div>

                <span>
                  Projected End
                </span>

                <h3 className="green">

                  {
                    analytics
                      ?.savingsTrajectory
                      ?.projectedRate
                  }%

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </Layout>

  );

}

export default Analytics;