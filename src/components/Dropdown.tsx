import React from 'react';
import { useCity } from '../hooks/useCity';
import { cities } from '../data/cities';

const Dropdown: React.FC = () => {
  const { setCity } = useCity();

  return (
    <ul className="absolute left-0 mt-2 bg-white text-black p-2 rounded shadow-md z-50">
      {cities.map((city) => (
        <li
          key={city}
          className="p-1 hover:bg-blue-200 cursor-pointer rounded"
          onClick={() => setCity(city)}
        >
          {city}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
