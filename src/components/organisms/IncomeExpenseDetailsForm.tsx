import React from "react";
import { DetailsList } from "@/components/molecules/DetailsList";

type IncomeExpenseDetailsFormProps = {
  selectedDate: number;
  details: {
    type: "income" | "expense";
    amount: number;
    description: string;
  }[];
};

export const IncomeExpenseDetailsForm: React.FC<
  IncomeExpenseDetailsFormProps
> = ({ selectedDate, details }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">Details for {selectedDate}</h2>
    <DetailsList details={details} />
  </div>
);
