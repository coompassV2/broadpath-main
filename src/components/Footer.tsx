import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Footer = () => {
  return <footer className="relative bg-black border-t border-white/10">
      <div className="px-8 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
          
          {/* Left Column - Brand + Social */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="text-white font-light tracking-wide text-xl">
                Broadpath®
              </div>
              <p className="text-white/40 text-sm font-light tracking-wide max-w-xs">
                Build Fast. Scale with Purpose.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - CTA Section */}
          <div className="text-left lg:text-right">
            <h2 className="text-xl lg:text-2xl font-light text-white mb-6 tracking-wide">
              Let's create something exceptional together
            </h2>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <button className="border border-white/30 hover:border-white/50 rounded-full px-6 py-2 text-white/80 hover:text-white transition-all duration-300 font-light tracking-wide">
                Get in touch
              </button>
              <button className="border border-white/30 hover:border-white/50 rounded-full px-6 py-2 text-white/80 hover:text-white transition-all duration-300 font-light tracking-wide">
                Start a project
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 py-0 my-0">
          <p className="text-white/40 text-sm font-light tracking-wide text-center">
            © 2025 Broadpath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;