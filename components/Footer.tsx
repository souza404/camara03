import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <img src={LOGO_URL} alt="Camara Logo" className="h-10 mx-auto md:mx-0 mb-4 opacity-80" />
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Camara Enterprise. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
            <a href="mailto:info@camara.com" className="text-gray-400 hover:text-brand-gold transition-colors"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center md:justify-end gap-6 text-xs text-gray-600">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;