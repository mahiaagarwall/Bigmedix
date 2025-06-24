import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Clock, MapPin, CheckCircle, Heart, Shield, Target, Eye, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, doctors: 0, patients: 0, locations: 0 });
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const [teamMembers, setTeamMembers] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/api/leadership")
    .then((res) => res.json())
    .then((data) => setTeamMembers(data))
    .catch((err) => console.error("Failed to fetch leadership:", err));
}, []);

 

  const animateCounters = () => {
    const targets = { years: 25, doctors: 50, patients: 15000, locations: 5 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        years: Math.floor(targets.years * progress),
        doctors: Math.floor(targets.doctors * progress),
        patients: Math.floor(targets.patients * progress),
        locations: Math.floor(targets.locations * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  const coreValues = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and dignity, ensuring they feel heard and valued throughout their healthcare journey.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Patient safety is our top priority. We maintain the highest standards of medical practice and continuously improve our safety protocols.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from medical procedures to patient experience, setting the standard for quality healthcare.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We embrace cutting-edge medical technology and innovative treatment approaches to provide the best possible outcomes for our patients.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const [locations, setLocations] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/api/location")
    .then((res) => res.json())
    .then((data) => setLocations(data))
    .catch((err) => console.error("Failed to fetch locations:", err));
}, []);


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
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26C45] to-[#e55a3a] block">
                BigMedix
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Dedicated to providing exceptional healthcare services with compassion, innovation, and excellence for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & History */}
      <section className="py-20 bg-[#F4F8F6] relative overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-6">
                  <span className="bg-[#F26C45] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                    Our Mission
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-[#1E4C4C] mb-6">Excellence in Healthcare</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  To provide world-class healthcare services that combine medical excellence with compassionate care, 
                  ensuring every patient receives personalized treatment in a safe, comfortable environment.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Since 1998, BigMedix has been at the forefront of medical innovation, continuously expanding our 
                  services and expertise to meet the evolving healthcare needs of our community.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  'Patient-centered approach to healthcare delivery',
                  'Continuous investment in medical technology',
                  'Commitment to medical education and research',
                  'Community health and wellness programs'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-[#F26C45]" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn-animate bg-[#F26C45] text-white px-8 py-4 rounded-full hover:bg-[#e55a3a] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern medical facility with advanced healthcare technology"
                className="w-full h-96 object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-[#F26C45] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                Our Values
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#1E4C4C] mb-6">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment to exceptional healthcare.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 card-hover">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-[#1E4C4C] mb-4 group-hover:text-[#F26C45] transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-[#F4F8F6] relative overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-[#F26C45] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                Our Team
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#1E4C4C] mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced medical professionals who lead BigMedix with expertise, dedication, and vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
  <div
    key={index}
    className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 card-hover"
  >
    <div className="relative overflow-hidden">
      <img
        src={member.image_url}
        alt={`${member.name} - ${member.role}`}
        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-[#1E4C4C] mb-2 group-hover:text-[#F26C45] transition-colors">
        {member.name}
      </h3>
      <div className="text-[#F26C45] font-medium mb-2">{member.role}</div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {member.description}
      </p>
    </div>
  </div>
))}

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#1E4C4C] to-[#0f2626] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, number: `${counters.years}+`, label: 'Years of Excellence', color: 'text-yellow-400' },
              { icon: Users, number: `${counters.doctors}+`, label: 'Medical Professionals', color: 'text-green-400' },
              { icon: Heart, number: `${counters.patients.toLocaleString()}+`, label: 'Patients Served', color: 'text-red-400' },
              { icon: MapPin, number: `${counters.locations}`, label: 'Convenient Locations', color: 'text-[#F26C45]' }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className={stat.color} size={36} />
                </div>
                <div className="text-4xl font-bold mb-2 group-hover:text-[#F26C45] transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-200 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-[#F26C45] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                Our Locations
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#1E4C4C] mb-6">Our Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located throughout the city to serve you better with comprehensive healthcare services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 card-hover">
                <div className="relative overflow-hidden">
                  <img
                    src={location.image}
                    alt={`${location.name} - healthcare facility`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1E4C4C] mb-3 group-hover:text-[#F26C45] transition-colors">{location.name}</h3>
                  <div className="flex items-start space-x-2 mb-3">
                    <MapPin className="text-[#F26C45] mt-1" size={16} />
                    <span className="text-gray-600">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="text-green-600" size={16} />
                    <span className="text-gray-600">{location.phone}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#1E4C4C]">Services Available:</div>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="bg-[#F26C45]/10 text-[#F26C45] px-3 py-1 rounded-full text-xs font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#F4F8F6] relative overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-[#F26C45] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                Certifications
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#1E4C4C] mb-6">Certifications & Affiliations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by leading healthcare organizations and accreditation bodies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Joint Commission Accredited',
              'American Hospital Association',
              'Healthcare Financial Management Association',
              'American Medical Association',
              'National Association of Healthcare Quality',
              'Commission on Accreditation of Medical Transport Systems',
              'American Organization for Nursing Leadership',
              'Healthcare Information and Management Systems Society'
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:bg-[#F26C45]/5 transition-colors duration-300 group shadow-lg card-hover">
                <Award className="text-[#F26C45] mx-auto mb-4 group-hover:text-[#e55a3a] transition-colors" size={32} />
                <div className="font-medium text-[#1E4C4C] group-hover:text-[#F26C45] transition-colors">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;