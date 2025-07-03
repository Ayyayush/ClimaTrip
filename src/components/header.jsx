import { Sun } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sun className="h-5 w-5 text-white" />
            </div>
          <h1 className="text-xl font-bold text-gray-900">ClimaTrip ☀️</h1>

          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Weather Stays</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Climate Guide</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Forecast</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Destinations</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors">Sign In</button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
