import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import { useWeather } from '../context/WeatherContext';
import ToggleDark from '../components/ToggleDark';

const Hero: React.FC = () => {
  const { city } = useWeather();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
  className="bg-cover bg-center bg-no-repeat w-full py-10 text-center text-white"
  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/heroBg.jpg')` }}
>
  <h1 className="text-4xl font-bold">Weather App</h1>
  <p className="text-lg mt-2 font-semibold">
    For{' '}
    <span
      className="underline cursor-pointer relative"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      {city}
      {isDropdownOpen && <Dropdown />}
    </span>
  </p>
  <div className="mt-8">
    <ToggleDark />
  </div>
</div>

  );
};

export default Hero;
