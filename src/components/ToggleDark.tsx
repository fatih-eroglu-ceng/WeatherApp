import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-block w-16 h-8">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <span
          className={`absolute cursor-pointer inset-0 rounded-full transition duration-300 ${
            theme === 'light' ? 'bg-gray-300' : 'bg-gray-800'
          }`}
        />
        <span
          className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition transform duration-300 ${
            theme === 'dark' ? 'translate-x-8' : ''
          }`}
        />
        <span className="absolute left-2 top-2 text-xs text-gray-800 dark:text-white transition transform duration-300 dark:translate-x-8">
          {theme === 'light' ? '☀️' : '🌙' }
        </span>
      </label>
    </div>
  );
};

export default ToggleButton;
