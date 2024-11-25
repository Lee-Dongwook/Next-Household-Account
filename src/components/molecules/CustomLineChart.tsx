import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { CustomTooltip } from "@/components/atoms/CustomTooltip";

type CustomLineChartProps = {
  data: { month: string; income: number; expense: number }[];
  xAxisLabel?: string;
  yAxisLabel?: string;
};

export const CustomLineChart = ({
  data,
  xAxisLabel,
  yAxisLabel,
}: CustomLineChartProps) => {
  return (
    <div className="relative">
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          label={{ value: xAxisLabel, position: "bottom" }}
        />
        <YAxis
          label={{ value: yAxisLabel, angle: -90, position: "insideLeft" }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </LineChart>
      <Line type="monotone" dataKey="income" stroke="green" />
      <Line type="monotone" dataKey="expense" stroke="red" />
    </div>
  );
};
