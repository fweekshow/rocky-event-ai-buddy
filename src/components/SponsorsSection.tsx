const SponsorsSection = () => {
  const sponsorFeatures = [
    {
      emoji: "🚀",
      title: "Quick Actions to Join Groups",
      description: "Invite attendees directly into your sponsor group chat with one tap.",
    },
    {
      emoji: "📢",
      title: "Broadcasts & Announcements",
      description: "Use the /broadcast command to share news, promotions, or demos instantly.",
    },
    {
      emoji: "💰",
      title: "Paid Broadcast Actions",
      description: "Amplify reach with premium broadcast slots or featured placements.",
    },
    {
      emoji: "🎯",
      title: "Sponsored Treasure Hunt Tasks",
      description:
        "Turn your booth into a quest — sponsor a Treasure Hunt task that drives attendees to visit and interact with your team.",
    },
  ];

  return (
    <section id="sponsors" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-secondary">
            For Sponsors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engage attendees and boost your brand visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
          {/* Features List */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {sponsorFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-all hover:scale-[1.02] animate-fade-in"
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

          {/* Demo Video - iPhone Mockup */}
          <div className="animate-fade-in sticky top-8" style={{ animationDelay: "0.2s" }}>
            <div className="flex justify-center">
              {/* iPhone Frame */}
              <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl" style={{ width: '320px' }}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>
                
                {/* Screen */}
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                  <video
                    src="/demo-video.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                
                {/* Side Button */}
                <div className="absolute -right-1 top-24 w-1 h-12 bg-black rounded-l"></div>
                <div className="absolute -left-1 top-20 w-1 h-8 bg-black rounded-r"></div>
                <div className="absolute -left-1 top-32 w-1 h-12 bg-black rounded-r"></div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              See how sponsors maximize engagement and ROI with Rocky
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
