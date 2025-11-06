import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import rockyMascot from "@/assets/rocky-mascot.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#attendees" },
    { name: "Base", href: "#base" },
    { name: "Presentation", href: "#presentation" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Clear active section when at the top (hero section)
      if (window.scrollY < 300) {
        setActiveSection("");
        return;
      }

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent",
        )}
      >
        <div className="mx-auto px-6 lg:px-12 max-w-[1600px]">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary group-hover:scale-110 transition-transform glow-effect">
                <img src={rockyMascot} alt="Rocky Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-xl font-bold hidden sm:block">Rocky</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "text-sm font-medium transition-colors relative py-2",
                    activeSection === item.href.slice(1)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                size="sm"
                className="glow-effect hover:scale-105 transition-transform"
                onClick={() => window.open("https://join.base.app/", "_blank")}
              >
                Explore Base App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col pt-24 pb-8 px-4">
          <div className="flex-1 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg font-medium transition-all",
                  activeSection === item.href.slice(1)
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-border">
            <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
              Meet Rocky
            </Button>
            <Button className="w-full glow-effect">Explore on Base</Button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;
