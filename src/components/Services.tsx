import ImageWithFallback from './ImageWithFallback';
import React, { useEffect, useRef, useState } from 'react';
import { Heart, Brain, Eye, Bone, Baby, Stethoscope, Activity, Shield, ArrowRight } from 'lucide-react';

const Services = () => {
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

    const elements = document.querySelectorAll('[data-animate="service"]');
    elements.forEach(el => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options for all cardiovascular conditions.',
      features: ['ECG & Echocardiography', 'Cardiac Surgery', 'Heart Disease Prevention'],
      color: 'text-[#F26C45]'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological care for brain, spine, and nervous system disorders with cutting-edge technology.',
      features: ['MRI & CT Imaging', 'Stroke Treatment', 'Memory Disorders'],
      color: 'text-[#F26C45]'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgical procedures for optimal vision health.',
      features: ['LASIK Surgery', 'Cataract Treatment', 'Retinal Disorders'],
      color: 'text-[#F26C45]'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Advanced bone, joint, and muscle care with minimally invasive surgical techniques and rehabilitation.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Treatment'],
      color: 'text-[#F26C45]'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents in a child-friendly environment.',
      features: ['Well-Child Visits', 'Immunizations', 'Growth Monitoring'],
      color: 'text-[#F26C45]'
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Comprehensive adult healthcare focusing on prevention, diagnosis, and treatment of internal diseases.',
      features: ['Annual Check-ups', 'Chronic Disease Management', 'Health Screenings'],
      color: 'text-[#F26C45]'
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response times and state-of-the-art trauma care.',
      features: ['Trauma Center', 'Critical Care Unit', 'Ambulance Services'],
      color: 'text-[#F26C45]'
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Proactive healthcare programs designed to prevent illness and maintain optimal health and wellness.',
      features: ['Health Screenings', 'Wellness Programs', 'Lifestyle Counseling'],
      color: 'text-[#F26C45]'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-[#F26C45] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md">
              Our Medical Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E4C4C] mb-6 leading-tight">
            Comprehensive Healthcare
            <span className="text-[#F26C45] block">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide world-class medical services across multiple specialties, ensuring you receive the best possible care for all your health needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              data-animate="service"
              className={`group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 cursor-pointer transform hover:-translate-y-2 ${
                visibleItems.has(index.toString()) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-[#F26C45]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F26C45]/20 transition-all duration-300">
                <service.icon className={service.color} size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-[#1E4C4C] mb-4 group-hover:text-[#F26C45] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#F26C45] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="flex items-center space-x-2 text-[#F26C45] font-semibold group-hover:text-[#e55a3a] transition-colors text-sm">
                <span>Learn More</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-[#F26C45] text-white px-10 py-4 rounded-full hover:bg-[#e55a3a] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;