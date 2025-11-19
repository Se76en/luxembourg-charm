import { Heart } from "lucide-react";
import heroImage from "@/assets/luxembourg-hero.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <div className="animate-scale-fade-in inline-block mb-6">
          <Heart className="text-secondary w-12 h-12 fill-secondary" />
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-blur-in">
          Ma Destination Francophone Favorite
        </h1>
        
        <h2 className="font-playfair text-3xl md:text-5xl text-primary mb-8 animate-fade-blur-in" style={{ animationDelay: "0.3s" }}>
          Le Luxembourg
        </h2>
        
        <p className="font-inter text-xl md:text-2xl text-muted-foreground animate-fade-in-up-subtle" style={{ animationDelay: "0.6s" }}>
          Un petit pays avec un grand charme francophone.
        </p>

      </div>
    </section>
  );
};

export default Hero;
