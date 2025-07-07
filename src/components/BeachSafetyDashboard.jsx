import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Waves, 
  Wind, 
  Droplets, 
  MapPin, 
  Bell, 
  Activity,
  Thermometer,
  Eye,
  Navigation,
  RefreshCw
} from 'lucide-react';

const BeachSafetyDashboard = () => {
  const [selectedBeach, setSelectedBeach] = useState(null);
  const [beachData, setBeachData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [alerts, setAlerts] = useState([]);

  // Mock data - replace with actual INCOIS API calls
  const mockBeachData = [
    {
      id: 1,
      name: 'Marina Beach',
      location: 'Chennai, Tamil Nadu',
      coordinates: { lat: 13.0475, lng: 80.2824 },
      safetyStatus: 'safe',
      waveHeight: 1.2,
      windSpeed: 15,
      windDirection: 'NE',
      waterQuality: 'good',
      visibility: 8,
      temperature: 28,
      currentStrength: 'moderate',
      activities: {
        swimming: 'safe',
        surfing: 'caution',
        boating: 'safe',
        fishing: 'safe'
      },
      alerts: [],
      lastUpdated: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Goa Beach',
      location: 'Panaji, Goa',
      coordinates: { lat: 15.2993, lng: 74.1240 },
      safetyStatus: 'caution',
      waveHeight: 2.8,
      windSpeed: 25,
      windDirection: 'SW',
      waterQuality: 'moderate',
      visibility: 6,
      temperature: 32,
      currentStrength: 'strong',
      activities: {
        swimming: 'caution',
        surfing: 'safe',
        boating: 'caution',
        fishing: 'unsafe'
      },
      alerts: ['High wave warning', 'Strong current advisory'],
      lastUpdated: new Date().toISOString()
    },
    {
      id: 3,
      name: 'Kovalam Beach',
      location: 'Thiruvananthapuram, Kerala',
      coordinates: { lat: 8.4004, lng: 76.9784 },
      safetyStatus: 'unsafe',
      waveHeight: 4.2,
      windSpeed: 35,
      windDirection: 'W',
      waterQuality: 'poor',
      visibility: 3,
      temperature: 30,
      currentStrength: 'very_strong',
      activities: {
        swimming: 'unsafe',
        surfing: 'unsafe',
        boating: 'unsafe',
        fishing: 'unsafe'
      },
      alerts: ['Tsunami watch', 'Storm surge warning', 'Water pollution alert'],
      lastUpdated: new Date().toISOString()
    }
  ];

  useEffect(() => {
    // Initialize with mock data
    setBeachData(mockBeachData);
    setSelectedBeach(mockBeachData[0]);
    
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Location access denied');
        }
      );
    }
  }, []);

  const getSafetyColor = (status) => {
    switch (status) {
      case 'safe': return 'text-green-600 bg-green-50 border-green-200';
      case 'caution': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'unsafe': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getSafetyIcon = (status) => {
    switch (status) {
      case 'safe': return <CheckCircle className="h-5 w-5" />;
      case 'caution': return <AlertTriangle className="h-5 w-5" />;
      case 'unsafe': return <XCircle className="h-5 w-5" />;
      default: return <AlertTriangle className="h-5 w-5" />;
    }
  };

  const getActivityColor = (status) => {
    switch (status) {
      case 'safe': return 'bg-green-100 text-green-800';
      case 'caution': return 'bg-yellow-100 text-yellow-800';
      case 'unsafe': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const refreshData = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // In real implementation, fetch from INCOIS API
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Beach Safety Dashboard
              </h1>
              <p className="text-gray-600">
                Real-time recreational suitability information for Indian beaches
              </p>
            </div>
            <button
              onClick={refreshData}
              disabled={loading}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Beach List */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Beach Locations</h2>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {beachData.map((beach) => (
                  <div
                    key={beach.id}
                    onClick={() => setSelectedBeach(beach)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedBeach?.id === beach.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{beach.name}</h3>
                        <p className="text-sm text-gray-600">{beach.location}</p>
                      </div>
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border ${getSafetyColor(beach.safetyStatus)}`}>
                        {getSafetyIcon(beach.safetyStatus)}
                        <span className="text-xs font-medium capitalize">{beach.safetyStatus}</span>
                      </div>
                    </div>
                    {beach.alerts.length > 0 && (
                      <div className="mt-2 flex items-center space-x-1 text-red-600">
                        <Bell className="h-3 w-3" />
                        <span className="text-xs">{beach.alerts.length} alert(s)</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Beach Details */}
          <div className="lg:col-span-2 space-y-6">
            {selectedBeach && (
              <>
                {/* Safety Status Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedBeach.name}</h2>
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${getSafetyColor(selectedBeach.safetyStatus)}`}>
                      {getSafetyIcon(selectedBeach.safetyStatus)}
                      <span className="font-semibold capitalize">{selectedBeach.safetyStatus}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-600 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedBeach.location}</span>
                  </div>

                  {/* Alerts */}
                  {selectedBeach.alerts.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Bell className="h-5 w-5 text-red-600" />
                        <h3 className="font-semibold text-red-800">Active Alerts</h3>
                      </div>
                      <ul className="space-y-1">
                        {selectedBeach.alerts.map((alert, index) => (
                          <li key={index} className="text-red-700 text-sm">• {alert}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Current Conditions */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Waves className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">Wave Height</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-900">{selectedBeach.waveHeight}m</p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Wind className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-800">Wind Speed</span>
                      </div>
                      <p className="text-2xl font-bold text-green-900">{selectedBeach.windSpeed} km/h</p>
                      <p className="text-xs text-green-700">{selectedBeach.windDirection}</p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Thermometer className="h-5 w-5 text-purple-600" />
                        <span className="text-sm font-medium text-purple-800">Temperature</span>
                      </div>
                      <p className="text-2xl font-bold text-purple-900">{selectedBeach.temperature}°C</p>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Eye className="h-5 w-5 text-orange-600" />
                        <span className="text-sm font-medium text-orange-800">Visibility</span>
                      </div>
                      <p className="text-2xl font-bold text-orange-900">{selectedBeach.visibility} km</p>
                    </div>
                  </div>
                </div>

                {/* Water Quality & Current */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
                    <div className="flex items-center space-x-2 mb-4">
                      <Droplets className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Water Quality</h3>
                    </div>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      selectedBeach.waterQuality === 'good' ? 'bg-green-100 text-green-800' :
                      selectedBeach.waterQuality === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {selectedBeach.waterQuality.charAt(0).toUpperCase() + selectedBeach.waterQuality.slice(1)}
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
                    <div className="flex items-center space-x-2 mb-4">
                      <Navigation className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Current Strength</h3>
                    </div>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      selectedBeach.currentStrength === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                      selectedBeach.currentStrength === 'strong' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {selectedBeach.currentStrength.replace('_', ' ').charAt(0).toUpperCase() + 
                       selectedBeach.currentStrength.replace('_', ' ').slice(1)}
                    </div>
                  </div>
                </div>

                {/* Recreational Activities */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
                  <div className="flex items-center space-x-2 mb-4">
                    <Activity className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Recreational Activities</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(selectedBeach.activities).map(([activity, status]) => (
                      <div key={activity} className="text-center">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-2 ${getActivityColor(status)}`}>
                          <Activity className="h-6 w-6" />
                        </div>
                        <h4 className="font-medium text-gray-900 capitalize">{activity}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${getActivityColor(status)}`}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Last Updated */}
                <div className="text-center text-sm text-gray-500">
                  Last updated: {new Date(selectedBeach.lastUpdated).toLocaleString()}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeachSafetyDashboard;