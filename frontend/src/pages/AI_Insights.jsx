import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import {
  MoreVertical,
  Send,
  TrendingUp
} from "lucide-react";

import "../CSS/AI_Insights.css";

function AI_Insights() {

  const [loading, setLoading] = useState(true);

  const [insights, setInsights] = useState({
    assistantName: "",
    status: "",
    messages: [],
    recommendation: {},
    spendAnalysis: {},
  });

  const [prompt, setPrompt] = useState("");

  useEffect(() => {

    const fetchInsights = async () => {

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/ai-insights/"
        );

        setInsights(response.data);

      } catch (error) {

        console.error(
          "AI Insights Error:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchInsights();

  }, []);

  const handleSend = () => {

    if (!prompt.trim()) return;

    console.log(prompt);

    setPrompt("");

  };

  if (loading) {

    return (

      <Layout>

        <div className="ai-loading">

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
            Your personalized financial
            forecasting and automated
            recommendations.
          </p>

        </div>

        <div className="ai-grid">

          {/* CHAT */}

          <div className="chat-card">

            <div className="chat-header">

              <div className="chat-title">

                <div className="chat-avatar">

                  ✦

                </div>

                <div>

                  <h3>
                    {
                      insights.assistantName
                    }
                  </h3>

                  <span>
                    {
                      insights.status
                    }
                  </span>

                </div>

              </div>

              <MoreVertical size={18} />

            </div>

            <div className="chat-body">

              {insights.messages?.map(
                (msg, index) => (

                  <div
                    key={index}
                    className={
                      msg.sender === "user"
                        ? "user-message"
                        : "bot-message"
                    }
                  >

                    {msg.message}

                  </div>

                )
              )}

            </div>

            <div className="chat-input">

              <input
                type="text"
                placeholder="Ask Lumina to analyze specific trends..."
                value={prompt}
                onChange={(e) =>
                  setPrompt(
                    e.target.value
                  )
                }
              />

              <button
                onClick={handleSend}
              >

                <Send size={18} />

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

          {/* RIGHT COLUMN */}

          <div className="ai-side">

            {/* RECOMMENDATION */}

            <div className="recommendation-card">

              <div className="recommendation-top">

                <TrendingUp
                  size={18}
                />

                <span>
                  High Priority
                </span>

              </div>

              <h3>

                {
                  insights
                    ?.recommendation
                    ?.title
                }

              </h3>

              <p>

                {
                  insights
                    ?.recommendation
                    ?.description
                }

              </p>

              <button>

                Execute Sweep →

              </button>

            </div>

            {/* SPEND ANALYSIS */}

            <div className="analysis-card">

              <h4>
                AI Spend Velocity Analysis
              </h4>

              <div className="analysis-row">

                <span>
                  Marketing
                </span>

                <strong>

                  ₹{
                    insights
                      ?.spendAnalysis
                      ?.marketing
                  }

                </strong>

              </div>

              <div className="progress-line">

                <div
                  style={{
                    width: "85%"
                  }}
                />
              </div>

              <div className="analysis-row">

                <span>
                  Infrastructure
                </span>

                <strong>

                  ₹{
                    insights
                      ?.spendAnalysis
                      ?.infrastructure
                  }

                </strong>

              </div>

              <div className="progress-line">

                <div
                  style={{
                    width: "70%"
                  }}
                />
              </div>

              <div className="score">

                Efficiency Score

                <span>

                  {
                    insights
                      ?.spendAnalysis
                      ?.score
                  }
                  /100

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </Layout>

  );

}

export default AI_Insights;