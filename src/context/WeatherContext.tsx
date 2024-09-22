import React, { createContext, useState, useContext } from 'react';
import { useFetchWeather } from '../hooks/useFetchWeather';
import { useSelectedDay } from '../hooks/useSelectedDay';
import { useFilteredWeather } from '../hooks/useFilteredWeather';
import { WeatherContextType } from '../types/types';


export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [city, setCity] = useState('Eskişehir'); 
  const { weatherData, error, isLoading } = useFetchWeather(city);
  const { selectedDay, selectDay } = useSelectedDay();

  const filteredWeather = useFilteredWeather(weatherData);

  if (error) return <div>Failed to load weather data</div>;

  return (
    <WeatherContext.Provider value={{ weatherData: weatherData ? { ...weatherData, list: filteredWeather } : undefined, selectedDay, selectDay, city, setCity, isLoading }}>
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
