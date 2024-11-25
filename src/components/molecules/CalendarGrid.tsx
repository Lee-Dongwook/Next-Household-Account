import React from "react";
import { DateCell } from "@/components/atoms/DateCell";

type CalendarGridProps = {
  days: number[];
  selectedDate: number;
  onDateSelect: (date: number) => void;
};

export const CalendarGrid = ({
  days,
  selectedDate,
  onDateSelect,
}: CalendarGridProps) => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day) => (
        <DateCell
          key={day}
          date={day}
          isSelected={day === selectedDate}
          onClick={() => onDateSelect(day)}
        />
      ))}
    </div>
  );
};
