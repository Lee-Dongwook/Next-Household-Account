import React from "react";
import { LegendItem } from "@/components/atoms/LegendItem";

type ChartLegendProps = {
  items: { color: string; label: string }[];
};

export const ChartLegend = ({ items }: ChartLegendProps) => {
  return (
    <div className="flex space-x-4 mt-4">
      {items.map((item, index) => (
        <LegendItem key={index} color={item.color} label={item.label} />
      ))}
    </div>
  );
};
