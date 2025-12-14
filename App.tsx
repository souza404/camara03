import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertiesSection from './components/PropertiesSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PropertiesSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;