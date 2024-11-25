import React from "react";

type DetailItemProps = {
  type: "income" | "expense";
  amount: number;
  description: string;
};

export const DetailItem: React.FC<DetailItemProps> = ({
  type,
  amount,
  description,
}) => (
  <div className="flex justify-between items-center p-2 border-b">
    <span
      className={`font-semibold ${
        type === "income" ? "text-green-500" : "text-red-500"
      }`}
    >
      {type === "income" ? "Income" : "Expense"}
    </span>
    <span>{description}</span>
    <span>${amount}</span>
  </div>
);
