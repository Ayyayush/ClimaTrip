import { Sun, Cloud, Wind, Waves, Plane, MapPin, Camera, Compass } from 'lucide-react';

function Hero({ preferredWeather, setPreferredWeather }) {
  const weatherPreferences = [
    { id: 'sunny', label: 'Sunny & Warm', icon: <Sun className="h-6 w-6" />, temp: '25-30°C', color: 'from-yellow-400 to-orange-500' },
    { id: 'mild', label: 'Mild & Pleasant', icon: <Cloud className="h-6 w-6" />, temp: '18-25°C', color: 'from-blue-400 to-cyan-500' },
    { id: 'cool', label: 'Cool & Fresh', icon: <Wind className="h-6 w-6" />, temp: '10-18°C', color: 'from-teal-400 to-blue-500' },
    { id: 'tropical', label: 'Tropical', icon: <Waves className="h-6 w-6" />, temp: '28-35°C', color: 'from-emerald-400 to-teal-500' }
  ];

  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* Enhanced Animated Background with Beach Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        {/* Animated Waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-32 text-blue-200 opacity-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0 0;-100 0;0 0"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0 0;100 0;0 0"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0 0;-50 0;0 0"
                dur="12s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        {/* Floating Clouds */}
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <div className="w-20 h-12 bg-white rounded-full"></div>
          <div className="w-16 h-10 bg-white rounded-full -mt-6 ml-4"></div>
        </div>
        <div className="absolute top-32 right-20 animate-float-delayed opacity-25">
          <div className="w-24 h-14 bg-white rounded-full"></div>
          <div className="w-18 h-12 bg-white rounded-full -mt-7 ml-6"></div>
        </div>

        {/* Animated Sailboat */}
        <div className="absolute bottom-32 right-16 animate-boat opacity-60">
          <svg width="80" height="60" viewBox="0 0 80 60" className="text-blue-600">
            {/* Boat Hull */}
            <path d="M10 45 Q40 35 70 45 L65 50 Q40 40 15 50 Z" fill="currentColor" opacity="0.8"/>
            {/* Mast */}
            <line x1="40" y1="45" x2="40" y2="15" stroke="currentColor" strokeWidth="2"/>
            {/* Main Sail */}
            <path d="M40 15 Q25 20 40 35 Z" fill="currentColor" opacity="0.6"/>
            {/* Jib Sail */}
            <path d="M40 20 Q50 15 40 30 Z" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>

        {/* Animated Seagulls */}
        <div className="absolute top-24 left-1/3 animate-fly opacity-40">
          <svg width="20" height="12" viewBox="0 0 20 12" className="text-gray-600">
            <path d="M2 6 Q10 2 18 6 Q10 10 2 6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className="absolute top-36 right-1/3 animate-fly-delayed opacity-35">
          <svg width="16" height="10" viewBox="0 0 16 10" className="text-gray-600">
            <path d="M2 5 Q8 2 14 5 Q8 8 2 5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>

        {/* Palm Tree Silhouette */}
        <div className="absolute bottom-20 left-8 opacity-20">
          <svg width="60" height="80" viewBox="0 0 60 80" className="text-green-800">
            {/* Trunk */}
            <rect x="28" y="40" width="4" height="40" fill="currentColor"/>
            {/* Palm Fronds */}
            <path d="M30 40 Q15 25 5 20" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M30 40 Q45 25 55 20" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M30 40 Q20 15 10 5" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M30 40 Q40 15 50 5" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M30 40 Q30 10 30 0" stroke="currentColor" strokeWidth="3" fill="none"/>
          </svg>
        </div>

        {/* Beach Umbrella */}
        <div className="absolute bottom-24 right-32 opacity-25 animate-sway">
          <svg width="40" height="50" viewBox="0 0 40 50" className="text-red-500">
            {/* Umbrella Top */}
            <path d="M20 15 Q5 20 5 25 Q20 20 35 25 Q35 20 20 15" fill="currentColor"/>
            {/* Pole */}
            <line x1="20" y1="25" x2="20" y2="45" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Floating Travel Icons with Beach Theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 animate-float">
          <Plane className="h-8 w-8 text-blue-400 opacity-30 transform rotate-45" />
        </div>
        <div className="absolute top-48 right-32 animate-float-delayed">
          <Camera className="h-6 w-6 text-cyan-500 opacity-40" />
        </div>
        <div className="absolute bottom-40 left-32 animate-float-slow">
          <Compass className="h-7 w-7 text-teal-500 opacity-35" />
        </div>
        <div className="absolute top-60 right-16 animate-float">
          <MapPin className="h-6 w-6 text-blue-500 opacity-30" />
        </div>
        {/* Beach-specific icons */}
        <div className="absolute top-40 left-1/2 animate-float-delayed">
          <Waves className="h-8 w-8 text-blue-400 opacity-25" />
        </div>
        <div className="absolute bottom-32 right-1/4 animate-float-slow">
          <Sun className="h-10 w-10 text-yellow-400 opacity-30" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Enhanced Title with Beach Animation */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-2 animate-fade-in-up">
              Coastal
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 animate-gradient-x">
                Quest
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-2 text-blue-600 animate-fade-in-up-delayed">
              <Waves className="h-6 w-6 animate-pulse" />
              <span className="text-lg font-medium">Your Beach Adventure Awaits</span>
              <Waves className="h-6 w-6 animate-pulse" />
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed-2">
            Discover perfect coastal destinations based on your ideal climate. Find accommodations where the weather matches your mood and the waves meet your dreams.
          </p>
        </div>

        {/* Enhanced Weather Preference Selector */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">What's your ideal weather?</h3>
            <p className="text-gray-600">Choose your perfect climate for the ultimate beach experience</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {weatherPreferences.map((weather, index) => (
              <button
                key={weather.id}
                onClick={() => setPreferredWeather(weather.id)}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up ${
                  preferredWeather === weather.id
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg scale-105'
                    : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-blue-300 hover:bg-white/90'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Background for Selected */}
                {preferredWeather === weather.id && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${weather.color} opacity-10 rounded-2xl`}></div>
                )}
                
                <div className="relative flex flex-col items-center space-y-3">
                  <div className={`p-3 rounded-full transition-all duration-300 ${
                    preferredWeather === weather.id 
                      ? `bg-gradient-to-r ${weather.color} text-white shadow-lg` 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }`}>
                    {weather.icon}
                  </div>
                  
                  <div className="text-center">
                    <span className={`font-semibold text-sm block mb-1 ${
                      preferredWeather === weather.id ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                      {weather.label}
                    </span>
                    <span className={`text-xs ${
                      preferredWeather === weather.id ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {weather.temp}
                    </span>
                  </div>
                </div>

                {/* Selection Indicator */}
                {preferredWeather === weather.id && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action with Beach Theme */}
        <div className="text-center animate-fade-in-up-delayed-3">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 shadow-lg">
            <Waves className="h-5 w-5 text-blue-500 animate-pulse" />
            <span className="text-blue-700 font-medium">Start your coastal journey below</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS for Beach Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes boat {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(10px) translateY(-5px); }
          50% { transform: translateX(0px) translateY(-8px); }
          75% { transform: translateX(-10px) translateY(-5px); }
        }
        @keyframes fly {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(20px) translateY(-10px); }
        }
        @keyframes fly-delayed {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(-15px) translateY(-8px); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-boat {
          animation: boat 8s ease-in-out infinite;
        }
        .animate-fly {
          animation: fly 12s ease-in-out infinite;
        }
        .animate-fly-delayed {
          animation: fly-delayed 10s ease-in-out infinite;
        }
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-fade-in-up-delayed {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-up-delayed-2 {
          animation: fade-in-up 0.8s ease-out 0.4s both;
        }
        .animate-fade-in-up-delayed-3 {
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }
      `}</style>
    </section>
  );
}

export default Hero;