import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import DetailedFeatures from "@/components/DetailedFeatures";
import TreasureHunt from "@/components/TreasureHunt";
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
      <section id="features">
        <Features />
      </section>
      <section id="detailed-features">
        <DetailedFeatures />
      </section>
      <section id="treasure-hunt">
        <TreasureHunt />
      </section>
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