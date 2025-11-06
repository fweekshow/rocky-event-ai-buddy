const About = () => {
  const timeline = [
    {
      title: "Base Hackathon",
      description: "Rocky was born during the Base Hackathon, where innovation meets blockchain technology.",
      icon: "🚀",
    },
    {
      title: "Basecamp 002",
      description: "Successfully deployed at Base's Basecamp 002, helping organize and manage events seamlessly.",
      icon: "⛺",
    },
    {
      title: "Top 40 Builder",
      description: "Recognized by Base Batches as one of the Top 40 Builders in the ecosystem.",
      icon: "🏆",
    },
    {
      title: "DevConnect Argentina",
      description: "Now launching at DevConnect Argentina, bringing AI-powered event management to the world.",
      icon: "🌎",
    },
  ];

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="relative mx-auto px-6 lg:px-12 max-w-[2000px]">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Rocky's Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a hackathon project to a recognized builder on Base — Rocky's evolution is just beginning.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="relative">
            {/* Curved Path Timeline - Desktop */}
            <div className="hidden lg:block relative" style={{ minHeight: '600px' }}>
              {/* Curved Dotted Path */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
                <path
                  d="M 100,300 Q 250,150 400,300 T 700,300 Q 850,450 1100,300"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="12,8"
                  opacity="0.6"
                />
              </svg>

              {/* Timeline Items */}
              <div className="relative grid grid-cols-4 gap-8">
                {timeline.map((item, index) => {
                  const isUp = index % 2 === 0;
                  const positions = [
                    { x: '8%', y: '50%' },
                    { x: '33%', y: '50%' },
                    { x: '58%', y: '50%' },
                    { x: '83%', y: '50%' }
                  ];
                  
                  return (
                    <div
                      key={index}
                      className="relative animate-fade-in"
                      style={{ 
                        animationDelay: `${index * 0.15}s`,
                      }}
                    >
                      {/* Content Card */}
                      <div 
                        className="relative"
                        style={{
                          marginTop: isUp ? '0' : '280px',
                        }}
                      >
                        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105 shadow-lg">
                          <h3 className="font-display text-xl font-semibold mb-3 text-center">{item.title}</h3>
                          <p className="text-muted-foreground text-sm text-center leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Icon on Path */}
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 z-10"
                        style={{
                          top: isUp ? 'calc(100% + 60px)' : '60px',
                        }}
                      >
                        {/* Connecting Line */}
                        <div 
                          className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-primary/50"
                          style={{
                            height: '60px',
                            top: isUp ? '-60px' : '80px',
                          }}
                        />
                        
                        <div className="w-20 h-20 rounded-full bg-card border-4 border-primary flex items-center justify-center text-4xl glow-effect shadow-lg">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Vertical Timeline - Mobile/Tablet */}
            <div className="lg:hidden relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex gap-6 sm:gap-8 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center text-3xl glow-effect z-10">
                      {item.icon}
                    </div>

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
      </div>
    </section>
  );
};

export default About;
