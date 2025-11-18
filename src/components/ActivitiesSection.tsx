import { useEffect, useRef, useState } from "react";
import viandenCastle from "@/assets/vianden-castle.jpg";
import oldTown from "@/assets/old-town.jpg";
import mullerthal from "@/assets/mullerthal.jpg";

const ActivitiesSection = () => {
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

  const activities = [
    {
      title: "Le Château de Vianden",
      description:
        "Un château médiéval magnifiquement restauré, perché sur une colline. C'est l'un des plus beaux châteaux d'Europe avec ses tours imposantes et ses vues panoramiques sur la région.",
      image: viandenCastle,
    },
    {
      title: "La Vieille Ville de Luxembourg",
      description:
        "Le cœur historique de la capitale, classé au patrimoine mondial de l'UNESCO. Promenez-vous dans les ruelles pavées, découvrez les fortifications du Bock et admirez l'architecture unique.",
      image: oldTown,
    },
    {
      title: "La Région du Mullerthal",
      description:
        "Surnommée la 'Petite Suisse luxembourgeoise', cette région offre des sentiers de randonnée spectaculaires à travers des forêts verdoyantes et des formations rocheuses impressionnantes.",
      image: mullerthal,
    },
  ];

  return (
    <section
      id="activites"
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-muted to-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Activités & Attractions Touristiques
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="md:w-1/2 overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="md:w-1/2 bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-4">
                  {activity.title}
                </h3>
                <p className="font-inter text-lg leading-relaxed text-foreground">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
