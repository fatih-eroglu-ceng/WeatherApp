import React from 'react';

interface WeatherDetailProps {
  dayData: any;
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({ dayData }) => {
  if (!dayData) return null;

  return (
    <div className="w-full md:w-1/3 text-center mt-10 p-5 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Detailed Weather</h2>
      <p>Date: {new Date(dayData.dt_txt).toLocaleDateString()}</p>
      <p>Temperature: {dayData.main.temp}°C</p>
      <p>Humidity: {dayData.main.humidity}%</p>
      <p>Wind Speed: {dayData.wind.speed} km/h</p>
      <p>Weather: {dayData.weather[0].description}</p>
    </div>
  );
};

export default WeatherDetail;
