import React from "react";

type DateCellProps = {
  date: number;
  isSelected: boolean;
  onClick: () => void;
};

export const DateCell = ({ date, isSelected, onClick }: DateCellProps) => {
  return (
    <div
      className={`p-2 border rounded-md cursor-pointer ${
        isSelected ? "bg-blue-500 text-white" : "bg-white"
      }`}
      onClick={onClick}
    >
      {date}
    </div>
  );
};
