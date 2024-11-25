import React from "react";

type CustomTooltipProps = {
  active?: boolean;
  payload?: { value: number; name: string }[];
  label?: string;
};

export const CustomTooltip = ({
  active,
  payload,
  label,
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 p-2 shadow-md rounded-md">
        <p className="font-bold">{label}</p>
        {payload.map((item, index) => (
          <div key={index} className="text-sm">
            <span>{item.name}:</span> ${item.value}
          </div>
        ))}
      </div>
    );
  }

  return null;
};
