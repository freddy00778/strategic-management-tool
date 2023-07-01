import React, { useState } from "react";

// Helper function to get the number of days in a month
function getDaysInMonth(month: number, year: number): number[] {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date).getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
}

// Helper function to get the first day of the month
function getFirstDayOfMonth(month: number, year: number): number {
  const date = new Date(year, month, 1);
  return date.getDay();
}

const CalendarComponent: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());
  const firstDay = getFirstDayOfMonth(date.getMonth(), date.getFullYear());

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDate = new Date(
      date.getFullYear(),
      parseInt(event.target.value),
      1
    );
    setDate(newDate);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(parseInt(event.target.value), date.getMonth(), 1);
    setDate(newDate);
  };

  return (
    <div>
      <select value={date.getMonth()} onChange={handleMonthChange}>
        {Array.from({ length: 12 }, (_, i) => i).map((month) => (
          <option key={month} value={month}>
            {month + 1}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={date.getFullYear()}
        onChange={handleYearChange}
      />
      <div className="calendar">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, index) => (
          <div className="day-header" key={day}>
            {day}
          </div>
        ))}
        {Array.from({ length: firstDay }, (_, i) => i).map((_, index) => (
          <div className="day" key={`empty-${index}`} />
        ))}
        {daysInMonth.map((day) => (
          <div className="day" key={day}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;
