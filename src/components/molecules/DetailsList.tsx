import React from "react";
import { DetailItem } from "@/components/atoms/DetailItem";

type DetailsListProps = {
  details: {
    type: "income" | "expense";
    amount: number;
    description: string;
  }[];
};

export const DetailsList = ({ details }: DetailsListProps) => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      {details.map((detail, index) => (
        <DetailItem key={index} {...detail} />
      ))}
    </div>
  );
};
