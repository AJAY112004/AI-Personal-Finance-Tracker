import React from "react";
import { FaLightbulb } from "react-icons/fa";

const AIInsightsCard = () => {
  return (
    <div className="insight-card">
      <div className="insight-header">
        <FaLightbulb />
        <h3>AI Insight</h3>
      </div>

      <p>
        Your operational expenses have decreased by 4% this quarter,
        largely driven by optimized vendor contracts.
      </p>

      <a href="/">View Analysis →</a>

      <div className="allocation">
        <h4>Allocation</h4>

        <div className="allocation-item">
          <span>Equities</span>
          <span>65%</span>
        </div>

        <div className="allocation-item">
          <span>Fixed Income</span>
          <span>25%</span>
        </div>

        <div className="allocation-item">
          <span>Cash</span>
          <span>10%</span>
        </div>
      </div>
    </div>
  );
};

export default AIInsightsCard;