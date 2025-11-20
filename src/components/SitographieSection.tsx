import { useEffect, useRef, useState } from "react";
import { ExternalLink, Book, Globe, Library, Image, Castle } from "lucide-react";

const SitographieSection = () => {
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

  const sources = [
    {
      title: "Wikipedia - Luxembourg",
      url: "https://en.wikipedia.org/wiki/Luxembourg",
      description: "Encyclopédie collaborative offrant une vue d'ensemble complète sur l'histoire, la géographie et la culture du Luxembourg.",
      icon: Book,
      color: "primary",
    },
    {
      title: "Visit Luxembourg",
      url: "https://www.visitluxembourg.com",
      description: "Site officiel du tourisme luxembourgeois avec toutes les informations pratiques pour planifier votre visite et découvrir les attractions.",
      icon: Globe,
      color: "secondary",
    },
    {
      title: "Britannica - Luxembourg",
      url: "https://www.britannica.com/place/Luxembourg",
      description: "Encyclopédie de référence proposant des articles détaillés et vérifiés sur tous les aspects du Grand-Duché de Luxembourg.",
      icon: Library,
      color: "accent",
    },
    {
      title: "Google Images",
      url: "https://images.google.com",
      description: "Source d'images authentiques utilisées pour illustrer les attractions et paysages luxembourgeois présentés sur cette page.",
      icon: Image,
      color: "primary",
    },
    {
      title: "Château de Vianden",
      url: "https://castle-vianden.lu/gb/",
      description: "Site officiel du Château de Vianden, l'une des plus belles résidences féodales de l'époque romane et gothique en Europe.",
      icon: Castle,
      color: "secondary",
    },
  ];

  return (
    <section
      id="sitographie"
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
            Sitographie
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Sources et ressources pour en apprendre davantage sur le Luxembourg
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {sources.map((source, index) => (
            <a
              key={index}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-${source.color}/20 hover:border-${source.color}/50 overflow-hidden ${
                isVisible ? "animate-scale-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient background effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${source.color}/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br from-${source.color}/20 to-${source.color}/30 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                  <source.icon className={`w-8 h-8 text-${source.color} transition-transform duration-500`} />
                </div>

                {/* Title with external link icon */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {source.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ml-2" />
                </div>

                {/* Description */}
                <p className="font-inter text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-4">
                  {source.description}
                </p>

                {/* URL display */}
                <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 truncate">
                    {source.url.replace('https://', '')}
                  </span>
                </div>
              </div>

              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-${source.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <p className="font-inter text-sm text-muted-foreground italic">
            Toutes les sources ont été consultées et vérifiées pour assurer l'exactitude des informations présentées.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SitographieSection;
