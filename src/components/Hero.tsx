import ImageWithFallback from './ImageWithFallback';
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Shield, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#f8f6f3] to-[#faf9f7] overflow-hidden pt-20">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="20" height="17.32" patternUnits="userSpaceOnUse">
              <polygon points="10,1 18.66,6 18.66,16 10,21 1.34,16 1.34,6" fill="none" stroke="#1E4C4C" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-white text-[#1E4C4C] px-6 py-3 rounded-full text-sm font-semibold shadow-md">
                  The Best Health Care Services
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-[#1E4C4C] leading-tight">
                Your Health is Our
                <span className="text-[#F26C45] block">
                  Top Priority
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience world-class healthcare with our team of expert medical professionals. We provide comprehensive medical services with cutting-edge technology and compassionate care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-[#F26C45] text-white px-8 py-4 rounded-full hover:bg-[#e55a3a] transition-all duration-300 font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>Book Appointment</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center space-x-3 text-[#1E4C4C] hover:text-[#F26C45] transition-all duration-300 font-semibold">
                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Play size={20} className="ml-1" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Shield className="text-[#F26C45]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#1E4C4C] group-hover:text-[#F26C45] transition-colors">24/7</div>
                <div className="text-gray-600 text-sm">Emergency Care</div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Award className="text-[#F26C45]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#1E4C4C] group-hover:text-[#F26C45] transition-colors">25+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Users className="text-[#F26C45]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#1E4C4C] group-hover:text-[#F26C45] transition-colors">50+</div>
                <div className="text-gray-600 text-sm">Expert Doctors</div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Clock className="text-[#F26C45]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#1E4C4C] group-hover:text-[#F26C45] transition-colors">15K+</div>
                <div className="text-gray-600 text-sm">Happy Patients</div>
              </div>
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional healthcare team providing compassionate patient care"
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E4C4C]/10 to-transparent"></div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-[#F26C45]/20 to-[#e55a3a]/20 rounded-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#1E4C4C]/20 to-[#1E4C4C]/30 rounded-full -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;