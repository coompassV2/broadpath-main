
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Marquee from '../components/Marquee';
import HorizontalScroll from '../components/HorizontalScroll';
import Services from '../components/Services';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      
      {/* Marquee #1 (Top - Forward Scroll) */}
      <Marquee 
        items={["Artificial Intelligence", "0 to 1 Product Dev", "GTM Strategy", "Rapid Prototyping", "Product Strategy", "Purpose-Driven Tech", "Real-World Impact"]} 
        className="py-12"
      />
      
      <HorizontalScroll />
      <Services />
      
      {/* Marquee #2 (Middle - Reverse Scroll with Background) */}
      <div className="py-12 bg-gray-900">
        <Marquee 
          items={["Innovation", "Creativity", "Strategy", "Performance", "Digital Experience", "Brand Strategy", "Web Development", "Creative Direction"]} 
          reverse
        />
      </div>
      
      <About />
      <Stats />
      <CTA />
      
      <Footer />
    </div>
  );
};

export default Index;
