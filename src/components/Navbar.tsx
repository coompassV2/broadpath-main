import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex justify-between items-center p-8 lg:p-12">
        {/* Logo */}
        <Logo />

        {/* CTA Button */}
        <button className="bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-full px-6 py-2 text-green-400 hover:text-green-300 transition-all duration-300 font-light tracking-wide">
          Talk To Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;