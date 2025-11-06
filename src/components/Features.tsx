import { MessageSquare, Calendar, Radio, Map, Coins } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Smart Event Chat",
      description: "Chat naturally with Rocky in DMs or group chats to get instant answers about schedules, venues, and logistics."
    },
    {
      icon: Calendar,
      title: "Schedule & Group Management",
      description: "Stay organized with automated schedule updates and seamless group creation for attendees and organizers."
    },
    {
      icon: Radio,
      title: "Broadcast System",
      description: "Send important updates and announcements to all event participants instantly through Rocky."
    },
    {
      icon: Map,
      title: "Treasure Hunt Game",
      description: "Engage attendees with an AI-powered treasure hunt. Complete tasks, collect points, and win rewards."
    },
    {
      icon: Coins,
      title: "Rocky Token Integration",
      description: "Powered by $ROCKY on Base blockchain, enabling seamless rewards and transactions within events."
    }
  ];

  return (
    <section className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Core Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to make your event a success, powered by AI and blockchain technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors glow-effect">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;