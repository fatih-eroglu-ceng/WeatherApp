import { Root, List } from '../types/types';

export const useFilteredWeather = (weatherData: Root | undefined): List[] => {

  if (!weatherData || !weatherData.list) {
    return [];
  }

  return weatherData.list
    .filter((item: List) => {
      const hour = new Date(item.dt_txt).getHours();
      return hour === 12;
    })
    .slice(0, 5); 
};
