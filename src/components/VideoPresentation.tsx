import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoPresentation = () => {
  return (
    <section id="presentation" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-secondary/5"></div>

      <div className="relative mx-auto px-6 lg:px-12 max-w-[1600px]">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Video Presentation</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our comprehensive presentation and explore our pitch deck.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Video */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-4">
                <video
                  src="https://res.cloudinary.com/dg5qvbxjp/video/upload/v1760661156/Basecamp_vid_ndzww8.mp4"
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                />
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-semibold mb-2">Basecamp Video</h3>
                <p className="text-sm text-muted-foreground">Our journey and vision for Rocky</p>
              </div>
            </div>
          </div>

          {/* Canva Embed */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="rounded-lg overflow-hidden bg-muted mb-4" style={{ height: "600px" }}>
                <iframe
                  loading="lazy"
                  className="w-full h-full"
                  src="https://www.canva.com/design/DAGz8ZPplT8/usUPBi4UE_YLeqz0emIdOw/view?embed"
                  allow="fullscreen"
                />
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-semibold mb-2">Pitch Deck</h3>
                <p className="text-sm text-muted-foreground mb-3">Explore our complete presentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPresentation;
