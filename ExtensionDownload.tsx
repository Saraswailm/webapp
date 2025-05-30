import React from 'react';
import { Chrome, Shield } from 'lucide-react';

const ExtensionDownload = () => {
  /* ─── list of browsers ─── */
  const browsers = [
    {
      name: 'Chrome',
      icon: <Chrome className="h-10 w-10" />,
      available: true
    },
    {
      name: 'Firefox',
      icon: <Shield className="h-10 w-10" />, // placeholder icon
      available: true
    },
    {
      name: 'Edge',
      icon: <Shield className="h-10 w-10" />, // placeholder icon
      available: true
    }
  ];

  return (
    <div className="text-center">
      {/* heading */}
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">Protect Your Browsing</h2>
        <p className="text-gray-400 mb-12">
          Install the Fishix browser extension to get real-time protection against
          malicious websites, phishing attempts, and other online threats while you
          browse.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
        {browsers.map((browser) => (
          <div
            key={browser.name}
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 flex flex-col items-center
                       hover:border-red-600 transition-all"
          >
            <div className="text-red-500 mb-4">{browser.icon}</div>
            <h3 className="font-semibold mb-3">{browser.name}</h3>

            {/* badge */}
            {browser.available && (
              <span className="text-xs px-3 py-1 bg-green-900/30 text-green-400 rounded-full">
                Available
              </span>
            )}
          </div>
        ))}
      </div>

      {/* CTA button */}
      <a
        href="#"
        className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white
                   font-medium px-8 py-4 rounded-md transition-colors"
      >
        <Chrome className="h-5 w-5 mr-2" />
        Get Fishix for Chrome
      </a>

      {/* secondary link */}
      <p className="mt-6 text-sm text-gray-500">
        Need another browser?{' '}
        <button className="text-red-500 hover:text-red-400">
          See all downloads …
        </button>
      </p>
    </div>
  );
};

export default ExtensionDownload;
