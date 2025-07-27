import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Jayesh Parchake',
      trip: 'Honeymoon Trip From Delhi To Manali',
      rating: 5,
      review: 'Excellent service from Cabbook travels company. Driver mr.shish pal give excellent service and guidence to us. He complete all sight seeing in delhi, manali, rohatang, kullu, Chandigarh with in time. Mr.shish pal is not driver us as friend also.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Kachhot Faijal',
      trip: 'Business Trip to Mumbai',
      rating: 5,
      review: 'This is my first trip and its best and very safefull for me. Also driver is the best to guiding me. Professional service with excellent punctuality and clean vehicles.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      name: 'Akash Bhuyarkar',
      trip: 'Family Tour to Kerala',
      rating: 5,
      review: 'Had Best Experience with this travel company. They provided luxurious car with Polite and Professional Driver. Shishpal Sing was our driver for tour I highly recommend everyone to give it a try Happy Traveling :)',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 4,
      name: 'Priya Sharma',
      trip: 'Weekend Getaway to Goa',
      rating: 5,
      review: 'Amazing experience! The car was spotless and the driver was very courteous. Highly recommend for comfortable and safe travels. Will definitely book again.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 5,
      name: 'Rahul Verma',
      trip: 'Corporate Trip to Bangalore',
      rating: 5,
      review: 'Professional service at its best. On-time pickup, clean vehicle, and excellent driver behavior. Perfect for business trips and family vacations alike.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>What Our Users Say</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              const isCenter = offset === 1;
              
              return (
                <div
                  key={testimonial.id}
                  className={`rounded-xl shadow-lg p-8 transition-all duration-500 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } ${
                    isCenter 
                      ? 'transform scale-105 border-2 border-red-200' 
                      : 'opacity-75 hidden md:block'
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-red-600">{testimonial.name}</h3>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.trip}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="h-8 w-8 text-red-200 mb-2" />
                    <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{testimonial.review}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 shadow-lg rounded-full p-3 transition-colors duration-200 ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
            }`}
          >
            <ChevronLeft className={`h-6 w-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
          </button>
          <button
            onClick={nextTestimonial}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 shadow-lg rounded-full p-3 transition-colors duration-200 ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
            }`}
          >
            <ChevronRight className={`h-6 w-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-red-600' : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;