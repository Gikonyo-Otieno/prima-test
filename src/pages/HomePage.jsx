import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ExpandWorkforce from "../components/ExpandWorkforce";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Transparent navbar layered above the hero */}
      <Navbar />

      {/* Hero with dark smoky background */}
      <Hero />

      {/* Overlapping feature panel */}
      <Features />
      <ExpandWorkforce />
    </main>
  );
}