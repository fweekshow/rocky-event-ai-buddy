const About = () => {
  const timeline = [
    {
      title: "Base Hackathon",
      description: "Rocky was born during the Base Hackathon, where innovation meets blockchain technology.",
      icon: "🚀"
    },
    {
      title: "Base Basecamp",
      description: "Successfully deployed at Base Basecamp, helping organize and manage events seamlessly.",
      icon: "⛺"
    },
    {
      title: "Top 40 Builder",
      description: "Recognized by Base Batches as one of the Top 40 Builders in the ecosystem.",
      icon: "🏆"
    },
    {
      title: "DevConnect Argentina",
      description: "Now launching at DevConnect Argentina, bringing AI-powered event management to the world.",
      icon: "🌎"
    }
  ];

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Rocky's Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a hackathon project to a recognized builder on Base — Rocky's evolution is just beginning.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent hidden sm:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex gap-6 sm:gap-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center text-3xl glow-effect z-10">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105">
                      <h3 className="font-display text-2xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
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

export default About;