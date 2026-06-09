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

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [insightsData, setInsightsData] =
    useState({
      aiMessage: "",
      userMessage: "",
      aiResponse: "",
      quickActions: [],
      recommendation: {
        title: "",
        description: "",
      },
      spendAnalysis: {
        marketing: 0,
        infrastructure: 0,
        score: 0,
      },
      cashflow: [],
    });

  const [prompt, setPrompt] =
    useState("");

  useEffect(() => {

    const fetchInsights = async () => {

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/ai-insights/"
        );

        setInsightsData(response.data);

      } catch (error) {

        setError(
          "Failed to load AI insights."
        );

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchInsights();

  }, []);

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    if (!prompt.trim()) return;

    try {

      await axios.post(
        "http://127.0.0.1:8000/api/ai-insights/chat/",
        {
          prompt,
        }
      );

      setPrompt("");

    } catch (error) {

      console.error(error);

    }

  };

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

        {error && (

          <div className="error-box">

            {error}

          </div>

        )}

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

        {/* TOP GRID */}

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
                    ● Connected
                  </span>

                </div>

              </div>

              <MoreVertical size={18} />

            </div>

            <div className="chat-body">

              {insightsData.aiMessage && (

                <div className="message ai">

                  {insightsData.aiMessage}

                </div>

              )}

              {insightsData.userMessage && (

                <div className="message user">

                  {insightsData.userMessage}

                </div>

              )}

              {insightsData.aiResponse && (

                <div className="message ai">

                  {insightsData.aiResponse}

                </div>

              )}

              {!insightsData.aiMessage &&
                !insightsData.aiResponse && (

                  <div className="empty-state">

                    No AI conversations available.

                  </div>

                )}

            </div>

            <form
              className="chat-input"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                placeholder="Ask AI to analyze your finances..."
                value={prompt}
                onChange={(e) =>
                  setPrompt(
                    e.target.value
                  )
                }
              />

              <button
                type="submit"
              >

                <Send size={16} />

              </button>

            </form>

            <div className="quick-actions">

              {insightsData.quickActions?.length > 0 ? (

                insightsData.quickActions.map(
                  (action, index) => (

                    <button
                      key={index}
                    >

                      {action}

                    </button>

                  )
                )

              ) : (

                <span className="empty-actions">

                  No quick actions available

                </span>

              )}

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className="right-panel">

            {/* RECOMMENDATION */}

            <div className="recommendation-card">

              <div className="priority">

                Recommendation

              </div>

              <TrendingUp
                size={22}
              />

              <h3>

                {insightsData
                  ?.recommendation
                  ?.title ||
                  "No Recommendation"}

              </h3>

              <p>

                {insightsData
                  ?.recommendation
                  ?.description ||
                  "No recommendation available."}

              </p>

            </div>

            {/* ANALYSIS */}

            <div className="analysis-card">

              <h4>
                AI SPEND ANALYSIS
              </h4>

              <div className="metric">

                <span>
                  Marketing
                </span>

                <strong>

                  ₹
                  {(
                    insightsData
                      ?.spendAnalysis
                      ?.marketing || 0
                  ).toLocaleString()}

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

                  ₹
                  {(
                    insightsData
                      ?.spendAnalysis
                      ?.infrastructure || 0
                  ).toLocaleString()}

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

                  {insightsData
                    ?.spendAnalysis
                    ?.score || 0}
                  /100

                </strong>

              </div>

            </div>

          </div>

        </div>

        {/* CASHFLOW */}

        <div className="cashflow-card">

          <div className="cashflow-header">

            <div>

              <h2>
                Predictive Cash Flow
              </h2>

              <p>
                AI-generated projections.
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

            {insightsData.cashflow
              ?.length > 0
              ? "Cash Flow Data Available"
              : "No Cash Flow Data Available"}

          </div>

        </div>

      </div>

    </Layout>

  );

}

export default AI_Insights;