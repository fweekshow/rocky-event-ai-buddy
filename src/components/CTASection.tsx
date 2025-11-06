import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Join Rocky's Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From Base Basecamp to DevConnect — be part of the next generation of AI-powered event management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Card 1 */}
            <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors glow-effect">
                  <Trophy className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Join the Treasure Hunt</h3>
              <p className="text-muted-foreground mb-6">
                Participate in Rocky's treasure hunt at DevConnect Argentina. Complete challenges, earn points, and win exclusive rewards.
              </p>
              <Button className="w-full gap-2 group-hover:gap-4 transition-all glow-effect">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Card 2 */}
            <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <MessageCircle className="w-7 h-7 text-secondary" />
                </div>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Follow on Base Batches</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with Rocky's development and join the Base builder community. Connect with other innovators building on Base.
              </p>
              <Button variant="outline" className="w-full gap-2 group-hover:gap-4 transition-all border-primary/50 hover:bg-primary/10">
                Follow Rocky
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground mb-4">Questions? Want to integrate Rocky at your event?</p>
            <Button variant="ghost" className="gap-2 hover:text-primary transition-colors">
              Contact the Team
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;