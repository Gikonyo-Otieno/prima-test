import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import Partners from "../components/Partners";

export default function About() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Navbar */}
      <Navbar />
      <div style={{ paddingTop: "3rem" }} className="w-full" />

      {/* Background image + overlay */}
      <div className="relative w-[90%] max-w-6xl min-h-[70vh] flex flex-col justify-center items-center rounded-3xl overflow-hidden shadow-xl mt-12 mb-12 mx-auto">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-md" />

        {/* Content inside */}
        <div className="relative w-full flex flex-col items-center justify-center py-16 px-6 space-y-12">
          <WhoWeAre />
          <WhatWeDo />
          <Partners />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}