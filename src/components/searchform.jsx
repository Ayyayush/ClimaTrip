import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, Users, Filter, Search, ChevronDown } from 'lucide-react';

const destinations = [
  {
    id: '1',
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tropical paradise with beaches and temples'
  },
  {
    id: '2',
    name: 'Paris',
    country: 'France',
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'City of lights and romance'
  },
  {
    id: '3',
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern metropolis with rich culture'
  },
  {
    id: '4',
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Beautiful Greek island with white buildings'
  },
  {
    id: '5',
    name: 'New York',
    country: 'USA',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The city that never sleeps'
  },
  {
    id: '6',
    name: 'Dubai',
    country: 'UAE',
    image: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxury destination with stunning architecture'
  },
  {
    id: '7',
    name: 'Goa',
    country: 'India',
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Beautiful beaches and Portuguese heritage'
  },
  {
    id: '8',
    name: 'Kerala',
    country: 'India',
    image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Backwaters, beaches and spice plantations'
  },
  {
    id: '9',
    name: 'Andaman Islands',
    country: 'India',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Pristine beaches and crystal clear waters'
  },
  {
    id: '10',
    name: 'Lakshadweep',
    country: 'India',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Coral islands with turquoise lagoons'
  },
  {
    id: '11',
    name: 'Pondicherry',
    country: 'India',
    image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'French colonial charm meets Indian beaches'
  }
];

function SearchForm({ 
  searchQuery, 
  setSearchQuery, 
  checkIn, 
  setCheckIn, 
  checkOut, 
  setCheckOut, 
  guests, 
  setGuests,
  selectedDestination,
  setSelectedDestination 
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = destinations.filter(dest =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredDestinations(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDestinationSelect = (destination) => {
    setSearchQuery(destination.name);
    setSelectedDestination(destination);
    setShowSuggestions(false);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Destination with Autocomplete */}
        <div className="relative" ref={searchRef}>
          <label className="block text-sm font-medium text-gray-700 mb-2">Where to?</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery && setShowSuggestions(true)}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
          </div>
          
          {/* Suggestions Dropdown */}
          {showSuggestions && filteredDestinations.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {filteredDestinations.map((destination) => (
                <div
                  key={destination.id}
                  onClick={() => handleDestinationSelect(destination)}
                  className="flex items-center p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-10 h-10 rounded-lg object-cover mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{destination.name}</div>
                    <div className="text-sm text-gray-500">{destination.country}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Check-in Date */}
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

        {/* Check-out Date */}
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

        {/* Guests */}
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

        {/* Search Button */}
        <div className="flex items-end">
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="mt-4 flex justify-center">
        <button className="flex items-center justify-center px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          <Filter className="h-4 w-4 mr-2" />
          Advanced Weather Filters
        </button>
      </div>
    </div>
  );
}

export default SearchForm;