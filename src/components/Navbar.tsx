import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/20 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center p-8 lg:p-12">
        {/* Logo */}
        <div className="text-white font-light tracking-wide text-xl">
          Broadpath®
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('coompass')}
            className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide"
          >
            Coompass
          </button>
          <button
            onClick={() => scrollToSection('civitas')}
            className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide"
          >
            Civitas
          </button>
          <button
            onClick={() => scrollToSection('lusogate')}
            className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide"
          >
            Lusogate
          </button>
        </div>

        {/* CTA Button */}
        <button className="bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-full px-6 py-2 text-green-400 hover:text-green-300 transition-all duration-300 font-light tracking-wide">
          Talk To Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;