import React, { useState, useEffect } from 'react';
import { MapPin, Layers, Filter, Search, X, ExternalLink } from 'lucide-react';

const BeachSafetyMap = () => {
  const [mapView, setMapView] = useState('safety'); // safety, activities, alerts
  const [selectedState, setSelectedState] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMapModal, setShowMapModal] = useState(false);

  // Mock beach locations with coordinates
  const beachLocations = [
    { 
      id: 1, 
      name: 'Marina Beach', 
      state: 'Tamil Nadu', 
      lat: 13.0475, 
      lng: 80.2824, 
      safety: 'safe',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8663718935216!2d80.28067831482226!3d13.047526990805238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526650e0b83c1d%3A0x9c2a7be6cb0c0b0a!2sMarina%20Beach!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin'
    },
    { 
      id: 2, 
      name: 'Calangute Beach', 
      state: 'Goa', 
      lat: 15.5430, 
      lng: 73.7551, 
      safety: 'caution',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.8663718935216!2d73.75307831482226!3d15.543026990805238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0x5f0c2b7be6cb0c0a!2sCalangute%20Beach!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin'
    },
    { 
      id: 3, 
      name: 'Kovalam Beach', 
      state: 'Kerala', 
      lat: 8.4004, 
      lng: 76.9784, 
      safety: 'unsafe',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.8663718935216!2d76.97607831482226!3d8.400426990805238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb1a5c1e1e1e%3A0x5f0c2b7be6cb0c0a!2sKovalam%20Beach!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin'
    },
    { 
      id: 4, 
      name: 'Puri Beach', 
      state: 'Odisha', 
      lat: 19.8135, 
      lng: 85.8312, 
      safety: 'safe',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8663718935216!2d85.83067831482226!3d19.813526990805238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19d1c5c1e1e1e%3A0x5f0c2b7be6cb0c0a!2sPuri%20Beach!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin'
    },
    { 
      id: 5, 
      name: 'Digha Beach', 
      state: 'West Bengal', 
      lat: 21.6667, 
      lng: 87.5167, 
      safety: 'caution',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.8663718935216!2d87.51607831482226!3d21.666726990805238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02e1c5c1e1e1e%3A0x5f0c2b7be6cb0c0a!2sDigha%20Beach!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin'
    },
    { 
      id: 6, 
      name: 'Radhanagar Beach', 
      state: 'Andaman', 
      lat: 12.0167, 
      lng: 92.9667, 
      safety: 'safe',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.8663718935216!2d92.96607831482226!3d12.016726990805238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30863c1c5c1e1e1e%3A0x5f0c2b7be6cb0c0a!2sRadhanagar%20Beach!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin'
    },
    { 
      id: 7, 
      name: 'Varkala Beach', 
      state: 'Kerala', 
      lat: 8.7379, 
      lng: 76.7163, 
      safety: 'safe',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.8663718935216!2d76.71607831482226!3d8.737926990805238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c1c5c1e1e1e%3A0x5f0c2b7be6cb0c0a!2sVarkala%20Beach!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin'
    },
    { 
      id: 8, 
      name: 'Baga Beach', 
      state: 'Goa', 
      lat: 15.5557, 
      lng: 73.7519, 
      safety: 'safe',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.5663718935216!2d73.75067831482226!3d15.555726990805238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba206336b741%3A0x5f0c2b7be6cb0c0a!2sBaga%20Beach!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin'
    }
  ];

  const states = ['all', 'Tamil Nadu', 'Goa', 'Kerala', 'Odisha', 'West Bengal', 'Andaman'];

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

  const openMap = (location) => {
    setSelectedLocation(location);
    setShowMapModal(true);
  };

  const generateMapUrl = (location) => {
    // Generate Google Maps embed URL based on location
    const baseUrl = 'https://www.google.com/maps/embed/v1/place';
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // In production, use environment variable
    
    // For demo purposes, using the pre-configured URLs
    return location.mapUrl || `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(location.name + ', ' + location.state)}`;
  };

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
        {/* India Map Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Simplified India coastline representation */}
            <svg viewBox="0 0 400 300" className="w-full h-full opacity-20">
              <path
                d="M80 50 Q120 40 160 60 Q200 80 240 70 Q280 60 320 80 L320 120 Q300 140 280 160 Q260 180 240 200 Q220 220 200 240 Q180 250 160 240 Q140 230 120 220 Q100 200 90 180 Q80 160 70 140 Q60 120 70 100 Q75 75 80 50 Z"
                fill="currentColor"
                className="text-blue-300"
              />
            </svg>
            
            {/* Beach Markers */}
            {filteredBeaches.map((beach, index) => {
              // Calculate position based on actual coordinates (simplified)
              const x = ((beach.lng - 68) / (97 - 68)) * 100; // Longitude range of India
              const y = ((35 - beach.lat) / (35 - 6)) * 100; // Latitude range of India
              
              return (
                <div
                  key={beach.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `${Math.max(10, Math.min(90, x))}%`,
                    top: `${Math.max(10, Math.min(90, y))}%`
                  }}
                  onClick={() => openMap(beach)}
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white shadow-lg hover:scale-125 transition-transform"
                    style={{ backgroundColor: getSafetyColor(beach.safety) }}
                    title={`${beach.name} - ${beach.safety}`}
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {beach.name}
                    <div className="text-center text-xs text-gray-300">Click to view map</div>
                  </div>
                </div>
              );
            })}
          </div>
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
          <div 
            key={beach.id} 
            className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
            onClick={() => openMap(beach)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{beach.name}</h4>
                <p className="text-sm text-gray-600">{beach.state}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getSafetyColor(beach.safety) }}
                />
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Modal */}
      {showMapModal && selectedLocation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{selectedLocation.name}</h3>
                <p className="text-gray-600">{selectedLocation.state}</p>
              </div>
              <button
                onClick={() => setShowMapModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="h-96">
              <iframe
                src={generateMapUrl(selectedLocation)}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${selectedLocation.name}`}
              />
            </div>
            
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: getSafetyColor(selectedLocation.safety) }}
                  />
                  <span className="text-sm font-medium capitalize">{selectedLocation.safety} conditions</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(selectedLocation.name + ', ' + selectedLocation.state)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeachSafetyMap;