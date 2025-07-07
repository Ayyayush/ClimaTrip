import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import SearchForm from './components/searchform';
import DestinationCarousel from './components/destinationcarousel';
import AccommodationCards from './components/accomodationcards';
import WeatherInsights from './components/weatherinsights';
import BeachSafetyDashboard from './components/BeachSafetyDashboard';
import BeachSafetyMap from './components/BeachSafetyMap';
import BeachAlerts from './components/BeachAlerts';
import BeachSafetyAnalyzer from './components/BeachSafetyAnalyzer';

// Dummy destination data
const demoDestinations = [
  {
    name: "Goa",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Sunny beaches and vibrant nightlife.",
    price: "$120",
    rating: 4.5,
    weather: {
      temp: "30°C",
      humidity: "70%",
      wind: "15 km/h",
      condition: "Clear",
      icon: <span>☀️</span>,
    },
    forecast: [
      { day: "Mon", temp: "30°C", icon: <span>☀️</span> },
      { day: "Tue", temp: "31°C", icon: <span>🌤️</span> },
      { day: "Wed", temp: "29°C", icon: <span>☀️</span> },
    ],
  },
  {
    name: "Manali",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    description: "Snowy peaks and cool breeze.",
    price: "$90",
    rating: 4.7,
    weather: {
      temp: "15°C",
      humidity: "50%",
      wind: "5 km/h",
      condition: "Cloudy",
      icon: <span>☁️</span>,
    },
    forecast: [
      { day: "Mon", temp: "14°C", icon: <span>☁️</span> },
      { day: "Tue", temp: "15°C", icon: <span>🌦️</span> },
      { day: "Wed", temp: "13°C", icon: <span>☁️</span> },
    ],
  },
];

// Dummy accommodations data
const demoStays = [
  {
    name: "Beachside Villa",
    image: "https://images.unsplash.com/photo-1582719478141-8b9c7446e6f3",
    city: "Goa",
    rating: 4.8,
    weather: "Sunny",
    temperature: "30°C",
    price: "$150",
  },
  {
    name: "Mountain Retreat",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    city: "Manali",
    rating: 4.6,
    weather: "Cloudy",
    temperature: "16°C",
    price: "$120",
  },
  {
    name: "Desert Camp",
    image: "https://images.unsplash.com/photo-1618221298255-4972a5b8ee1c",
    city: "Jaisalmer",
    rating: 4.2,
    weather: "Hot",
    temperature: "38°C",
    price: "$90",
  },
];

function App() {
  const [destinations, setDestinations] = useState(demoDestinations);
  const [currentDestination, setCurrentDestination] = useState(0);

  const [currentView, setCurrentView] = useState('travel');                     // 👈 view state
  const [showBeachAnalyzer, setShowBeachAnalyzer] = useState(false);           // 👈 beach analyzer popup toggle

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />

      {/* 🌊 Beach Safety Analyzer Popup */}
      <BeachSafetyAnalyzer
        isOpen={showBeachAnalyzer}
        onToggle={() => setShowBeachAnalyzer(!showBeachAnalyzer)}
        onClose={() => setShowBeachAnalyzer(false)}
      />

      {/* 🌊 Floating Beach Analyzer Toggle Button */}
      <div className="fixed top-20 right-4 z-40">
        <button
          onClick={() => setShowBeachAnalyzer(!showBeachAnalyzer)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          title="Beach Safety Analyzer"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </button>
      </div>

      {/* 🌊 View Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex justify-center mb-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 border border-white/20">
            <button
              onClick={() => setCurrentView('travel')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                currentView === 'travel'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Travel by Weather
            </button>
            <button
              onClick={() => setCurrentView('beach-safety')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                currentView === 'beach-safety'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Beach Safety Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* 🌤 Travel View OR 🌊 Beach View */}
      {currentView === 'travel' ? (
        <>
          <Hero />
          <SearchForm />
          <DestinationCarousel
            destinations={destinations}
            currentDestination={currentDestination}
            setCurrentDestination={setCurrentDestination}
          />
          <AccommodationCards stays={demoStays} />
          <WeatherInsights />
        </>
      ) : (
        <>
          <BeachSafetyDashboard />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <BeachSafetyMap />
              <BeachAlerts />
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
