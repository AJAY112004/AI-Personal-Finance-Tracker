import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    income: 12000,
    expense: 8000,
  },
  {
    month: "Feb",
    income: 15000,
    expense: 9500,
  },
  {
    month: "Mar",
    income: 17000,
    expense: 11000,
  },
];

const IncomeExpenseChart = () => {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey="income"
          stroke="#6D5DFC"
        />

        <Line
          type="monotone"
          dataKey="expense"
          stroke="#EF4444"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default IncomeExpenseChart;