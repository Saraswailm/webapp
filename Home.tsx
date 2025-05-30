import React from 'react';
import { ChevronDown, Shield } from 'lucide-react';
import UrlScanner from '../components/UrlScanner';
import ScanStats from '../components/ScanStats';
import ThreatTypes from '../components/ThreatTypes';
import ExtensionDownload from '../components/ExtensionDownload';

const Home = () => {
  const scrollToScanner = () => {
    const scannerElement = document.getElementById('scanner');
    if (scannerElement) {
      scannerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-b from-red-900/20 to-transparent"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255, 0, 0, 0.1), transparent 40%)",
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500">
              Protect Yourself From Malicious URLs
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Fishix helps you identify harmful websites before you visit them.
              Scan any URL instantly and browse the web safely.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button
                onClick={scrollToScanner}
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Scan URL Now
              </button>
              <a
                href="#extension"
                className="bg-neutral-800 hover:bg-neutral-700 text-white font-medium px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 focus:ring-offset-black"
              >
                Get Browser Extension
              </a>
            </div>
            
            <button
              onClick={scrollToScanner}
              className="mt-16 flex flex-col items-center text-gray-400 hover:text-white transition-colors animate-bounce"
            >
              <span className="text-sm mb-2">Scroll to try</span>
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Scanner Section */}
      <section id="scanner" className="bg-neutral-950 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block p-2 bg-red-900/20 rounded-lg mb-6">
              <Shield className="h-8 w-8 text-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Check Any URL For Threats</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enter any website address below to scan it for phishing attempts, malware, and other security threats.
              Our advanced security engine provides immediate results.
            </p>
          </div>
          
          <UrlScanner />
        </div>
      </section>

     

      {/* Threat Types Section */}
      <section className="bg-neutral-950 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Threats We Detect</h2>
            <p className="text-gray-400">
              Fishix protects you from a wide range of online threats. Our advanced security
              engine can identify and warn you about these common cyber threats.
            </p>
          </div>
          
          <ThreatTypes />
        </div>
      </section>

      {/* Extension Section */}
      <section id="extension" className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ExtensionDownload />
        </div>
      </section>
    </div>
  );
};

export default Home;