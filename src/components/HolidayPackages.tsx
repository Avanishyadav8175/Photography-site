import React from 'react';
import { MapPin, Calendar, Star } from 'lucide-react';

interface HolidayPackagesProps {
  darkMode: boolean;
}

const HolidayPackages: React.FC<HolidayPackagesProps> = ({ darkMode }) => {
  const packages = [
    {
      id: 1,
      name: 'Uttarakhand',
      price: '₹9999',
      duration: '5 Days / 4 Nights',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/417054/pexels-photo-417054.jpeg?auto=compress&cs=tinysrgb&w=500',
      highlights: ['Mussoorie', 'Dehradun', 'Rishikesh', 'Haridwar']
    },
    {
      id: 2,
      name: 'Kerala',
      price: '₹9999',
      duration: '6 Days / 5 Nights',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=500',
      highlights: ['Munnar', 'Alleppey', 'Kochi', 'Thekkady']
    },
    {
      id: 3,
      name: 'Himachal',
      price: '₹3999',
      duration: '4 Days / 3 Nights',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=500',
      highlights: ['Shimla', 'Manali', 'Dharamshala', 'Dalhousie']
    },
    {
      id: 4,
      name: 'Kashmir',
      price: '₹12999',
      duration: '7 Days / 6 Nights',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=500',
      highlights: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg']
    },
    {
      id: 5,
      name: 'Rajasthan',
      price: '₹8999',
      duration: '6 Days / 5 Nights',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=500',
      highlights: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer']
    },
    {
      id: 6,
      name: 'Tamil Nadu',
      price: '₹7999',
      duration: '5 Days / 4 Nights',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=500',
      highlights: ['Chennai', 'Madurai', 'Rameswaram', 'Kanyakumari']
    }
  ];

  return (
    <section id="packages" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Holiday Packages</h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover incredible destinations with our carefully curated holiday packages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg">
                  <div className="text-sm">Starts from</div>
                  <div className="text-xl font-bold">{pkg.price}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{pkg.name}</h3>
                
                <div className={`flex items-center space-x-2 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <Calendar className="h-5 w-5" />
                  <span>{pkg.duration}</span>
                </div>

                <div className="mb-6">
                  <h4 className={`font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolidayPackages;