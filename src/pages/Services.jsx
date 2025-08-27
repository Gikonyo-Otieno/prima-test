import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import CardPanel from "../components/CardPanel";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-neutral-100">
      <Navbar />
      {/* Add padding below navbar */}
      <div style={{ paddingTop: "3rem" }} className="w-full" />
      {/* Background card with image, overlay, rounded edges */}
      <div className="relative w-[90%] max-w-6xl min-h-[70vh] flex flex-col justify-center items-center rounded-3xl overflow-hidden shadow-xl mt-12 mb-12">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-md" />
        <div className="relative w-full flex flex-col items-center justify-center py-20">
          <HeroText />
        </div>
        <CardPanel />
      </div>
      <Footer />
    </section>
  );
}