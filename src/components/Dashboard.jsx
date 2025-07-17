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
  Shield
} from 'lucide-react';
import SearchForm from './searchform';

const Dashboard = ({ user }) => {
  const [selectedBeach, setSelectedBeach] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All States');
  const [safetyStatus, setSafetyStatus] = useState('All Alerts');
  const [activeTab, setActiveTab] = useState('search');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(true); // Show search modal by default

  // Navigation items
  const navigationItems = [
    { id: 'search', label: 'Plan Trip', icon: Search, description: 'Search destinations & plan your journey' },
    { id: 'dashboard', label: 'Beach Safety', icon: Shield, description: 'Monitor beach safety conditions' },
    { id: 'destinations', label: 'Destinations', icon: Compass, description: 'Explore popular destinations' },
    { id: 'bookings', label: 'My Bookings', icon: BookOpen, description: 'View your travel bookings' },
    { id: 'favorites', label: 'Favorites', icon: Heart, description: 'Your saved destinations' },
    { id: 'profile', label: 'Profile', icon: User, description: 'Manage your account' }
  ];

  // Enhanced beach data with detailed information
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
      safetyScore: 78,
      currentConditions: {
        waveHeight: 1.5,
        windSpeed: 18,
        windDirection: 'E',
        waterTemp: 27,
        visibility: 7,
        waterQuality: 'good',
        currentStrength: 'moderate'
      },
      activities: {
        swimming: { status: 'safe', score: 80 },
        surfing: { status: 'caution', score: 70 },
        boating: { status: 'safe', score: 85 },
        fishing: { status: 'safe', score: 90 }
      },
      alerts: [],
      lastUpdated: new Date().toISOString(),
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      name: 'Radhanagar Beach',
      location: 'Havelock Island, Andaman',
      state: 'Andaman & Nicobar',
      coordinates: { lat: 12.0127, lng: 92.9623 },
      safetyStatus: 'safe',
      safetyScore: 95,
      currentConditions: {
        waveHeight: 1.0,
        windSpeed: 10,
        windDirection: 'SE',
        waterTemp: 29,
        visibility: 12,
        waterQuality: 'excellent',
        currentStrength: 'mild'
      },
      activities: {
        swimming: { status: 'safe', score: 98 },
        surfing: { status: 'caution', score: 60 },
        boating: { status: 'safe', score: 95 },
        fishing: { status: 'safe', score: 88 }
      },
      alerts: [],
      lastUpdated: new Date().toISOString(),
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      name: 'Digha Beach',
      location: 'Digha, West Bengal',
      state: 'West Bengal',
      coordinates: { lat: 21.6667, lng: 87.5167 },
      safetyStatus: 'safe',
      safetyScore: 75,
      currentConditions: {
        waveHeight: 1.3,
        windSpeed: 16,
        windDirection: 'E',
        waterTemp: 26,
        visibility: 6,
        waterQuality: 'good',
        currentStrength: 'moderate'
      },
      activities: {
        swimming: { status: 'safe', score: 78 },
        surfing: { status: 'caution', score: 60 },
        boating: { status: 'safe', score: 80 },
        fishing: { status: 'safe', score: 85 }
      },
      alerts: [],
      lastUpdated: new Date().toISOString(),
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const states = ['All States', 'Tamil Nadu', 'Goa', 'Kerala', 'Odisha', 'Andaman & Nicobar', 'West Bengal'];

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

  const getActivityIcon = (activity) => {
    const icons = {
      swimming: '🏊',
      surfing: '🏄',
      boating: '🚤',
      fishing: '🎣'
    };
    return icons[activity] || '🌊';
  };

  const filteredBeaches = beachLocations.filter(beach => {
    const matchesSearch = beach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         beach.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = selectedState === 'All States' || beach.state === selectedState;
    const matchesSafety = safetyStatus === 'All Alerts' || beach.safetyStatus === safetyStatus.toLowerCase();
    
    return matchesSearch && matchesState && matchesSafety;
  });

  const handleBeachSelect = (beach) => {
    setSelectedBeach(beach);
  };

  const renderSearchTab = () => (
    <div className="space-y-8">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Plan Your Perfect Coastal Journey</h2>
          <p className="text-xl opacity-90">Discover amazing beaches and create unforgettable memories</p>
        </div>
        
        <button
          onClick={() => setShowSearchModal(true)}
          className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Search className="h-6 w-6" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold">Where do you want to go?</h3>
                <p className="text-sm opacity-80">Search destinations, dates, and travelers</p>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>

      {/* Popular Destinations */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Popular Destinations</h3>
          <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beachLocations.slice(0, 6).map((beach) => (
            <div key={beach.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
              <div className="relative h-48">
                <img
                  src={beach.image}
                  alt={beach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className={`flex items-center space-x-1 px-3 py-1 rounded-full border ${getSafetyColor(beach.safetyStatus)}`}>
                    {getSafetyIcon(beach.safetyStatus)}
                    <span className="text-xs font-medium capitalize">{beach.safetyStatus}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
                    <h4 className="font-semibold">{beach.name}</h4>
                    <p className="text-sm opacity-90">{beach.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">{beach.currentConditions.waterTemp}°C</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Waves className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">{beach.currentConditions.waveHeight}m</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{(beach.safetyScore / 20).toFixed(1)}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Safe Beaches</h4>
              <p className="text-2xl font-bold text-green-600">
                {beachLocations.filter(b => b.safetyStatus === 'safe').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Caution Areas</h4>
              <p className="text-2xl font-bold text-yellow-600">
                {beachLocations.filter(b => b.safetyStatus === 'caution').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Avg Safety Score</h4>
              <p className="text-2xl font-bold text-blue-600">
                {Math.round(beachLocations.reduce((acc, b) => acc + b.safetyScore, 0) / beachLocations.length)}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Clock className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Last Updated</h4>
              <p className="text-sm font-medium text-purple-600">
                {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboardTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Beach List */}
      <div className="lg:col-span-1">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Beach Locations</h2>
            <p className="text-gray-600 text-sm mt-1">Select a beach to view details</p>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {filteredBeaches.map((beach) => (
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

      {/* Interactive Beach Safety Map */}
      <div className="lg:col-span-2">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          {/* Map Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Interactive Beach Safety Map</span>
              </h2>
              <div className="flex items-center space-x-2">
                <select
                  value={safetyStatus}
                  onChange={(e) => setSafetyStatus(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
                >
                  <option value="All Alerts">All Alerts</option>
                  <option value="Safe">Safe</option>
                  <option value="Caution">Caution</option>
                  <option value="Unsafe">Unsafe</option>
                </select>
              </div>
            </div>
            
            {/* Search and Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search beaches..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Map Container */}
          <div className="relative h-96 bg-gradient-to-br from-blue-100 to-cyan-100">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-green-100 opacity-50"></div>
            
            {/* Beach Markers */}
            {filteredBeaches.map((beach) => (
              <button
                key={beach.id}
                onClick={() => handleBeachSelect(beach)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110 ${
                  selectedBeach?.id === beach.id ? 'scale-125 z-10' : ''
                }`}
                style={{
                  left: `${((beach.coordinates.lng - 68) / (97 - 68)) * 100}%`,
                  top: `${((28 - beach.coordinates.lat) / (28 - 8)) * 100}%`
                }}
              >
                <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                  beach.safetyStatus === 'safe' ? 'bg-green-500' :
                  beach.safetyStatus === 'caution' ? 'bg-yellow-500' : 'bg-red-500'
                }`}>
                </div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs font-medium whitespace-nowrap">
                  {beach.name}
                </div>
              </button>
            ))}
            
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Legend</h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-700">Safe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs text-gray-700">Caution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-xs text-gray-700">Unsafe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'search':
        return renderSearchTab();
      case 'dashboard':
        return renderDashboardTab();
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
        return (
          <div className="text-center py-20">
            <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Profile</h3>
            <p className="text-gray-600">Manage your account settings</p>
          </div>
        );
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
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className={`lg:w-64 ${showMobileMenu ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setShowMobileMenu(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                        activeTab === item.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <div className="text-left">
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
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Plan Your Trip</h2>
                  <p className="text-gray-600">Search destinations and create your perfect journey</p>
                </div>
                <button
                  onClick={() => setShowSearchModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <SearchForm />
            </div>
          </div>
        </div>
      )}

      {/* Beach Details - Shows when a beach is selected in dashboard tab */}
      {activeTab === 'dashboard' && selectedBeach && (
        <div className="max-w-7xl mx-auto mt-6 px-6">
          {/* Beach Header with Safety Status */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 mb-6">
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

            {/* Current Conditions Grid */}
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

          {/* Water Quality & Current Strength */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Water Quality</h3>
              </div>
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                selectedBeach.currentConditions.waterQuality === 'excellent' ? 'bg-green-100 text-green-800' :
                selectedBeach.currentConditions.waterQuality === 'good' ? 'bg-blue-100 text-blue-800' :
                selectedBeach.currentConditions.waterQuality === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {selectedBeach.currentConditions.waterQuality.charAt(0).toUpperCase() + selectedBeach.currentConditions.waterQuality.slice(1)}
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
              <div className="flex items-center space-x-2 mb-4">
                <Navigation className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Current Strength</h3>
              </div>
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                selectedBeach.currentConditions.currentStrength === 'mild' ? 'bg-green-100 text-green-800' :
                selectedBeach.currentConditions.currentStrength === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                selectedBeach.currentConditions.currentStrength === 'strong' ? 'bg-orange-100 text-orange-800' :
                'bg-red-100 text-red-800'
              }`}>
                {selectedBeach.currentConditions.currentStrength.charAt(0).toUpperCase() + selectedBeach.currentConditions.currentStrength.slice(1)}
              </div>
            </div>
          </div>

          {/* Recreational Activities */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
            <div className="flex items-center space-x-2 mb-6">
              <Activity className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Recreational Activities</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(selectedBeach.activities).map(([activity, data]) => (
                <div key={activity} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">{getActivityIcon(activity)}</div>
                  <h4 className="font-medium text-gray-900 capitalize mb-2">{activity}</h4>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${getActivityColor(data.status)}`}>
                    {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>

            {/* Last Updated */}
            <div className="mt-6 text-center text-sm text-gray-500">
              Last updated: {new Date(selectedBeach.lastUpdated).toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;