import React from "react";
import { CustomLineChart } from "@/components/molecules/CustomLineChart";
import { ChartLegend } from "@/components/molecules/ChartLegend";

type ChartWithLegendProps = {
  data: { month: string; income: number; expense: number }[];
};

export const ChartWithLegend = ({ data }: ChartWithLegendProps) => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Income vs Expense</h2>
      <CustomLineChart data={data} xAxisLabel="Month" yAxisLabel="Amount ($)" />
      <ChartLegend
        items={[
          { color: "green", label: "Income" },
          { color: "red", label: "Expense" },
        ]}
      />
    </div>
  );
};
