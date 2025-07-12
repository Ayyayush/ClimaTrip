import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  DollarSign, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Camera,
  Utensils,
  Mountain,
  Waves,
  Building
} from 'lucide-react';

const travelPlansData = {
  '1': [ // Bali
    {
      id: 'bali-1',
      title: 'Bali Island Hopper',
      duration: '7 days',
      price: '$1,299',
      rating: 4.8,
      description: 'Explore multiple islands around Bali with snorkeling, temple visits, and cultural experiences.',
      highlights: ['Nusa Penida day trip', 'Temple hopping in Ubud', 'Sunset at Tanah Lot', 'Traditional cooking class'],
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'adventure'
    },
    {
      id: 'bali-2',
      title: 'Luxury Bali Retreat',
      duration: '5 days',
      price: '$2,499',
      rating: 4.9,
      description: 'Indulge in luxury resorts, spa treatments, and private beach access.',
      highlights: ['5-star resort stay', 'Private villa with pool', 'Spa and wellness treatments', 'Fine dining experiences'],
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'luxury'
    },
    {
      id: 'bali-3',
      title: 'Cultural Bali Explorer',
      duration: '6 days',
      price: '$899',
      rating: 4.7,
      description: 'Immerse yourself in Balinese culture, traditions, and local communities.',
      highlights: ['Traditional village visits', 'Art and craft workshops', 'Local market tours', 'Hindu ceremony participation'],
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'culture'
    }
  ],
  '2': [ // Paris
    {
      id: 'paris-1',
      title: 'Classic Paris Romance',
      duration: '4 days',
      price: '$1,899',
      rating: 4.9,
      description: 'Experience the romantic side of Paris with Seine cruises, fine dining, and iconic landmarks.',
      highlights: ['Eiffel Tower dinner', 'Seine river cruise', 'Louvre and Musée d\'Orsay', 'Montmartre walking tour'],
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'city'
    },
    {
      id: 'paris-2',
      title: 'Paris Art & Culture',
      duration: '5 days',
      price: '$1,599',
      rating: 4.8,
      description: 'Dive deep into Parisian art, history, and cultural heritage.',
      highlights: ['Private museum tours', 'Art gallery visits', 'Historical walking tours', 'Cultural workshops'],
      image: 'https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'culture'
    }
  ],
  '3': [ // Tokyo
    {
      id: 'tokyo-1',
      title: 'Modern Tokyo Adventure',
      duration: '6 days',
      price: '$1,799',
      rating: 4.8,
      description: 'Explore Tokyo\'s modern districts, technology, and pop culture.',
      highlights: ['Shibuya and Harajuku tours', 'Robot restaurant show', 'Technology museums', 'Anime and manga districts'],
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'city'
    },
    {
      id: 'tokyo-2',
      title: 'Traditional Japan Experience',
      duration: '7 days',
      price: '$2,199',
      rating: 4.9,
      description: 'Discover traditional Japanese culture, temples, and authentic experiences.',
      highlights: ['Temple and shrine visits', 'Tea ceremony', 'Traditional ryokan stay', 'Cherry blossom viewing'],
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'culture'
    }
  ],
  '4': [ // Santorini
    {
      id: 'santorini-1',
      title: 'Santorini Sunset Paradise',
      duration: '5 days',
      price: '$1,999',
      rating: 4.9,
      description: 'Experience breathtaking sunsets, white-washed villages, and crystal-clear waters.',
      highlights: ['Oia sunset viewing', 'Wine tasting tours', 'Volcano boat trip', 'Traditional Greek dining'],
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beach'
    },
    {
      id: 'santorini-2',
      title: 'Greek Island Luxury',
      duration: '4 days',
      price: '$2,799',
      rating: 4.8,
      description: 'Luxury accommodations with private pools and exclusive experiences.',
      highlights: ['Luxury cave hotel', 'Private yacht charter', 'Exclusive beach access', 'Fine dining experiences'],
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'luxury'
    }
  ],
  '5': [ // New York
    {
      id: 'ny-1',
      title: 'NYC Highlights Tour',
      duration: '4 days',
      price: '$1,599',
      rating: 4.7,
      description: 'See all the iconic NYC landmarks and attractions in this action-packed tour.',
      highlights: ['Statue of Liberty', 'Empire State Building', 'Central Park', 'Broadway show'],
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'city'
    },
    {
      id: 'ny-2',
      title: 'NYC Food & Culture',
      duration: '5 days',
      price: '$1,899',
      rating: 4.8,
      description: 'Explore NYC\'s diverse neighborhoods, food scene, and cultural attractions.',
      highlights: ['Food tours in different boroughs', 'Museum visits', 'Neighborhood walking tours', 'Local market experiences'],
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'culture'
    }
  ],
  '6': [ // Dubai
    {
      id: 'dubai-1',
      title: 'Dubai Luxury Experience',
      duration: '5 days',
      price: '$2,999',
      rating: 4.9,
      description: 'Experience the ultimate luxury in Dubai with world-class shopping, dining, and attractions.',
      highlights: ['Burj Khalifa visit', 'Luxury shopping malls', 'Desert safari', 'High-end dining'],
      image: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'luxury'
    },
    {
      id: 'dubai-2',
      title: 'Dubai Adventure Package',
      duration: '6 days',
      price: '$1,999',
      rating: 4.8,
      description: 'Thrilling adventures in the desert and modern attractions of Dubai.',
      highlights: ['Desert safari and camping', 'Skydiving over Palm Jumeirah', 'Water sports', 'Theme park visits'],
      image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'adventure'
    }
  ],
  '7': [ // Goa
    {
      id: 'goa-1',
      title: 'Goa Beach Paradise',
      duration: '5 days',
      price: '$699',
      rating: 4.7,
      description: 'Relax on pristine beaches, enjoy water sports, and experience vibrant nightlife.',
      highlights: ['North Goa beaches', 'Water sports activities', 'Beach shacks and nightlife', 'Portuguese heritage sites'],
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beach'
    },
    {
      id: 'goa-2',
      title: 'Goa Cultural Explorer',
      duration: '4 days',
      price: '$499',
      rating: 4.6,
      description: 'Discover Goa\'s rich Portuguese heritage and local culture.',
      highlights: ['Old Goa churches', 'Spice plantation tours', 'Local markets', 'Traditional Goan cuisine'],
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'culture'
    }
  ],
  '8': [ // Kerala
    {
      id: 'kerala-1',
      title: 'Kerala Backwaters & Beaches',
      duration: '7 days',
      price: '$899',
      rating: 4.8,
      description: 'Experience the serene backwaters of Alleppey and beautiful beaches of Kovalam.',
      highlights: ['Houseboat in backwaters', 'Kovalam beach resort', 'Ayurvedic spa treatments', 'Traditional Kerala cuisine'],
      image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beach'
    },
    {
      id: 'kerala-2',
      title: 'Kerala Hill Stations & Spices',
      duration: '6 days',
      price: '$799',
      rating: 4.7,
      description: 'Explore the tea gardens of Munnar and spice plantations of Thekkady.',
      highlights: ['Munnar tea gardens', 'Thekkady spice tours', 'Wildlife sanctuary visits', 'Traditional performances'],
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'adventure'
    }
  ],
  '9': [ // Andaman Islands
    {
      id: 'andaman-1',
      title: 'Andaman Island Adventure',
      duration: '6 days',
      price: '$1,299',
      rating: 4.9,
      description: 'Pristine beaches, coral reefs, and water adventures in the Andaman Sea.',
      highlights: ['Radhanagar Beach', 'Scuba diving and snorkeling', 'Cellular Jail visit', 'Island hopping'],
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'adventure'
    },
    {
      id: 'andaman-2',
      title: 'Andaman Luxury Beach Resort',
      duration: '5 days',
      price: '$1,899',
      rating: 4.8,
      description: 'Luxury beach resort experience with private beaches and premium amenities.',
      highlights: ['Luxury beach resort', 'Private beach access', 'Spa and wellness', 'Fine dining experiences'],
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'luxury'
    }
  ],
  '10': [ // Lakshadweep
    {
      id: 'lakshadweep-1',
      title: 'Lakshadweep Coral Paradise',
      duration: '4 days',
      price: '$1,599',
      rating: 4.9,
      description: 'Explore pristine coral islands with crystal clear lagoons and marine life.',
      highlights: ['Coral reef exploration', 'Lagoon swimming', 'Traditional island culture', 'Marine wildlife spotting'],
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beach'
    }
  ],
  '11': [ // Pondicherry
    {
      id: 'pondi-1',
      title: 'Pondicherry French Quarter',
      duration: '3 days',
      price: '$399',
      rating: 4.6,
      description: 'Experience French colonial architecture and serene beaches in Pondicherry.',
      highlights: ['French Quarter walking tour', 'Auroville visit', 'Beach relaxation', 'French cuisine'],
      image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'culture'
    }
  ]
};

