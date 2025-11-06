import { Button } from "@/components/ui/button";
import rockyMascot from "@/assets/rocky-mascot.jpg";

const Hero = () => {
  return (
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Background gradients -->
      <div class="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      </div>
    
      <!-- Floating blur circles -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style="animation-delay: 1s;"></div>
    
      <!-- Main content -->
      <div class="relative z-10 px-6 lg:px-12 py-20 mx-2">
        <div class="flex flex-col lg:flex-row items-start justify-between gap-12">
          
          <!-- Text content -->
          <div class="flex-1 animate-fade-in">
            <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your AI Event Copilot
              <span class="block gradient-text mt-2">Born on Base</span>
            </h1>
            <p class="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Chat. Organize. Explore<br>
              Turning every event into a connected experience.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground h-11 rounded-md px-8 py-6 glow-effect hover:bg-primary/90 hover:scale-105 transition-transform">
                For Attendees
              </button>
              <button class="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground h-11 rounded-md px-8 py-6 hover:bg-secondary/80 hover:scale-105 transition-transform">
                For Sponsors
              </button>
            </div>
          </div>
    
          <!-- Image content -->
          <div class="flex-1 flex justify-end animate-fade-in" style="animation-delay: 0.2s;">
            <div class="relative">
              <div class="absolute inset-0 bg-secondary/30 rounded-full blur-3xl animate-glow"></div>
              <img src="/assets/rocky-mascot-6mUwtAy1.jpg" alt="Rocky - AI Event Assistant Mascot" class="relative w-64 sm:w-80 lg:w-96 h-auto rounded-full animate-float">
            </div>
          </div>
    
        </div>
      </div>
    </section>

  );
};

export default Hero;
