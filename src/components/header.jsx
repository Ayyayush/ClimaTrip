import { useState } from 'react';
import { Sun, Bell, ChevronDown, AlertTriangle, CheckCircle, XCircle, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import BeachAlerts from './BeachAlerts';

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
    linkedin: 'https://www.linkedin.com/in/mukul-sapra-ba31b3372/',
    github: 'https://github.com/DevGyaniMukul'
  },
  {
    name: 'Rahul',
    linkedin: 'https://www.linkedin.com/in/rahul--bhandari/',
    github: 'https://github.com/rahulbhandariitsreal'
  },

];

const recentAlerts = [
  {
    id: 1,
    type: 'warning',
    title: 'High Wave Warning',
    location: 'Kovalam Beach, Kerala',
    severity: 'high',
    time: '30 min ago'
  },
  {
    id: 2,
    type: 'alert',
    title: 'Tsunami Watch',
    location: 'Tamil Nadu Coast',
    severity: 'critical',
    time: '2 hours ago'
  },
  {
    id: 3,
    type: 'info',
    title: 'Water Quality Advisory',
    location: 'Goa Beaches',
    severity: 'medium',
    time: '6 hours ago'
  }
];

function Header({ user, onLogout, onShowAuth }) {
  const [showAccordion, setShowAccordion] = useState(false);
  const [activeTab, setActiveTab] = useState('linkedin');
  const [showAlertsDropdown, setShowAlertsDropdown] = useState(false);
  const [showBeachAlerts, setShowBeachAlerts] = useState(false);

  const getAlertIcon = (type, severity) => {
    if (severity === 'critical') return <XCircle className="h-4 w-4 text-red-500" />;
    if (severity === 'high') return <AlertTriangle className="h-4 w-4 text-orange-500" />;
    if (severity === 'medium') return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    return <CheckCircle className="h-4 w-4 text-green-500" />;
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-50 border-red-200';
      case 'high': return 'bg-orange-50 border-orange-200';
      case 'medium': return 'bg-yellow-50 border-yellow-200';
      default: return 'bg-green-50 border-green-200';
    }
  };

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center h-auto gap-y-3 py-3 md:py-0 md:h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sun className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">ClimaTrip ☀️</h1>
            </div>

            {/* Navbar */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Weather Stays</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Destinations</a>

              {/* 🔔 Alerts Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowAlertsDropdown(!showAlertsDropdown)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Bell className="h-4 w-4" />
                  <span>Alerts</span>
                  <ChevronDown className="h-3 w-3" />
                  {recentAlerts.filter(a => a.severity === 'critical' || a.severity === 'high').length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {recentAlerts.filter(a => a.severity === 'critical' || a.severity === 'high').length}
                    </span>
                  )}
                </button>

                {showAlertsDropdown && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Beach Safety Alerts</h3>
                        <button
                          onClick={() => setShowBeachAlerts(true)}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          View All
                        </button>
                      </div>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {recentAlerts.map((alert) => (
                        <div
                          key={alert.id}
                          className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${getSeverityColor(alert.severity)}`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-1">{getAlertIcon(alert.type, alert.severity)}</div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{alert.title}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <MapPin className="h-3 w-3 text-gray-400" />
                                <p className="text-xs text-gray-600 truncate">{alert.location}</p>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 bg-gray-50 border-t border-gray-200">
                      <button
                        onClick={() => {
                          setShowBeachAlerts(true);
                          setShowAlertsDropdown(false);
                        }}
                        className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        View Beach Safety Dashboard
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Section */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 relative">
              {/* Accordion Button */}
              <div className="relative">
                <button
                  onClick={() => setShowAccordion(!showAccordion)}
                  className="flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow transition text-sm"
                >
                  <span className="font-semibold">Design by Team</span>
                  <FaLinkedin className="text-blue-600" />
                </button>

                {showAccordion && (
                  <div className="absolute right-0 mt-2 w-64 bg-white border rounded-md shadow-lg z-50">
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

              {/* Auth Buttons (Trigger Auth View) */}
              <div className="flex gap-2 items-center">
                {!user ? (
                  <>
                    <button
                      onClick={onShowAuth}
                      className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={onShowAuth}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:from-blue-700 hover:to-purple-700 transition-all"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <button
                    onClick={onLogout}
                    className="text-red-500 font-medium hover:underline text-sm"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Beach Alerts Modal */}
      {showBeachAlerts && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <BeachAlerts onClose={() => setShowBeachAlerts(false)} />
          </div>
        </div>
      )}

      {/* Backdrop Click to Close Alerts Dropdown */}
      {showAlertsDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowAlertsDropdown(false)}
        />
      )}
    </>
  );
}

export default Header;