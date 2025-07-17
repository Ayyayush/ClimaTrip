import { Thermometer, MapPin, Star, Wifi, Car, Utensils, Waves, Heart } from 'lucide-react';

function AccommodationCards() {
  // Enhanced accommodations with more variety and proper images
  const stays = [
    {
      name: "Beachside Villa Goa",
      city: "Calangute, Goa",
      temperature: "30°C",
      rating: 4.8,
      price: "₹4,500",
      weather: "Sunny",
      image: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Beach Access", "Pool", "WiFi", "Restaurant"],
      type: "Villa"
    },
    {
      name: "Backwater Resort Kerala",
      city: "Alleppey, Kerala",
      temperature: "28°C",
      rating: 4.9,
      price: "₹6,200",
      weather: "Pleasant",
      image: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Houseboat", "Spa", "Ayurveda", "Backwater View"],
      type: "Resort"
    },
    {
      name: "Island Paradise Andaman",
      city: "Havelock, Andaman",
      temperature: "29°C",
      rating: 4.9,
      price: "₹8,800",
      weather: "Perfect",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Diving Center", "Beach Access", "Restaurant", "WiFi"],
      type: "Resort"
    },
    {
      name: "Coral Lagoon Lakshadweep",
      city: "Agatti, Lakshadweep",
      temperature: "27°C",
      rating: 4.8,
      price: "₹12,000",
      weather: "Tropical",
      image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Water Sports", "Snorkeling", "All Meals", "Boat Transfer"],
      type: "Resort"
    },
    {
      name: "French Quarter Hotel",
      city: "Pondicherry",
      temperature: "31°C",
      rating: 4.6,
      price: "₹3,200",
      weather: "Warm",
      image: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Heritage Property", "Pool", "Restaurant", "WiFi"],
      type: "Hotel"
    },
    {
      name: "Cliff View Resort",
      city: "Varkala, Kerala",
      temperature: "28°C",
      rating: 4.7,
      price: "₹4,800",
      weather: "Pleasant",
      image: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Cliff View", "Yoga", "Spa", "Beach Access"],
      type: "Resort"
    },
    {
      name: "Beach Shack Gokarna",
      city: "Gokarna, Karnataka",
      temperature: "26°C",
      rating: 4.4,
      price: "₹1,800",
      weather: "Cool",
      image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Beach Front", "Bonfire", "Local Cuisine", "Hammocks"],
      type: "Beach Shack"
    },
    {
      name: "Konkan Coast Resort",
      city: "Tarkarli, Maharashtra",
      temperature: "29°C",
      rating: 4.5,
      price: "₹3,800",
      weather: "Breezy",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Water Sports", "Beach Access", "Restaurant", "Pool"],
      type: "Resort"
    },
    {
      name: "Marina Bay Hotel",
      city: "Chennai, Tamil Nadu",
      temperature: "32°C",
      rating: 4.3,
      price: "₹2,900",
      weather: "Hot",
      image: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["City Center", "Business Center", "Restaurant", "WiFi"],
      type: "Hotel"
    }
  ];

  const getWeatherIcon = (weather) => {
    const icons = {
      "Sunny": "☀️",
      "Pleasant": "🌤️",
      "Perfect": "🌊",
      "Tropical": "🏝️",
      "Warm": "🌞",
      "Cool": "💨",
      "Breezy": "🌬️",
      "Hot": "🔥"
    };
    return icons[weather] || "🌤️";
  };

  const getTypeColor = (type) => {
    const colors = {
      "Villa": "bg-purple-100 text-purple-800",
      "Resort": "bg-blue-100 text-blue-800",
      "Hotel": "bg-green-100 text-green-800",
      "Beach Shack": "bg-orange-100 text-orange-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Matching Accommodations</h2>
          <p className="text-gray-600 text-lg">Perfect stays based on your weather preferences</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stays.map((stay, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={stay.image || "https://via.placeholder.com/400x300?text=No+Image"}
                  alt={stay.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Weather badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700 shadow-lg flex items-center space-x-1">
                  <span>{getWeatherIcon(stay.weather)}</span>
                  <span>{stay.weather}</span>
                </div>

                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${getTypeColor(stay.type)}`}>
                    {stay.type}
                  </span>
                </div>

                {/* Heart button */}
                <div className="absolute bottom-4 right-4">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg group">
                    <Heart className="h-4 w-4 text-gray-600 group-hover:text-red-500 transition-colors" />
                  </button>
                </div>

                {/* Price overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white">
                    <span className="text-lg font-bold">{stay.price}</span>
                    <span className="text-sm opacity-90">/night</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{stay.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                      <span className="line-clamp-1">{stay.city}</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg ml-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-yellow-800">{stay.rating}</span>
                  </div>
                </div>

                {/* Temperature */}
                <div className="flex items-center mb-4 bg-blue-50 rounded-lg p-2">
                  <Thermometer className="h-4 w-4 mr-2 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Current: {stay.temperature}</span>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Amenities</h4>
                  <div className="flex flex-wrap gap-1">
                    {stay.amenities.slice(0, 4).map((amenity, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                    Book Now
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-semibold shadow-lg hover:shadow-xl text-lg">
            View All Accommodations
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stays.length}+</div>
            <div className="text-gray-600 font-medium">Properties</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">4.6</div>
            <div className="text-gray-600 font-medium">Avg Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Verified</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccommodationCards;