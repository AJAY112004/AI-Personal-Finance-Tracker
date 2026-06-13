import React from "react";
import {
  FaWallet,
  FaArrowUp,
  FaArrowDown,
  FaPiggyBank,
} from "react-icons/fa";

const SummaryCards = () => {
  const cards = [
    {
      title: "Total Balance",
      value: "$2,450,890.00",
      change: "+2.4%",
      icon: <FaWallet />,
    },
    {
      title: "Monthly Income",
      value: "$145,200.00",
      change: "+5.1%",
      icon: <FaArrowUp />,
    },
    {
      title: "Monthly Expense",
      value: "$32,450.00",
      change: "-1.2%",
      icon: <FaArrowDown />,
    },
    {
      title: "Savings Rate",
      value: "77.6%",
      change: "+0.8%",
      icon: <FaPiggyBank />,
    },
  ];

  return (
    <div className="summary-grid">
      {cards.map((card, index) => (
        <div className="summary-card" key={index}>
          <div className="card-top">
            <span>{card.title}</span>
            {card.icon}
          </div>

          <h2>{card.value}</h2>

          <small>{card.change} vs last month</small>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;