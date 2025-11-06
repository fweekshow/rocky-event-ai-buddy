import { Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BaseTokenSection = () => {
  const contractAddress = "0x09Fc6E5aD1a1e074D017Ec9A6D677F31f97Efb07";
  const dexscreenerUrl = "https://dexscreener.com/base/0xb0c6aa493af21db11d709ef6fd4ded7a6fcc52cd23e8ee9c15c5ed0e42490ce4";
  
  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success("Contract address copied to clipboard!");
  };

  return (
    <section id="base" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5"></div>
      
      <div className="container relative mx-auto px-6 sm:px-8 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border-2 border-primary/50 rounded-3xl p-8 sm:p-10 glow-effect animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Left Side - Title */}
              <div className="lg:flex-1">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                  Powered by Base
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Rocky is built on Base — the next generation Ethereum L2 blockchain.
                </p>
              </div>
              
              {/* Right Side - Badge */}
              <div className="lg:flex-shrink-0">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/20 border border-primary/50 glow-effect">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-display text-lg font-semibold">Built on Base</span>
                </div>
              </div>
            </div>
            
            {/* Token Info */}
            <div className="mt-8 space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {/* Symbol and Contract Address - Single Line */}
              <div className="flex flex-col md:flex-row gap-4 items-stretch">
                <div className="md:w-32 bg-muted/30 rounded-xl px-4 border border-border flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-secondary">$ROCKY</span>
                </div>
                <div className="flex-1 flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 bg-muted/50 rounded-xl px-4 py-3 font-mono text-sm break-all border border-border flex items-center">
                    {contractAddress}
                  </div>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={copyAddress}
                    className="hover:bg-primary/10 hover:border-primary/50 transition-colors self-start sm:self-stretch"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Dexscreener Link */}
              <div className="flex justify-center pt-2">
                <Button 
                  size="lg" 
                  className="gap-2 glow-effect hover:scale-105 transition-transform"
                  onClick={() => window.open(dexscreenerUrl, '_blank')}
                >
                  View on Dexscreener
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseTokenSection;
