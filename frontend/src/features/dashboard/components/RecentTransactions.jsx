import React from "react";

const transactions = [
  {
    title: "Acme Corp Dividend",
    date: "Oct 24, 2023",
    amount: "+$12,500",
    status: "Completed",
  },
  {
    title: "Stripe Payment",
    date: "Oct 22, 2023",
    amount: "-$4,230",
    status: "Completed",
  },
  {
    title: "Wire Transfer - Capital",
    date: "Oct 21, 2023",
    amount: "-$50,000",
    status: "Processing",
  },
];

const RecentTransactions = () => {
  return (
    <div className="transactions-card">
      <div className="transactions-header">
        <h3>Recent Transactions</h3>
        <span>View All</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>ENTITY</th>
            <th>DATE</th>
            <th>AMOUNT</th>
            <th>STATUS</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.title}</td>
              <td>{tx.date}</td>
              <td>{tx.amount}</td>
              <td>
                <span
                  className={
                    tx.status === "Completed"
                      ? "status completed"
                      : "status processing"
                  }
                >
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;