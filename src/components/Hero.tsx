import { Heart } from "lucide-react";
import heroImage from "@/assets/luxembourg-hero.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <div className="animate-bounce-gentle inline-block mb-6">
          <Heart className="text-secondary w-12 h-12 fill-secondary" />
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
          Ma Destination Francophone Favorite
        </h1>
        
        <h2 className="font-playfair text-3xl md:text-5xl text-primary mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Le Luxembourg
        </h2>
        
        <p className="font-inter text-xl md:text-2xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Un petit pays avec un grand charme francophone.
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
