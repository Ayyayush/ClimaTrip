import { MapPin, Calendar, Users, Filter, Search } from 'lucide-react';

function SearchForm({ searchQuery, setSearchQuery, checkIn, setCheckIn, checkOut, setCheckOut, guests, setGuests }) {
  return (
    <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Destination */}
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
