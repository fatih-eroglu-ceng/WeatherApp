import React from 'react';
import { useWeather } from '../context/WeatherContext';
import { cities } from '../consts/cities';

const Dropdown: React.FC = () => {
  const { setCity } = useWeather();

  return (
    <ul className="absolute left-0 mt-2 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded shadow-md z-50">
      {cities.map((city) => (
        <li
          key={city}
          className="p-1 hover:bg-blue-200 dark:hover:bg-blue-600 cursor-pointer rounded"
          onClick={() => setCity(city)}
        >
          {city}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
