import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Logo = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "glass-morphism rounded-full px-4 py-3 transition-all duration-300",
        scrolled ? "bg-black/50" : "bg-white/5"
      )}
    >
      <div className="flex items-center gap-3">
        <img 
          src="/brut.svg" 
          alt="Broadpath Brut Icon" 
          className="w-8 h-8"
        />
        <span className="text-base tracking-wide text-white">
          <span className="font-normal">BROAD</span>
          <span className="font-bold">PATH</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;

