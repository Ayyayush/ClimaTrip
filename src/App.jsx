import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Heart, 
  Filter,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Car,
  Coffee,
  Waves,
  Sun,
  Cloud,
  CloudRain,
  Thermometer,
  Wind,
  Eye,
  Droplets
} from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [preferredWeather, setPreferredWeather] = useState('sunny');
  const [currentDestination, setCurrentDestination] = useState(0);

  const weatherPreferences = [
    { id: 'sunny', label: 'Sunny & Warm', icon: <Sun className="h-5 w-5" />, temp: '25-30°C' },
    { id: 'mild', label: 'Mild & Pleasant', icon: <Cloud className="h-5 w-5" />, temp: '18-25°C' },
    { id: 'cool', label: 'Cool & Fresh', icon: <Wind className="h-5 w-5" />, temp: '10-18°C' },
    { id: 'tropical', label: 'Tropical', icon: <Waves className="h-5 w-5" />, temp: '28-35°C' }
  ];

  const destinations = [
    {
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/161901/santorini-greece-island-161901.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$299',
      rating: 4.8,
      description: 'Perfect sunny weather with gentle breeze',
      weather: {
        temp: '28°C',
        condition: 'Sunny',
        humidity: '65%',
        wind: '12 km/h',
        icon: <Sun className="h-6 w-6 text-yellow-500" />
      },
      forecast: [
        { day: 'Today', temp: '28°C', icon: <Sun className="h-4 w-4" /> },
        { day: 'Tomorrow', temp: '29°C', icon: <Sun className="h-4 w-4" /> },
        { day: 'Wed', temp: '27°C', icon: <Cloud className="h-4 w-4" /> }
      ]
    },
    {
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$189',
      rating: 4.9,
      description: 'Tropical paradise with warm temperatures',
      weather: {
        temp: '32°C',
        condition: 'Partly Cloudy',
        humidity: '78%',
        wind: '8 km/h',
        icon: <Cloud className="h-6 w-6 text-gray-500" />
      },
      forecast: [
        { day: 'Today', temp: '32°C', icon: <Cloud className="h-4 w-4" /> },
        { day: 'Tomorrow', temp: '31°C', icon: <CloudRain className="h-4 w-4" /> },
        { day: 'Wed', temp: '30°C', icon: <Sun className="h-4 w-4" /> }
      ]
    },
    {
      name: 'Kyoto, Japan',
      image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$349',
      rating: 4.7,
      description: 'Pleasant spring weather, perfect for sightseeing',
      weather: {
        temp: '22°C',
        condition: 'Mild',
        humidity: '55%',
        wind: '15 km/h',
        icon: <Cloud className="h-6 w-6 text-blue-400" />
      },
      forecast: [
        { day: 'Today', temp: '22°C', icon: <Cloud className="h-4 w-4" /> },
        { day: 'Tomorrow', temp: '24°C', icon: <Sun className="h-4 w-4" /> },
        { day: 'Wed', temp: '21°C', icon: <CloudRain className="h-4 w-4" /> }
      ]
    },
    {
      name: 'Maldives',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$599',
      rating: 4.9,
      description: 'Consistently warm with ocean breeze',
      weather: {
        temp: '30°C',
        condition: 'Sunny',
        humidity: '72%',
        wind: '10 km/h',
        icon: <Sun className="h-6 w-6 text-yellow-500" />
      },
      forecast: [
        { day: 'Today', temp: '30°C', icon: <Sun className="h-4 w-4" /> },
        { day: 'Tomorrow', temp: '31°C', icon: <Sun className="h-4 w-4" /> },
        { day: 'Wed', temp: '29°C', icon: <Cloud className="h-4 w-4" /> }
      ]
    }
  ];

  const accommodations = [
    {
      id: 1,
      name: 'Luxury Oceanview Villa',
      location: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 450,
      rating: 4.9,
      reviews: 324,
      amenities: ['wifi', 'car', 'coffee', 'waves'],
      description: 'Stunning villa with panoramic ocean views',
      weather: {
        temp: '28°C',
        condition: 'Perfect for outdoor activities',
        icon: <Sun className="h-4 w-4 text-yellow-500" />
      }
    },
    {
      id: 2,
      name: 'Modern City Apartment',
      location: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 180,
      rating: 4.7,
      reviews: 189,
      amenities: ['wifi', 'coffee'],
      description: 'Sleek apartment in the heart of Tokyo',
      weather: {
        temp: '22°C',
        condition: 'Ideal for city exploration',
        icon: <Cloud className="h-4 w-4 text-blue-400" />
      }
    },
    {
      id: 3,
      name: 'Tropical Beach Resort',
      location: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 220,
      rating: 4.8,
      reviews: 567,
      amenities: ['wifi', 'waves', 'coffee'],
      description: 'Beachfront resort with traditional architecture',
      weather: {
        temp: '32°C',
        condition: 'Perfect beach weather',
        icon: <Sun className="h-4 w-4 text-yellow-500" />
      }
    }
  ];

  const getAmenityIcon = (amenity) => {
    const iconMap = {
      wifi: <Wifi className="h-4 w-4" />,
      car: <Car className="h-4 w-4" />,
      coffee: <Coffee className="h-4 w-4" />,
      waves: <Waves className="h-4 w-4" />
    };
    return iconMap[amenity] || null;
  };

  const nextDestination = () => {
    setCurrentDestination((prev) => (prev + 1) % destinations.length);
  };

  const prevDestination = () => {
    setCurrentDestination((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sun className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">WeatherStay</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Weather Stays</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Climate Guide</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Forecast</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Destinations</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">Sign In</button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

          {/* Search Form */}
          <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Where to?</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search destinations"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center">
              <button className="flex items-center justify-center px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Weather Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Weather-Based Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Perfect Weather Destinations</h2>
              <p className="text-gray-600 mt-2">Destinations matching your preferred climate</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`group cursor-pointer transform transition-all duration-300 ${
                  index === currentDestination ? 'scale-105' : 'hover:scale-105'
                }`}
              >
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  
                  {/* Weather Info Overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="flex items-center space-x-2">
                      {destination.weather.icon}
                      <span className="font-semibold text-sm">{destination.weather.temp}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{destination.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">{destination.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{destination.description}</p>
                    
                    {/* Weather Details */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center">
                          <Thermometer className="h-3 w-3 mr-1" />
                          <span>{destination.weather.temp}</span>
                        </div>
                        <div className="flex items-center">
                          <Droplets className="h-3 w-3 mr-1" />
                          <span>{destination.weather.humidity}</span>
                        </div>
                        <div className="flex items-center">
                          <Wind className="h-3 w-3 mr-1" />
                          <span>{destination.weather.wind}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          <span>{destination.weather.condition}</span>
                        </div>
                      </div>
                    </div>

                    {/* 3-Day Forecast */}
                    <div className="flex justify-between text-xs mb-3">
                      {destination.forecast.map((day, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-gray-500">{day.day}</div>
                          <div className="my-1">{day.icon}</div>
                          <div className="font-medium">{day.temp}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">{destination.price}</span>
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

      {/* Weather-Matched Accommodations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Weather-Perfect Stays</h2>
            <p className="text-gray-600 mt-2">Accommodations with ideal weather conditions for your dates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation) => (
              <div key={accommodation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={accommodation.image}
                    alt={accommodation.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  
                  {/* Weather Badge */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Perfect Weather
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{accommodation.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{accommodation.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2">{accommodation.location}</p>
                  <p className="text-gray-500 text-sm mb-3">{accommodation.description}</p>
                  
                  {/* Weather Info */}
                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {accommodation.weather.icon}
                        <span className="text-sm font-medium">{accommodation.weather.temp}</span>
                      </div>
                      <span className="text-xs text-gray-600">{accommodation.weather.condition}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    {accommodation.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                        {getAmenityIcon(amenity)}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${accommodation.price}</span>
                      <span className="text-gray-500 text-sm">/night</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                      Book Now
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-2">{accommodation.reviews} reviews</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Travel Weather Insights</h2>
            <p className="text-gray-600 mt-2">Make informed decisions with detailed weather forecasts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '7-Day Forecast',
                description: 'Detailed weather predictions for your entire trip',
                icon: <Calendar className="h-8 w-8 text-blue-600" />,
                features: ['Temperature trends', 'Precipitation chances', 'Wind conditions', 'UV index']
              },
              {
                title: 'Climate Matching',
                description: 'Find destinations that match your weather preferences',
                icon: <Thermometer className="h-8 w-8 text-green-600" />,
                features: ['Temperature preferences', 'Humidity levels', 'Seasonal patterns', 'Activity recommendations']
              },
              {
                title: 'Real-time Updates',
                description: 'Stay informed with live weather conditions',
                icon: <Wind className="h-8 w-8 text-purple-600" />,
                features: ['Current conditions', 'Weather alerts', 'Travel advisories', 'Packing suggestions']
              }
            ].map((insight, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    {insight.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{insight.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{insight.description}</p>
                
                <ul className="space-y-2">
                  {insight.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sun className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">WeatherStay</h3>
              </div>
              <p className="text-gray-400">
                Your smart travel companion that matches perfect weather with perfect stays.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Weather Travel</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Climate Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Weather Forecast</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Seasonal Destinations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Alerts</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Weather FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WeatherStay. All rights reserved. Travel smart, travel with perfect weather.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;