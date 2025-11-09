import Navbar from "@/components/Navbar";

const Deck = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="h-[calc(100vh-5rem)] sm:h-[calc(100vh-5rem)] px-4 sm:px-6 lg:px-12 py-6">
        <div className="h-full max-w-[1600px] mx-auto">
          <iframe
            loading="lazy"
            className="w-full h-full rounded-2xl border border-border shadow-lg"
            src="https://www.canva.com/design/DAGz8ZPplT8/usUPBi4UE_YLeqz0emIdOw/view?embed"
            allow="fullscreen"
          />
        </div>
      </main>
    </div>
  );
};

export default Deck;
