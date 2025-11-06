import rockDotBlue from "@/assets/rock-dot-blue.png";
import rockDotYellow from "@/assets/rock-dot-yellow.png";
import rockDotOrange from "@/assets/rock-dot-orange.png";
import rockDotGreen from "@/assets/rock-dot-green.png";

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
    <section id="attendees" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Decorative Rock Dots */}
      <img 
        src={rockDotBlue} 
        alt="" 
        className="absolute top-[10%] left-[5%] w-10 h-10 opacity-40 animate-float hidden lg:block"
        style={{ animationDelay: "0.3s" }}
      />
      <img 
        src={rockDotYellow} 
        alt="" 
        className="absolute top-[25%] right-[8%] w-12 h-12 opacity-35 animate-float hidden lg:block"
        style={{ animationDelay: "1s" }}
      />
      <img 
        src={rockDotOrange} 
        alt="" 
        className="absolute bottom-[20%] left-[10%] w-11 h-11 opacity-40 animate-float hidden lg:block"
        style={{ animationDelay: "1.5s" }}
      />
      <img 
        src={rockDotGreen} 
        alt="" 
        className="absolute bottom-[10%] right-[15%] w-10 h-10 opacity-35 animate-float hidden lg:block"
        style={{ animationDelay: "0.7s" }}
      />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            For Attendees
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for an amazing event experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
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
              Watch how attendees navigate events seamlessly with Rocky
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendeesSection;
