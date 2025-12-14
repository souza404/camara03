import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Wifi, Layout, Star } from 'lucide-react';
import { PROPERTIES } from '../constants';

const PropertiesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PROPERTIES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + PROPERTIES.length) % PROPERTIES.length);
  };

  // Determine how many slides to show based on screen width (simplified logic for this demo, usually handled by resize listener)
  // For the purpose of this React structure, we will show one big active card and preview next ones on desktop, 
  // or a simpler single card view. Let's do a single card view that feels very premium and detailed.

  const currentProperty = PROPERTIES[currentIndex];

  return (
    <section id="properties" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Exclusive <span className="text-brand-gold">Collection</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hand-picked properties offering the perfect blend of luxury, location, and lifestyle.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 h-full">
            
            {/* Image Side */}
            <div className="relative h-96 md:h-[600px] overflow-hidden group">
              <img 
                src={currentProperty.image} 
                alt={currentProperty.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-1 shadow-sm">
                 <Star className="w-4 h-4 text-brand-gold fill-current" />
                 <span className="text-sm font-bold text-gray-900">Superhost</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center relative">
               {/* Navigation Buttons (Absolute on desktop) */}
               <div className="absolute top-8 right-8 flex gap-2">
                 <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full border border-gray-200 hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                 </button>
                 <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full border border-gray-200 hover:border-brand-gold hover:text-brand-gold transition-colors"
                 >
                  <ChevronRight className="w-6 h-6" />
                 </button>
               </div>

               <div className="flex items-center gap-2 text-brand-gold mb-2 font-medium tracking-wide text-sm uppercase">
                  <MapPin className="w-4 h-4" />
                  {currentProperty.location}
               </div>

               <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                 {currentProperty.name}
               </h3>

               <p className="text-gray-600 text-lg leading-relaxed mb-8">
                 {currentProperty.description}
               </p>

               <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {currentProperty.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
               </div>

               <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-100">
                 <div>
                   <p className="text-gray-500 text-sm uppercase tracking-wider">Starting from</p>
                   <p className="text-2xl font-bold text-brand-gold">{currentProperty.price}</p>
                 </div>
                 <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-brand-gold transition-colors duration-300 font-medium">
                   View Details
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {PROPERTIES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-brand-gold' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;