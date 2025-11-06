import { Button } from "@/components/ui/button";
import rockyMascot from "@/assets/rocky-mascot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>
    

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
    
      
      <div>
        <div className="relative z-10 mx-auto px-6 lg:px-12 max-w-[1600px] py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          
          <div className="flex-1 animate-fade-in min-w-0">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your AI Event Copilot
              <span className="block gradient-text mt-2">Born on Base</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Chat. Organize. Explore<br />
              Turning every event into a connected experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-primary-foreground h-11 px-8 py-6 glow-effect hover:bg-primary/90 hover:scale-105 transition-transform">
                For Attendees
              </Button>
              <Button className="bg-secondary text-secondary-foreground h-11 px-8 py-6 hover:bg-secondary/80 hover:scale-105 transition-transform">
                For Sponsors
              </Button>
            </div>
          </div>
    
          <div className="flex-1 flex justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl animate-glow" />
              <img src={rockyMascot} alt="Rocky - AI Event Assistant Mascot" className="relative w-64 sm:w-80 lg:w-96 h-auto rounded-full animate-float" />
            </div>
          </div>
        </div>
      <div/>
      </div>
    </section>

  );
};

export default Hero;
