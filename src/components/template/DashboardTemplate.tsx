import React from "react";
import { DashboardSummary } from "@/components/organisms/DashboardSummary";
import { IncomeExpenseChart } from "@/components/organisms/IncomeExpenseChart";

export const DashboardTemplate = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">My Dashboard</h1>
      <DashboardSummary />
      <IncomeExpenseChart />
    </div>
  );
};
