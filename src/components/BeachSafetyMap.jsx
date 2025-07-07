import React, { useState, useEffect } from 'react';
import { MapPin, Layers, Filter, Search } from 'lucide-react';

const BeachSafetyMap = () => {
  const [mapView, setMapView] = useState('safety'); // safety, activities, alerts
  const [selectedState, setSelectedState] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock beach locations with coordinates
  const beachLocations = [
    { id: 1, name: 'Marina Beach', state: 'Tamil Nadu', lat: 13.0475, lng: 80.2824, safety: 'safe' },
    { id: 2, name: 'Goa Beach', state: 'Goa', lat: 15.2993, lng: 74.1240, safety: 'caution' },
    { id: 3, name: 'Kovalam Beach', state: 'Kerala', lat: 8.4004, lng: 76.9784, safety: 'unsafe' },
    { id: 4, name: 'Puri Beach', state: 'Odisha', lat: 19.8135, lng: 85.8312, safety: 'safe' },
    { id: 5, name: 'Digha Beach', state: 'West Bengal', lat: 21.6667, lng: 87.5167, safety: 'caution' },
  ];

  const states = ['all', 'Tamil Nadu', 'Goa', 'Kerala', 'Odisha', 'West Bengal'];

  const getSafetyColor = (safety) => {
    switch (safety) {
      case 'safe': return '#10b981';
      case 'caution': return '#f59e0b';
      case 'unsafe': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const filteredBeaches = beachLocations.filter(beach => {
    const matchesState = selectedState === 'all' || beach.state === selectedState;
    const matchesSearch = beach.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesState && matchesSearch;
  });

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
      {/* Map Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Interactive Beach Safety Map</h2>
          <div className="flex items-center space-x-2">
            <Layers className="h-5 w-5 text-gray-600" />
            <select
              value={mapView}
              onChange={(e) => setMapView(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
            >
              <option value="safety">Safety Status</option>
              <option value="activities">Activities</option>
              <option value="alerts">Alerts</option>
            </select>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search beaches..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-600" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              {states.map(state => (
                <option key={state} value={state}>
                  {state === 'all' ? 'All States' : state}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-200">
        {/* Placeholder for actual map - would integrate with Google Maps or similar */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Interactive Map View</p>
            <p className="text-sm text-gray-500">
              Integration with Google Maps or OpenStreetMap would go here
            </p>
          </div>
        </div>

        {/* Beach Markers Overlay */}
        <div className="absolute inset-0">
          {filteredBeaches.map((beach, index) => (
            <div
              key={beach.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: `${20 + (index * 15)}%`,
                top: `${30 + (index * 10)}%`
              }}
            >
              <div
                className="w-4 h-4 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: getSafetyColor(beach.safety) }}
                title={`${beach.name} - ${beach.safety}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">Legend</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-600">Safe</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-xs text-gray-600">Caution</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-xs text-gray-600">Unsafe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Beach List */}
      <div className="max-h-48 overflow-y-auto">
        {filteredBeaches.map((beach) => (
          <div key={beach.id} className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{beach.name}</h4>
                <p className="text-sm text-gray-600">{beach.state}</p>
              </div>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getSafetyColor(beach.safety) }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeachSafetyMap;