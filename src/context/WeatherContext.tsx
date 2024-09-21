import React, { createContext, useContext } from 'react';
import { useFetchWeather } from '../hooks/useFetchWeather';
import { useSelectedDay } from '../hooks/useSelectedDay';
import { useFilteredWeather } from '../hooks/useFilteredWeather';
import { Root } from '../types';

interface WeatherContextType {
  weatherData: Root | undefined;
  selectedDay: number;
  selectDay: (day: number) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { weatherData, error, isLoading } = useFetchWeather("Istanbul");
  const { selectedDay, selectDay } = useSelectedDay();

  const filteredWeather = useFilteredWeather(weatherData);

  if (error) return <div>Failed to load weather data</div>;
  if (isLoading) return <div>Loading weather data...</div>;

  return (
    <WeatherContext.Provider value={{ weatherData: weatherData ? { ...weatherData, list: filteredWeather } : undefined, selectedDay, selectDay }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
