import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AttendeesSection from "@/components/AttendeesSection";
import TreasureHunt from "@/components/TreasureHunt";
import SponsorsSection from "@/components/SponsorsSection";
import BaseSection from "@/components/BaseSection";
import TokenSection from "@/components/TokenSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <AttendeesSection />
      <section id="treasure-hunt">
        <TreasureHunt />
      </section>
      <SponsorsSection />
      <section id="base">
        <BaseSection />
      </section>
      <section id="token">
        <TokenSection />
      </section>
      <section id="join">
        <CTASection />
      </section>
      <Footer />
    </div>
  );
};

export default Index;