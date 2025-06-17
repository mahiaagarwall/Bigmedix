import ImageWithFallback from './ImageWithFallback';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-3'}`}>
      {/* Top Bar - Removed for cleaner header */}
      
      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-[#F26C45] to-[#e55a3a] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">+</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#1E4C4C] transition-colors duration-300">
                BigMedix
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-all duration-300 hover:text-[#F26C45] relative group ${
                isActive('/') 
                  ? 'text-[#F26C45]' 
                  : 'text-gray-700'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26C45] transition-all duration-300 group-hover:w-full ${isActive('/') ? 'w-full' : ''}`}></span>
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-all duration-300 hover:text-[#F26C45] relative group ${
                isActive('/about') 
                  ? 'text-[#F26C45]' 
                  : 'text-gray-700'
              }`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26C45] transition-all duration-300 group-hover:w-full ${isActive('/about') ? 'w-full' : ''}`}></span>
            </Link>
            
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 font-medium transition-all duration-300 hover:text-[#F26C45] relative ${
                  isActive('/services') 
                    ? 'text-[#F26C45]' 
                    : 'text-gray-700'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26C45] transition-all duration-300 group-hover:w-full ${isActive('/services') ? 'w-full' : ''}`}></span>
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-4 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link to="/services" className="block px-6 py-3 text-gray-700 hover:text-[#F26C45] hover:bg-gray-50 transition-colors">
                    All Services
                  </Link>
                  <Link to="/patient-resources" className="block px-6 py-3 text-gray-700 hover:text-[#F26C45] hover:bg-gray-50 transition-colors">
                    Patient Resources
                  </Link>
                  <Link to="/insurance" className="block px-6 py-3 text-gray-700 hover:text-[#F26C45] hover:bg-gray-50 transition-colors">
                    Insurance & Payment
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/doctors" 
              className={`font-medium transition-all duration-300 hover:text-[#F26C45] relative group ${
                isActive('/doctors') 
                  ? 'text-[#F26C45]' 
                  : 'text-gray-700'
              }`}
            >
              Doctors
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26C45] transition-all duration-300 group-hover:w-full ${isActive('/doctors') ? 'w-full' : ''}`}></span>
            </Link>

            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 font-medium transition-all duration-300 hover:text-[#F26C45] relative ${
                  ['/blog', '/testimonials', '/faq', '/careers'].some(path => isActive(path))
                    ? 'text-[#F26C45]' 
                    : 'text-gray-700'
                }`}
                onMouseEnter={() => setIsPagesOpen(true)}
                onMouseLeave={() => setIsPagesOpen(false)}
              >
                <span>Pages</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26C45] transition-all duration-300 group-hover:w-full ${['/blog', '/testimonials', '/faq', '/careers'].some(path => isActive(path)) ? 'w-full' : ''}`}></span>
              </button>
              
              {isPagesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-4 z-50"
                  onMouseEnter={() => setIsPagesOpen(true)}
                  onMouseLeave={() => setIsPagesOpen(false)}
                >
                  <Link to="/blog" className="block px-6 py-3 text-gray-700 hover:text-[#F26C45] hover:bg-gray-50 transition-colors">
                    Blog
                  </Link>
                  <Link to="/testimonials" className="block px-6 py-3 text-gray-700 hover:text-[#F26C45] hover:bg-gray-50 transition-colors">
                    Testimonials
                  </Link>
                  <Link to="/faq" className="block px-6 py-3 text-gray-700 hover:text-[#F26C45] hover:bg-gray-50 transition-colors">
                    FAQ
                  </Link>
                  <Link to="/careers" className="block px-6 py-3 text-gray-700 hover:text-[#F26C45] hover:bg-gray-50 transition-colors">
                    Careers
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className={`font-medium transition-all duration-300 hover:text-[#F26C45] relative group ${
                isActive('/contact') 
                  ? 'text-[#F26C45]' 
                  : 'text-gray-700'
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26C45] transition-all duration-300 group-hover:w-full ${isActive('/contact') ? 'w-full' : ''}`}></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              to="/contact"
              className="bg-[#F26C45] text-white px-6 py-3 rounded-full hover:bg-[#e55a3a] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white rounded-lg shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className="text-gray-700 hover:text-[#F26C45] transition-colors font-medium py-2 hover:bg-gray-50 px-4 rounded-lg">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-[#F26C45] transition-colors font-medium py-2 hover:bg-gray-50 px-4 rounded-lg">About Us</Link>
              <Link to="/services" className="text-gray-700 hover:text-[#F26C45] transition-colors font-medium py-2 hover:bg-gray-50 px-4 rounded-lg">Services</Link>
              <Link to="/doctors" className="text-gray-700 hover:text-[#F26C45] transition-colors font-medium py-2 hover:bg-gray-50 px-4 rounded-lg">Doctors</Link>
              <Link to="/blog" className="text-gray-700 hover:text-[#F26C45] transition-colors font-medium py-2 hover:bg-gray-50 px-4 rounded-lg">Blog</Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-[#F26C45] transition-colors font-medium py-2 hover:bg-gray-50 px-4 rounded-lg">Testimonials</Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#F26C45] transition-colors font-medium py-2 hover:bg-gray-50 px-4 rounded-lg">Contact</Link>
              <Link 
                to="/contact"
                className="bg-[#F26C45] text-white px-6 py-3 rounded-full hover:bg-[#e55a3a] transition-all duration-300 font-medium w-fit transform hover:scale-105"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;