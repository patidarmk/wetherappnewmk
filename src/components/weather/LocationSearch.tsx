import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface LocationSearchProps {
  onSearch: (city: string) => void;
}

export default function LocationSearch({ onSearch }: LocationSearchProps) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center space-x-2 mx-auto">
      <Input
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border-slate-300 dark:border-slate-700"
      />
      <Button type="submit" className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </form>
  );
}