import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Housing", value: 35 },
  { name: "Food", value: 20 },
  { name: "Transport", value: 15 },
  { name: "Bills", value: 30 },
];

const COLORS = [
  "#6D5DFC",
  "#8B7FFF",
  "#B6AEFF",
  "#D8D3FF",
];

const ExpensePieChart = () => {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ExpensePieChart;