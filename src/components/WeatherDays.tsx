import React from 'react';
import { useWeather } from '../context/WeatherContext';
import { useFetchWeather } from '../hooks/useFetchWeather';
import { filterWeatherData } from '../utils/filterWeatherData';
import { List } from '../types/types';

const WeatherDays: React.FC = () => {
  const { city, setSelectedDay } = useWeather();
  const { weatherData, error, isLoading } = useFetchWeather(city);

  if (isLoading) return <div>Loading...</div>;
  if (error || !weatherData || !weatherData.list) return <div>No data available</div>;

  const filteredWeather = filterWeatherData(weatherData.list);

  return (
    <div className="w-full mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 md:px-8">
      {filteredWeather.map((day: List, index: number) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow hover:bg-blue-200 hover:shadow-lg hover:scale-105 transform transition-transform duration-300 cursor-pointer text-center"
          onClick={() => setSelectedDay(index)}
        >
          <p className="font-semibold">{new Date(day.dt_txt).toLocaleDateString()}</p>
          <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Weather Icon" className="mx-auto" />
          <p className="text-gray-600">Temp: {day.main.temp}°C</p>
          <p className="text-gray-600">Weather: {day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDays;
