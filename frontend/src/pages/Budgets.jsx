import { useEffect, useState } from "react";
import axios from "axios";

import {
  Plus,
  AlertTriangle,
  Home,
  Utensils,
  Ticket
} from "lucide-react";

import Layout from "../components/Layout";
import "../CSS/Budgets.css";

function Budgets() {

  const [loading, setLoading] = useState(true);

  const [summary, setSummary] = useState({
    monthlySpend: 0,
    budgetLimit: 0,
    monthlyChange: 0,
    avgSpend: 0,
    fixedCosts: 0,
    savings: 0,
  });

  const [allocations, setAllocations] = useState([]);

  useEffect(() => {

    const fetchBudgetData = async () => {

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/budgets/"
        );

        setSummary(
          response.data.summary || {}
        );

        setAllocations(
          response.data.allocations || []
        );

      } catch (error) {

        console.error(
          "Budget Error:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchBudgetData();

  }, []);

  if (loading) {

    return (

      <Layout>

        <div className="budget-loading">

          Loading Budget Data...

        </div>

      </Layout>

    );

  }

  return (

    <Layout>

      <div className="budget-page">

        {/* HEADER */}

        <div className="budget-header">

          <div>

            <h1>
              Budget Intelligence
            </h1>

            <p>
              Monitor your spending velocity
              and category allocations.
            </p>

          </div>

          <button className="budget-btn">

            <Plus size={18} />

            New Budget

          </button>

        </div>

        {/* TOP GRID */}

        <div className="budget-top-grid">

          {/* MONTHLY RUNWAY */}

          <div className="runway-card">

            <div className="runway-header">

              <div>

                <h2>
                  Monthly Runway
                </h2>

                <p>
                  Total spend vs projected budget
                </p>

              </div>

              <select>

                <option>
                  Oct 2023
                </option>

              </select>

            </div>

            <div className="runway-amount">

              ₹{summary.monthlySpend}

              <span>

                / ₹{summary.budgetLimit}

              </span>

            </div>

            <div className="runway-change">

              {summary.monthlyChange}% vs last month

            </div>

            <div className="chart-placeholder">

              Budget Chart Here

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div className="budget-side">

            <div className="alert-card">

              <AlertTriangle size={22} />

              <div>

                <h4>
                  Budget Alert
                </h4>

                <p>
                  Dining Out category has exceeded
                  90% of its monthly allocation.
                </p>

              </div>

            </div>

            <div className="velocity-card">

              <h4>
                Velocity Insights
              </h4>

              <div className="velocity-row">

                <span>
                  Daily Avg Spend
                </span>

                <strong>
                  ₹{summary.avgSpend}
                </strong>

              </div>

              <div className="velocity-row">

                <span>
                  Fixed Costs
                </span>

                <strong>
                  ₹{summary.fixedCosts}
                </strong>

              </div>

              <div className="velocity-row">

                <span>
                  Est. Savings
                </span>

                <strong>
                  ₹{summary.savings}
                </strong>

              </div>

            </div>

          </div>

        </div>

        {/* ALLOCATIONS */}

        <div className="allocation-section">

          <div className="allocation-header">

            <h2>
              Active Allocations
            </h2>

            <button>

              View All →

            </button>

          </div>

          <div className="allocation-grid">

            {allocations.map((item) => (

              <div
                className="allocation-card"
                key={item.id}
              >

                <div className="allocation-icon">

                  {item.category === "Housing" && (
                    <Home size={20} />
                  )}

                  {item.category === "Dining" && (
                    <Utensils size={20} />
                  )}

                  {item.category === "Entertainment" && (
                    <Ticket size={20} />
                  )}

                </div>

                <div className="allocation-tag">

                  {item.type}

                </div>

                <h3>
                  {item.category}
                </h3>

                <div className="allocation-amount">

                  ₹{item.spent}

                  <span>

                    / ₹{item.limit}

                  </span>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width:
                        `${item.usedPercent}%`
                    }}
                  />

                </div>

                <div className="allocation-footer">

                  <span>
                    {item.usedPercent}% utilized
                  </span>

                  <span>
                    {item.daysLeft} days left
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </Layout>

  );

}

export default Budgets;