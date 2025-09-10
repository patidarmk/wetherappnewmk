import { WeatherData } from '@/types/weather';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WeatherIcon } from './WeatherIcon';
import { Droplets, Gauge, Sunrise, Sunset, Thermometer, Wind, Eye, Sun } from 'lucide-react';

interface CurrentWeatherProps {
  data: WeatherData;
}

const InfoWidget = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string | number }) => (
    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-lg">
        <Icon className="h-6 w-6 text-slate-700 dark:text-slate-300 mb-1" />
        <p className="text-sm text-slate-600 dark:text-slate-400">{label}</p>
        <p className="font-bold text-lg text-slate-800 dark:text-slate-100">{value}</p>
    </div>
);

export default function CurrentWeather({ data }: CurrentWeatherProps) {
  const { city, country, current } = data;

  return (
    <Card className="w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border-slate-300/50 dark:border-slate-700/50 shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-3xl font-bold text-slate-800 dark:text-slate-100">
          {city}, {country}
        </CardTitle>
        <p className="text-slate-600 dark:text-slate-400">As of {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 text-yellow-500">
            <WeatherIcon icon={current.icon} />
          </div>
          <p className="text-7xl font-extrabold text-slate-900 dark:text-white">{current.temperature}°</p>
          <p className="text-xl font-medium text-slate-700 dark:text-slate-300">{current.condition}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <InfoWidget icon={Thermometer} label="Feels Like" value={`${current.feelsLike}°`} />
            <InfoWidget icon={Droplets} label="Humidity" value={`${current.humidity}%`} />
            <InfoWidget icon={Wind} label="Wind" value={`${current.windSpeed} mph`} />
            <InfoWidget icon={Sun} label="UV Index" value={current.uvIndex} />
            <InfoWidget icon={Gauge} label="Pressure" value={`${current.pressure} hPa`} />
            <InfoWidget icon={Eye} label="Visibility" value={current.visibility} />
        </div>
      </CardContent>
    </Card>
  );
}