import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ContextSection from "@/components/ContextSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import JustificationSection from "@/components/JustificationSection";
import SitographieSection from "@/components/SitographieSection";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import LanguageToggle from "@/components/LanguageToggle";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <ScrollProgressBar />
      <Navigation />
      <main>
        <Hero />
        <ContextSection />
        <ActivitiesSection />
        <JustificationSection />
        <SitographieSection />
      </main>
      <Footer />
      <ScrollToTop />
      <LanguageToggle />
    </div>
  );
};

export default Index;
