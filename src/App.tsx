import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import Hero from './components/Hero';
import WeatherDays from './components/WeatherDays';
import WeatherDetail from './components/WeatherDetail';

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-gray-200 flex flex-col items-center">
        <Hero />
        <WeatherDays />
        <WeatherDetail />
      </div>
    </WeatherProvider>
  );
};

export default App;