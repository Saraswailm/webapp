import React from 'react';
import { Shield, Check, Star, Download, Chrome, Lock } from 'lucide-react';
import ExtensionDownload from '../components/ExtensionDownload';

const Extension = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fishix Browser Extension</h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Get real-time protection against malicious websites as you browse.
              Our browser extension works silently in the background to keep you safe.
            </p>
            
            <div className="flex justify-center">
              <a
                href="#download"
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black inline-flex items-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-400">
              Our browser extension provides comprehensive protection while you browse,
              without slowing down your experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="h-10 w-10 text-red-500" />,
                title: "Real-time Protection",
                description: "Automatically scans URLs before you visit them to prevent access to dangerous websites."
              },
              {
                icon: <Lock className="h-10 w-10 text-red-500" />,
                title: "Phishing Detection",
                description: "Identifies and blocks sophisticated phishing attempts that target your personal information."
              },
              {
                icon: <Check className="h-10 w-10 text-red-500" />,
                title: "Safe Browsing Badge",
                description: "Displays a safety indicator next to search results and links to help you browse confidently."
              },
              {
                icon: <Star className="h-10 w-10 text-red-500" />,
                title: "Customizable Settings",
                description: "Adjust protection levels and notification preferences to suit your browsing habits."
              },
              {
                icon: <Chrome className="h-10 w-10 text-red-500" />,
                title: "Cross-Browser Support",
                description: "Available for all major browsers including Chrome, Firefox, Edge, and Safari (coming soon)."
              },
              {
                icon: <Download className="h-10 w-10 text-red-500" />,
                title: "Lightweight",
                description: "Minimal resource usage ensures your browsing experience remains fast and responsive."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                <div className="bg-neutral-800 p-3 rounded-full inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <div className="space-y-6">
                  {[
                    {
                      number: "01",
                      title: "Install the Extension",
                      description: "Download and install the Fishix extension from your browser's extension store."
                    },
                    {
                      number: "02",
                      title: "Browse Normally",
                      description: "Continue using the web as you normally would. The extension works silently in the background."
                    },
                    {
                      number: "03",
                      title: "Get Instant Alerts",
                      description: "If you attempt to visit a malicious website, Fishix will alert you and block access to keep you safe."
                    },
                    {
                      number: "04",
                      title: "View Detailed Reports",
                      description: "Click on the Fishix icon to see detailed security information and statistics about your browsing protection."
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4">
                        <div className="bg-red-900/20 text-red-500 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                          {step.number}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{step.title}</h3>
                        <p className="text-gray-400 mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 relative overflow-hidden">
                <div 
                  className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-2xl"
                ></div>
                <div className="relative z-10">
                  <div className="mx-auto w-full max-w-[280px] h-[500px] bg-neutral-800 rounded-xl p-2 border border-neutral-700 shadow-xl">
                    <div className="w-full h-full bg-neutral-950 rounded-lg flex items-center justify-center">
                      <div className="text-center p-6">
                        <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Website Blocked</h3>
                        <p className="text-sm text-gray-400 mb-4">
                          Fishix has detected that this website may be trying to steal your information.
                        </p>
                        <div className="mt-6 space-y-2">
                          <button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors">
                            Back to Safety
                          </button>
                          <button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Download Section */}
      <section id="download" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <ExtensionDownload />
        </div>
      </section>
    </div>
  );
};

export default Extension;