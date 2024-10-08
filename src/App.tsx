import React from 'react';
import Hero from './components/Hero';
import WeatherDays from './components/WeatherDays';
import WeatherDetail from './components/WeatherDetail';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-800 flex flex-col items-center">
      <Hero />
      <WeatherDays />
      <WeatherDetail />
    </div>
  );
};

export default App;
