import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Search } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  onSearch: (searchData: any) => void;
}

const Hero: React.FC<HeroProps> = ({ darkMode, onSearch }) => {
  const [tripType, setTripType] = useState('ONE WAY TRIP');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  const cities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad',
    'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur',
    'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad',
    'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik',
    'Surat', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivali',
    'Vasai-Virar', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad',
    'Amritsar', 'Navi Mumbai', 'Allahabad', 'Ranchi', 'Howrah',
    'Coimbatore', 'Jabalpur', 'Gwalior', 'Vijayawada', 'Jodhpur',
    'Madurai', 'Raipur', 'Kota', 'Guwahati', 'Chandigarh', 'Solapur',
    'Hubli-Dharwad', 'Bareilly', 'Moradabad', 'Mysore', 'Gurgaon',
    'Aligarh', 'Jalandhar', 'Tiruchirappalli', 'Bhubaneswar', 'Salem'
  ];

  const handleSearch = () => {
    if (!fromCity || !toCity || !pickupDate || !pickupTime) {
      alert('Please fill in all fields to search for cars');
      return;
    }

    const searchData = {
      tripType,
      fromCity,
      toCity,
      pickupDate,
      pickupTime
    };

    onSearch(searchData);
    
    // Scroll to car fleet section
    const fleetSection = document.getElementById('fleet');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Booking Form */}
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} p-8 rounded-xl shadow-2xl transition-colors duration-300`}>
            {/* Trip Type Tabs */}
            <div className="flex mb-6">
              {['ONE WAY TRIP', 'ROUND TRIP', 'LOCAL TRIP'].map((type) => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 ${
                    tripType === type
                      ? 'bg-red-600 text-white'
                      : darkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } ${type === 'ONE WAY TRIP' ? 'rounded-l-lg' : ''} ${
                    type === 'LOCAL TRIP' ? 'rounded-r-lg' : ''
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    From City
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select
                      value={fromCity}
                      onChange={(e) => setFromCity(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Destination City
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select
                      value={toCity}
                      onChange={(e) => setToCity(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select Destination</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Pickup Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Pickup Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                </div>
              </div>

              <button 
                onClick={handleSearch}
                className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-medium text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>SEARCH CARS</span>
              </button>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reliable Services
              <br />
              at <span className="text-red-500">Affordable</span>
              <br />
              Prices
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Book your perfect ride with our premium car rental service. 
              Professional drivers, well-maintained vehicles, and 24/7 support.
            </p>
            <div className="bg-red-600 inline-block p-4 rounded-lg">
              <p className="text-2xl font-bold">Call Now: +91 9599142653</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;