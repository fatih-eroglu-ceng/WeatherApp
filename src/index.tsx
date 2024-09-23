import React from 'react';
import ReactDOM from 'react-dom/client'; // Değişiklik burada
import './index.css';
import App from './App';
import { WeatherProvider } from './context/WeatherContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
