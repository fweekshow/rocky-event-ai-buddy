import { Button } from "@/components/ui/button";
import rockyMascot from "@/assets/rocky-mascot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>
    
      {/* Floating blur circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
    
      {/* Main content */}
      <div className="relative z-10 mx-auto px-6 lg:px-12 max-w-[1600px] py-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        
        {/* Text: Left side */}
        <div className="flex-1 animate-fade-in">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your AI Event Copilot
            <span className="block gradient-text mt-2">Born on Base</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Chat. Organize. Explore<br />
            Turning every event into a connected experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-11 px-8 py-6 glow-effect hover:bg-primary/90 hover:scale-105 transition-transform">
              For Attendees
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground h-11 px-8 py-6 hover:bg-secondary/80 hover:scale-105 transition-transform">
              For Sponsors
            </button>
          </div>
        </div>
    
        {/* Image: Right side */}
        <div className="flex-1 flex justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl animate-glow"></div>
            <img 
              src="/assets/rocky-mascot-6mUwtAy1.jpg" 
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
