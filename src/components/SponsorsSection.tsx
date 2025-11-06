import { Zap, Megaphone, DollarSign, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const SponsorsSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Join Group via Quick Action",
      description: "Sponsors can instantly join attendee groups with one click and start engaging.",
      videoUrl: "https://placeholder.com/video1.mp4",
    },
    {
      icon: Megaphone,
      title: "Broadcast via /broadcast Command",
      description: "Send messages or promotions directly using the /broadcast command to reach attendees.",
      videoUrl: "https://placeholder.com/video2.mp4",
    },
    {
      icon: DollarSign,
      title: "Broadcast Action (Paid Feature)",
      description: "Promote offers or announcements using a paid broadcast for maximum visibility.",
      videoUrl: "https://placeholder.com/video3.mp4",
    },
    {
      icon: Target,
      title: "Sponsor Treasure Hunt Task",
      description: "Sponsor a treasure hunt challenge that requires attendees to visit their booth.",
      videoUrl: "https://placeholder.com/video4.mp4",
    },
  ];

  return (
    <section id="sponsors" className="py-20 sm:py-32 relative bg-gradient-to-br from-secondary/5 via-background to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-secondary">
            For Sponsors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engage attendees and boost your brand visibility.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-16 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-secondary/10">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>

                {/* Video Placeholder */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[9/16] max-w-[320px] mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center bg-muted">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-secondary" />
                        </div>
                        <p className="text-sm text-muted-foreground">Demo Video</p>
                      </div>
                    </div>
                    {/* Uncomment when videos are ready */}
                    {/* <video
                      className="w-full h-full object-cover"
                      src={feature.videoUrl}
                      controls
                      preload="metadata"
                    /> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
            Join as a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
