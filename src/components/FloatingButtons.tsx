import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface FloatingButtonsProps {
  darkMode: boolean;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ darkMode }) => {
  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in booking a car rental. Please provide more details.";
    const whatsappUrl = `https://wa.me/919599142653?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919599142653', '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <div className={`absolute right-16 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
          darkMode ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'
        }`}>
          Chat on WhatsApp
        </div>
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200 group"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
        <div className={`absolute right-16 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
          darkMode ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'
        }`}>
          Call Now
        </div>
      </button>
    </div>
  );
};

export default FloatingButtons;