import React from 'react';

interface WeatherDaysProps {
  weatherData: any;
  setSelectedDay: (day: number) => void;
}

const WeatherDays: React.FC<WeatherDaysProps> = ({ weatherData, setSelectedDay }) => {
  const days = weatherData.list
    .filter((day: any, index: number, self: any) => {
      const currentDate = new Date(day.dt_txt).getDate();
      return index === self.findIndex((d: any) => new Date(d.dt_txt).getDate() === currentDate);
    })
    .slice(0, 5);
  return (
    <div className="w-full px-4 md:px-8 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {days.map((day: any, index: number) => (
        <div
          key={index}
          className="bg-white  p-4 rounded-lg shadow transform transition duration-500  hover:bg-blue-100 hover:scale-105 cursor-pointer text-center"
          onClick={() => setSelectedDay(index)}
        >
          <p className="font-semibold">{new Date(day.dt_txt).toLocaleDateString()}</p>
          <p className="text-gray-600">Temp: {day.main.temp}°C</p>
          <p className="text-gray-600">Weather: {day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDays;
