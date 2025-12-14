import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_VIDEO_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for contrast */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <h2 className="text-brand-gold text-lg md:text-xl font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
          Welcome to Camara Enterprise
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
          Experience Luxury <br /> Stays in the USA
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-in-up delay-200">
          Discover a curated collection of premium Airbnb properties designed for comfort, elegance, and unforgettable memories.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a 
            href="#properties"
            className="group bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg tracking-wide transition-all duration-300 hover:bg-white hover:text-brand-gold flex items-center justify-center gap-2"
          >
            Explore Properties
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 rounded-full font-semibold text-lg tracking-wide border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-0.5 h-16 bg-gradient-to-b from-white to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;