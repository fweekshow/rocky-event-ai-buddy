import { Github, Twitter, ExternalLink } from "lucide-react";
import rockyMascot from "@/assets/rocky-mascot.jpg";

const Footer = () => {
  const links = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Treasure Hunt", href: "#treasure-hunt" },
      { name: "Token", href: "#token" },
    ],
    resources: [
      { name: "Base.org", href: "https://base.org", external: true },
      { name: "Base Batches", href: "#", external: true },
      { name: "Documentation", href: "#" },
    ],
    social: [
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "GitHub", icon: Github, href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                <img 
                  src={rockyMascot} 
                  alt="Rocky Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display text-2xl font-bold">Rocky</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Your AI Event Assistant — Born on Base. Making event management effortless through AI-powered conversations.
            </p>
            <div className="flex gap-4">
              {links.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>Built on Base with ❤️ by the Rocky team</p>
            <p>© 2025 Rocky. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;