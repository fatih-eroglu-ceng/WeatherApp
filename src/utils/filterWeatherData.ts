import { List } from '../types/types';

export const filterWeatherData = (list: List[]): List[] => {
  const filteredDays: List[] = [];

  list.forEach(item => {
    const date = new Date(item.dt_txt);
    const hour = date.getHours();
    
    if (hour === 12) {
      filteredDays.push(item);
    }
  });
  return filteredDays;
};
