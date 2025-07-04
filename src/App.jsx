import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import SearchForm from './components/searchform';
import DestinationCarousel from './components/destinationcarousel';
import AccommodationCards from './components/accomodationcards';
import WeatherInsights from './components/weatherinsights';

// Dummy destination data
const demoDestinations = [
  {
    name: "Goa",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // static image URL for safety
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Top Navbar */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Search */}
      <SearchForm />

      {/* Weather-based Destinations */}
      <DestinationCarousel
        destinations={destinations}
        currentDestination={currentDestination}
        setCurrentDestination={setCurrentDestination}
      />

      {/* Matching Accommodations */}
      <AccommodationCards stays={demoStays} />

      {/* Weather Details Section */}
      <WeatherInsights />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
