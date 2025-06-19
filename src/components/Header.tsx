import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white/90 backdrop-blur-sm py-3'
    }`}>
      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F26C45] to-[#e55a3a] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-2xl">+</span>
            </div>
            <div>
              <span className="text-3xl font-bold text-[#1E4C4C] transition-colors duration-300">
                BigMedix
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link font-medium transition-all duration-300 hover:text-[#F26C45] relative ${
                isActive('/') 
                  ? 'text-[#F26C45]' 
                  : 'text-[#1E4C4C]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link font-medium transition-all duration-300 hover:text-[#F26C45] relative ${
                isActive('/about') 
                  ? 'text-[#F26C45]' 
                  : 'text-[#1E4C4C]'
              }`}
            >
              About Us
            </Link>
            
            <div className="relative group">
              <button 
                className={`nav-link flex items-center space-x-1 font-medium transition-all duration-300 hover:text-[#F26C45] relative ${
                  isActive('/services') 
                    ? 'text-[#F26C45]' 
                    : 'text-[#1E4C4C]'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50 transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link to="/services" className="block px-6 py-3 text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors">
                  All Services
                </Link>
                <Link to="/patient-resources" className="block px-6 py-3 text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors">
                  Patient Resources
                </Link>
                <Link to="/insurance" className="block px-6 py-3 text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors">
                  Insurance & Payment
                </Link>
              </div>
            </div>
            
            <Link 
              to="/doctors" 
              className={`nav-link font-medium transition-all duration-300 hover:text-[#F26C45] relative ${
                isActive('/doctors') 
                  ? 'text-[#F26C45]' 
                  : 'text-[#1E4C4C]'
              }`}
            >
              Doctors
            </Link>

            <div className="relative group">
              <button 
                className={`nav-link flex items-center space-x-1 font-medium transition-all duration-300 hover:text-[#F26C45] relative ${
                  ['/blog', '/testimonials', '/faq', '/careers'].some(path => isActive(path))
                    ? 'text-[#F26C45]' 
                    : 'text-[#1E4C4C]'
                }`}
                onMouseEnter={() => setIsPagesOpen(true)}
                onMouseLeave={() => setIsPagesOpen(false)}
              >
                <span>Pages</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50 transition-all duration-300 ${
                  isPagesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsPagesOpen(true)}
                onMouseLeave={() => setIsPagesOpen(false)}
              >
                <Link to="/blog" className="block px-6 py-3 text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors">
                  Blog
                </Link>
                <Link to="/testimonials" className="block px-6 py-3 text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors">
                  Testimonials
                </Link>
                <Link to="/faq" className="block px-6 py-3 text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors">
                  FAQ
                </Link>
                <Link to="/careers" className="block px-6 py-3 text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors">
                  Careers
                </Link>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className={`nav-link font-medium transition-all duration-300 hover:text-[#F26C45] relative ${
                isActive('/contact') 
                  ? 'text-[#F26C45]' 
                  : 'text-[#1E4C4C]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              to="/contact"
              className="btn-animate bg-[#F26C45] text-white px-6 py-3 rounded-full hover:bg-[#e55a3a] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#1E4C4C] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            <Link 
              to="/" 
              className="block text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors font-medium py-3 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors font-medium py-3 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="block text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors font-medium py-3 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/doctors" 
              className="block text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors font-medium py-3 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Doctors
            </Link>
            <Link 
              to="/blog" 
              className="block text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors font-medium py-3 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/testimonials" 
              className="block text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors font-medium py-3 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact" 
              className="block text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-colors font-medium py-3 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact"
              className="block bg-[#F26C45] text-white px-6 py-3 rounded-full hover:bg-[#e55a3a] transition-all duration-300 font-semibold text-center mt-4 mx-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;