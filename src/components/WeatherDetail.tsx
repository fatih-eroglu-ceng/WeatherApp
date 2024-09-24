import React from 'react';
import { useWeather } from '../context/WeatherContext';
import { useFetchWeather } from '../hooks/useFetchWeather';
import { List } from '../types/types';
import { getBackgroundClass } from '../styles/backgroundStyles';
import { filterWeatherData } from '../utils/filterWeatherData';

const WeatherDetail: React.FC = () => {
  const { city, selectedDay } = useWeather();
  const { weatherData, error, isLoading } = useFetchWeather(city);

  if (isLoading) return <div>Loading...</div>;
  if (error || !weatherData || !weatherData.list) return <div>No data available</div>;

  const filteredWeather = filterWeatherData(weatherData.list);

  const dayData: List = filteredWeather[selectedDay];

  return (
    <div className={`w-4/5 sm:w-3/5 mt-10 p-5 rounded-lg shadow text-center mb-8 ${getBackgroundClass(dayData.weather[0].main)}`}>
      <h2 className="text-2xl font-bold mb-4 text-black">Detailed Weather</h2>
      <p className="text-black font-semibold">Date: {new Date(dayData.dt_txt).toLocaleDateString()}</p>
      <p className="text-black font-semibold">Temperature: {dayData.main.temp}°C</p>
      <p className="text-black font-semibold">Humidity: {dayData.main.humidity}%</p>
      <p className="text-black font-semibold">Wind Speed: {dayData.wind.speed} km/h</p>
      <p className="text-black font-semibold">Weather: {dayData.weather[0].description}</p>
    </div>

  );
};

export default WeatherDetail;
