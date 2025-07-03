import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">ClimaGo</h3>
            <p className="text-sm text-gray-400">
              Discover destinations tailored to your perfect weather. 
              Travel where the sky always matches your vibe 🌤️
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Destinations</a></li>
              <li><a href="#" className="hover:underline">Stays</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="text-md font-semibold text-white mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                support@climago.com
              </li>
              <li className="flex space-x-4 mt-3">
                <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © 2025 ClimaTrip. Built by MCA BOYZ 🚀
        </div>
      </div>
    </footer>
  );
}

export default Footer;
