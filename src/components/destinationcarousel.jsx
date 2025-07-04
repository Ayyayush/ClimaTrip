import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Star,
  Thermometer,
  Droplets,
  Wind,
  Eye,
} from 'lucide-react';

function DestinationCarousel({
  destinations = [],
  currentDestination,
  setCurrentDestination,
}) {
  const nextDestination = () => {
    setCurrentDestination((prev) => (prev + 1) % destinations.length);
  };

  const prevDestination = () =>
    setCurrentDestination(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );

  // Optional: Prevent rendering if no data
  if (!Array.isArray(destinations) || destinations.length === 0) {
    return (
      <div className="text-center text-gray-500 py-20 text-xl">
        No destinations available.
      </div>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Perfect Weather Destinations
            </h2>
            <p className="text-gray-600 mt-2">
              Destinations matching your preferred climate
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevDestination}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextDestination}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(destinations) &&
            destinations.map((destination, index) => (
              <div
                key={index}
                className={`group cursor-pointer transform transition-all duration-300 ${
                  index === currentDestination
                    ? 'scale-105'
                    : 'hover:scale-105'
                }`}
              >
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Like Button */}
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Weather Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="flex items-center space-x-2">
                      {destination.weather?.icon}
                      <span className="font-semibold text-sm">
                        {destination.weather?.temp}
                      </span>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">
                        {destination.name}
                      </h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">
                          {destination.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">
                      {destination.description}
                    </p>

                    {/* Weather Details */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center">
                          <Thermometer className="h-3 w-3 mr-1" />
                          <span>{destination.weather?.temp}</span>
                        </div>
                        <div className="flex items-center">
                          <Droplets className="h-3 w-3 mr-1" />
                          <span>{destination.weather?.humidity}</span>
                        </div>
                        <div className="flex items-center">
                          <Wind className="h-3 w-3 mr-1" />
                          <span>{destination.weather?.wind}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          <span>{destination.weather?.condition}</span>
                        </div>
                      </div>
                    </div>

                    {/* 3-Day Forecast */}
                    <div className="flex justify-between text-xs mb-3">
                      {Array.isArray(destination.forecast) &&
                        destination.forecast.map((day, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-gray-500">{day.day}</div>
                            <div className="my-1">{day.icon}</div>
                            <div className="font-medium">{day.temp}</div>
                          </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">
                          {destination.price}
                        </span>
                        <span className="text-gray-500 text-sm">/night</span>
                      </div>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        View Stays
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationCarousel;
