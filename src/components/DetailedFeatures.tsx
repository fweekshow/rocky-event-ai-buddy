const DetailedFeatures = () => {
  const attendeeFeatures = [
    {
      emoji: "📅",
      title: "Smart Scheduling",
      description: "Plan your event flow with AI-powered reminders and real-time updates."
    },
    {
      emoji: "📡",
      title: "Instant Info & Logistics",
      description: "Ask anything — from Wi-Fi passwords to venue directions — in natural language."
    },
    {
      emoji: "🧭",
      title: "AI Event Support",
      description: "Rocky answers all event-related questions through natural language queries."
    },
    {
      emoji: "🪙",
      title: "Treasure Hunt — Play & Win",
      description: "Join live AI-driven games and challenges that lead you across booths, venues, and new connections."
    },
    {
      emoji: "👥",
      title: "Create or Join Groups",
      description: "Form group chats with friends, teams, or shared interests — all within Base App."
    },
    {
      emoji: "🔔",
      title: "Registration & Reminders",
      description: "Sign up for sessions, set reminders, and never miss what matters."
    },
    {
      emoji: "📣",
      title: "Broadcasts",
      description: "Receive real-time announcements, speaker highlights, and event-wide updates — seamlessly delivered through Rocky."
    }
  ];

  const sponsorFeatures = [
    {
      emoji: "🚀",
      title: "Quick Actions to Join Groups",
      description: "Invite attendees directly into your sponsor group chat with one tap."
    },
    {
      emoji: "📢",
      title: "Broadcasts & Announcements",
      description: "Use the /broadcast command to share news, promotions, or demos instantly."
    },
    {
      emoji: "💰",
      title: "Paid Broadcast Actions",
      description: "Amplify reach with premium broadcast slots or featured placements."
    },
    {
      emoji: "🎯",
      title: "Sponsored Treasure Hunt Tasks",
      description: "Turn your booth into a quest — sponsor a Treasure Hunt task that drives attendees to visit and interact with your team."
    }
  ];

  return (
    <section className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Features of Rocky
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools for attendees and sponsors to make the most of every event.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* For Attendees */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="mb-8">
              <h3 className="font-display text-3xl font-bold text-primary mb-2">
                For Attendees
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              {attendeeFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {feature.emoji}
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-semibold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Sponsors */}
          <div className="animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="mb-8">
              <h3 className="font-display text-3xl font-bold text-secondary mb-2">
                For Sponsors
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-secondary to-secondary/60 rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              {sponsorFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-all hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${0.25 + index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {feature.emoji}
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-semibold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
