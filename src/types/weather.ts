import { LucideProps } from 'lucide-react';
import React from 'react';

export interface Forecast {
  day: string;
  date: string;
  high: number;
  low: number;
  condition: string;
  icon: React.ElementType<LucideProps>;
}

export interface CurrentWeather {
  temperature: number;
  condition: string;
  icon: React.ElementType<LucideProps>;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  uvIndex: number;
  pressure: number;
  visibility: string;
}

export interface WeatherData {
  city: string;
  country: string;
  current: CurrentWeather;
  forecast: Forecast[];
}