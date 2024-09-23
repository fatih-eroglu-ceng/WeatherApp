import React, { createContext, useState, useContext, ReactNode } from 'react';

interface WeatherContextType {
  city: string;
  setCity: (city: string) => void;
  selectedDay: number;
  setSelectedDay: (day: number) => void;
}

const defaultValues: WeatherContextType = {
  city: 'Eskişehir',
  setCity: () => null,
  selectedDay: 0,
  setSelectedDay: () => null
}

export const WeatherContext = createContext(defaultValues);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [city, setCity] = useState(defaultValues.city);
  const [selectedDay, setSelectedDay] = useState<number>(defaultValues.selectedDay);

  const values = { city, setCity, selectedDay, setSelectedDay }

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
