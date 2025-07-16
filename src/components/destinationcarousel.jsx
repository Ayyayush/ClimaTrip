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
  // Enhanced destinations with more variety and proper images
  const enhancedDestinations = [
    {
      name: "Goa",
      image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Golden beaches with vibrant nightlife and Portuguese heritage.",
      price: "₹3,500",
      rating: 4.8,
      weather: {
        temp: "30°C",
        humidity: "70%",
        wind: "15 km/h",
        condition: "Sunny",
        icon: <span>☀️</span>,
      },
      forecast: [
        { day: "Mon", temp: "30°C", icon: <span>☀️</span> },
        { day: "Tue", temp: "31°C", icon: <span>🌤️</span> },
        { day: "Wed", temp: "29°C", icon: <span>☀️</span> },
      ],
    },
    {
      name: "Kerala Backwaters",
      image: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Serene backwaters with lush greenery and houseboats.",
      price: "₹4,200",
      rating: 4.9,
      weather: {
        temp: "28°C",
        humidity: "80%",
        wind: "12 km/h",
        condition: "Pleasant",
        icon: <span>🌤️</span>,
      },
      forecast: [
        { day: "Mon", temp: "28°C", icon: <span>🌤️</span> },
        { day: "Tue", temp: "27°C", icon: <span>🌦️</span> },
        { day: "Wed", temp: "29°C", icon: <span>☀️</span> },
      ],
    },
    {
      name: "Andaman Islands",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Crystal clear waters with pristine coral reefs.",
      price: "₹6,800",
      rating: 4.9,
      weather: {
        temp: "29°C",
        humidity: "75%",
        wind: "10 km/h",
        condition: "Perfect",
        icon: <span>🌊</span>,
      },
      forecast: [
        { day: "Mon", temp: "29°C", icon: <span>🌊</span> },
        { day: "Tue", temp: "30°C", icon: <span>☀️</span> },
        { day: "Wed", temp: "28°C", icon: <span>🌤️</span> },
      ],
    },
    {
      name: "Lakshadweep",
      image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Untouched coral islands with turquoise lagoons.",
      price: "₹8,500",
      rating: 4.8,
      weather: {
        temp: "27°C",
        humidity: "72%",
        wind: "8 km/h",
        condition: "Tropical",
        icon: <span>🏝️</span>,
      },
      forecast: [
        { day: "Mon", temp: "27°C", icon: <span>🏝️</span> },
        { day: "Tue", temp: "28°C", icon: <span>☀️</span> },
        { day: "Wed", temp: "26°C", icon: <span>🌤️</span> },
      ],
    },
    {
      name: "Pondicherry",
      image: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "French colonial charm meets pristine beaches.",
      price: "₹2,800",
      rating: 4.6,
      weather: {
        temp: "31°C",
        humidity: "68%",
        wind: "14 km/h",
        condition: "Warm",
        icon: <span>🌞</span>,
      },
      forecast: [
        { day: "Mon", temp: "31°C", icon: <span>🌞</span> },
        { day: "Tue", temp: "32°C", icon: <span>☀️</span> },
        { day: "Wed", temp: "30°C", icon: <span>🌤️</span> },
      ],
    },
    {
      name: "Gokarna",
      image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Pristine beaches with spiritual vibes and cliff views.",
      price: "₹2,200",
      rating: 4.7,
      weather: {
        temp: "26°C",
        humidity: "65%",
        wind: "16 km/h",
        condition: "Cool",
        icon: <span>🌊</span>,
      },
      forecast: [
        { day: "Mon", temp: "26°C", icon: <span>🌊</span> },
        { day: "Tue", temp: "27°C", icon: <span>🌤️</span> },
        { day: "Wed", temp: "25°C", icon: <span>☁️</span> },
      ],
    },
    {
      name: "Varkala",
      image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Dramatic cliffs overlooking the Arabian Sea.",
      price: "₹3,200",
      rating: 4.5,
      weather: {
        temp: "28°C",
        humidity: "73%",
        wind: "13 km/h",
        condition: "Pleasant",
        icon: <span>🌤️</span>,
      },
      forecast: [
        { day: "Mon", temp: "28°C", icon: <span>🌤️</span> },
        { day: "Tue", temp: "29°C", icon: <span>☀️</span> },
        { day: "Wed", temp: "27°C", icon: <span>🌦️</span> },
      ],
    },
    {
      name: "Tarkarli",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "White sand beaches perfect for water sports.",
      price: "₹2,900",
      rating: 4.4,
      weather: {
        temp: "29°C",
        humidity: "71%",
        wind: "17 km/h",
        condition: "Breezy",
        icon: <span>💨</span>,
      },
      forecast: [
        { day: "Mon", temp: "29°C", icon: <span>💨</span> },
        { day: "Tue", temp: "30°C", icon: <span>☀️</span> },
        { day: "Wed", temp: "28°C", icon: <span>🌤️</span> },
      ],
    },
  ];

  // Use enhanced destinations if original destinations array is empty or has fewer items
  const displayDestinations = destinations.length >= 4 ? destinations : enhancedDestinations;

  const nextDestination = () => {
    setCurrentDestination((prev) => (prev + 1) % displayDestinations.length);
  };

  const prevDestination = () =>
    setCurrentDestination(
      (prev) => (prev - 1 + displayDestinations.length) % displayDestinations.length
    );

  // Optional: Prevent rendering if no data
  if (!Array.isArray(displayDestinations) || displayDestinations.length === 0) {
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

        {/* Destination Cards - Show more cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayDestinations.slice(0, 8).map((destination, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                index === currentDestination ? 'scale-105' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Like Button */}
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
                      <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
                    </button>
                  </div>

                  {/* Weather Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      {destination.weather?.icon}
                      <span className="font-semibold text-sm text-gray-800">
                        {destination.weather?.temp}
                      </span>
                    </div>
                  </div>

                  {/* Location overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-lg text-white mb-1">
                      {destination.name}
                    </h3>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">
                        {destination.rating}
                      </span>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                      {destination.weather?.condition}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {destination.description}
                  </p>

                  {/* Weather Details */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center">
                        <Thermometer className="h-3 w-3 mr-1 text-orange-500" />
                        <span>{destination.weather?.temp}</span>
                      </div>
                      <div className="flex items-center">
                        <Droplets className="h-3 w-3 mr-1 text-blue-500" />
                        <span>{destination.weather?.humidity}</span>
                      </div>
                      <div className="flex items-center">
                        <Wind className="h-3 w-3 mr-1 text-green-500" />
                        <span>{destination.weather?.wind}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1 text-purple-500" />
                        <span>{destination.weather?.condition}</span>
                      </div>
                    </div>
                  </div>

                  {/* 3-Day Forecast */}
                  <div className="flex justify-between text-xs mb-3 bg-blue-50 rounded-lg p-2">
                    {Array.isArray(destination.forecast) &&
                      destination.forecast.map((day, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-gray-500 font-medium">{day.day}</div>
                          <div className="my-1">{day.icon}</div>
                          <div className="font-medium text-gray-800">{day.temp}</div>
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
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
                      View Stays
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-semibold shadow-lg hover:shadow-xl">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}

export default DestinationCarousel;