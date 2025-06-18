import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Award, Users, Clock, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#F4F8F6] via-[#F4F8F6] to-white overflow-hidden pt-20">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 hexagon-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#F26C45]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#1E4C4C]/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-[#F26C45]/5 rounded-full blur-2xl animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-block animate-slideInUp">
                <span className="bg-white text-[#1E4C4C] px-6 py-3 rounded-full text-sm font-semibold shadow-lg border border-[#F26C45]/20">
                  ✨ The Best Health Care Services
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-[#1E4C4C] leading-tight animate-slideInLeft">
                Your Health is Our
                <span className="text-[#F26C45] block animate-slideInRight">
                  Top Priority
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg animate-fadeIn">
                Experience world-class healthcare with our team of expert medical professionals. We provide comprehensive medical services with cutting-edge technology and compassionate care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-slideInUp">
              <button className="group btn-animate bg-[#F26C45] text-white px-8 py-4 rounded-full hover:bg-[#e55a3a] transition-all duration-300 font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>Book Appointment</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center space-x-3 text-[#1E4C4C] hover:text-[#F26C45] transition-all duration-300 font-semibold px-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-[#F26C45]/10 transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Play size={20} className="ml-1" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: Shield, number: '24/7', label: 'Emergency Care', color: 'text-[#F26C45]' },
                { icon: Award, number: '25+', label: 'Years Experience', color: 'text-[#F26C45]' },
                { icon: Users, number: '50+', label: 'Expert Doctors', color: 'text-[#F26C45]' },
                { icon: Clock, number: '15K+', label: 'Happy Patients', color: 'text-[#F26C45]' }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-all duration-300 group-hover:scale-110 shadow-md card-hover">
                    <stat.icon className={stat.color} size={32} />
                  </div>
                  <div className="text-3xl font-bold text-[#1E4C4C] group-hover:text-[#F26C45] transition-colors">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-float">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional healthcare team providing compassionate patient care"
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E4C4C]/10 to-transparent"></div>
                
                {/* Floating Stats Card */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-bounce-gentle">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F26C45] to-[#e55a3a] rounded-full flex items-center justify-center">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-[#1E4C4C]">Top Rated</div>
                      <div className="text-sm text-gray-600">Healthcare Provider</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-[#F26C45]/20 to-[#e55a3a]/20 rounded-3xl -z-10 animate-float-delayed"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#1E4C4C]/20 to-[#1E4C4C]/30 rounded-full -z-20 animate-float-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;