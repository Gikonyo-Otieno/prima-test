import React, { useState } from "react";

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

export default function ChooseCarer() {
  const [startIdx, setStartIdx] = useState(0);

  const visibleCount = 2.5;
  const cardWidth = 270;
  const gap = 32;
  const containerWidth = cardWidth * visibleCount + gap * (visibleCount - 1);
  const maxIdx = cards.length - Math.ceil(visibleCount);

  const handlePrev = () => setStartIdx((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setStartIdx((prev) => Math.min(prev + 1, maxIdx));

  const visibleCards = cards.slice(startIdx, startIdx + Math.ceil(visibleCount) + 1);
//   const isLastSlide = startIdx === maxIdx;
  const segments = cards.length - Math.floor(visibleCount) + 1;

  return (
    <section className="w-screen h-screen flex flex-row bg-white font-sans overflow-hidden">
      {/* LEFT SIDE - Search Feature */}
      <div className="flex-1 flex flex-col px-12 py-10 bg-white min-h-0 min-w-0">
        <h1 className="text-5xl font-bold mb-2 leading-tight tracking-tight" style={{ fontFamily: "inherit" }}>
          Quickly find your <br /> Medical partner.
        </h1>
        <p className="text-neutral-700 mb-8 text-base max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Search Box */}
        <div className="bg-neutral-100 rounded-[24px] shadow-lg p-6 flex flex-col justify-center w-full max-w-md h-[220px]">
          <label htmlFor="search" className="text-sm font-medium text-neutral-600 mb-2">
            Search for a Nurse, Caregiver or Specialist
          </label>
          <div className="flex items-center gap-2">
            <input
              id="search"
              type="text"
              placeholder="Type a name, role or city..."
              className="flex-1 px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="rounded-xl bg-red-600 text-white px-4 py-3 flex items-center gap-2 hover:bg-blue-700 transition">
              Search
              <ArrowRight className="rotate-60" />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Carousel */}
      <div
        className="flex flex-col items-center justify-center bg-white px-0 py-10 min-h-0"
        style={{ width: containerWidth, overflow: "hidden" }}
      >
        <div
          className="flex flex-row gap-8 items-center transition-transform duration-300"
          style={{ width: containerWidth, overflow: "hidden" }}
        >
          {visibleCards.map((card, idx) => (
            <div
              key={startIdx + idx}
              className="bg-neutral-300 rounded-2xl p-6 flex flex-col min-w-[270px] max-w-[270px] shadow relative"
              style={{ height: "290px" }}
            >
              <span className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                Get in touch <ArrowRight />
              </span>
              <img
                src={card.img}
                alt="avatar"
                className="w-32 h-32 rounded-xl object-cover mt-8 mb-4"
              />
              <div className="flex flex-col items-start w-full">
                <div className="text-base font-semibold mb-1 text-white">{card.name}</div>
                <div className="text-xs text-white mb-2">{card.role}</div>
              </div>
              <a href="#" className="text-xs text-white underline mt-auto self-end">
                Read More.
              </a>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="flex flex-row items-center justify-center w-full mt-6 gap-4">
          <button
            onClick={handlePrev}
            disabled={startIdx === 0}
            className={`rounded-full p-2 bg-neutral-900 shadow flex items-center justify-center transition ${
              startIdx === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-500"
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
                  idx === startIdx ? "bg-red-500 w-6 h-1.5" : "bg-neutral-300 w-3 h-1.5"
                }`}
                aria-label={`Go to cards ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={startIdx === maxIdx}
            className={`rounded-full p-2 bg-neutral-900 shadow flex items-center justify-center transition ${
              startIdx === maxIdx ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-500"
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