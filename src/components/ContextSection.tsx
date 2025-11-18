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
              delay: "0.2s",
            },
            {
              icon: Globe,
              title: "Langues",
              delay: "0.4s",
            },
            {
              icon: Users,
              title: "Population",
              delay: "0.6s",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: item.delay }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-center mb-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div
          className={`bg-card rounded-3xl p-8 md:p-12 shadow-lg transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <p className="font-inter text-lg leading-relaxed text-foreground">
            Le Luxembourg est un petit pays situé au cœur de l'Europe, bordé par la France, 
            l'Allemagne et la Belgique. Sa capitale, Luxembourg-Ville, est célèbre pour ses 
            fortifications médiévales spectaculaires et son architecture moderne. Bien que petit 
            en taille (environ 2 500 km²), le Luxembourg possède une richesse culturelle 
            extraordinaire. Le pays est trilingue : on y parle le luxembourgeois, le français 
            et l'allemand. Le français est largement utilisé dans l'administration, l'éducation 
            et la vie quotidienne, ce qui fait du Luxembourg une destination francophone 
            authentique et accessible. Avec environ 630 000 habitants, dont près de la moitié 
            sont étrangers, le Luxembourg représente un véritable carrefour européen où se 
            mélangent cultures et traditions dans une atmosphère cosmopolite unique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
