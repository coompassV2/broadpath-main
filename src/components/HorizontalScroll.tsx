import { useRef, useEffect } from "react";

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;
    
    let scrollWidth = 0;
    
    const handleResize = () => {
      if (!container || !section) return;
      scrollWidth = section.scrollWidth - window.innerWidth;
      
      // Set the height of the container to ensure proper scrolling distance
      const scrollDistance = section.scrollWidth - window.innerWidth;
      container.style.height = `${scrollDistance + window.innerHeight}px`;
    };
    
    const handleScroll = () => {
      if (!container || !section) return;
      
      // Get the scroll progress through the section
      const scrollTop = window.scrollY - container.offsetTop;
      const scrollProgress = Math.max(0, Math.min(1, scrollTop / (container.offsetHeight - window.innerHeight)));
      
      // Apply horizontal translation
      const translateX = -scrollWidth * scrollProgress;
      section.style.transform = `translateX(${translateX}px)`;
    };
    
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const projects = [
    { 
      id: 1, 
      title: "Coompass", 
      client: "Web Design, Web Development, Brand Strategy, Web Hosting, Web Maintenance",
      category: "Platform for Corporate Volunteering & ESG Reporting",
      image: "/bp-coompass.png"
    },
    { 
      id: 2, 
      title: "GV Invest", 
      client: "Web Design, Web Development, Web Hosting",
      category: "Platform for Golden Visa Investment & Real Estate",
      image: "/bp-gvinvest.png"
    },
    { 
      id: 3, 
      title: "Civitas", 
      client: "Web Design, Web Development",
      category: "Platform for Civic Scholarship & ECTS Credits",
      image: "/gradient-3.png"
    },
    { 
      id: 4, 
      title: "Uni.Network", 
      client: "Web Design, Web Development, Brand Strategy",
      category: "Programmatic Platform for University Admissions",
      image: "/gradient-4.png"
    },
    { 
      id: 5, 
      title: "Sou Mais (CASES)", 
      client: "Web Design, Web Development, Web Maintenance, Web Hosting, Brand Strategy",
      category: "Portuguese National Micro-Credit Program",
      image: "/gradient-5.png"
    },
    { 
      id: 6, 
      title: "zIRC", 
      client: "Web Design, Web Development, Brand Strategy",
      category: "AI terminal for real-time BSC insights",
      image: "/gradient-6.png"
    }
  ];
  
  return (
    <div id="projects" ref={containerRef} className="relative bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div ref={sectionRef} className="flex items-start gap-6 md:gap-12 px-6 md:px-12">
          <div className="min-w-[50vw] md:min-w-[30vw] flex items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
              Selected<br />Projects
            </h2>
          </div>
          
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] h-[70vh] rounded-lg overflow-hidden relative group cursor-pointer"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-white/90 mb-4 text-base md:text-lg font-light leading-relaxed">{project.category}</p>
                <div className="flex flex-wrap gap-2">
                  {project.client.split(', ').map((service) => (
                    <span
                      key={service}
                      className="bg-black/70 text-green-400 text-xs font-semibold rounded-full px-3 py-1"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/5 transition-opacity duration-300 z-30"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
