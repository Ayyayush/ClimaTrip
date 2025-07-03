import React from 'react';
import { Calendar, Thermometer, Wind } from 'lucide-react';

function WeatherInsights() {
  const insights = [
    {
      title: '7-Day Forecast',
      description: 'Detailed weather predictions for your entire trip',
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      features: ['Temperature trends', 'Precipitation chances', 'Wind conditions', 'UV index']
    },
    {
      title: 'Climate Matching',
      description: 'Find destinations that match your weather preferences',
      icon: <Thermometer className="h-8 w-8 text-green-600" />,
      features: ['Temperature preferences', 'Humidity levels', 'Seasonal patterns', 'Activity recommendations']
    },
    {
      title: 'Real-time Updates',
      description: 'Stay informed with live weather conditions',
      icon: <Wind className="h-8 w-8 text-purple-600" />,
      features: ['Current conditions', 'Weather alerts', 'Travel advisories', 'Packing suggestions']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Travel Weather Insights</h2>
          <p className="text-gray-600 mt-2">Make informed decisions with detailed weather forecasts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {insight.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">{insight.title}</h3>
              </div>

              <p className="text-gray-600 mb-4">{insight.description}</p>

              <ul className="space-y-2">
                {insight.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WeatherInsights;
