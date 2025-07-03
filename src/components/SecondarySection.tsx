import React from 'react';
const SecondarySection = () => {
  return <div id="about" className="min-h-screen bg-gradient-to-br from-slate-900 to-black flex items-center justify-center px-2 lg:px-4">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Opening Statement */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8 text-white lg:text-6xl">
            We build tech that moves fast and matters.
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
            We help purpose-driven teams build solutions that don't just work—they work with intention. Tailored solutions for unique challenges.
          </p>
        </div>

        {/* Glassmorphic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {/* Our Services Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl mb-4 tracking-wide text-green-400 font-light">Our Services</h3>
            <div className="space-y-3 text-white/70">
              <div className="space-y-1">
                <h4 className="text-white mb-1 text-base font-normal">AI MVP Development</h4>
                <p className="font-light leading-relaxed text-sm">Fast, functional AI-powered prototypes for scalable products</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-white mb-1 text-base font-normal">Product & GTM Strategy</h4>
                <p className="font-light leading-relaxed text-sm">Strategic roadmap and go-to-market validation for mission-driven products</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-white mb-1 text-base font-normal">Ethical AI & Automation</h4>
                <p className="font-light leading-relaxed text-sm">Human-centered AI systems built with efficiency and integrity</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-white mb-1 text-base font-normal">Tech for Good Innovation</h4>
                <p className="font-light leading-relaxed text-sm">Purpose-driven emerging tech solutions for measurable impact</p>
              </div>
            </div>
          </div>


          {/* Why Choose Broadpath Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl mb-4 tracking-wide text-green-400 font-light">Why Broadpath</h3>
            <div className="space-y-3 text-white/70">
              <div>
                <h4 className="text-white mb-1 text-base font-normal">Speed Without Compromise</h4>
                <p className="font-light leading-relaxed text-sm">We deliver fast without cutting corners on quality or purpose.</p>
              </div>
              <div>
                <h4 className="text-white mb-1 text-base font-normal">Full-Stack Expertise</h4>
                <p className="font-light leading-relaxed text-sm">From frontend to infrastructure, we handle the complete technical journey.</p>
              </div>
              <div>
                <h4 className="text-white mb-1 text-base font-normal">Purpose-Driven Approach</h4>
                <p className="font-light leading-relaxed text-sm">Every line of code serves a meaningful goal, not just market demands.</p>
              </div>
              <div>
                <h4 className="text-white mb-1 text-base font-normal">Emerging Tech Focus</h4>
                <p className="font-light leading-relaxed text-sm">We stay ahead of the curve, building with tomorrow's technologies today.</p>
              </div>
            </div>
          </div>

          {/* About Broadpath Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl mb-4 tracking-wide text-green-400 font-light">About Us</h3>
            <div className="space-y-3 text-white/70">
              <div>
                <h4 className="text-white mb-1 text-base font-normal">Our Mission</h4>
                <p className="font-light leading-relaxed text-sm">Building technology that amplifies human potential and creates meaningful impact in the world.</p>
              </div>
              <div>
                <h4 className="text-white mb-1 text-base font-normal">Our Team</h4>
                <p className="font-light leading-relaxed text-sm">A collective of engineers, designers, and strategists united by purpose-driven innovation.</p>
              </div>
              <div>
                <h4 className="text-white mb-1 text-base font-normal">Our Impact</h4>
                <p className="font-light leading-relaxed text-sm">50+ successful launches, 100k+ users served, and countless problems solved with intention.</p>
              </div>
              <div>
                <h4 className="text-white mb-1 text-base font-normal">Founded</h4>
                <p className="font-light leading-relaxed text-sm">2024 - Born from the belief that technology should serve humanity, not the other way around.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default SecondarySection;