import React from 'react';
import { Sun, Cloud, Wind, Waves } from 'lucide-react';

const weatherPreferences = [
  { id: 'sunny', label: 'Sunny & Warm', icon: <Sun className="h-5 w-5" />, temp: '25-30°C' },
  { id: 'mild', label: 'Mild & Pleasant', icon: <Cloud className="h-5 w-5" />, temp: '18-25°C' },
  { id: 'cool', label: 'Cool & Fresh', icon: <Wind className="h-5 w-5" />, temp: '10-18°C' },
  { id: 'tropical', label: 'Tropical', icon: <Waves className="h-5 w-5" />, temp: '28-35°C' }
];

function WeatherPreference({ preferredWeather, setPreferredWeather }) {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        What's your ideal weather?
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {weatherPreferences.map((weather) => (
          <button
            key={weather.id}
            onClick={() => setPreferredWeather(weather.id)}
            className={`p-4 rounded-xl border-2 transition-all ${
              preferredWeather === weather.id
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex flex-col items-center space-y-2">
              {weather.icon}
              <span className="font-medium text-sm">{weather.label}</span>
              <span className="text-xs text-gray-500">{weather.temp}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default WeatherPreference;
