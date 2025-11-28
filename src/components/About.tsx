const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-12 text-white">
              We're a full-stack tech studio building AI-powered solutions for real-world impact
            </h2>
          </div>
          
          <div className="md:col-span-5 space-y-8">
            <p className="text-xl text-white/80">
              Broadpath partners with mission-driven organizations to build fast, functional MVPs powered by AI and emerging technologies. From concept to code, we transform bold ideas into scalable solutions that deliver meaningful, measurable impact.
            </p>
            <p className="text-xl text-white/80">
              Our team of engineers, strategists, and product experts works hands-on to design, build, and launch tech that matters — all while pushing the boundaries of innovation for good.
            </p>
            
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                <div>
                  <p className="text-white/60 text-sm mb-2">Founded</p>
                  <p className="text-xl font-medium text-white">2025</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-2">Team</p>
                  <p className="text-xl font-medium text-white">5 Specialists</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-2">Location</p>
                  <p className="text-xl font-medium text-white">Lisbon & Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

