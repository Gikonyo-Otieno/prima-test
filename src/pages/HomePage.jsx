
import Hero from "../components/Hero";
import Features from "../components/Features";
import ExpandWorkforce from "../components/ExpandWorkforce";
import Carousel from "../components/Carousel";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-white relative pt-12" >


      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <Carousel />
      </div>
      {/* Hero with dark smoky background */}
      
      <Hero />

      {/* Overlapping feature panel */}
      <Features />
      <ExpandWorkforce />
      
      

  

    </main>
  );
}