"use client";
import React, { useState } from "react";
import { CalendarGrid } from "../molecules/CalendarGrid";

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<number>(1);
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Select a Date</h2>
      <CalendarGrid
        days={days}
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />
    </div>
  );
};
