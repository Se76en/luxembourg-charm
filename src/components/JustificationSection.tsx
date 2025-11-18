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
        "Le français est une langue officielle et largement parlée, ce qui permet une immersion linguistique naturelle.",
    },
    {
      title: "Un patrimoine historique exceptionnel",
      description:
        "Des châteaux médiévaux aux fortifications classées UNESCO, le Luxembourg offre un voyage dans le temps fascinant.",
    },
    {
      title: "Une taille parfaite pour explorer",
      description:
        "Petit mais riche, le Luxembourg peut être découvert facilement en quelques jours, idéal pour un séjour étudiant.",
    },
    {
      title: "Un carrefour culturel européen",
      description:
        "La mixité culturelle et le multilinguisme du Luxembourg en font une expérience unique de diversité européenne.",
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
              className={`bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 shadow-lg text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <p className="font-inter text-lg md:text-xl leading-relaxed text-foreground italic">
            "Le Luxembourg m'inspire par sa capacité à préserver son patrimoine tout en 
            embrassant la modernité. C'est une destination qui prouve qu'un petit pays peut 
            avoir une grande âme, où l'histoire rencontre l'avenir et où le français résonne 
            dans chaque rue. Pour moi, c'est l'essence même d'une destination francophone 
            idéale : accessible, enrichissante et inoubliable."
          </p>
        </div>
      </div>
    </section>
  );
};

export default JustificationSection;
