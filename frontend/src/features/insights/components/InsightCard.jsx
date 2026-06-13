import React from "react";
import {
  FaRobot,
  FaPaperPlane,
} from "react-icons/fa";

const InsightCard = () => {
  return (
    <div className="chat-card">
      <div className="chat-header">
        <div className="chat-title">
          <FaRobot />
          <div>
            <h3>Lumina AI</h3>
            <small>Analyzing Data</small>
          </div>
        </div>
      </div>

      <div className="messages">
        <div className="message ai">
          Good morning. I've analyzed your recent
          portfolio movements and noticed a 15%
          increase in operational expenses primarily
          driven by software subscriptions.
          <br />
          <br />
          Would you like me to identify redundant
          licenses?
        </div>

        <div className="message user">
          Yes, generate a summary of overlapping tools.
        </div>

        <div className="message ai">
          Here is the analysis. I found 3 overlapping
          cloud service subscriptions that could save
          approximately $1,250/month.
        </div>
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask Lumina to analyze specific trends..."
        />

        <button>
          <FaPaperPlane />
        </button>
      </div>

      <div className="quick-actions">
        <button>Forecast Q3 Revenue</button>
        <button>Analyze Q2 Spend</button>
      </div>
    </div>
  );
};

export default InsightCard;