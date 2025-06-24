import React, { useEffect, useRef, useState } from 'react';
import { Heart, Brain, Eye, Bone, Baby, Stethoscope, Activity, Shield, ArrowRight, CheckCircle, Clock, Award } from 'lucide-react';



const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef();

  useEffect(() => {
  if (services.length === 0) return; // wait until services are fetched

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

  const elements = document.querySelectorAll('[data-animate="service"]');
  elements.forEach((el) => observerRef.current.observe(el));

  return () => observerRef.current?.disconnect();
}, [services]); // depend on services


  useEffect(() => {
  fetch("http://localhost:5000/api/services")
    .then(res => res.json())
    .then(data => setServices(data))
    .catch(err => console.error("Error fetching services:", err));
}, []);


const iconMap = {
  "Cardiology": Heart,
  "Neurology": Brain,
  "Ophthalmology": Eye,
  "Orthopedics": Bone,
  "Pediatrics": Baby,
  "Internal Medicine": Stethoscope,
  "Emergency Care": Activity,
  "Preventive Care": Shield
};



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
              Medical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26C45] to-[#e55a3a] block">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare solutions across multiple specialties with state-of-the-art technology and expert medical professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#F4F8F6] relative overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-[#F26C45] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                Our Specialties
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#1E4C4C] mb-6">Our Specialties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide world-class medical services across multiple specialties, ensuring you receive the best possible care for all your health needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.title];
              return(
              <div
                key={index}
                data-index={index}
                data-animate="service"
                className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer transform hover:-translate-y-4 card-hover ${
                  visibleItems.has(index.toString()) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  {IconComponent && <IconComponent className="text-white" size={36} />}
                </div>
                
                <h3 className="text-2xl font-bold text-[#1E4C4C] mb-4 group-hover:text-[#F26C45] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Specialists Available:</span>
                    <span className="font-bold text-[#F26C45]">{service.specialists}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Emergency Care:</span>
                    <span className={`font-bold ${service.emergency_available ? 'text-green-600' : 'text-gray-400'}`}>
  {service.emergency_available ? 'Available' : 'Not Available'}
</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#F26C45] to-[#e55a3a] text-white py-3 rounded-full hover:from-[#e55a3a] hover:to-[#d14d2f] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
})}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.slice(0, 4).map((service, index) => {
              const IconComponent = iconMap[service.title] || Stethoscope;
              return(
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                      {IconComponent && <IconComponent className="text-white" size={28} />}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#1E4C4C]">{service.title}</h3>
                      <div className="text-[#F26C45] font-medium">Comprehensive Care</div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-[#1E4C4C] mb-4 flex items-center">
                        <CheckCircle className="text-green-600 mr-2" size={20} />
                        Services Offered
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-[#1E4C4C] mb-4 flex items-center">
                        <Activity className="text-[#F26C45] mr-2" size={20} />
                        Procedures
                      </h4>
                      <ul className="space-y-2">
                        {service.procedures.map((procedure, procedureIndex) => (
                          <li key={procedureIndex} className="flex items-center text-gray-600">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                            {procedure}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-r from-[#F26C45] to-[#e55a3a] text-white px-8 py-4 rounded-full hover:from-[#e55a3a] hover:to-[#d14d2f] transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2">
                      <span>Schedule Consultation</span>
                      <ArrowRight size={20} />
                    </button>
                    <button className="flex items-center justify-center space-x-2 text-[#F26C45] hover:text-[#e55a3a] transition-colors font-semibold px-8 py-4 border-2 border-[#F26C45] rounded-full hover:border-[#e55a3a]">
                      <span>View Specialists</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={service.image_url}
                      alt={service.title}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Stats Card */}
                  <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center`}>
                        <Award className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-[#1E4C4C]">{service.specialists} Specialists</div>
                        <div className="text-sm text-gray-600">Expert Care Team</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Services Highlight */}
      <section className="py-20 bg-gradient-to-br from-[#F26C45] to-[#e55a3a] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Activity className="text-white" size={36} />
            </div>
            <h2 className="text-4xl font-bold mb-6">24/7 Emergency Care</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Our emergency department is staffed around the clock with board-certified emergency physicians and trauma specialists, ready to provide immediate, life-saving care when you need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Rapid Response',
                description: 'Average triage time under 15 minutes with immediate assessment of critical cases.'
              },
              {
                icon: Heart,
                title: 'Advanced Life Support',
                description: 'State-of-the-art equipment and protocols for cardiac emergencies and trauma care.'
              },
              {
                icon: Shield,
                title: 'Trauma Center',
                description: 'Level II trauma center with specialized teams for complex emergency cases.'
              }
            ].map((feature, index) =>{
              const FeatureIcon = feature.icon;
             return(
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FeatureIcon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-orange-100 leading-relaxed">{feature.description}</p>
              </div>
            );
})}
          </div>

          <div className="text-center mt-12">
            <div className="text-3xl font-bold mb-2">Emergency Hotline</div>
            <div className="text-2xl text-orange-200 mb-6">+1 (555) 911-HELP</div>
            <button className="bg-white text-[#F26C45] px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <span>Emergency Services Info</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-[#F4F8F6] relative overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-[#F26C45] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                Insurance & Payment
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#1E4C4C] mb-6">Insurance & Payment Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We accept most major insurance plans and offer flexible payment options to make quality healthcare accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Medicare & Medicaid',
              'Blue Cross Blue Shield',
              'Aetna Health Plans',
              'Cigna Healthcare',
              'UnitedHealthcare',
              'Humana Insurance',
              'Kaiser Permanente',
              'Self-Pay Options'
            ].map((insurance, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:bg-[#F26C45]/5 transition-colors duration-300 group shadow-lg card-hover">
                <Shield className="text-[#F26C45] mx-auto mb-4 group-hover:text-[#e55a3a] transition-colors" size={32} />
                <div className="font-medium text-[#1E4C4C] group-hover:text-[#F26C45] transition-colors">{insurance}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-[#F26C45] to-[#e55a3a] text-white px-8 py-4 rounded-full hover:from-[#e55a3a] hover:to-[#d14d2f] transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <span>Verify Insurance Coverage</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;