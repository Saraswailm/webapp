import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 text-red-500">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-bold tracking-tight">Fishix</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Protecting your online presence with advanced URL scanning technology.
              Stay safe from phishing attacks and malicious websites.
            </p>
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/extension" className="hover:text-red-500 transition-colors">Browser Extension</Link>
              </li>
            </ul>
          </div>

          {/* Extension */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Browser Extensions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Chrome Extension</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Firefox Add-on</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Edge Extension</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Safari Extension</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>support@fishix.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>123 Security Ave, Cyberspace, CS 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Fishix. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;