import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ContextSection from "@/components/ContextSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import JustificationSection from "@/components/JustificationSection";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <main>
        <Hero />
        <ContextSection />
        <ActivitiesSection />
        <JustificationSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
