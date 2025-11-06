import { Button } from "@/components/ui/button";
import rockyMascot from "@/assets/rocky-mascot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      
      {/* Pixelated Dots - Multiple Layers */}
      <div className="absolute inset-0 pixelated-dots pointer-events-none"></div>
      <div className="absolute inset-0 pixelated-dots-layer2 pointer-events-none"></div>
      <div className="absolute inset-0 pixelated-dots-layer3 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your AI Event Copilot
              <span className="block gradient-text mt-2">Born on Base</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Chat. Organize. Explore
              <p>Turning every event into a connected experience.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 glow-effect hover:scale-105 transition-transform"
                onClick={() => document.getElementById('attendees')?.scrollIntoView({ behavior: 'smooth' })}
              >
                For Attendees
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 hover:scale-105 transition-transform"
                onClick={() => document.getElementById('sponsors')?.scrollIntoView({ behavior: 'smooth' })}
              >
                For Sponsors
              </Button>
            </div>
          </div>

          {/* Rocky Mascot */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl animate-glow"></div>
              <img
                src={rockyMascot}
                alt="Rocky - AI Event Assistant Mascot"
                className="relative w-64 sm:w-80 lg:w-96 h-auto rounded-full animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
