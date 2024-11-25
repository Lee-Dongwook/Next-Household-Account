"use client";
import React, { useState } from "react";
import { DashboardSummary } from "@/components/organisms/DashboardSummary";
import { IncomeExpenseChart } from "@/components/organisms/IncomeExpenseChart";
import { Calendar } from "@/components/organisms/Calendar";
import { IncomeExpenseDetailsForm } from "@/components/organisms/IncomeExpenseDetailsForm";

export const DashboardTemplate = () => {
  const [selectedDate, setSelectedDate] = useState<number>(1);

  const details: {
    type: "income" | "expense";
    amount: number;
    description: string;
  }[] = [
    { type: "income", amount: 500, description: "Freelance work" },
    { type: "expense", amount: 200, description: "Groceries" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">My Dashboard</h1>
      <DashboardSummary />
      <IncomeExpenseChart />
      <div className="grid grid-cols-2 gap-6 mt-8">
        <Calendar />
        <IncomeExpenseDetailsForm
          selectedDate={selectedDate}
          details={details}
        />
      </div>
    </div>
  );
};
