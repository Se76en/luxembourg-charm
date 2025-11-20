import { useEffect, useRef, useState } from "react";
import { MapPin, Globe, Users } from "lucide-react";

const ContextSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contexte"
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-background to-muted"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contexte Géographique
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: MapPin,
              title: "Situation",
              detail: "Au cœur de l'Europe",
              subtext: "Entre France, Allemagne & Belgique",
              delay: "0.2s",
            },
            {
              icon: Globe,
              title: "Langues",
              detail: "Trilingue officiel",
              subtext: "Luxembourgeois, Français & Allemand",
              delay: "0.4s",
            },
            {
              icon: Users,
              title: "Population",
              detail: "~630 000 habitants",
              subtext: "47% d'étrangers",
              delay: "0.6s",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-primary/10 hover:border-primary/30 ${
                isVisible ? "animate-scale-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: item.delay }}
            >
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 hover:scale-110 hover:rotate-12">
                <item.icon className="w-8 h-8 text-primary transition-transform duration-500" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-center mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-center font-inter text-base font-medium text-primary mb-1">
                {item.detail}
              </p>
              <p className="text-center font-inter text-sm text-muted-foreground">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`relative bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-primary/10 transition-all duration-1000 overflow-hidden ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Grand-Duché de Luxembourg</span>
            </div>
            
            <p className="font-inter text-lg leading-relaxed text-foreground mb-6">
              Le Luxembourg est un petit pays situé au <span className="font-semibold text-primary">cœur de l'Europe</span>, 
              bordé par la France, l'Allemagne et la Belgique. Sa capitale, Luxembourg-Ville, est célèbre pour ses 
              fortifications médiévales spectaculaires et son architecture moderne qui se mêlent harmonieusement. 
              Le vieux quartier et les fortifications sont inscrits au <span className="font-semibold text-secondary">patrimoine mondial de l'UNESCO depuis 1994</span>.
            </p>
            
            <p className="font-inter text-lg leading-relaxed text-foreground mb-6">
              Bien que petit en taille (environ 2 586 km², soit trois fois plus petit que la Corse), 
              le Luxembourg possède une richesse culturelle extraordinaire. Le pays est officiellement 
              <span className="font-semibold text-accent"> trilingue</span> : on y parle le luxembourgeois (langue nationale), 
              le français et l'allemand. Le français est particulièrement présent dans l'administration, 
              l'enseignement secondaire, les médias et la vie quotidienne, ce qui fait du Luxembourg 
              une destination francophone authentique et très accessible.
            </p>
            
            <p className="font-inter text-lg leading-relaxed text-foreground">
              Avec environ 630 000 habitants, dont près de 47% sont étrangers venus de plus de 170 nationalités, 
              le Luxembourg représente un véritable <span className="font-semibold text-primary">carrefour européen</span> où 
              se mélangent cultures et traditions dans une atmosphère cosmopolite unique. Cette diversité en fait 
              l'un des pays les plus multiculturels d'Europe et un modèle d'intégration réussie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
