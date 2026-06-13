import React from "react";

const RecommendationCard = () => {
  return (
    <div className="recommendation-wrapper">
      <div className="recommendation-card">
        <span className="priority-badge">
          High Priority
        </span>

        <h3>Optimize Liquidity</h3>

        <p>
          Sweep excess operational cash into
          short-term treasury yields to capture an
          estimated $18k this quarter.
        </p>

        <a href="/">Execute Sweep →</a>
      </div>

      <div className="velocity-card">
        <h4>AI Spend Velocity Analysis</h4>

        <div className="velocity-item">
          <div>
            <span>Marketing</span>
            <strong>$45,200</strong>
          </div>

          <div className="bar">
            <div
              className="fill"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>

        <div className="velocity-item">
          <div>
            <span>Infrastructure</span>
            <strong>$28,900</strong>
          </div>

          <div className="bar">
            <div
              className="fill"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>

        <div className="efficiency">
          <span>Efficiency Score</span>
          <strong>92/100</strong>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;