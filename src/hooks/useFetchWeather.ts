import useSWR from 'swr';
import { Root } from '../types/types';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const useFetchWeather = (city: string) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const apiUrl = `${process.env.REACT_APP_OPENWEATHER_URL}/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  const { data, ...rest } = useSWR<Root>(apiUrl, fetcher);

  return {
    weatherData: data,
    ...rest
  };
};