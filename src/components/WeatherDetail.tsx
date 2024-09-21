import React from 'react';
import { useWeather } from '../context/WeatherContext';
import { List } from '../types';
import { getBackgroundClass } from '../styles/backgroundStyles';

const WeatherDetail: React.FC = () => {
  const { weatherData, selectedDay } = useWeather();

  if (!weatherData || !weatherData.list) return null;

  const dayData: List = weatherData.list[selectedDay];
console.log(dayData.weather[0].main);
  return (
    <div className={`w-4/5 mt-10 p-5 rounded-lg shadow text-center ${getBackgroundClass(dayData.weather[0].main)}`}>
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
