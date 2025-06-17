import ImageWithFallback from './ImageWithFallback';
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock, Heart, Award, Shield, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card-bg text-text-paragraph relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-from rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-from to-primary-to rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-2xl">+</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-heading">BigMedix</span>
                <div className="text-sm text-accent">Medical Center</div>
              </div>
            </Link>
            <p className="text-text-paragraph/70 leading-relaxed">
              Providing compassionate, comprehensive healthcare services to our community for over 25 years. Your health is our priority, and your trust is our foundation.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: 'hover:bg-blue-600' },
                { icon: Twitter, color: 'hover:bg-blue-400' },
                { icon: Instagram, color: 'hover:bg-pink-600' },
                { icon: Linkedin, color: 'hover:bg-blue-700' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-heading">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Our Doctors', href: '/doctors' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-text-paragraph/70 hover:text-text-paragraph hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-heading">Patient Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Patient Portal', href: '/patient-resources' },
                { name: 'Insurance & Payment', href: '/insurance' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Careers', href: '/careers' },
                { name: 'Emergency Care', href: '/services' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-text-paragraph/70 hover:text-text-paragraph hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-heading">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="text-accent mt-1 group-hover:text-accent-hover transition-colors" size={20} />
                <div>
                  <div className="font-bold text-heading">Main Location</div>
                  <div className="text-text-paragraph/70">123 Medical Plaza<br />Health City, HC 12345</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="text-green-400 mt-1 group-hover:text-green-300 transition-colors" size={20} />
                <div>
                  <div className="font-bold text-heading">Phone</div>
                  <div className="text-text-paragraph/70">+1 (555) 123-4567</div>
                  <div className="text-sm text-red-300">Emergency: +1 (555) 911-HELP</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail className="text-orange-400 mt-1 group-hover:text-orange-300 transition-colors" size={20} />
                <div>
                  <div className="font-bold text-heading">Email</div>
                  <div className="text-text-paragraph/70">info@bigmedix.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Clock className="text-purple-400 mt-1 group-hover:text-purple-300 transition-colors" size={20} />
                <div>
                  <div className="font-bold text-heading">Emergency</div>
                  <div className="text-text-paragraph/70">24/7 Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/20 border-b border-white/20">
          {[
            { icon: Award, number: '25+', label: 'Years Experience', color: 'text-accent' },
            { icon: Users, number: '50+', label: 'Expert Doctors', color: 'text-accent' },
            { icon: Heart, number: '15K+', label: 'Happy Patients', color: 'text-accent' },
            { icon: Shield, number: '24/7', label: 'Emergency Care', color: 'text-accent' }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className={`w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110`}>
                <stat.icon className={stat.color} size={32} />
              </div>
              <div className="text-3xl font-bold text-heading mb-2 group-hover:text-accent transition-colors">
                {stat.number}
              </div>
              <div className="text-text-paragraph/70 group-hover:text-text-paragraph transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-text-paragraph/70 mb-4 md:mb-0">
              © 2024 BigMedix Medical Center. All rights reserved.
            </div>
            <div className="flex space-x-8 text-text-paragraph/70">
              {[
                'Privacy Policy',
                'Terms of Service', 
                'Cookie Policy',
                'HIPAA Compliance'
              ].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-text-paragraph/70 hover:text-accent transition-colors duration-300 hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;