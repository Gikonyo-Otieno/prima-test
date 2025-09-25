
import Hero from "../components/Hero";
import Features from "../components/Features";
import ExpandWorkforce from "../components/ExpandWorkforce";
import Carousel from "../components/Carousel";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-white relative pt-12" >


      <div className="mt-[10px]">  {/* adjust this number */}
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