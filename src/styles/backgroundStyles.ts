export const getBackgroundClass = (weatherType: string): string => {
    switch (weatherType) {
      case 'Clear':
        return 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500';
      case 'Clouds':
        return 'bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500';
      case 'Rain':
        return 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600';
      case 'Snow':
        return 'bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400';
      case 'Thunderstorm':
        return 'bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800';
      default:
        return 'bg-gradient-to-r from-green-400 via-green-500 to-green-600';
    }
  };
  