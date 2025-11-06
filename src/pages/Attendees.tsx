import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Wifi, MessageSquare, Trophy, Users, Bell, Megaphone } from "lucide-react";

const Attendees = () => {
  const features = [
    {
      icon: Calendar,
      title: "Schedule",
      description: "View event schedule, sessions, and speaker list in one place.",
      videoUrl: "https://placeholder.com/video1.mp4",
    },
    {
      icon: Wifi,
      title: "Wi-Fi / Logistics Info",
      description: "Access Wi-Fi credentials, maps, and logistics details instantly.",
      videoUrl: "https://placeholder.com/video2.mp4",
    },
    {
      icon: MessageSquare,
      title: "AI Support Chat",
      description: "Ask event-related questions in natural language (e.g., 'Where is the keynote?').",
      videoUrl: "https://placeholder.com/video3.mp4",
    },
    {
      icon: Trophy,
      title: "Treasure Hunt – Play & Win Rewards",
      description: "Participate in the in-app treasure hunt for prizes and exclusive rewards.",
      videoUrl: "https://placeholder.com/video4.mp4",
    },
    {
      icon: Users,
      title: "Create Groups with Friends",
      description: "Attendees can form and join groups to chat and plan together.",
      videoUrl: "https://placeholder.com/video5.mp4",
    },
    {
      icon: Bell,
      title: "Register or Set Reminders",
      description: "Register for sessions or set reminders for upcoming events.",
      videoUrl: "https://placeholder.com/video6.mp4",
    },
    {
      icon: Megaphone,
      title: "Broadcast Action (Paid Feature)",
      description: "Post an announcement or message visible to all attendees with a small fee.",
      videoUrl: "https://placeholder.com/video7.mp4",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            For Attendees
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for an amazing event experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
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
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
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
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-primary" />
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Ready to enhance your event experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of attendees using Rocky to make the most of their events.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 glow-effect hover:scale-105 transition-transform">
            Join as an Attendee
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Attendees;
