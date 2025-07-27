import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section id="contact\" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">CONTACT US</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">ADDRESS</h3>
                  <p className="text-gray-300">
                    691/1, 1st Floor, Opp Palm Gardens,<br />
                    Main Road Burari Delhi - 110084
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">PHONE</h3>
                  <p className="text-gray-300">+91 9599142653</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">EMAIL</h3>
                  <p className="text-gray-300">Joincabbook@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">WORKING HOURS</h3>
                  <p className="text-gray-300">24/7 Service Available</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">COMPANY</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Our Branches</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact Us</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">USEFUL LINKS</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Cancellation/Refund Policy</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Booking Policy</a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-2xl font-bold mb-6">MAP</h3>
            <div className="bg-gray-800 rounded-lg p-4 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5547867784675!2d77.19499897537353!3d28.74459287562755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d015c5c2b1b3b%3A0x3b1b1b1b1b1b1b1b!2sBurari%2C%20Delhi!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-300">📍 JoinCab Travels - Delhi Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;