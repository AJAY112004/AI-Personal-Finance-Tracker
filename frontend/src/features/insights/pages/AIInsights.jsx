import React from "react";
import InsightCard from "../components/InsightCard";
import RecommendationCard from "../components/RecommendationCard";
import "./AIInsights.css";

const AIInsights = () => {
  return (
    <div className="insights-page">
      <div className="insights-header">
        <div>
          <h1>Intelligence Hub</h1>
          <p>
            Your personalized financial forecasting and
            automated recommendations.
          </p>
        </div>
      </div>

      <div className="insights-layout">
        <div className="chat-section">
          <InsightCard />
        </div>

        <div className="recommendation-section">
          <RecommendationCard />
        </div>
      </div>

      <div className="prediction-card">
        <div className="prediction-header">
          <div>
            <h3>Predictive Cash Flow</h3>
            <p>
              AI-generated projection based on historical
              run-rates.
            </p>
          </div>

          <div className="forecast-buttons">
            <button>30D</button>
            <button className="active">90D</button>
          </div>
        </div>

        <div className="forecast-chart">
          <div className="forecast-area"></div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;