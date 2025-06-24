import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Send, MessageCircle, Users, Award, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const response = await fetch(`${API_URL}/api/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});


    const result = await response.json();
    alert(result.message);

    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      message: ''
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Failed to submit form. Please try again.');
  }
};


  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-6">
            <span className="bg-[#F26C45] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E4C4C] mb-6 leading-tight">
            Contact Us
            <span className="text-[#F26C45] block">
              Today
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to take the next step in your healthcare journey? Get in touch with us to schedule an appointment or learn more about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group card-hover">
              <div className="w-16 h-16 bg-[#F26C45]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F26C45]/20 transition-all duration-300">
                <Phone className="text-[#F26C45]" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#1E4C4C] mb-4 group-hover:text-[#F26C45] transition-colors">Phone</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Call us for appointments or emergencies</p>
              <div className="space-y-2">
                <div className="font-bold text-[#F26C45] text-lg">+1 (555) 123-4567</div>
                <div className="text-sm text-gray-500">Emergency: +1 (555) 911-HELP</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group card-hover">
              <div className="w-16 h-16 bg-[#F26C45]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F26C45]/20 transition-all duration-300">
                <Mail className="text-[#F26C45]" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#1E4C4C] mb-4 group-hover:text-[#F26C45] transition-colors">Email</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Send us your questions or concerns</p>
              <div className="space-y-2">
                <div className="font-bold text-[#F26C45] text-lg">info@bigmedix.com</div>
                <div className="text-sm text-gray-500">appointments@bigmedix.com</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group card-hover">
              <div className="w-16 h-16 bg-[#F26C45]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F26C45]/20 transition-all duration-300">
                <MapPin className="text-[#F26C45]" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#1E4C4C] mb-4 group-hover:text-[#F26C45] transition-colors">Location</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Visit us at our main medical center</p>
              <div className="font-bold text-[#F26C45] text-lg">123 Medical Plaza, Health City, HC 12345</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-8">
                <Calendar className="text-[#F26C45] mr-4" size={32} />
                <h3 className="text-3xl font-bold text-[#1E4C4C]">Book an Appointment</h3>
              </div>
             
               <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#F26C45] focus:ring-4 focus:ring-[#F26C45]/10 outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#F26C45] focus:ring-4 focus:ring-[#F26C45]/10 outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#F26C45] focus:ring-4 focus:ring-[#F26C45]/10 outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#F26C45] focus:ring-4 focus:ring-[#F26C45]/10 outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#F26C45] focus:ring-4 focus:ring-[#F26C45]/10 outline-none transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Department</label>
                    <select 
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#F26C45] focus:ring-4 focus:ring-[#F26C45]/10 outline-none transition-all duration-300 group-hover:border-gray-300"
                    >
                      <option value="">Select Department</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="ophthalmology">Ophthalmology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="internal-medicine">Internal Medicine</option>
                      <option value="emergency">Emergency Care</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#F26C45] focus:ring-4 focus:ring-[#F26C45]/10 outline-none transition-all duration-300 resize-none group-hover:border-gray-300"
                    placeholder="Tell us about your symptoms or concerns..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-animate bg-[#F26C45] text-white py-4 rounded-xl hover:bg-[#e55a3a] transition-all duration-300 font-bold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                >
                  <Send size={24} />
                  <span>Book Appointment</span>
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Hours and Additional Info */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1E4C4C] rounded-2xl p-8 text-white shadow-lg card-hover">
            <div className="flex items-center mb-6">
              <Clock className="mr-4" size={32} />
              <h3 className="text-2xl font-bold">Working Hours</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Monday - Friday</span>
                <span className="font-bold">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Saturday</span>
                <span className="font-bold">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday</span>
                <span className="font-bold">Emergency Only</span>
              </div>
              <div className="pt-4 border-t border-gray-400">
                <span className="font-bold text-[#F26C45]">24/7 Emergency Care Available</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F26C45] rounded-2xl p-8 text-white shadow-lg card-hover">
            <div className="flex items-center mb-6">
              <MessageCircle className="mr-4" size={32} />
              <h3 className="text-2xl font-bold">Quick Response</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span>Average response time: 15 minutes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span>Emergency calls answered immediately</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span>Online chat support available</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1E4C4C] rounded-2xl p-8 text-white shadow-lg card-hover">
            <div className="flex items-center mb-6">
              <Award className="mr-4" size={32} />
              <h3 className="text-2xl font-bold">Why Choose Us</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#F26C45] rounded-full"></div>
                <span>Board-certified physicians</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#F26C45] rounded-full"></div>
                <span>State-of-the-art facilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#F26C45] rounded-full"></div>
                <span>Personalized care plans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;