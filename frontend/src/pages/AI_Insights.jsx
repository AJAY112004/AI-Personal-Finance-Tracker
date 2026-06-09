import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import "../CSS/AI_Insights.css";

import {
  Sparkles,
  MoreVertical,
  Send,
  TrendingUp,
} from "lucide-react";

function AI_Insights() {

  const [loading, setLoading] = useState(true);

  const [insightsData, setInsightsData] =
    useState({
      aiMessage:
        "Good morning. I've analyzed your recent portfolio movements and noticed a 15% increase in operational expenses primarily driven by software subscriptions.",

      aiResponse:
        "Here is the analysis. I found 3 overlapping cloud services contributing to redundant licensing costs.",

      recommendation: {
        title: "Optimize Liquidity",
        description:
          "Sweep excess operational cash into short-term treasury yields to capture an estimated $12k this quarter.",
      },

      spendAnalysis: {
        marketing: 45200,
        infrastructure: 28900,
        score: 92,
      },
    });

  useEffect(() => {

    const fetchInsights = async () => {

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/ai-insights/"
        );

        setInsightsData(response.data);

      } catch (error) {

        console.log(
          "Using demo data until backend is connected."
        );

      } finally {

        setLoading(false);

      }

    };

    fetchInsights();

  }, []);

  if (loading) {

    return (

      <Layout>

        <div className="loading-page">
          Loading AI Insights...
        </div>

      </Layout>

    );

  }

  return (

    <Layout>

      <div className="ai-page">

        {/* HEADER */}

        <div className="ai-header">

          <h1>
            Intelligence Hub
          </h1>

          <p>
            Your personalized financial forecasting
            and automated recommendations.
          </p>

        </div>

        {/* TOP SECTION */}

        <div className="ai-top-grid">

          {/* CHAT CARD */}

          <div className="chat-card">

            <div className="chat-header">

              <div className="ai-title">

                <Sparkles size={18} />

                <div>

                  <h3>
                    Lumina AI
                  </h3>

                  <span>
                    ● Analyzing Data
                  </span>

                </div>

              </div>

              <MoreVertical size={18} />

            </div>

            <div className="chat-body">

              <div className="message ai">

                {insightsData.aiMessage}

              </div>

              <div className="message user">

                Yes, generate a summary of
                overlapping tools.

              </div>

              <div className="message ai">

                {insightsData.aiResponse}

              </div>

            </div>

            <div className="chat-input">

              <input
                type="text"
                placeholder="Ask Lumina to analyze specific trends..."
              />

              <button>

                <Send size={16} />

              </button>

            </div>

            <div className="quick-actions">

              <button>
                Forecast Q3 Revenue
              </button>

              <button>
                Analyze Q2 Spend
              </button>

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className="right-panel">

            <div className="recommendation-card">

              <div className="priority">
                High Priority
              </div>

              <TrendingUp size={22} />

              <h3>
                {
                  insightsData.recommendation
                    .title
                }
              </h3>

              <p>
                {
                  insightsData.recommendation
                    .description
                }
              </p>

              <a href="/">
                Execute Sweep →
              </a>

            </div>

            <div className="analysis-card">

              <h4>
                AI SPEND VELOCITY ANALYSIS
              </h4>

              <div className="metric">

                <span>
                  Marketing
                </span>

                <strong>
                  $
                  {
                    insightsData
                      .spendAnalysis
                      .marketing
                  }
                </strong>

              </div>

              <div className="progress">
                <span></span>
              </div>

              <div className="metric">

                <span>
                  Infrastructure
                </span>

                <strong>
                  $
                  {
                    insightsData
                      .spendAnalysis
                      .infrastructure
                  }
                </strong>

              </div>

              <div className="progress second">
                <span></span>
              </div>

              <div className="score">

                <span>
                  Efficiency Score
                </span>

                <strong>
                  {
                    insightsData
                      .spendAnalysis
                      .score
                  }
                  /100
                </strong>

              </div>

            </div>

          </div>

        </div>

        {/* PREDICTIVE CASH FLOW */}

        <div className="cashflow-card">

          <div className="cashflow-header">

            <div>

              <h2>
                Predictive Cash Flow
              </h2>

              <p>
                AI-generated projection
                based on historical run-rates.
              </p>

            </div>

            <div className="time-filter">

              <button>
                30D
              </button>

              <button className="active">
                90D
              </button>

            </div>

          </div>

          <div className="cashflow-placeholder">

            Chart will be connected
            from backend later.

          </div>

        </div>

      </div>

    </Layout>

  );

}

export default AI_Insights;