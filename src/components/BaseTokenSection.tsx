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
    <section id="base" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border-2 border-primary/50 rounded-3xl p-8 sm:p-12 lg:p-16 glow-effect animate-fade-in">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-primary/20 border border-primary/50 glow-effect">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <span className="font-display text-lg font-semibold">Built on Base</span>
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                Powered by Base
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Rocky is built on Base — the next generation Ethereum L2 blockchain. Leveraging cutting-edge technology to deliver fast, secure, and scalable event management solutions.
              </p>
            </div>
            
            {/* Token Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {/* Contract Address */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-3">
                  Contract Address
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 bg-muted/50 rounded-xl px-4 py-3 font-mono text-sm break-all border border-border">
                    {contractAddress}
                  </div>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={copyAddress}
                    className="hover:bg-primary/10 hover:border-primary/50 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Token Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <div className="text-sm text-muted-foreground mb-2">Symbol</div>
                  <div className="font-display text-2xl font-bold text-secondary">$ROCKY</div>
                </div>
                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <div className="text-sm text-muted-foreground mb-2">Network</div>
                  <div className="font-display text-2xl font-bold">Base</div>
                </div>
              </div>
              
              {/* Dexscreener Link */}
              <div className="flex justify-center pt-4">
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
