import React from "react";

type SummaryCardProps = {
  title: string;
  value: string;
  color: string;
};

const SummaryCard = ({ title, value, color }: SummaryCardProps) => {
  return (
    <div
      className={`p-4 border-l-4 rounded-md shadow-md`}
      style={{ borderColor: color }}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

export const DashboardSummary = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <SummaryCard title="Total Income" value="$24,300" color="green" />
      <SummaryCard title="Total Expense" value="$18,700" color="red" />
    </div>
  );
};
