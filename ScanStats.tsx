import React from 'react';
import { Shield, AlertTriangle, Link, Clock } from 'lucide-react';

const ScanStats = () => {
  // These would be fetched from an API in a real application
  const stats = [
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      value: '2.8M+',
      label: 'URLs Scanned',
      description: 'Total URLs analyzed by our security engine'
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      value: '352K+',
      label: 'Threats Detected',
      description: 'Malicious URLs identified and blocked'
    },
    {
      icon: <Link className="h-8 w-8 text-blue-500" />,
      value: '98.7%',
      label: 'Accuracy Rate',
      description: 'Precision in detecting harmful websites'
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      value: '<1s',
      label: 'Avg. Scan Time',
      description: 'Lightning-fast security analysis'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 transition-all hover:border-neutral-700 hover:shadow-lg hover:shadow-red-900/5"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-neutral-800 p-3 rounded-full">
              {stat.icon}
            </div>
            <div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm font-medium text-gray-400">{stat.label}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ScanStats;