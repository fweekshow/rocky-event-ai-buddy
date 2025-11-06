import { Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TokenSection = () => {
  const contractAddress = "0x09Fc6E5aD1a1e074D017Ec9A6D677F31f97Efb07";
  
  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success("Contract address copied to clipboard!");
  };

  return (
    <section className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              $ROCKY Token
            </h2>
            <p className="text-xl text-muted-foreground">
              The native token powering Rocky's ecosystem on Base blockchain.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="space-y-8">
              {/* Contract Address */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-3">
                  Contract Address
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 bg-muted/50 rounded-xl px-4 py-3 font-mono text-sm break-all border border-border">
                    {contractAddress}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={copyAddress}
                      className="hover:bg-primary/10 hover:border-primary/50 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => window.open(`https://basescan.org/token/${contractAddress}`, '_blank')}
                      className="hover:bg-primary/10 hover:border-primary/50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Token Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <div className="text-sm text-muted-foreground mb-2">Symbol</div>
                  <div className="font-display text-2xl font-bold text-secondary">$ROCKY</div>
                </div>
                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <div className="text-sm text-muted-foreground mb-2">Network</div>
                  <div className="font-display text-2xl font-bold">Base</div>
                </div>
                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <div className="text-sm text-muted-foreground mb-2">Standard</div>
                  <div className="font-display text-2xl font-bold">ERC-20</div>
                </div>
              </div>
              
              {/* Utility */}
              <div>
                <h3 className="font-display text-xl font-semibold mb-4">Token Utility</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">Reward participants in treasure hunts and event activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">Access premium features and exclusive event perks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">Enable seamless transactions within the Rocky ecosystem</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;