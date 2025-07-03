import { Sun, Cloud, Wind, Waves } from 'lucide-react';

function Hero({ preferredWeather, setPreferredWeather }) {
  const weatherPreferences = [
    { id: 'sunny', label: 'Sunny & Warm', icon: <Sun className="h-5 w-5" />, temp: '25-30°C' },
    { id: 'mild', label: 'Mild & Pleasant', icon: <Cloud className="h-5 w-5" />, temp: '18-25°C' },
    { id: 'cool', label: 'Cool & Fresh', icon: <Wind className="h-5 w-5" />, temp: '10-18°C' },
    { id: 'tropical', label: 'Tropical', icon: <Waves className="h-5 w-5" />, temp: '28-35°C' }
  ];

  return (
    <section className="relative pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Travel by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Weather</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover perfect destinations based on your ideal climate. Find accommodations where the weather matches your mood.
          </p>
        </div>

        {/* Weather Preference Selector */}
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">What's your ideal weather?</h3>
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
      </div>
    </section>
  );
}

export default Hero;
