import React, { useEffect, useRef, useState } from 'react';
import { Star, Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

const Doctors = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate="doctor"]');
    elements.forEach(el => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Chief Cardiologist',
      experience: '15 years',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      education: 'Harvard Medical School',
      location: 'Main Campus',
      specialties: ['Heart Surgery', 'Interventional Cardiology', 'Preventive Cardiology']
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Senior Neurologist',
      experience: '12 years',
      rating: 4.8,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      education: 'Johns Hopkins University',
      location: 'Downtown Center',
      specialties: ['Stroke Treatment', 'Epilepsy', 'Movement Disorders']
    },
    {
      name: 'Dr. Emily Davis',
      specialty: 'Head of Pediatrics',
      experience: '10 years',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1594824475317-d3c2b8b7b3b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      education: 'Stanford Medical School',
      location: 'Family Care Unit',
      specialties: ['Child Development', 'Pediatric Surgery', 'Neonatal Care']
    },
    {
      name: 'Dr. Robert Wilson',
      specialty: 'Orthopedic Surgeon',
      experience: '18 years',
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      education: 'Mayo Clinic',
      location: 'Surgical Center',
      specialties: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery']
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-6">
            <span className="bg-[#F26C45] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              Our Medical Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E4C4C] mb-6 leading-tight">
            Meet Our Expert
            <span className="text-[#F26C45] block">
              Doctors
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of board-certified physicians brings decades of experience and expertise to provide you with the highest quality medical care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              data-index={index}
              data-animate="doctor"
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer card-hover ${
                visibleItems.has(index.toString()) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.specialty}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-1 shadow-lg">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-sm font-bold text-gray-800">{doctor.rating}</span>
                </div>

                {/* Specialty Badge */}
                <div className="absolute bottom-4 left-4 bg-[#F26C45] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {doctor.specialty}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1E4C4C] mb-2 group-hover:text-[#F26C45] transition-colors">
                    {doctor.name}
                  </h3>
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

                <button className="w-full btn-animate bg-[#F26C45] text-white py-3 rounded-full hover:bg-[#e55a3a] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-transparent border-2 border-[#F26C45] text-[#F26C45] px-10 py-4 rounded-full hover:bg-[#F26C45] hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;