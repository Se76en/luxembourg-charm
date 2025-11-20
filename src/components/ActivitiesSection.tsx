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
        "Un château médiéval magnifiquement restauré entre 1977 et 1987, perché majestueusement sur une colline dominant la vallée de l'Our. Construit entre le XIe et XIVe siècle, c'est l'un des plus beaux châteaux d'Europe avec ses tours imposantes, ses salles d'époque richement meublées et ses vues panoramiques à couper le souffle. Victor Hugo y séjourna en 1871 et fut inspiré par sa beauté.",
      image: viandenCastle,
      tags: ["Histoire", "Architecture", "Panorama"],
    },
    {
      title: "La Vieille Ville de Luxembourg",
      description:
        "Le cœur historique de la capitale, classé au patrimoine mondial de l'UNESCO depuis 1994 pour ses fortifications exceptionnelles. Promenez-vous dans les ruelles pavées médiévales, découvrez le Chemin de la Corniche (le plus beau balcon d'Europe), explorez les casemates du Bock creusées dans la roche, et admirez l'architecture unique qui mêle styles gothique, renaissance et baroque. Le quartier du Grund, niché dans la vallée, offre une atmosphère pittoresque inoubliable.",
      image: oldTown,
      tags: ["UNESCO", "Culture", "Architecture"],
    },
    {
      title: "La Région du Mullerthal",
      description:
        "Surnommée affectueusement la 'Petite Suisse luxembourgeoise' pour ses paysages verdoyants et vallonnés, cette région naturelle préservée offre plus de 112 km de sentiers de randonnée spectaculaires. Découvrez des formations rocheuses de grès millénaires sculptées par l'érosion, des gorges étroites mystérieuses, des cascades rafraîchissantes et des forêts denses où la nature règne en maître. Le Mullerthal Trail est considéré comme l'un des plus beaux sentiers de randonnée d'Europe.",
      image: mullerthal,
      tags: ["Nature", "Randonnée", "Aventure"],
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
                  className="w-full h-80 object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="md:w-1/2 relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-secondary/10 hover:border-secondary/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-3 transition-colors duration-300">
                    {activity.title}
                  </h3>
                  
                  <div className="flex gap-2 mb-4">
                    {activity.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-semibold bg-secondary/20 text-secondary rounded-full hover:bg-secondary/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="font-inter text-base leading-relaxed text-foreground">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
