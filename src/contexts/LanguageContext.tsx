import React, { createContext, useContext, useState } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Hero
    "hero.title": "Ma Destination Francophone Favorite",
    "hero.subtitle": "Le Luxembourg",
    "hero.tagline": "Un petit pays avec un grand charme francophone.",
    
    // Navigation
    "nav.context": "Contexte",
    "nav.activities": "Activités",
    "nav.justification": "Pourquoi ce choix",
    "nav.sitography": "Sitographie",
    
    // Context Section
    "context.title": "Contexte Géographique",
    "context.location": "Situation",
    "context.location.detail": "Au cœur de l'Europe",
    "context.location.subtext": "Entre France, Allemagne & Belgique",
    "context.languages": "Langues",
    "context.languages.detail": "Trilingue officiel",
    "context.languages.subtext": "Luxembourgeois, Français & Allemand",
    "context.population": "Population",
    "context.population.detail": "~630 000 habitants",
    "context.population.subtext": "47% d'étrangers",
    
    // Activities Section
    "activities.title": "Activités & Attractions Touristiques",
    "activities.vianden.title": "Le Château de Vianden",
    "activities.vianden.desc": "Un château médiéval magnifiquement restauré entre 1977 et 1987, perché majestueusement sur une colline dominant la vallée de l'Our. Construit entre le XIe et XIVe siècle, c'est l'un des plus beaux châteaux d'Europe avec ses tours imposantes, ses salles d'époque richement meublées et ses vues panoramiques à couper le souffle. Victor Hugo y séjourna en 1871 et fut inspiré par sa beauté.",
    "activities.oldtown.title": "La Vieille Ville de Luxembourg",
    "activities.oldtown.desc": "Le cœur historique de la capitale, classé au patrimoine mondial de l'UNESCO depuis 1994 pour ses fortifications exceptionnelles. Promenez-vous dans les ruelles pavées médiévales, découvrez le Chemin de la Corniche (le plus beau balcon d'Europe), explorez les casemates du Bock creusées dans la roche, et admirez l'architecture unique qui mêle styles gothique, renaissance et baroque. Le quartier du Grund, niché dans la vallée, offre une atmosphère pittoresque inoubliable.",
    "activities.mullerthal.title": "La Région du Mullerthal",
    "activities.mullerthal.desc": "Surnommée affectueusement la 'Petite Suisse luxembourgeoise' pour ses paysages verdoyants et vallonnés, cette région naturelle préservée offre plus de 112 km de sentiers de randonnée spectaculaires. Découvrez des formations rocheuses de grès millénaires sculptées par l'érosion, des gorges étroites mystérieuses, des cascades rafraîchissantes et des forêts denses où la nature règne en maître. Le Mullerthal Trail est considéré comme l'un des plus beaux sentiers de randonnée d'Europe.",
    
    // Justification Section
    "justification.title": "Pourquoi J'ai Choisi le Luxembourg",
    
    // Sitography
    "sitography.title": "Sitographie",
    "sitography.subtitle": "Sources et ressources pour en apprendre davantage sur le Luxembourg",
    
    // Footer
    "footer.made": "Fabriqué avec",
    "footer.by": "par Iurascu Iulian",
  },
  en: {
    // Hero
    "hero.title": "My Favorite French-Speaking Destination",
    "hero.subtitle": "Luxembourg",
    "hero.tagline": "A small country with great French-speaking charm.",
    
    // Navigation
    "nav.context": "Context",
    "nav.activities": "Activities",
    "nav.justification": "Why this choice",
    "nav.sitography": "Sources",
    
    // Context Section
    "context.title": "Geographic Context",
    "context.location": "Location",
    "context.location.detail": "In the heart of Europe",
    "context.location.subtext": "Between France, Germany & Belgium",
    "context.languages": "Languages",
    "context.languages.detail": "Official trilingual",
    "context.languages.subtext": "Luxembourgish, French & German",
    "context.population": "Population",
    "context.population.detail": "~630,000 inhabitants",
    "context.population.subtext": "47% foreigners",
    
    // Activities Section
    "activities.title": "Activities & Tourist Attractions",
    "activities.vianden.title": "Vianden Castle",
    "activities.vianden.desc": "A beautifully restored medieval castle between 1977 and 1987, majestically perched on a hill overlooking the Our valley. Built between the 11th and 14th centuries, it is one of the most beautiful castles in Europe with its imposing towers, richly furnished period rooms, and breathtaking panoramic views. Victor Hugo stayed there in 1871 and was inspired by its beauty.",
    "activities.oldtown.title": "Luxembourg Old Town",
    "activities.oldtown.desc": "The historic heart of the capital, listed as a UNESCO World Heritage site since 1994 for its exceptional fortifications. Stroll through medieval cobblestone streets, discover the Chemin de la Corniche (Europe's most beautiful balcony), explore the Bock casemates carved into rock, and admire the unique architecture blending Gothic, Renaissance, and Baroque styles. The Grund district, nestled in the valley, offers an unforgettable picturesque atmosphere.",
    "activities.mullerthal.title": "Mullerthal Region",
    "activities.mullerthal.desc": "Affectionately nicknamed 'Luxembourg's Little Switzerland' for its green and hilly landscapes, this preserved natural region offers over 112 km of spectacular hiking trails. Discover millennial sandstone rock formations sculpted by erosion, mysterious narrow gorges, refreshing waterfalls, and dense forests where nature reigns supreme. The Mullerthal Trail is considered one of Europe's most beautiful hiking trails.",
    
    // Justification Section
    "justification.title": "Why I Chose Luxembourg",
    
    // Sitography
    "sitography.title": "Sources",
    "sitography.subtitle": "Resources to learn more about Luxembourg",
    
    // Footer
    "footer.made": "Made with",
    "footer.by": "by Iurascu Iulian",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
