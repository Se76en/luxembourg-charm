import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-card hover:bg-card/90 text-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary/20 hover:border-primary/40 group"
      aria-label="Toggle language"
    >
      <Globe className="w-5 h-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
      <span className="font-inter text-sm font-semibold uppercase tracking-wide">
        {language === "fr" ? "EN" : "FR"}
      </span>
    </button>
  );
};

export default LanguageToggle;
