import React, { useState } from 'react';
import { Car, Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'CAR FLEET', href: '#fleet' },
    { name: 'HOLIDAY PACKAGES', href: '#packages' },
    { name: 'CONTACT US', href: '#contact' },
    { name: 'BOOKINGS', href: '#bookings' },
  ];

  return (
    <header className={`${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg fixed w-full top-0 z-50 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>JOINCAB</h1>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Rent a Car</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-600'} font-medium transition-colors duration-200`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 ${darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-600'} font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;