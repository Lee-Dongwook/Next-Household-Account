import React from "react";
import { ChartWithLegend } from "@/components/molecules/ChartWithLegend";

const sampleData = [
  { month: "Jan", income: 4000, expense: 2400 },
  { month: "Feb", income: 3000, expense: 1398 },
  { month: "Mar", income: 2000, expense: 9800 },
  { month: "Apr", income: 2780, expense: 3908 },
  { month: "May", income: 1890, expense: 4800 },
  { month: "Jun", income: 2390, expense: 3800 },
  { month: "Jul", income: 3490, expense: 4300 },
];

export const IncomeExpenseChart = () => {
  return (
    <div className="p-6 bg-gray-50 border rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Monthly Income vs Expenses
      </h1>
      <ChartWithLegend data={sampleData} />
    </div>
  );
};
