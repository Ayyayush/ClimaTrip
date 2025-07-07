import React, { useState, useEffect } from 'react';
import { Bell, AlertTriangle, Info, CheckCircle, X } from 'lucide-react';

const BeachAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [filter, setFilter] = useState('all');

  // Mock alerts data
  const mockAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'High Wave Warning',
      message: 'Wave heights expected to reach 3-4 meters at Kovalam Beach. Swimming not recommended.',
      location: 'Kovalam Beach, Kerala',
      timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      severity: 'high',
      active: true
    },
    {
      id: 2,
      type: 'alert',
      title: 'Tsunami Watch',
      message: 'Tsunami watch issued for coastal areas of Tamil Nadu. Stay alert and follow official instructions.',
      location: 'Tamil Nadu Coast',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      severity: 'critical',
      active: true
    },
    {
      id: 3,
      type: 'info',
      title: 'Water Quality Advisory',
      message: 'Temporary water quality degradation due to recent rainfall. Avoid water contact activities.',
      location: 'Goa Beaches',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      severity: 'medium',
      active: true
    },
    {
      id: 4,
      type: 'success',
      title: 'All Clear',
      message: 'Weather conditions have improved. All recreational activities are now safe.',
      location: 'Marina Beach, Chennai',
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
      severity: 'low',
      active: false
    }
  ];

  useEffect(() => {
    setAlerts(mockAlerts);
  }, []);

  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning':
      case 'alert':
        return <AlertTriangle className="h-5 w-5" />;
      case 'info':
        return <Info className="h-5 w-5" />;
      case 'success':
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  const getAlertColor = (type, severity) => {
    if (type === 'success') return 'bg-green-50 border-green-200 text-green-800';
    
    switch (severity) {
      case 'critical':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'high':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'medium':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'low':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
  };

  const filteredAlerts = alerts.filter(alert => {
    if (filter === 'all') return true;
    if (filter === 'active') return alert.active;
    return alert.severity === filter;
  });

  const dismissAlert = (alertId) => {
    setAlerts(alerts.map(alert => 
      alert.id === alertId ? { ...alert, active: false } : alert
    ));
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Bell className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Beach Safety Alerts</h2>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Filter:</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
            >
              <option value="all">All Alerts</option>
              <option value="active">Active Only</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        {/* Alert Summary */}
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">
              {alerts.filter(a => a.severity === 'critical' && a.active).length}
            </div>
            <div className="text-xs text-gray-600">Critical</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              {alerts.filter(a => a.severity === 'high' && a.active).length}
            </div>
            <div className="text-xs text-gray-600">High</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {alerts.filter(a => a.severity === 'medium' && a.active).length}
            </div>
            <div className="text-xs text-gray-600">Medium</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {alerts.filter(a => a.type === 'success').length}
            </div>
            <div className="text-xs text-gray-600">All Clear</div>
          </div>
        </div>
      </div>

      {/* Alerts List */}
      <div className="max-h-96 overflow-y-auto">
        {filteredAlerts.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <Bell className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No alerts match your current filter.</p>
          </div>
        ) : (
          filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 border-b border-gray-100 ${getAlertColor(alert.type, alert.severity)} ${
                !alert.active ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">{alert.title}</h3>
                      {alert.active && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-sm mb-2">{alert.message}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium">{alert.location}</span>
                      <span>{formatTimeAgo(alert.timestamp)}</span>
                    </div>
                  </div>
                </div>
                {alert.active && (
                  <button
                    onClick={() => dismissAlert(alert.id)}
                    className="flex-shrink-0 ml-4 p-1 hover:bg-white/50 rounded-full transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
          <span>Data source: INCOIS</span>
        </div>
      </div>
    </div>
  );
};

export default BeachAlerts;