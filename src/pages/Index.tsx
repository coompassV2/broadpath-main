
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SecondarySection from '../components/SecondarySection';
import CoompassSection from '../components/CoompassSection';
import CivitasSection from '../components/CivitasSection';
import LusogateSection from '../components/LusogateSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <SecondarySection />
      <CoompassSection />
      <CivitasSection />
      <LusogateSection />
      <Footer />
    </div>
  );
};

export default Index;
