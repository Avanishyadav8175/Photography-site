import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarFleet from './components/CarFleet';
import HolidayPackages from './components/HolidayPackages';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchData, setSearchData] = useState(null);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearch = (data: any) => {
    setSearchData(data);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} onSearch={handleSearch} />
      <CarFleet darkMode={darkMode} searchData={searchData} />
      <HolidayPackages darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <ContactForm darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <FloatingButtons darkMode={darkMode} />
    </div>
  );
}

export default App;