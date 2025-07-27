import React from 'react';
import { Car, Facebook, Instagram, Youtube, Globe } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-black'} text-gray-300`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-red-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">JoinCab TRAVELS</h3>
              <p className="text-sm">Rent a Car</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mb-4 md:mb-0">
            <p className="text-sm">
              Copyright © 2025 JoinCab Travels Pvt Ltd. All rights reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Facebook className="h-5 w-5 text-white" />
            </a>
            <a
              href="#"
              className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors duration-200"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a
              href="#"
              className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              <Youtube className="h-5 w-5 text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-600 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <Globe className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;