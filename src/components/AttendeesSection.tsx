const AttendeesSection = () => {
  const attendeeFeatures = [
    {
      emoji: "📅",
      title: "Smart Scheduling",
      description: "Plan your event flow with AI-powered reminders and real-time updates.",
    },
    {
      emoji: "📡",
      title: "Instant Info & Logistics",
      description: "Ask anything — from Wi-Fi passwords to venue directions — in natural language.",
    },
    {
      emoji: "🧭",
      title: "AI Event Support",
      description: "Rocky answers all event-related questions through natural language queries.",
    },
    {
      emoji: "👥",
      title: "Create or Join Groups",
      description: "Form group chats with friends, teams, or shared interests — all within Base App.",
    },
    {
      emoji: "🔔",
      title: "Registration & Reminders",
      description: "Sign up for sessions, set reminders, and never miss what matters.",
    },
    {
      emoji: "📣",
      title: "Broadcasts",
      description:
        "Receive real-time announcements, speaker highlights, and event-wide updates — seamlessly delivered through Rocky.",
    },
  ];

  return (
    <section id="attendees" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            For Attendees
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for an amazing event experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
          {/* Features List */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {attendeeFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${0.15 + index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {feature.emoji}
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Video */}
          <div className="animate-fade-in sticky top-8" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-muted flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="relative z-10 text-center p-8">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-lg font-semibold text-foreground mb-2">Attendee Features Demo</p>
                  <p className="text-sm text-muted-foreground">Video placeholder - Replace with actual demo</p>
                </div>
                {/* Placeholder for actual video embed */}
                {/* <iframe
                  src="YOUR_VIDEO_URL_HERE"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe> */}
              </div>
              <div className="p-4 bg-card/50">
                <p className="text-sm text-muted-foreground text-center">
                  Watch how attendees navigate events seamlessly with Rocky
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendeesSection;
