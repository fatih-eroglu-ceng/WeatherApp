import React, { useState } from 'react';
import useSWR from 'swr';
import Hero from './components/Hero';
import WeatherDays from './components/WeatherDays';
import WeatherDetail from './components/WeatherDetail';

export interface GetWeatherRequest {
  cod: string
  message: number
  cnt: number
  list: List[]
  city: City
}

export interface List {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  sys: Sys
  dt_txt: string
  rain?: Rain
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Clouds {
  all: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Sys {
  pod: string
}

export interface Rain {
  "3h": number
}

export interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface Coord {
  lat: number
  lon: number
}


const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

const App: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(0);

  const apiKey: string | undefined = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const city: string = "Eskisehir";
  const apiUrl: string = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;


  const { data: weatherData, error } = useSWR<GetWeatherRequest>(apiUrl, fetcher);

  if (error) return <div>Failed to load weather data</div>;
  if (!weatherData || !weatherData.list) return <div>Loading weather data...</div>;

  const filteredDays = weatherData.list
    .filter((day: any, index: number, self: any) => {
      const currentDate = new Date(day.dt_txt).getDate();
      return index === self.findIndex((d: any) => new Date(d.dt_txt).getDate() === currentDate);
    })
    .slice(0, 5);


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Hero />
      {weatherData ? (
        <>
          <WeatherDays weatherData={{ list: filteredDays }} setSelectedDay={setSelectedDay} />
         
          {selectedDay !== null && (
            <WeatherDetail dayData={filteredDays[selectedDay]} />
          )}
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default App;
