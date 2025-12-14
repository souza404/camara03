import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 rounded-l-[100px] hidden lg:block" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by <span className="text-brand-gold">Travelers</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. See what our guests have to say about their stay at Camara Enterprise properties.
            </p>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex text-brand-gold">
               {[1,2,3,4,5].map((i) => <Star key={i} className="w-6 h-6 fill-current" />)}
             </div>
             <span className="font-bold text-xl text-gray-900">5.0 Star Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="mb-6 text-brand-gold opacity-50">
                <Quote size={48} />
              </div>
              
              <div className="flex text-brand-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-8 flex-grow leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wide">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;