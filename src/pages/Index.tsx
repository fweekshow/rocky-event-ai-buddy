import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AttendeesSection from "@/components/AttendeesSection";
import TreasureHunt from "@/components/TreasureHunt";
import SponsorsSection from "@/components/SponsorsSection";
import BaseTokenSection from "@/components/BaseTokenSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8">
        <Hero />
        <section id="about">
          <About />
        </section>
        <AttendeesSection />
        <section id="treasure-hunt">
          <TreasureHunt />
        </section>
        <SponsorsSection />
        <BaseTokenSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;