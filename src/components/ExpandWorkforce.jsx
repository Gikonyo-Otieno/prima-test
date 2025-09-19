import React, { useState, useEffect } from "react";

function ArrowRight({ className = "", direction = "right" }) {
  return (
    <svg
      className={`w-4 h-4 ${className} ${direction === "left" ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14"></path>
      <path d="M13 6l6 6-6 6"></path>
    </svg>
  );
}

const cards = [
  { name: "Ava Patel", role: "Nurse, Mumbai, India", img: "https://randomuser.me/api/portraits/women/21.jpg" },
  { name: "Liam Smith", role: "Doctor, London, UK", img: "https://randomuser.me/api/portraits/men/34.jpg" },
  { name: "Sophia Chen", role: "Therapist, Beijing, China", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Noah Johnson", role: "Paramedic, Sydney, Australia", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Emma Müller", role: "Surgeon, Berlin, Germany", img: "https://randomuser.me/api/portraits/women/56.jpg" },
  { name: "Lucas Rossi", role: "Caregiver, Rome, Italy", img: "https://randomuser.me/api/portraits/men/17.jpg" },
  { name: "Mia Dubois", role: "Pediatrician, Paris, France", img: "https://randomuser.me/api/portraits/women/77.jpg" },
  { name: "Ethan Kim", role: "Radiologist, Seoul, South Korea", img: "https://randomuser.me/api/portraits/men/29.jpg" },
  { name: "Olivia Garcia", role: "Dentist, Madrid, Spain", img: "https://randomuser.me/api/portraits/women/49.jpg" },
];

export default function ExpandWorkforce() {
  const [startIdx, setStartIdx] = useState(0);

  // Responsive settings
  const [visibleCount, setVisibleCount] = useState(2.5);
  const [cardWidth, setCardWidth] = useState(270);
  const gap = 32;

  // update responsive values on resize
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;

      // Breakpoints (tune if you want slightly different behaviour)
      if (w >= 1280) {
        setVisibleCount(2.5);
        setCardWidth(270);
      } else if (w >= 1024) {
        setVisibleCount(2.2);
        setCardWidth(270);
      } else if (w >= 768) {
        setVisibleCount(1.6);
        setCardWidth(270);
      } else {
        // small screens: show ~1 card with a small peek of the next
        setVisibleCount(1.05);
        // make card width relative to viewport on tiny devices so it fits nicely
        const computed = Math.min(320, Math.max(240, Math.floor(w * 0.78)));
        setCardWidth(computed);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Ensure startIdx remains valid whenever visibleCount changes
  useEffect(() => {
    const maxIdx = Math.max(cards.length - Math.ceil(visibleCount), 0);
    setStartIdx((prev) => Math.min(prev, maxIdx));
  }, [visibleCount]);

  // Derived values
  const containerWidth = Math.round(cardWidth * visibleCount + gap * (visibleCount - 1));
  const maxIdx = Math.max(cards.length - Math.ceil(visibleCount), 0);
  const visibleCards = cards.slice(startIdx, startIdx + Math.ceil(visibleCount) + 1);
  const segments = Math.max(cards.length - Math.floor(visibleCount) + 1, 1);

  // Handlers
  const handlePrev = () => setStartIdx((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setStartIdx((prev) => Math.min(prev + 1, maxIdx));

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row bg-white font-sans overflow-hidden">
      {/* Left panel */}
      <div className="flex-1 flex flex-col px-6 md:px-12 py-8 lg:py-10 bg-white min-h-0 min-w-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight text-black">
          Quickly find your <br /> medical partner.
        </h1>
        <p className="text-neutral-700 mb-8 text-base max-w-xl">
          Whether you are a patient looking for trusted care, or a nurse seeking meaningful opportunities,
          our platform helps you connect with the right people — faster and more reliably.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Patients card */}
          <div
            className="relative rounded-[20px] overflow-hidden min-w-[220px] shadow flex flex-col justify-end bg-gradient-to-tr from-neutral-200 to-neutral-100"
            style={{ height: "220px" }}
          >
            <span className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">
              Patients
            </span>
            <div className="relative z-10 px-5 pb-5">
              <div className="flex -space-x-2 mb-3">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-9 h-9 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-9 h-9 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="avatar" className="w-9 h-9 rounded-full border-2 border-white" />
              </div>
              <div className="text-lg font-semibold mb-3 text-neutral-900">Find a Nurse</div>
              <a
                href="/services#customer-support"
                className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow hover:bg-neutral-700 transition"
              >
                Find a Nurse Today <ArrowRight />
              </a>
            </div>
          </div>

          {/* Nurses card */}
          <div
            className="relative rounded-[20px] overflow-hidden min-w-[220px] shadow flex flex-col justify-end"
            style={{ height: "220px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&h=340&facepad=2"
              alt="nurse"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 rounded-[20px]" />
            <span className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">
              Nurses
            </span>
            <div className="relative z-10 px-5 pb-5">
              <div className="flex -space-x-2 mb-3">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-9 h-9 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-9 h-9 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="avatar" className="w-9 h-9 rounded-full border-2 border-white" />
              </div>
              <div className="text-lg font-semibold text-white mb-3">Join Our Network</div>
              <a
                href="/services#customer-support"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black hover:text-white transition"
              >
                Work With Us <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right-side carousel */}
      <div
        className="flex flex-col items-center justify-center bg-white px-4 py-8 lg:py-10 min-h-0"
        style={{ width: containerWidth + 24, overflow: "hidden" }} // +24 small breathing room
      >
        <div
          className="flex flex-row gap-8 items-center transition-transform duration-300"
          style={{
            width: containerWidth,
            overflow: "hidden",
          }}
        >
          {visibleCards.map((card, idx) => (
            <div
              key={startIdx + idx}
              className="relative rounded-[20px] overflow-hidden min-w-[270px] max-w-[270px] shadow flex flex-col justify-end bg-gradient-to-tr from-neutral-200 to-neutral-100"
              style={{ height: "260px" }}
            >
              <span className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">
                Professional
              </span>
              <div className="relative z-10 px-6 pb-6">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-white shadow"
                />
                <div className="text-lg font-semibold mb-1 text-neutral-900">{card.name}</div>
                <div className="text-sm text-neutral-600">{card.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows + segmented toggler */}
        <div className="flex flex-row items-center justify-center w-full mt-6 gap-4">
          <button
            onClick={handlePrev}
            disabled={startIdx === 0}
            className={`rounded-full p-2 bg-black shadow flex items-center justify-center transition ${
              startIdx === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
            }`}
            aria-label="Previous"
          >
            <ArrowRight direction="left" className="text-white" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: segments }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIdx(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === startIdx ? "bg-red-600 w-6 h-1.5" : "bg-neutral-300 w-3 h-1.5"
                }`}
                style={{
                  boxShadow: idx === startIdx ? "0 2px 8px rgba(0,0,0,0.10)" : undefined,
                  opacity: idx === startIdx ? 1 : 0.7,
                }}
                aria-label={`Go to cards ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={startIdx === maxIdx}
            className={`rounded-full p-2 bg-black shadow flex items-center justify-center transition ${
              startIdx === maxIdx ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
            }`}
            aria-label="Next"
          >
            <ArrowRight direction="right" className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
