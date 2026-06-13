import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Progress",
    value: 72,
  },
];

const BudgetProgressChart = () => {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <RadialBarChart
        innerRadius="70%"
        outerRadius="100%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          dataKey="value"
          fill="#6D5DFC"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default BudgetProgressChart;