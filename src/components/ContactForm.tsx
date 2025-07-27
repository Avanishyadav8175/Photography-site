import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

interface ContactFormProps {
  darkMode: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send WhatsApp message with form data
      const message = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;
      
      const whatsappUrl = `https://wa.me/919599142653?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact-form" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Phone</h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>+91 9599142653</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Email</h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Joincabbook@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>WhatsApp</h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>+91 9599142653</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Why Choose Us?</h4>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• 24/7 Customer Support</li>
                  <li>• Professional Drivers</li>
                  <li>• Well-Maintained Vehicles</li>
                  <li>• Competitive Pricing</li>
                  <li>• On-Time Service</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-800 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-800 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-800 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 ${
                        darkMode 
                          ? 'bg-gray-800 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="Car Booking">Car Booking</option>
                      <option value="Holiday Package">Holiday Package</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Enter your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-red-600 hover:bg-red-700 transform hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Failed to send message. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;