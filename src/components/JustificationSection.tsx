import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const JustificationSection = () => {
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

  const reasons = [
    {
      title: "Une destination francophone authentique",
      description:
        "Le français est une langue officielle et largement parlée dans tous les aspects de la vie quotidienne, de l'administration à l'éducation en passant par les médias. Cela permet une immersion linguistique naturelle et confortable, parfaite pour pratiquer et perfectionner son français dans un contexte réel et européen.",
    },
    {
      title: "Un patrimoine historique exceptionnel",
      description:
        "Des châteaux médiévaux remarquablement préservés aux fortifications classées au patrimoine mondial de l'UNESCO, en passant par les musées d'art moderne, le Luxembourg offre un voyage dans le temps fascinant qui traverse mille ans d'histoire européenne dans un seul petit pays.",
    },
    {
      title: "Une taille parfaite pour explorer",
      description:
        "Avec seulement 2 586 km², le Luxembourg peut être découvert facilement en quelques jours sans stress de transport. On peut traverser le pays en une heure, ce qui le rend idéal pour un séjour étudiant permettant de tout voir sans se presser, tout en profitant pleinement de chaque lieu.",
    },
    {
      title: "Un carrefour culturel européen unique",
      description:
        "Avec 170 nationalités représentées et trois langues officielles, le Luxembourg incarne parfaitement l'idéal européen de diversité et d'intégration. C'est une fenêtre unique sur la construction européenne, où traditions locales et influences internationales se rencontrent harmonieusement au quotidien.",
    },
  ];

  return (
    <section
      id="justification"
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-background via-muted to-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pourquoi J'ai Choisi le Luxembourg
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] border border-accent/10 hover:border-accent/30 overflow-hidden ${
                isVisible ? "animate-fade-in-up-subtle" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full blur-2xl"></div>
              
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-lg">
                  <Check className="w-6 h-6 text-secondary transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-3 hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed text-base">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`relative bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl p-10 md:p-16 shadow-2xl text-center border-2 border-primary/40 overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-transparent via-primary to-primary rounded-full"></div>
            </div>
            
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-foreground font-medium mb-6">
              "Le Luxembourg m'inspire par sa capacité à préserver son patrimoine historique 
              tout en embrassant la modernité. C'est une destination qui prouve qu'un petit 
              pays peut avoir une grande âme."
            </p>
            
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-foreground font-medium mb-6">
              "C'est un lieu où l'histoire rencontre l'avenir européen, où le français 
              résonne dans chaque rue. L'accueil chaleureux des Luxembourgeois rend 
              l'expérience encore plus enrichissante."
            </p>
            
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-foreground font-medium">
              "Pour moi, le Luxembourg représente la destination francophone idéale : 
              accessible, enrichissante, fascinante et inoubliable."
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-transparent via-primary to-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JustificationSection;
