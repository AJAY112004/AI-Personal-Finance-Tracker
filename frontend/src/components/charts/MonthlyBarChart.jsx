import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", amount: 5000 },
  { month: "Feb", amount: 7000 },
  { month: "Mar", amount: 6500 },
  { month: "Apr", amount: 9000 },
];

const MonthlyBarChart = () => {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="amount"
          fill="#6D5DFC"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MonthlyBarChart;