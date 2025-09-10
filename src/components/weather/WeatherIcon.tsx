import { LucideProps } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

interface WeatherIconProps extends LucideProps {
  icon: React.ElementType<LucideProps>;
}

export function WeatherIcon({ icon: Icon, className, ...props }: WeatherIconProps) {
  return <Icon className={cn('h-full w-full', className)} {...props} />;
}