const categoryIcons = {
  adventure: Mountain,
  culture: Camera,
  beach: Waves,
  city: Building,
  luxury: Star
};

const categoryColors = {
  adventure: 'bg-green-100 text-green-800',
  culture: 'bg-purple-100 text-purple-800',
  beach: 'bg-blue-100 text-blue-800',
  city: 'bg-gray-100 text-gray-800',
  luxury: 'bg-yellow-100 text-yellow-800'
};

function TravelPlans({ destination }) {
  const [expandedPlan, setExpandedPlan] = useState(null);

  if (!destination) return null;

  const plans = travelPlansData[destination.id] || [];

  const togglePlan = (planId) => {
    setExpandedPlan(expandedPlan === planId ? null : planId);
  };

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
        {/* Header */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-2xl font-bold">{destination.name}, {destination.country}</h2>
            <p className="text-gray-200">{destination.description}</p>
          </div>
        </div>

        {/* Travel Plans */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Travel Plans</h3>
          <div className="space-y-4">
            {plans.map((plan) => {
              const isExpanded = expandedPlan === plan.id;
              const CategoryIcon = categoryIcons[plan.category];
              
              return (
                <div
                  key={plan.id}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  {/* Plan Header */}
                  <div
                    onClick={() => togglePlan(plan.id)}
                    className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <img
                          src={plan.image}
                          alt={plan.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="text-lg font-semibold text-gray-900">{plan.title}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[plan.category]}`}>
                              <CategoryIcon className="inline h-3 w-3 mr-1" />
                              {plan.category.charAt(0).toUpperCase() + plan.category.slice(1)}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {plan.duration}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {plan.price}
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                              {plan.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-4 pb-4 border-t border-gray-200 bg-gray-50/50">
                      <div className="pt-4">
                        <p className="text-gray-700 mb-4">{plan.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Trip Highlights:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {plan.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-3 w-3 mr-2 text-blue-500" />
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-500">
                            Starting from <span className="font-semibold text-gray-900">{plan.price}</span> per person
                          </div>
                          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelPlans;