import CareerHero from "../components/CareerHero";
import ApplicationPanel from "../components/ApplicationPanel";

export default function Careers() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Transparent navbar layered above the hero */}
      
      <div style={{ paddingTop: "3rem" }} className="w-full" />

      {/* Background card with image, overlay, rounded edges */}
      <div className="relative w-[90%] max-w-6xl min-h-[70vh] flex flex-col justify-center items-center rounded-3xl overflow-hidden shadow-xl mt-12 mb-12 mx-auto">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-md" />

        {/* Foreground content */}
        <div className="relative w-full flex flex-col items-center justify-center py-20">
          <CareerHero />
          <ApplicationPanel />
        </div>
      </div>

      
    </main>
  );
}