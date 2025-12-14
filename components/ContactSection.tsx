import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-gold rounded-full blur-[100px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-gold rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Journey</h2>
          <p className="text-gray-400 text-lg">
            Ready to book your premium getaway? Send us a message and our concierge team will get back to you shortly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-gold uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-gold uppercase tracking-wider">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-brand-gold uppercase tracking-wider">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your trip dates and preferences..."
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors resize-none"
              ></textarea>
            </div>

            <div className="pt-6">
              <button 
                type="button" 
                className="w-full md:w-auto px-10 py-4 bg-brand-gold text-white font-bold rounded-lg hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-lg hover:shadow-gold/20"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;