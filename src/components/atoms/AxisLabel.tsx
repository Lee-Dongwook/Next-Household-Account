import React from "react";

type AxisLabelProps = {
  label: string;
  position: "top" | "bottom" | "left" | "right";
};

export const AxisLabel = ({ label, position }: AxisLabelProps) => {
  return (
    <div
      className={`text-sm font-medium ${
        position === "top" || position === "bottom"
          ? "text-center"
          : "text-left"
      }`}
    >
      {label}
    </div>
  );
};
