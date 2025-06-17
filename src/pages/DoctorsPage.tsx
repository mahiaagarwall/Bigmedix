import React, { useEffect, useRef, useState } from 'react';
import { Star, Calendar, MapPin, Award, GraduationCap, Phone, Mail, Clock } from 'lucide-react';

const DoctorsPage = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
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
      specialty: 'Cardiology',
      position: 'Chief Cardiologist',
      experience: '15 years',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
      education: 'Harvard Medical School',
      location: 'Main Campus',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@bigmedix.com',
      specialties: ['Heart Surgery', 'Interventional Cardiology', 'Preventive Cardiology'],
      languages: ['English', 'Spanish'],
      certifications: ['Board Certified in Cardiology', 'Fellow of American College of Cardiology'],
      bio: 'Dr. Johnson is a renowned cardiologist with over 15 years of experience in cardiovascular medicine. She specializes in complex cardiac procedures and has published numerous research papers on heart disease prevention.',
      availability: 'Mon-Fri: 8AM-5PM'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      position: 'Senior Neurologist',
      experience: '12 years',
      rating: 4.8,
      reviews: 98,
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
      education: 'Johns Hopkins University',
      location: 'Downtown Center',
      phone: '+1 (555) 234-5678',
      email: 'michael.chen@bigmedix.com',
      specialties: ['Stroke Treatment', 'Epilepsy', 'Movement Disorders'],
      languages: ['English', 'Mandarin'],
      certifications: ['Board Certified in Neurology', 'Stroke Specialist Certification'],
      bio: 'Dr. Chen is an expert neurologist specializing in stroke treatment and neurological disorders. He has extensive experience in emergency neurology and has saved countless lives through his expertise.',
      availability: 'Mon-Thu: 9AM-6PM, Fri: 9AM-3PM'
    },
    {
      name: 'Dr. Emily Davis',
      specialty: 'Pediatrics',
      position: 'Head of Pediatrics',
      experience: '10 years',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg',
      education: 'Stanford Medical School',
      location: 'Family Care Unit',
      phone: '+1 (555) 345-6789',
      email: 'emily.davis@bigmedix.com',
      specialties: ['Child Development', 'Pediatric Surgery', 'Neonatal Care'],
      languages: ['English', 'French'],
      certifications: ['Board Certified in Pediatrics', 'Pediatric Advanced Life Support'],
      bio: 'Dr. Davis is passionate about pediatric care and has dedicated her career to ensuring children receive the best possible medical attention in a comfortable, child-friendly environment.',
      availability: 'Mon-Fri: 8AM-4PM'
    },
    {
      name: 'Dr. Robert Wilson',
      specialty: 'Orthopedics',
      position: 'Orthopedic Surgeon',
      experience: '18 years',
      rating: 4.7,
      reviews: 89,
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg',
      education: 'Mayo Clinic',
      location: 'Surgical Center',
      phone: '+1 (555) 456-7890',
      email: 'robert.wilson@bigmedix.com',
      specialties: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery'],
      languages: ['English'],
      certifications: ['Board Certified in Orthopedic Surgery', 'Sports Medicine Specialist'],
      bio: 'Dr. Wilson is a highly skilled orthopedic surgeon with extensive experience in joint replacement and sports medicine. He has helped numerous athletes return to their peak performance.',
      availability: 'Tue-Fri: 7AM-4PM'
    },
    {
      name: 'Dr. Lisa Martinez',
      specialty: 'Internal Medicine',
      position: 'Internal Medicine Physician',
      experience: '14 years',
      rating: 4.8,
      reviews: 112,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      education: 'UCLA Medical School',
      location: 'Main Campus',
      phone: '+1 (555) 567-8901',
      email: 'lisa.martinez@bigmedix.com',
      specialties: ['Diabetes Management', 'Hypertension', 'Preventive Care'],
      languages: ['English', 'Spanish'],
      certifications: ['Board Certified in Internal Medicine', 'Diabetes Educator'],
      bio: 'Dr. Martinez focuses on comprehensive adult healthcare with a special interest in diabetes management and preventive medicine. She believes in building long-term relationships with her patients.',
      availability: 'Mon-Wed: 8AM-6PM, Thu-Fri: 8AM-4PM'
    },
    {
      name: 'Dr. James Thompson',
      specialty: 'Emergency Medicine',
      position: 'Emergency Department Director',
      experience: '16 years',
      rating: 4.9,
      reviews: 203,
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
      education: 'University of Pennsylvania',
      location: 'Emergency Department',
      phone: '+1 (555) 678-9012',
      email: 'james.thompson@bigmedix.com',
      specialties: ['Trauma Care', 'Critical Care', 'Emergency Surgery'],
      languages: ['English'],
      certifications: ['Board Certified in Emergency Medicine', 'Advanced Trauma Life Support'],
      bio: 'Dr. Thompson leads our emergency department with expertise in trauma care and critical medicine. He is available 24/7 to handle the most complex emergency cases.',
      availability: '24/7 Emergency Coverage'
    }
  ];

  const specialties = ['all', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Internal Medicine', 'Emergency Medicine'];

  const filteredDoctors = doctors.filter(doctor => 
    selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty
  );

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-from to-primary-to text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-card-bg rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our Expert
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 block">
                Doctors
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet our team of board-certified physicians and specialists who are dedicated to providing exceptional healthcare with compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-card-bg border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedSpecialty === specialty
                    ? 'bg-btn-primary text-white shadow-lg transform scale-105'
                    : 'bg-card-bg-alt text-text-paragraph hover:bg-primary-from/10 hover:text-primary-from'
                }`}
              >
                {specialty === 'all' ? 'All Specialties' : specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                data-index={index}
                data-animate="doctor"
                className={`group bg-card-bg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-6 ${
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
                    <span className="text-sm font-bold text-heading">{doctor.rating}</span>
                  </div>

                  {/* Specialty Badge */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-primary-from to-primary-to text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {doctor.specialty}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-heading mb-2 group-hover:text-primary-from transition-colors">
                      {doctor.name}
                    </h3>
                    <div className="text-primary-from font-medium mb-2">{doctor.position}</div>
                    <div className="flex items-center space-x-4 text-sm text-text-paragraph mb-4">
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
                    <div className="flex items-center space-x-2 text-sm text-text-paragraph">
                      <GraduationCap size={16} className="text-primary-from" />
                      <span className="font-medium">{doctor.education}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-text-paragraph">
                      <Clock size={16} className="text-green-600" />
                      <span>{doctor.availability}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-paragraph">{doctor.reviews} patient reviews</span>
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
                  <div className="text-sm text-text-paragraph mb-3">Specialties:</div>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.slice(0, 2).map((specialty, i) => (
                        <span key={i} className="bg-primary-from/10 text-primary-from px-3 py-1 rounded-full text-xs font-medium">
                          {specialty}
                        </span>
                      ))}
                      {doctor.specialties.length > 2 && (
                        <span className="bg-card-bg-alt text-text-paragraph px-3 py-1 rounded-full text-xs font-medium">
                          +{doctor.specialties.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-primary-from to-primary-to text-white py-3 rounded-full hover:from-primary-to hover:to-primary-from transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                      Book Appointment
                    </button>
                    <button className="w-12 h-12 bg-card-bg-alt rounded-full flex items-center justify-center hover:bg-primary-from/10 transition-colors">
                      <Phone size={18} className="text-primary-from" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Spotlight */}
      <section className="py-20 bg-card-bg">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={doctors[0].image}
                  alt={doctors[0].name}
                  className="w-full h-96 object-cover rounded-3xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-from to-primary-to rounded-full flex items-center justify-center">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-heading">Chief Cardiologist</div>
                      <div className="text-sm text-text-paragraph">Department Head</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-primary-from font-medium mb-2">Doctor Spotlight</div>
                  <h3 className="text-4xl font-bold text-heading mb-4">{doctors[0].name}</h3>
                  <div className="text-xl text-text-paragraph mb-6">{doctors[0].position}</div>
                </div>
                
                <p className="text-text-paragraph leading-relaxed text-lg">
                  {doctors[0].bio}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-heading mb-3">Education & Certifications</h4>
                    <ul className="space-y-2 text-sm text-text-paragraph">
                      <li>• {doctors[0].education}</li>
                      {doctors[0].certifications.map((cert, index) => (
                        <li key={index}>• {cert}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-heading mb-3">Contact Information</h4>
                    <div className="space-y-2 text-sm text-text-paragraph">
                      <div className="flex items-center space-x-2">
                        <Phone size={16} className="text-primary-from" />
                        <span>{doctors[0].phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail size={16} className="text-accent" />
                        <span>{doctors[0].email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-accent" />
                        <span>{doctors[0].availability}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-primary-from to-primary-to text-white px-8 py-4 rounded-full hover:from-primary-to hover:to-primary-from transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Schedule with Dr. {doctors[0].name.split(' ')[1]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-from to-primary-to text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Meet Your Doctor?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule an appointment with one of our expert physicians today and take the first step towards better health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-btn-primary to-btn-hover text-white px-8 py-4 rounded-full hover:from-btn-hover hover:to-btn-primary transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105">
              Book Appointment Online
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