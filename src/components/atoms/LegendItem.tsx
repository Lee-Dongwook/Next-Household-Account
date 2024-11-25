import React from "react";

type LegendItemProps = {
  color: string;
  label: string;
};

export const LegendItem = ({ color, label }: LegendItemProps) => {
  return (
    <div className="flex items-center space-x-2">
      <span
        className="w-4 h-4 rounded-full"
        style={{ backgroundColor: color }}
      ></span>
      <span className="text-sm">{label}</span>
    </div>
  );
};
