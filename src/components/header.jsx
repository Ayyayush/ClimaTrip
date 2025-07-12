import { useState } from 'react';
import { Sun } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Imported GitHub icon

const teamMembers = [
  {
    name: 'Aman',
    linkedin: 'https://www.linkedin.com/in/aman-baliyan-573102324',
    github: 'https://github.com/Aman-Baliyan'
  },
  {
    name: 'Ayush',
    linkedin: 'https://www.linkedin.com/in/ayush-pandey-60a138255',
    github: 'https://github.com/ayyayush'
  },
  {
    name: 'Mukul',
    linkedin: 'https://linkedin.com/in/neha',
    github: 'https://github.com/DevGyaniMukul'
  },
  {
    name: 'Rahul',
    linkedin: 'https://github.com/rahulbhandariitsreal',
    github: 'https://github.com/rahulbhandariitsreal'
  }
];

function Header() {
  const [showAccordion, setShowAccordion] = useState(false);
  const [activeTab, setActiveTab] = useState('linkedin'); // 'linkedin' or 'github'

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sun className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">ClimaTrip ☀️</h1>
          </div>

          {/* Navbar */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Weather Stays</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Climate Guide</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Forecast</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Destinations</a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4 relative">
            {/* Accordion Button */}
            <div className="relative">
              <button
                onClick={() => setShowAccordion(!showAccordion)}
                className="flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow transition"
              >
                <span className="font-semibold text-sm">Design by Team</span>
                <FaLinkedin className="text-blue-600" />
              </button>

              {/* Accordion Dropdown Panel */}
              {showAccordion && (
                <div className="absolute right-0 mt-2 w-64 bg-white border rounded-md shadow-lg z-50">
                  {/* Tabs */}
                  <div className="flex border-b">
                    <button
                      className={`w-1/2 py-2 text-sm font-semibold ${activeTab === 'linkedin' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                      onClick={() => setActiveTab('linkedin')}
                    >
                      LinkedIn
                    </button>
                    <button
                      className={`w-1/2 py-2 text-sm font-semibold ${activeTab === 'github' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-600'}`}
                      onClick={() => setActiveTab('github')}
                    >
                      GitHub
                    </button>
                  </div>

                  {/* Tab Content */}
                  <ul className="divide-y">
                    {teamMembers.map((member, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
                        <span>{member.name}</span>
                        <a
                          href={activeTab === 'linkedin' ? member.linkedin : member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {activeTab === 'linkedin' ? (
                            <FaLinkedin className="text-blue-600 hover:text-blue-800" />
                          ) : (
                            <FaGithub className="text-gray-800 hover:text-black" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Auth Buttons */}
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
