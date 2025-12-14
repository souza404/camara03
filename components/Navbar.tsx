import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src={LOGO_URL} 
            alt="Camara Enterprise" 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <span className={`text-xl font-bold tracking-wide uppercase hidden sm:block ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Camara <span className="text-brand-gold">Enterprise</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wider uppercase transition-colors duration-200 hover:text-brand-gold ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#properties"
            className="bg-brand-gold text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-gold focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? '#C5A059' : '#fff'} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 text-lg font-medium hover:text-brand-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-gold text-white text-center py-3 rounded-lg font-semibold uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Your Stay
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;