import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Waves, 
  Wind, 
  Thermometer, 
  Eye, 
  Droplets, 
  Navigation, 
  Activity,
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Search,
  ChevronDown,
  Calendar,
  Users,
  Plane,
  ArrowRight,
  Menu,
  X,
  Home,
  Compass,
  BookOpen,
  Settings,
  User,
  Bell,
  Heart,
  Star,
  Filter,
  TrendingUp,
  Clock,
  Shield,
  Mail,
  Phone,
  Edit
} from 'lucide-react';

const Dashboard = ({ user }) => {
  const [selectedBeach, setSelectedBeach] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [activeTab, setActiveTab] = useState('search');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Navigation items
  const navigationItems = [
    { id: 'search', label: 'Plan Trip', icon: Search, description: 'Search destinations & plan' },
    { id: 'beach-safety', label: 'Beach Safety', icon: Shield, description: 'Monitor beach conditions' },
    { id: 'destinations', label: 'Destinations', icon: Compass, description: 'Explore destinations' },
    { id: 'bookings', label: 'My Bookings', icon: BookOpen, description: 'View bookings' },
    { id: 'favorites', label: 'Favorites', icon: Heart, description: 'Saved destinations' },
    { id: 'profile', label: 'Profile', icon: User, description: 'Account settings' }
  ];

  // Enhanced beach data
  const beachLocations = [
    {
      id: 1,
      name: 'Marina Beach',
      location: 'Chennai, Tamil Nadu',
      state: 'Tamil Nadu',
      coordinates: { lat: 13.0475, lng: 80.2824 },
      safetyStatus: 'safe',
      safetyScore: 85,
      currentConditions: {
        waveHeight: 1.2,
        windSpeed: 15,
        windDirection: 'NE',
        waterTemp: 28,
        visibility: 8,
        waterQuality: 'good',
        currentStrength: 'moderate'
      },
      activities: {
        swimming: { status: 'safe', score: 90 },
        surfing: { status: 'caution', score: 65 },
        boating: { status: 'safe', score: 85 },
        fishing: { status: 'safe', score: 80 }
      },
      alerts: [],
      lastUpdated: new Date().toISOString(),
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      name: 'Calangute Beach',
      location: 'Panaji, Goa',
      state: 'Goa',
      coordinates: { lat: 15.5449, lng: 73.7553 },
      safetyStatus: 'safe',
      safetyScore: 92,
      currentConditions: {
        waveHeight: 1.8,
        windSpeed: 12,
        windDirection: 'SW',
        waterTemp: 30,
        visibility: 10,
        waterQuality: 'excellent',
        currentStrength: 'mild'
      },
      activities: {
        swimming: { status: 'safe', score: 95 },
        surfing: { status: 'safe', score: 88 },
        boating: { status: 'safe', score: 90 },
        fishing: { status: 'safe', score: 85 }
      },
      alerts: [],
      lastUpdated: new Date().toISOString(),
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      name: 'Kovalam Beach',
      location: 'Thiruvananthapuram, Kerala',
      state: 'Kerala',
      coordinates: { lat: 8.4004, lng: 76.9784 },
      safetyStatus: 'caution',
      safetyScore: 60,
      currentConditions: {
        waveHeight: 2.8,
        windSpeed: 25,
        windDirection: 'SW',
        waterTemp: 29,
        visibility: 6,
        waterQuality: 'moderate',
        currentStrength: 'strong'
      },
      activities: {
        swimming: { status: 'caution', score: 55 },
        surfing: { status: 'safe', score: 85 },
        boating: { status: 'caution', score: 60 },
        fishing: { status: 'unsafe', score: 30 }
      },
      alerts: ['High wave warning', 'Strong current advisory'],
      lastUpdated: new Date().toISOString(),
      image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      name: 'Puri Beach',
      location: 'Puri, Odisha',
      state: 'Odisha',
      coordinates: { lat: 19.8135, lng: 85.8312 },
      safetyStatus: 'safe',
      safetyScore: 88,
      currentConditions: {
        waveHeight: 1.5,
        windSpeed: 18,
        windDirection: 'E',
        waterTemp: 27,
        visibility: 9,
        waterQuality: 'good',
        currentStrength: 'moderate'
      },
      activities: {
        swimming: { status: 'safe', score: 85 },
        surfing: { status: 'safe', score: 80 },
        boating: { status: 'safe', score: 90 },
        fishing: { status: 'safe', score: 88 }
      },
      alerts: [],
      lastUpdated: new Date().toISOString(),
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      name: 'Radhanagar Beach',
      location: 'Havelock Island, Andaman',
      state: 'Andaman',
      coordinates: { lat: 12.0167, lng: 92.9667 },
      safetyStatus: 'safe',
      safetyScore: 95,
      currentConditions: {
        waveHeight: 0.8,
        windSpeed: 8,
        windDirection: 'E',
        waterTemp: 27,
        visibility: 12,
        waterQuality: 'excellent',
        currentStrength: 'mild'
      },
      activities: {
        swimming: { status: 'safe', score: 95 },
        surfing: { status: 'caution', score: 60 },
        boating: { status: 'safe', score: 90 },
        fishing: { status: 'safe', score: 85 }
      },
      alerts: [],
      lastUpdated: new Date().toISOString(),
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  // Accommodation data based on search
  const getAccommodationsForDestination = (destination) => {
    const allAccommodations = [
      {
        name: "Beachside Villa",
        image: "https://images.pexels.com/photos/1582719/pexels-photo-1582719.jpeg?auto=compress&cs=tinysrgb&w=800",
        city: destination || "Goa",
        rating: 4.8,
        weather: "Sunny",
        temperature: "30°C",
        price: "₹4,500",
        amenities: ["Beach Access", "Pool", "WiFi", "Restaurant"]
      },
      {
        name: "Ocean View Resort",
        image: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800",
        city: destination || "Kerala",
        rating: 4.6,
        weather: "Pleasant",
        temperature: "28°C",
        price: "₹3,200",
        amenities: ["Spa", "Restaurant", "WiFi", "Garden"]
      },
      {
        name: "Coastal Paradise",
        image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
        city: destination || "Andaman",
        rating: 4.9,
        weather: "Perfect",
        temperature: "29°C",
        price: "₹6,800",
        amenities: ["Diving Center", "Beach Access", "All Meals", "WiFi"]
      },
      {
        name: "Heritage Beach Hotel",
        image: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800",
        city: destination || "Pondicherry",
        rating: 4.4,
        weather: "Warm",
        temperature: "31°C",
        price: "₹2,800",
        amenities: ["Heritage Property", "Pool", "Restaurant", "WiFi"]
      },
      {
        name: "Cliff View Resort",
        image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800",
        city: destination || "Varkala",
        rating: 4.7,
        weather: "Pleasant",
        temperature: "28°C",
        price: "₹4,800",
        amenities: ["Cliff View", "Yoga", "Spa", "Beach Access"]
      },
      {
        name: "Island Paradise Resort",
        image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
        city: destination || "Lakshadweep",
        rating: 4.8,
        weather: "Tropical",
        temperature: "27°C",
        price: "₹12,000",
        amenities: ["Water Sports", "Snorkeling", "All Meals", "Boat Transfer"]
      }
    ];
    return allAccommodations;
  };

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
      case 'safe': return <CheckCircle className="h-4 w-4" />;
      case 'caution': return <AlertTriangle className="h-4 w-4" />;
      case 'unsafe': return <XCircle className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const handleBeachSelect = (beach) => {
    setSelectedBeach(beach);
    setSelectedDestination(beach.location);
  };

  const handleDestinationSearch = (destination) => {
    setSelectedDestination(destination);
    setSearchQuery(destination);
    // Find matching beach
    const matchingBeach = beachLocations.find(beach => 
      beach.location.toLowerCase().includes(destination.toLowerCase()) ||
      beach.name.toLowerCase().includes(destination.toLowerCase())
    );
    if (matchingBeach) {
      setSelectedBeach(matchingBeach);
    }
  };

  const renderSearchTab = () => (
    <div className="flex gap-6 h-full">
      {/* Left Sidebar - Navigation */}
      <div className="w-80 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all text-left ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                <div>
                  <div className="font-medium">{item.label}</div>
                  <div className={`text-xs ${activeTab === item.id ? 'text-blue-100' : 'text-gray-500'}`}>
                    {item.description}
                  </div>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 space-y-6">
        {/* Search Bar */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
          <div className="relative">
            <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations (e.g., Goa, Kerala, Chennai...)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleDestinationSearch(e.target.value);
              }}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
        </div>

        {/* Map Container - Simplified for API integration */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              {selectedDestination ? `Map of ${selectedDestination}` : 'Interactive Map'}
            </h2>
          </div>
          
          <div className="h-96 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {selectedDestination ? `${selectedDestination} Map` : 'Search a destination to view map'}
              </h3>
              <p className="text-gray-500">
                {selectedDestination 
                  ? 'Map API will be integrated here by your team member' 
                  : 'Enter a destination in the search bar above'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Cards according to searched location */}
        {selectedDestination && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Accommodations in {selectedDestination}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getAccommodationsForDestination(selectedDestination).map((stay, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                  <div className="relative h-48">
                    <img
                      src={stay.image}
                      alt={stay.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-semibold">{stay.weather}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white">
                      <span className="text-lg font-bold">{stay.price}</span>
                      <span className="text-sm opacity-90">/night</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{stay.name}</h4>
                      <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium text-yellow-800">{stay.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                      <span>{stay.city}</span>
                      <Thermometer className="h-4 w-4 ml-4 mr-1 text-orange-500" />
                      <span>{stay.temperature}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {stay.amenities.slice(0, 3).map((amenity, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderBeachSafetyTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Beach List */}
      <div className="lg:col-span-1">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Beach Locations</h2>
            <p className="text-gray-600 text-sm mt-1">Select a beach to view details</p>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {beachLocations.map((beach) => (
              <div
                key={beach.id}
                onClick={() => handleBeachSelect(beach)}
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
                    <AlertTriangle className="h-3 w-3" />
                    <span className="text-xs">{beach.alerts.length} alert(s)</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beach Details */}
      <div className="lg:col-span-2">
        {selectedBeach && (
          <div className="space-y-6">
            {/* Beach Header */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedBeach.name}</h2>
                  <div className="flex items-center space-x-2 text-gray-600 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedBeach.location}</span>
                  </div>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${getSafetyColor(selectedBeach.safetyStatus)}`}>
                  {getSafetyIcon(selectedBeach.safetyStatus)}
                  <span className="font-semibold capitalize">{selectedBeach.safetyStatus}</span>
                </div>
              </div>

              {/* Current Conditions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Waves className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Wave Height</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-900">{selectedBeach.currentConditions.waveHeight}m</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Wind className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Wind Speed</span>
                  </div>
                  <p className="text-2xl font-bold text-green-900">{selectedBeach.currentConditions.windSpeed} km/h</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Thermometer className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-800">Temperature</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-900">{selectedBeach.currentConditions.waterTemp}°C</p>
                </div>

                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Eye className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium text-orange-800">Visibility</span>
                  </div>
                  <p className="text-2xl font-bold text-orange-900">{selectedBeach.currentConditions.visibility} km</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderProfileTab = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {user?.split('@')[0] || 'User'} Profile
            </h2>
            <p className="text-gray-600">Manage your account settings and preferences</p>
          </div>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Edit className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-900">{user?.split('@')[0] || 'User Name'}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="p-3 bg-gray-50 rounded-lg flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-gray-900">{user || 'user@example.com'}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="p-3 bg-gray-50 rounded-lg flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-gray-900">+91 98765 43210</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <div className="p-3 bg-gray-50 rounded-lg flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-900">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <span className="font-medium text-gray-900">Email Notifications</span>
                <p className="text-sm text-gray-600">Receive updates about your bookings</p>
              </div>
              <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <span className="font-medium text-gray-900">Weather Alerts</span>
                <p className="text-sm text-gray-600">Get notified about weather changes</p>
              </div>
              <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <span className="font-medium text-gray-900">Marketing Updates</span>
                <p className="text-sm text-gray-600">Receive promotional offers</p>
              </div>
              <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Preferences */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Travel Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <div className="text-2xl mb-2">🏖️</div>
            <h4 className="font-medium text-gray-900">Preferred Climate</h4>
            <p className="text-sm text-gray-600">Sunny & Warm</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <div className="text-2xl mb-2">🏨</div>
            <h4 className="font-medium text-gray-900">Accommodation Type</h4>
            <p className="text-sm text-gray-600">Beach Resort</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <div className="text-2xl mb-2">💰</div>
            <h4 className="font-medium text-gray-900">Budget Range</h4>
            <p className="text-sm text-gray-600">₹3,000 - ₹8,000</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Search className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">Searched for Goa beaches</p>
              <p className="text-sm text-gray-600">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Heart className="h-5 w-5 text-red-600" />
            <div>
              <p className="font-medium text-gray-900">Added Kovalam Beach to favorites</p>
              <p className="text-sm text-gray-600">1 day ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <BookOpen className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium text-gray-900">Viewed booking for Andaman trip</p>
              <p className="text-sm text-gray-600">3 days ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Account Statistics */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
            <div className="text-sm text-gray-600">Destinations Visited</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">8</div>
            <div className="text-sm text-gray-600">Bookings Made</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">25</div>
            <div className="text-sm text-gray-600">Favorites Saved</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 mb-1">4.8</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'search':
        return renderSearchTab();
      case 'beach-safety':
        return renderBeachSafetyTab();
      case 'destinations':
        return (
          <div className="text-center py-20">
            <Compass className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Destinations</h3>
            <p className="text-gray-600">Explore amazing destinations around the world</p>
          </div>
        );
      case 'bookings':
        return (
          <div className="text-center py-20">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">My Bookings</h3>
            <p className="text-gray-600">View and manage your travel bookings</p>
          </div>
        );
      case 'favorites':
        return (
          <div className="text-center py-20">
            <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Favorites</h3>
            <p className="text-gray-600">Your saved destinations and places</p>
          </div>
        );
      case 'profile':
        return renderProfileTab();
      default:
        return renderSearchTab();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Welcome Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-white/20 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user?.split('@')[0] || 'User'}! 👋
              </h1>
              <p className="text-gray-600">
                Monitor beach safety conditions and plan your coastal adventures
              </p>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="h-full">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;