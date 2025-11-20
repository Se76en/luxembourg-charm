import { Heart } from "lucide-react";
import heroImage from "@/assets/luxembourg-hero.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <div className="animate-scale-fade-in inline-block mb-6 hover:scale-110 transition-transform duration-500">
          <Heart className="text-secondary w-12 h-12 fill-secondary drop-shadow-lg" />
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-blur-in tracking-tight hover:tracking-wide transition-all duration-700">
          Ma Destination Francophone Favorite
        </h1>
        
        <h2 className="font-playfair text-3xl md:text-5xl text-primary mb-8 animate-fade-blur-in hover:text-primary/80 transition-colors duration-500" style={{ animationDelay: "0.3s" }}>
          Le Luxembourg
        </h2>
        
        <p className="font-inter text-xl md:text-2xl text-muted-foreground animate-fade-in-up-subtle leading-relaxed hover:text-foreground transition-colors duration-500" style={{ animationDelay: "0.6s" }}>
          Un petit pays avec un grand charme francophone.
        </p>

      </div>
    </section>
  );
};

export default Hero;
