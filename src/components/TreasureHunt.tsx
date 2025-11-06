import { Trophy, Camera, CheckCircle, Gift } from "lucide-react";

const TreasureHunt = () => {
  const steps = [
    {
      icon: Camera,
      title: "Complete Daily Tasks",
      description: "Visit designated booths, take pictures, and participate in event activities.",
    },
    {
      icon: CheckCircle,
      title: "AI Validation",
      description: "Rocky uses advanced image recognition to validate your submissions instantly.",
    },
    {
      icon: Trophy,
      title: "Earn Points",
      description: "Collect points for each completed task and climb the leaderboard.",
    },
    {
      icon: Gift,
      title: "Win Rewards",
      description: "Redeem your points for exclusive prizes and Rocky tokens.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10"></div>

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-secondary/20 border border-secondary/50">
            <Trophy className="w-6 h-6 text-secondary" />
            <span className="font-display text-lg font-semibold text-secondary">Featured Game</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">The Treasure Hunt</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Turn your event experience into an exciting adventure. Explore, complete challenges, and earn rewards with
            Rocky's AI-powered treasure hunt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl p-6 hover:border-secondary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-display text-xl font-bold text-secondary border-2 border-secondary/50">
                {index + 1}
              </div>
              <div className="mb-4 inline-flex p-3 rounded-xl bg-secondary/10">
                <step.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30">
            <span>Powered by AI Image Recognition & Base Blockchain</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreasureHunt;
