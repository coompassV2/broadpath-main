import React from 'react';

const CoompassSection = () => {
  return (
    <div id="coompass" className="min-h-screen bg-gradient-to-br from-slate-900 to-black flex items-center justify-start relative overflow-hidden">
      {/* Left Content Area */}
      <div className="px-8 lg:px-12 pt-8 lg:pt-12 z-10">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-8 text-white">
            Coompass
          </h1>

          {/* Paragraph */}
          <p className="lg:max-w-md text-white/70 font-light leading-relaxed text-lg mb-12">
            An AI-powered platform for sustainability, impact-driven volunteering, and ESG reporting.
          </p>

          {/* CTA Button */}
          <button className="border border-white/30 hover:border-white/50 rounded-full px-6 py-2 text-white/80 hover:text-white transition-all duration-300 font-light tracking-wide">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Placeholder - Flush with right and bottom edges */}
      <div className="absolute right-0 bottom-0">
        <div 
          className="w-[60vw] h-[calc(100vh-8rem)] rounded-tl-[40px] mt-32 bg-cover bg-left bg-no-repeat bg-slate-200"
          style={{
            backgroundImage: `url('/lovable-uploads/b73441ee-09de-4e8a-87eb-b9ed5399160b.png')`
          }}
        >
          {/* Empty div content to ensure proper rendering */}
        </div>
      </div>
    </div>
  );
};

export default CoompassSection;
