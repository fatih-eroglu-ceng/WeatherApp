import { useState } from 'react';

export const useSelectedDay = () => {
  const [selectedDay, setSelectedDay] = useState<number>(0);

  const selectDay = (day: number) => {
    setSelectedDay(day);
  };

  return {
    selectedDay,
    selectDay
  };
};
