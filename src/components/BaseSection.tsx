import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const BaseSection = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border-2 border-primary/50 rounded-3xl p-8 sm:p-12 lg:p-16 glow-effect animate-fade-in">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-primary/20 border border-primary/50 glow-effect">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <span className="font-display text-lg font-semibold">Built on Base</span>
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                Powered by Base
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Rocky is built on Base — the next generation Ethereum L2 blockchain. Leveraging cutting-edge technology to deliver fast, secure, and scalable event management solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="gap-2 glow-effect hover:scale-105 transition-transform"
                  onClick={() => window.open('https://base.org', '_blank')}
                >
                  Learn About Base
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 border-primary/50 hover:bg-primary/10 hover:scale-105 transition-transform"
                >
                  Base Batches Profile
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/30">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Recognized as Top 40 Builder in Base Batches</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
  </svg>
);

export default BaseSection;