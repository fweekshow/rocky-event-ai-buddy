import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import TreasureHunt from "@/components/TreasureHunt";
import BaseSection from "@/components/BaseSection";
import TokenSection from "@/components/TokenSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Features />
      <TreasureHunt />
      <BaseSection />
      <TokenSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;