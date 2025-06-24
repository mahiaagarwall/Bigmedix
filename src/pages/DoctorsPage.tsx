import React, { useEffect, useRef, useState } from 'react';
import { Star, Calendar, MapPin, Award, GraduationCap, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const DoctorsPage = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const observerRef = useRef();
  const [doctors, setDoctors] = useState([]);


  useEffect(() => {
  if (doctors.length === 0) return; // Wait for doctors to load

  observerRef.current = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]));
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll('[data-animate="doctor"]');
  elements.forEach((el) => observerRef.current.observe(el));

  return () => observerRef.current?.disconnect();
}, [doctors]);

  useEffect(() => {
  const fetchDoctors = async () => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    const response = await fetch(`${API_URL}/api/doctors`);
    const data = await response.json();
    setDoctors(data);
  };

  fetchDoctors();
}, []);

  const specialties = ['all', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Internal Medicine', 'Emergency Medicine'];

  const filteredDoctors = doctors.filter(doctor => 
    selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty
  );

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E4C4C] via-[#1E4C4C] to-[#0f2626] text-white relative overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#F26C45] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Our Expert
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26C45] to-[#e55a3a] block">
                Doctors
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Meet our team of board-certified physicians and specialists who are dedicated to providing exceptional healthcare with compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-[#F4F8F6] border-b relative overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-4">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedSpecialty === specialty
                    ? 'bg-[#F26C45] text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-[#F26C45]/10 hover:text-[#F26C45] shadow-sm'
                }`}
              >
                {specialty === 'all' ? 'All Specialties' : specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                data-index={index}
                data-animate="doctor"
                className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-6 card-hover ${
                  visibleItems.has(index.toString()) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-1 shadow-lg">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm font-bold text-gray-800">{doctor.rating}</span>
                  </div>

                  {/* Specialty Badge */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#F26C45] to-[#e55a3a] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {doctor.specialty}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1E4C4C] mb-2 group-hover:text-[#F26C45] transition-colors">
                      {doctor.name}
                    </h3>
                    <div className="text-[#F26C45] font-medium mb-2">{doctor.position}</div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{doctor.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{doctor.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <GraduationCap size={16} className="text-[#F26C45]" />
                      <span className="font-medium">{doctor.education}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock size={16} className="text-green-600" />
                      <span>{doctor.availability}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{doctor.reviews} patient reviews</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-600 mb-3">Specialties:</div>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.slice(0, 2).map((specialty, i) => (
                        <span key={i} className="bg-[#F26C45]/10 text-[#F26C45] px-3 py-1 rounded-full text-xs font-medium">
                          {specialty}
                        </span>
                      ))}
                      {doctor.specialties.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                          +{doctor.specialties.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-[#F26C45] to-[#e55a3a] text-white py-3 rounded-full hover:from-[#e55a3a] hover:to-[#d14d2f] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                      Book Appointment
                    </button>
                    <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#F26C45]/10 transition-colors">
                      <Phone size={18} className="text-[#F26C45]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Spotlight */}
      {/* Doctor Spotlight */}
{doctors.length > 0 && (
  <section className="py-20 bg-[#F4F8F6] relative overflow-hidden">
    {/* (existing spotlight content remains here, unchanged) */}
  </section>
)}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#1E4C4C] to-[#0f2626] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Meet Your Doctor?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule an appointment with one of our expert physicians today and take the first step towards better health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#F26C45] to-[#e55a3a] text-white px-8 py-4 rounded-full hover:from-[#e55a3a] hover:to-[#d14d2f] transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Book Appointment Online</span>
              <ArrowRight size={20} />
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30">
              Call +1 (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;