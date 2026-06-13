import React from "react";

const transactions = [
  {
    date: "Oct 24, 2023",
    time: "09:41 AM",
    merchant: "Stripe Subscriptions",
    id: "TR-9982-X5",
    category: "SaaS & Software",
    status: "Settled",
    amount: "-$4,250.00",
  },
  {
    date: "Oct 23, 2023",
    time: "14:22 PM",
    merchant: "Delta Airlines",
    id: "TR-8831-A8",
    category: "Travel",
    status: "Pending",
    amount: "-$1,150.00",
  },
  {
    date: "Oct 22, 2023",
    time: "08:15 AM",
    merchant: "AWS Web Services",
    id: "TR-7742-Z2",
    category: "Infrastructure",
    status: "Failed",
    amount: "-$8,420.50",
  },
  {
    date: "Oct 20, 2023",
    time: "16:00 PM",
    merchant: "Client Retainer - Q4",
    id: "INV-1002-XX",
    category: "Revenue",
    status: "Settled",
    amount: "+$25,000.00",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Settled":
      return "settled";
    case "Pending":
      return "pending";
    case "Failed":
      return "failed";
    default:
      return "";
  }
};

const TransactionTable = () => {
  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Transaction Details</th>
            <th>Category</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item, index) => (
            <tr key={index}>
              <td>
                <div>{item.date}</div>
                <small>{item.time}</small>
              </td>

              <td>
                <div className="merchant-name">
                  {item.merchant}
                </div>
                <small>ID: {item.id}</small>
              </td>

              <td>
                <span className="category-badge">
                  {item.category}
                </span>
              </td>

              <td>
                <span
                  className={`status-badge ${getStatusClass(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </td>

              <td
                className={
                  item.amount.startsWith("+")
                    ? "positive"
                    : "negative"
                }
              >
                {item.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <span>Showing 1 to 4 of 124 results</span>

        <div className="pages">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>12</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;