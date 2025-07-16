import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Plane, ArrowRight, X, Sparkles } from 'lucide-react';

const SearchForm = ({ 
  searchQuery, 
  setSearchQuery, 
  checkIn, 
  setCheckIn, 
  checkOut, 
  setCheckOut, 
  guests, 
  setGuests 
}) => {
  const [showTravelPlans, setShowTravelPlans] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [expandedPlan, setExpandedPlan] = useState(null);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [showTravelPlanPopup, setShowTravelPlanPopup] = useState(false);

  // Comprehensive cities and beaches database
  const locationsDatabase = [
    // Major Cities
    'Mumbai, Maharashtra',
    'Delhi, NCR',
    'Bangalore, Karnataka',
    'Chennai, Tamil Nadu',
    'Kolkata, West Bengal',
    'Hyderabad, Telangana',
    'Pune, Maharashtra',
    'Ahmedabad, Gujarat',
    'Jaipur, Rajasthan',
    'Lucknow, Uttar Pradesh',
    'Kochi, Kerala',
    'Thiruvananthapuram, Kerala',
    'Bhubaneswar, Odisha',
    'Visakhapatnam, Andhra Pradesh',
    'Panaji, Goa',
    'Port Blair, Andaman',
    'Puducherry, Tamil Nadu',
    'Mangalore, Karnataka',
    'Kozhikode, Kerala',
    'Vijayawada, Andhra Pradesh',
    
    // Goa Beaches
    'Calangute Beach, Goa',
    'Baga Beach, Goa',
    'Anjuna Beach, Goa',
    'Candolim Beach, Goa',
    'Morjim Beach, Goa',
    'Arambol Beach, Goa',
    'Palolem Beach, Goa',
    'Agonda Beach, Goa',
    'Mandrem Beach, Goa',
    'Ashwem Beach, Goa',
    'Vagator Beach, Goa',
    'Chapora Beach, Goa',
    'Sinquerim Beach, Goa',
    'Miramar Beach, Goa',
    'Dona Paula Beach, Goa',
    'Colva Beach, Goa',
    'Benaulim Beach, Goa',
    'Varca Beach, Goa',
    'Cavelossim Beach, Goa',
    'Mobor Beach, Goa',
    
    // Kerala Beaches
    'Kovalam Beach, Kerala',
    'Varkala Beach, Kerala',
    'Cherai Beach, Kerala',
    'Marari Beach, Kerala',
    'Bekal Beach, Kerala',
    'Kappad Beach, Kerala',
    'Lighthouse Beach, Kerala',
    'Hawah Beach, Kerala',
    'Samudra Beach, Kerala',
    'Shanghumukham Beach, Kerala',
    'Alappuzha Beach, Kerala',
    'Kumarakom Beach, Kerala',
    'Munambam Beach, Kerala',
    'Fort Kochi Beach, Kerala',
    'Payyambalam Beach, Kerala',
    
    // Tamil Nadu Beaches
    'Marina Beach, Chennai',
    'Elliot Beach, Chennai',
    'Besant Nagar Beach, Chennai',
    'Mahabalipuram Beach, Tamil Nadu',
    'Pondicherry Beach, Tamil Nadu',
    'Kanyakumari Beach, Tamil Nadu',
    'Rameswaram Beach, Tamil Nadu',
    'Dhanushkodi Beach, Tamil Nadu',
    'Nagapattinam Beach, Tamil Nadu',
    'Tranquebar Beach, Tamil Nadu',
    'Poompuhar Beach, Tamil Nadu',
    'Cuddalore Beach, Tamil Nadu',
    'Karaikal Beach, Tamil Nadu',
    
    // Karnataka Beaches
    'Gokarna Beach, Karnataka',
    'Om Beach, Karnataka',
    'Half Moon Beach, Karnataka',
    'Paradise Beach, Karnataka',
    'Kudle Beach, Karnataka',
    'Murudeshwar Beach, Karnataka',
    'Karwar Beach, Karnataka',
    'Devbagh Beach, Karnataka',
    'Malpe Beach, Karnataka',
    'Kaup Beach, Karnataka',
    'Panambur Beach, Karnataka',
    'Tannirbhavi Beach, Karnataka',
    'Someshwar Beach, Karnataka',
    'Ullal Beach, Karnataka',
    
    // Maharashtra Beaches
    'Juhu Beach, Mumbai',
    'Chowpatty Beach, Mumbai',
    'Versova Beach, Mumbai',
    'Aksa Beach, Mumbai',
    'Madh Island Beach, Mumbai',
    'Alibaug Beach, Maharashtra',
    'Kashid Beach, Maharashtra',
    'Murud Beach, Maharashtra',
    'Tarkarli Beach, Maharashtra',
    'Malvan Beach, Maharashtra',
    'Ganpatipule Beach, Maharashtra',
    'Ratnagiri Beach, Maharashtra',
    'Diveagar Beach, Maharashtra',
    'Shrivardhan Beach, Maharashtra',
    'Harihareshwar Beach, Maharashtra',
    
    // Andhra Pradesh Beaches
    'Visakhapatnam Beach, Andhra Pradesh',
    'Rushikonda Beach, Andhra Pradesh',
    'Yarada Beach, Andhra Pradesh',
    'Bheemili Beach, Andhra Pradesh',
    'Kakinada Beach, Andhra Pradesh',
    'Machilipatnam Beach, Andhra Pradesh',
    'Chirala Beach, Andhra Pradesh',
    'Nellore Beach, Andhra Pradesh',
    'Suryalanka Beach, Andhra Pradesh',
    'Vodarevu Beach, Andhra Pradesh',
    
    // Odisha Beaches
    'Puri Beach, Odisha',
    'Chandrabhaga Beach, Odisha',
    'Gopalpur Beach, Odisha',
    'Chilika Lake, Odisha',
    'Paradeep Beach, Odisha',
    'Talasari Beach, Odisha',
    'Astaranga Beach, Odisha',
    'Balasore Beach, Odisha',
    'Digha Beach, West Bengal',
    
    // West Bengal Beaches
    'Mandarmani Beach, West Bengal',
    'Shankarpur Beach, West Bengal',
    'Bakkhali Beach, West Bengal',
    'Fraserganj Beach, West Bengal',
    'Tajpur Beach, West Bengal',
    'Henry Island Beach, West Bengal',
    'Junput Beach, West Bengal',
    
    // Andaman & Nicobar Beaches
    'Radhanagar Beach, Andaman',
    'Elephant Beach, Andaman',
    'Corbyn Cove Beach, Andaman',
    'Wandoor Beach, Andaman',
    'Neil Island Beach, Andaman',
    'Ross Island Beach, Andaman',
    'Jolly Buoy Island, Andaman',
    'Red Skin Island, Andaman',
    'Long Island Beach, Andaman',
    'Rangat Beach, Andaman',
    
    // Gujarat Beaches
    'Dwarka Beach, Gujarat',
    'Somnath Beach, Gujarat',
    'Diu Beach, Gujarat',
    'Nagoa Beach, Gujarat',
    'Ghogla Beach, Gujarat',
    'Mandvi Beach, Gujarat',
    'Chorwad Beach, Gujarat',
    'Veraval Beach, Gujarat',
    'Porbandar Beach, Gujarat',
    'Okha Beach, Gujarat',
    
    // Lakshadweep
    'Agatti Island, Lakshadweep',
    'Bangaram Island, Lakshadweep',
    'Kavaratti Island, Lakshadweep',
    'Minicoy Island, Lakshadweep',
    'Kadmat Island, Lakshadweep',
    'Kalpeni Island, Lakshadweep'
  ];

  // Travel plans data for different destinations
  const travelPlansData = {
    'Goa': [
      {
        id: 1,
        name: 'Beach Hopper Paradise',
        duration: '4 Days / 3 Nights',
        budget: '₹15,000 - ₹25,000',
        rating: 4.8,
        highlights: ['North Goa beaches', 'Water sports', 'Nightlife', 'Portuguese heritage'],
        hotels: [
          { name: 'Beach Resort Calangute', rating: 4.2, price: '₹3,500/night', amenities: ['Pool', 'Beach access', 'WiFi'] },
          { name: 'Anjuna Beach Hotel', rating: 4.0, price: '₹2,800/night', amenities: ['Restaurant', 'WiFi', 'AC'] }
        ],
        activities: ['Parasailing at Calangute', 'Jet skiing at Baga', 'Fort Aguada visit', 'Anjuna flea market'],
        itinerary: [
          'Day 1: Arrival & Calangute Beach',
          'Day 2: Baga Beach & Water sports',
          'Day 3: Old Goa churches & Anjuna',
          'Day 4: Shopping & Departure'
        ]
      },
      {
        id: 2,
        name: 'Cultural Goa Experience',
        duration: '5 Days / 4 Nights', 
        budget: '₹20,000 - ₹35,000',
        rating: 4.6,
        highlights: ['Old Goa churches', 'Spice plantations', 'Local cuisine', 'Art galleries'],
        hotels: [
          { name: 'Heritage Villa Panjim', rating: 4.5, price: '₹4,200/night', amenities: ['Heritage property', 'Restaurant', 'WiFi'] },
          { name: 'Boutique Stay Fontainhas', rating: 4.3, price: '₹3,800/night', amenities: ['Boutique', 'Local cuisine', 'AC'] }
        ],
        activities: ['Basilica of Bom Jesus', 'Spice farm tour', 'Cooking classes', 'Mandovi river cruise'],
        itinerary: [
          'Day 1: Arrival & Panjim exploration',
          'Day 2: Old Goa churches tour',
          'Day 3: Spice plantation visit',
          'Day 4: Fontainhas heritage walk',
          'Day 5: Shopping & Departure'
        ]
      },
      {
        id: 3,
        name: 'Adventure Goa',
        duration: '3 Days / 2 Nights',
        budget: '₹12,000 - ₹20,000',
        rating: 4.4,
        highlights: ['Water sports', 'Trekking', 'Scuba diving', 'Beach camping'],
        hotels: [
          { name: 'Adventure Beach Camp', rating: 3.8, price: '₹2,200/night', amenities: ['Beach camping', 'Adventure sports', 'Bonfire'] },
          { name: 'Coastal Adventure Resort', rating: 4.1, price: '₹3,000/night', amenities: ['Adventure activities', 'Pool', 'WiFi'] }
        ],
        activities: ['Scuba diving at Grande Island', 'Dudhsagar waterfall trek', 'Kayaking', 'Beach volleyball'],
        itinerary: [
          'Day 1: Arrival & Scuba diving',
          'Day 2: Dudhsagar trek',
          'Day 3: Beach activities & Departure'
        ]
      }
    ],
    'Kerala': [
      {
        id: 1,
        name: 'Backwater & Beach Combo',
        duration: '6 Days / 5 Nights',
        budget: '₹25,000 - ₹40,000',
        rating: 4.9,
        highlights: ['Kovalam beach', 'Alleppey backwaters', 'Ayurvedic spa', 'Local cuisine'],
        hotels: [
          { name: 'Kovalam Beach Resort', rating: 4.4, price: '₹4,500/night', amenities: ['Beach access', 'Spa', 'Pool'] },
          { name: 'Backwater Houseboat', rating: 4.6, price: '₹6,000/night', amenities: ['Houseboat', 'All meals', 'AC'] }
        ],
        activities: ['Kovalam lighthouse visit', 'Houseboat cruise', 'Ayurvedic massage', 'Fishing experience'],
        itinerary: [
          'Day 1: Arrival in Trivandrum',
          'Day 2-3: Kovalam beach relaxation',
          'Day 4-5: Alleppey backwaters',
          'Day 6: Departure'
        ]
      },
      {
        id: 2,
        name: 'Hill Station & Coast',
        duration: '7 Days / 6 Nights',
        budget: '₹30,000 - ₹50,000',
        rating: 4.7,
        highlights: ['Munnar hills', 'Varkala cliffs', 'Tea plantations', 'Cliff beaches'],
        hotels: [
          { name: 'Munnar Tea Resort', rating: 4.3, price: '₹3,800/night', amenities: ['Mountain view', 'Tea garden', 'Restaurant'] },
          { name: 'Varkala Cliff Hotel', rating: 4.2, price: '₹3,200/night', amenities: ['Cliff view', 'Beach access', 'Yoga'] }
        ],
        activities: ['Tea garden tours', 'Cliff walking', 'Yoga sessions', 'Local spice markets'],
        itinerary: [
          'Day 1-2: Arrival & Munnar',
          'Day 3-4: Tea plantations',
          'Day 5-6: Varkala cliffs',
          'Day 7: Departure'
        ]
      },
      {
        id: 3,
        name: 'Kerala Wellness Retreat',
        duration: '5 Days / 4 Nights',
        budget: '₹35,000 - ₹55,000',
        rating: 4.8,
        highlights: ['Ayurvedic treatments', 'Yoga sessions', 'Organic cuisine', 'Beach meditation'],
        hotels: [
          { name: 'Ayurvedic Beach Resort', rating: 4.7, price: '₹5,500/night', amenities: ['Spa', 'Yoga hall', 'Organic food'] },
          { name: 'Wellness Retreat Center', rating: 4.5, price: '₹4,800/night', amenities: ['Meditation hall', 'Ayurveda', 'Beach'] }
        ],
        activities: ['Panchakarma treatments', 'Sunrise yoga', 'Meditation sessions', 'Organic cooking classes'],
        itinerary: [
          'Day 1: Arrival & wellness consultation',
          'Day 2-3: Ayurvedic treatments',
          'Day 4: Yoga & meditation',
          'Day 5: Departure'
        ]
      }
    ],
    'Tamil Nadu': [
      {
        id: 1,
        name: 'Chennai Coastal Explorer',
        duration: '4 Days / 3 Nights',
        budget: '₹18,000 - ₹28,000',
        rating: 4.5,
        highlights: ['Marina Beach', 'Mahabalipuram temples', 'Local street food', 'Cultural sites'],
        hotels: [
          { name: 'Marina Beach Hotel', rating: 4.1, price: '₹3,200/night', amenities: ['Beach view', 'Restaurant', 'WiFi'] },
          { name: 'Heritage Mahabalipuram', rating: 4.4, price: '₹4,000/night', amenities: ['Heritage property', 'Pool', 'Cultural tours'] }
        ],
        activities: ['Marina Beach walk', 'Shore Temple visit', 'Street food tour', 'Bharatanatyam show'],
        itinerary: [
          'Day 1: Arrival & Marina Beach',
          'Day 2: Mahabalipuram temples',
          'Day 3: Chennai city tour',
          'Day 4: Shopping & Departure'
        ]
      },
      {
        id: 2,
        name: 'Temple Town & Beach',
        duration: '5 Days / 4 Nights',
        budget: '₹22,000 - ₹35,000',
        rating: 4.6,
        highlights: ['Kanchipuram temples', 'Pondicherry beaches', 'French architecture', 'Spiritual tours'],
        hotels: [
          { name: 'Kanchipuram Heritage', rating: 4.2, price: '₹3,500/night', amenities: ['Temple proximity', 'Traditional', 'AC'] },
          { name: 'Pondicherry French Villa', rating: 4.5, price: '₹4,200/night', amenities: ['French architecture', 'Beach', 'Pool'] }
        ],
        activities: ['Kailasanathar Temple', 'Auroville visit', 'French Quarter walk', 'Beach meditation'],
        itinerary: [
          'Day 1: Arrival in Chennai',
          'Day 2: Kanchipuram temples',
          'Day 3-4: Pondicherry exploration',
          'Day 5: Departure'
        ]
      }
    ],
    'Andaman': [
      {
        id: 1,
        name: 'Island Paradise Adventure',
        duration: '6 Days / 5 Nights',
        budget: '₹45,000 - ₹65,000',
        rating: 4.9,
        highlights: ['Radhanagar Beach', 'Scuba diving', 'Cellular Jail', 'Island hopping'],
        hotels: [
          { name: 'Havelock Island Resort', rating: 4.6, price: '₹6,500/night', amenities: ['Beach access', 'Diving center', 'Restaurant'] },
          { name: 'Port Blair Heritage Hotel', rating: 4.3, price: '₹4,500/night', amenities: ['City center', 'Historical tours', 'WiFi'] }
        ],
        activities: ['Scuba diving at Elephant Beach', 'Radhanagar sunset', 'Cellular Jail light show', 'Neil Island visit'],
        itinerary: [
          'Day 1: Arrival in Port Blair',
          'Day 2-3: Havelock Island',
          'Day 4: Neil Island',
          'Day 5: Port Blair sightseeing',
          'Day 6: Departure'
        ]
      }
    ]
  };

  const searchLocations = (query, type) => {
    if (query.length < 2) return [];
    
    return locationsDatabase.filter(location =>
      location.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);
  };

  const handleFromSearch = (value) => {
    setFromLocation(value);
    if (value.length > 1) {
      const suggestions = searchLocations(value, 'from');
      setFromSuggestions(suggestions);
      setShowFromSuggestions(true);
    } else {
      setShowFromSuggestions(false);
    }
  };

  const handleToSearch = (value) => {
    setToLocation(value);
    if (value.length > 1) {
      const suggestions = searchLocations(value, 'to');
      setToSuggestions(suggestions);
      setShowToSuggestions(true);
    } else {
      setShowToSuggestions(false);
    }

    // Check if the destination has travel plans
    const matchedDestination = Object.keys(travelPlansData).find(dest =>
      dest.toLowerCase().includes(value.toLowerCase()) || 
      value.toLowerCase().includes(dest.toLowerCase())
    );

    if (matchedDestination) {
      setSelectedDestination(matchedDestination);
      setShowTravelPlans(true);
    } else {
      setShowTravelPlans(false);
      setSelectedDestination('');
    }
  };

  const selectFromSuggestion = (suggestion) => {
    setFromLocation(suggestion);
    setShowFromSuggestions(false);
  };

  const selectToSuggestion = (suggestion) => {
    setToLocation(suggestion);
    setShowToSuggestions(false);
    handleToSearch(suggestion);
  };

  const handleGenerateTravelPlan = () => {
    if (fromLocation && toLocation) {
      setShowTravelPlanPopup(true);
    }
  };

  const togglePlan = (planId) => {
    setExpandedPlan(expandedPlan === planId ? null : planId);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Enhanced Search Form */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/30">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Plan Your Perfect Coastal Journey</h2>
          <p className="text-gray-600">Discover amazing beaches and create unforgettable memories</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* From Location */}
          <div className="relative lg:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Where from?</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-4 h-5 w-5 text-blue-500" />
              <input
                type="text"
                placeholder="Your starting city"
                value={fromLocation}
                onChange={(e) => handleFromSearch(e.target.value)}
                onFocus={() => fromLocation.length > 1 && setShowFromSuggestions(true)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder-gray-500"
              />
              
              {showFromSuggestions && fromSuggestions.length > 0 && (
                <div className="absolute z-20 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-64 overflow-y-auto">
                  {fromSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => selectFromSuggestion(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{suggestion}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-end justify-center pb-4">
            <ArrowRight className="h-6 w-6 text-blue-500" />
          </div>
          
          {/* To Location */}
          <div className="relative lg:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Where to?</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-4 h-5 w-5 text-purple-500" />
              <input
                type="text"
                placeholder="Your dream destination"
                value={toLocation}
                onChange={(e) => handleToSearch(e.target.value)}
                onFocus={() => toLocation.length > 1 && setShowToSuggestions(true)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-900 placeholder-gray-500"
              />
              
              {showToSuggestions && toSuggestions.length > 0 && (
                <div className="absolute z-20 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-64 overflow-y-auto">
                  {toSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => selectToSuggestion(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-purple-50 border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{suggestion}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Generate Travel Plan Button */}
          <div className="flex items-end">
            <button 
              onClick={handleGenerateTravelPlan}
              disabled={!fromLocation || !toLocation}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 shadow-lg"
            >
              <Sparkles className="h-5 w-5" />
              <span>Generate Plan</span>
            </button>
          </div>
        </div>
        
        {/* Additional Search Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Check-in</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-4 h-5 w-5 text-green-500" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Check-out</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-4 h-5 w-5 text-green-500" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              />
            </div>
          </div>
          
          {/* <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Travelers</label>
            <div className="relative">
              <Users className="absolute left-4 top-4 h-5 w-5 text-orange-500" />
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all appearance-none bg-white"
              >
                <option value={1}>1 Traveler</option>
                <option value={2}>2 Travelers</option>
                <option value={3}>3 Travelers</option>
                <option value={4}>4 Travelers</option>
                <option value={5}>5+ Travelers</option>
              </select>
            </div>
          </div> */}
        </div>

        {/* <div className="mt-8 flex justify-center">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg">
            <Search className="h-5 w-5" />
            <span>Search Perfect Stays</span>
          </button>
        </div> */}
      </div>

      {/* Travel Plan Generator Popup */}
      {showTravelPlanPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Travel Plan Generator</h2>
                  <p className="text-gray-600">Creating your personalized coastal journey</p>
                </div>
                <button
                  onClick={() => setShowTravelPlanPopup(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-10 w-10 text-white animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Generating Your Perfect Trip</h3>
                <p className="text-gray-600">From <span className="font-semibold text-blue-600">{fromLocation}</span> to <span className="font-semibold text-purple-600">{toLocation}</span></p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">Analyzing your preferences...</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">Finding best routes and accommodations...</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">Creating personalized itinerary...</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Trip Details:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">From:</span>
                    <p className="font-medium text-gray-900">{fromLocation}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">To:</span>
                    <p className="font-medium text-gray-900">{toLocation}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Check-in:</span>
                    <p className="font-medium text-gray-900">{checkIn || 'Not selected'}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Travelers:</span>
                    <p className="font-medium text-gray-900">{guests} {guests === 1 ? 'person' : 'people'}</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">AI Travel Planner will be connected soon...</p>
                <button
                  onClick={() => setShowTravelPlanPopup(false)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Travel Plans Section */}
      {showTravelPlans && selectedDestination && travelPlansData[selectedDestination] && (
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/30">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-blue-600" />
                <span>Travel Plans for {selectedDestination}</span>
              </h3>
              <p className="text-gray-600 mt-2">Choose from our curated travel experiences</p>
            </div>
            <div className="text-sm text-gray-500 bg-blue-50 px-4 py-2 rounded-full">
              {travelPlansData[selectedDestination].length} plan{travelPlansData[selectedDestination].length > 1 ? 's' : ''} available
            </div>
          </div>

          <div className="space-y-6">
            {travelPlansData[selectedDestination].map((plan) => (
              <div key={plan.id} className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Plan Header */}
                <div 
                  className="p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 cursor-pointer hover:from-blue-100 hover:via-purple-100 hover:to-pink-100 transition-all"
                  onClick={() => togglePlan(plan.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h4 className="text-xl font-bold text-gray-900">{plan.name}</h4>
                        <div className="flex items-center space-x-1 bg-yellow-100 px-3 py-1 rounded-full">
                          <span className="text-yellow-600">★</span>
                          <span className="text-sm font-medium text-yellow-800">{plan.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-8 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{plan.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">💰</span>
                          <span className="font-bold text-green-600">{plan.budget}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold">
                        Book Now
                      </button>
                      <div className="text-gray-400">
                        {expandedPlan === plan.id ? '▲' : '▼'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {plan.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-white/80 text-blue-800 px-3 py-1 rounded-full border border-blue-200 font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedPlan === plan.id && (
                  <div className="p-8 bg-white border-t-2 border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Hotels */}
                      <div>
                        <h5 className="font-bold text-gray-900 mb-4 flex items-center space-x-2 text-lg">
                          <span className="text-2xl">🏨</span>
                          <span>Recommended Hotels</span>
                        </h5>
                        <div className="space-y-4">
                          {plan.hotels.map((hotel, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                              <div className="flex items-center justify-between mb-2">
                                <h6 className="font-semibold text-gray-900">{hotel.name}</h6>
                                <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-full">
                                  <span className="text-yellow-600 text-xs">★</span>
                                  <span className="text-xs font-medium text-yellow-800">{hotel.rating}</span>
                                </div>
                              </div>
                              <div className="text-lg font-bold text-green-600 mb-3">{hotel.price}</div>
                              <div className="flex flex-wrap gap-2">
                                {hotel.amenities.map((amenity, amenityIdx) => (
                                  <span key={amenityIdx} className="text-xs bg-white text-gray-600 px-2 py-1 rounded-lg border">
                                    {amenity}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Activities & Itinerary */}
                      <div>
                        <h5 className="font-bold text-gray-900 mb-4 flex items-center space-x-2 text-lg">
                          <span className="text-2xl">🎯</span>
                          <span>Activities & Itinerary</span>
                        </h5>
                        <div className="space-y-4">
                          <div className="bg-green-50 rounded-xl p-4">
                            <h6 className="font-semibold text-green-800 mb-3 flex items-center space-x-2">
                              <span className="text-lg">🏃‍♂️</span>
                              <span>Key Activities</span>
                            </h6>
                            <ul className="text-sm text-green-700 space-y-2">
                              {plan.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-green-500 mt-1">•</span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 rounded-xl p-4">
                            <h6 className="font-semibold text-purple-800 mb-3 flex items-center space-x-2">
                              <span className="text-lg">📅</span>
                              <span>Day-wise Itinerary</span>
                            </h6>
                            <ul className="text-sm text-purple-700 space-y-2">
                              {plan.itinerary.map((day, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-purple-500 mt-1">•</span>
                                  <span>{day}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="text-sm text-gray-600 flex items-center space-x-2">
                        <span className="text-lg">👥</span>
                        <span>Perfect for {guests} traveler{guests > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex space-x-4">
                        <button className="px-6 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-sm font-semibold flex items-center space-x-2">
                          <span className="text-lg">📋</span>
                          <span>View Details</span>
                        </button>
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-semibold flex items-center space-x-2 shadow-lg">
                          <Plane className="h-4 w-4" />
                          <span>Book This Plan</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchForm;