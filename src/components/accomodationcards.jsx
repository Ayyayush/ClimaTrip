import { Thermometer, MapPin, Star } from 'lucide-react';

function AccommodationCards({ stays }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Matching Accommodations</h2>
          <p className="text-gray-600 mt-2">Based on your weather preferences</p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stays.map((stay, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={stay.image}
                  alt={stay.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-semibold text-gray-700 shadow">
                  {stay.weather}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{stay.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {stay.city}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="ml-1 text-sm">{stay.rating}</span>
                  </div>
                </div>

                <div className="flex items-center mt-3 text-gray-600 text-sm">
                  <Thermometer className="h-4 w-4 mr-1" />
                  {stay.temperature}
                </div>

                {/* Price & Button */}
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <span className="text-xl font-bold text-gray-900">{stay.price}</span>
                    <span className="text-sm text-gray-500"> /night</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    View Stay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccommodationCards;
