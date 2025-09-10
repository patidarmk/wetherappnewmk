import { useState } from 'react';
import { weatherData } from '@/data/weatherData';
import { WeatherData } from '@/types/weather';
import LocationSearch from '@/components/weather/LocationSearch';
import CurrentWeather from '@/components/weather/CurrentWeather';
import Forecast from '@/components/weather/Forecast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

const Index = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState<WeatherData | null>(weatherData[0]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (city: string) => {
    const cityData = weatherData.find(
      (data) => data.city.toLowerCase() === city.toLowerCase()
    );

    if (cityData) {
      setCurrentWeatherData(cityData);
      setError(null);
    } else {
      setError(`Weather data for "${city}" not found. Please try "New York", "London", "Tokyo", or "Sydney".`);
      setCurrentWeatherData(null);
    }
  };

  return (
    <div className="space-y-8">
      <LocationSearch onSearch={handleSearch} />

      {error && (
        <Alert variant="destructive" className="max-w-md mx-auto bg-red-500/10 border-red-500/50 text-red-800 dark:text-red-300">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {currentWeatherData && (
        <div className="space-y-8">
          <CurrentWeather data={currentWeatherData} />
          <Forecast data={currentWeatherData.forecast} />
        </div>
      )}
    </div>
  );
};

export default Index;