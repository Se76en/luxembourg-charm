import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ContextSection from "@/components/ContextSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import JustificationSection from "@/components/JustificationSection";
import SitographieSection from "@/components/SitographieSection";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import FalloutEasterEgg from "@/components/FalloutEasterEgg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
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
      <FalloutEasterEgg />
    </div>
  );
};

export default Index;
