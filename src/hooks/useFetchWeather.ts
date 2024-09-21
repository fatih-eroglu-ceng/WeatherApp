import useSWR from 'swr';
import { Root } from '../types';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const useFetchWeather = (city: string) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  const { data, error } = useSWR<Root>(apiUrl, fetcher);

  return {
    weatherData: data,
    error,
    isLoading: !error && !data
  };
};
