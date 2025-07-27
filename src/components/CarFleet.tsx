import React, { useState } from 'react';
import { Users, Fuel, Shield, Phone, MessageCircle } from 'lucide-react';
import car01 from './assests/car01.jpg';
import car02 from './assests/car02.jpg';
import car03 from './assests/car03.jpg';
import car04 from './assests/car04.jpg';
import car05 from './assests/car05.jpg';
import car06 from './assests/car06.jpg';
import car07 from './assests/car07.jpg';
import car08 from './assests/car08.jpg';
import car09 from './assests/car09.jpg';
import car10 from './assests/car10.jpg';
import car11 from './assests/car11.jpg';
import car12 from './assests/car12.jpg';
import car13 from './assests/car13.jpg';
import car14 from './assests/car14.jpg';
import car15 from './assests/car15.jpg';
import car16 from './assests/car16.jpg';
import car17 from './assests/car17.jpg';



interface CarFleetProps {
  darkMode: boolean;
  searchData?: any;
}

const CarFleet: React.FC<CarFleetProps> = ({ darkMode, searchData }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Hatchback', 'Sedan', 'Luxury Sedan', 'SUV', 'Tempo Traveller'];

  const cars = [
    {
      id: 1,
      name: 'Maruti Suzuki celerio',
      category: 'Hatchback',
      seating: '4 + 1',
      fuelEfficiency: '20–22 km/l',
      price: '₹12 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car13
    },
    {
      id: 2,
      name: 'Hyundai Santro',
      category: 'Hatchback',
      seating: '4 + 1',
      fuelEfficiency: '20–22 km/l',
      price: '₹12 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car14
    },
    {
      id: 3,
      name: 'Tata Tiago',
      category: 'Hatchback',
      seating: '4 + 1',
      fuelEfficiency: '20–24 km/l',
      price: '₹12 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car15
    },
    {
      id: 4,
      name: 'Hyundai Grand i10',
      category: 'Hatchback',
      seating: '4 + 1',
      fuelEfficiency: '18–20 km/l',
      price: '₹12 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car16
    },
    {
      id: 5,
      name: 'Maruti Suzuki Swift',
      category: 'Hatchback',
      seating: '4 + 1',
      fuelEfficiency: '22–23 km/l',
      price: '₹12 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car17
    },
    {
      id: 6,
      name: 'Maruti Suzuki Dzire',
      category: 'Sedan',
      seating: '4 + 1',
      fuelEfficiency: '24 km/l',
      price: '₹13 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      safetyFeatures: 'Dual Front Airbags, ABS with EBD, Rear Parking Sensors, Speed Alert System',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car02
    },
    {
      id: 7,
      name: 'Hyundai Aura',
      category: 'Sedan',
      seating: '4 + 1',
      fuelEfficiency: '20.5 km/l',
      price: '₹13 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      safetyFeatures: '6 Airbags, ABS with EBD, Parking Assistance, Child Safety',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car03
    },
    {
      id: 8,
      name: 'Honda City',
      category: 'Luxury Sedan',
      seating: '4 + 1',
      fuelEfficiency: '17–24 km/l',
      price: '₹16 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      safetyFeatures: '6 Airbags, ABS with EBD',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car04
    },
    {
      id: 9,
      name: 'Hyundai Verna',
      category: 'Luxury Sedan',
      seating: '4 + 1',
      fuelEfficiency: '18–25 km/l',
      price: '₹16 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      safetyFeatures: '6 Airbags, ABS, Parking Sensors',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car05
    },
    {
      id: 10,
      name: 'Maruti Suzuki Ciaz',
      category: 'Luxury Sedan',
      seating: '4 + 1',
      fuelEfficiency: '20–21 km/l',
      price: '₹16 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      safetyFeatures: 'Dual Airbags, ISOFIX Child Seat',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car06
    },
    {
      id: 11,
      name: 'Toyota Fortuner',
      category: 'SUV',
      seating: '6 + 1',
      fuelEfficiency: '10–15 km/l',
      price: '₹40–60 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      safetyFeatures: '7 Airbags, ABS with EBD, Hill Assist',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car07
    },
    {
      id: 12,
      name: 'Toyota Innova Crysta',
      category: 'SUV',
      seating: '6 + 1',
      fuelEfficiency: '15–16 km/l',
      price: '₹20–25 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      safetyFeatures: '7 Airbags, ABS with EBD',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car08
    },
    {
      id: 13,
      name: 'Mahindra Scorpio',
      category: 'SUV',
      seating: '6 + 1',
      fuelEfficiency: '15 km/l',
      price: '₹15–20 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      safetyFeatures: 'Dual Airbags, ABS with EBD',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car09
    },
    {
      id: 14,
      name: 'Kia Carens',
      category: 'SUV',
      seating: '5 + 1',
      fuelEfficiency: '16 km/l',
      price: '₹16–20 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      safetyFeatures: '6 Airbags, ABS with EBD',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car10
    },
    {
      id: 15,
      name: 'Maruti Suzuki Ertiga',
      category: 'SUV',
      seating: '6 + 1',
      fuelEfficiency: '20 km/l',
      price: '₹12–15 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      safetyFeatures: '2 Airbags, ABS with EBD',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car11
    },
    {
      id: 16,
      name: '12 + 1-Seater Tempo Traveller',
      category: 'Tempo Traveller',
      seating: '12 + 1',
      fuelEfficiency: '10–12 km/l',
      price: '₹26 per km',
      driverCharges: '₹500/day',
      inclusions: 'Water Bottle, Tissue Paper',
      safetyFeatures: 'Seatbelts',
      additionalCharges: 'Toll Tax, State Tax, GST, Parking',
      image: car12
    }
  ];

  const filteredCars = selectedCategory === 'All' 
    ? cars 
    : cars.filter(car => car.category === selectedCategory);

  const handleBooking = (carName: string) => {
    let message = `Hi! I would like to book ${carName}.`;
    
    if (searchData) {
      message += ` Trip details: ${searchData.tripType} from ${searchData.fromCity} to ${searchData.toCity} on ${searchData.pickupDate} at ${searchData.pickupTime}.`;
    }
    
    message += ' Please provide more details.';
    
    const whatsappUrl = `https://wa.me/919599142653?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919599142653', '_self');
  };

  return (
    <section id="fleet" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Car Fleet</h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Choose from our diverse fleet of well-maintained vehicles for your journey
          </p>
          
          {searchData && (
            <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'} border inline-block`}>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-800'}`}>
                <strong>Search Results:</strong> {searchData.tripType} from {searchData.fromCity} to {searchData.toCity} 
                <br />
                Pickup: {searchData.pickupDate} at {searchData.pickupTime}
              </p>
            </div>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                    : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className={`rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {car.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{car.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-red-600" />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Seating: {car.seating}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-5 w-5 text-red-600" />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Fuel: {car.fuelEfficiency}</span>
                  </div>
                  {car.safetyFeatures && (
                    <div className="flex items-start space-x-2">
                      <Shield className="h-5 w-5 text-red-600 mt-0.5" />
                      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{car.safetyFeatures}</span>
                    </div>
                  )}
                </div>

                <div className={`border-t pt-4 mb-6 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="text-2xl font-bold text-red-600 mb-2">{car.price}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Driver: {car.driverCharges}</div>
                  <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>+ {car.additionalCharges}</div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleBooking(car.name)}
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={handleCall}
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarFleet;