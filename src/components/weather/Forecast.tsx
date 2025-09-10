import { Forecast as ForecastType } from '@/types/weather';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WeatherIcon } from './WeatherIcon';

interface ForecastProps {
  data: ForecastType[];
}

const ForecastCard = ({ item }: { item: ForecastType }) => (
  <div className="flex flex-col items-center justify-between p-4 bg-white/20 dark:bg-slate-800/30 rounded-lg text-center h-full">
    <div>
      <p className="font-bold text-lg text-slate-800 dark:text-slate-100">{item.day}</p>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.date}</p>
    </div>
    <div className="w-12 h-12 text-yellow-500 my-2">
      <WeatherIcon icon={item.icon} />
    </div>
    <div>
      <p className="font-semibold text-slate-800 dark:text-slate-200">{item.high}° / {item.low}°</p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.condition}</p>
    </div>
  </div>
);

export default function Forecast({ data }: ForecastProps) {
  return (
    <Card className="w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border-slate-300/50 dark:border-slate-700/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-100">5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {data.map((item) => (
            <ForecastCard key={item.date} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}