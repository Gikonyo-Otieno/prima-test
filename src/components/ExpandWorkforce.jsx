import React, { useState } from "react";

function ArrowRight({ className = "", direction = "right" }) {
  // Arrow pointing right (3 o'clock) or left (9 o'clock)
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

// Diverse card data
const cards = [
  {
    name: "Ava Patel",
    role: "Nurse, Mumbai, India",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Liam Smith",
    role: "Doctor, London, UK",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Sophia Chen",
    role: "Therapist, Beijing, China",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Noah Johnson",
    role: "Paramedic, Sydney, Australia",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emma Müller",
    role: "Surgeon, Berlin, Germany",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "Lucas Rossi",
    role: "Caregiver, Rome, Italy",
    img: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    name: "Mia Dubois",
    role: "Pediatrician, Paris, France",
    img: "https://randomuser.me/api/portraits/women/77.jpg",
  },
  {
    name: "Ethan Kim",
    role: "Radiologist, Seoul, South Korea",
    img: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    name: "Olivia Garcia",
    role: "Dentist, Madrid, Spain",
    img: "https://randomuser.me/api/portraits/women/49.jpg",
  },
];

export default function ExpandWorkforce() {
  const [startIdx, setStartIdx] = useState(0);

  // Show 2.5 cards at a time
  const visibleCount = 2.5;
  const cardWidth = 270;
  const gap = 32;
  const containerWidth = cardWidth * visibleCount + gap * (visibleCount - 1);

  // Calculate max index so last card is fully visible
  const maxIdx = cards.length - Math.ceil(visibleCount);

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIdx((prev) => Math.min(prev + 1, maxIdx));
  };

  // Only show the cards that should be visible (including the half card)
  const visibleCards = cards.slice(startIdx, startIdx + Math.ceil(visibleCount) + 1);

  // For the last slide, show the last card fully and half of the previous one
  const isLastSlide = startIdx === maxIdx;

  // Segmented toggler logic
  const segments = cards.length - Math.floor(visibleCount) + 1;

  return (
    <section className="w-screen h-screen flex flex-row bg-white font-sans overflow-hidden">
      {/* Main content */}
      <div className="flex-1 flex flex-col px-12 py-10 bg-white min-h-0 min-w-0">
        <h1 className="text-5xl font-bold mb-2 leading-tight tracking-tight" style={{ fontFamily: "inherit" }}>
          Quickly find your <br /> Medical partner.
        </h1>
        <p className="text-neutral-700 mb-8 text-base max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-row gap-8">
          {/* Employees Card */}
          <div className="relative rounded-[24px] overflow-hidden min-w-[220px] shadow flex flex-col justify-end bg-neutral-100" style={{ height: "220px" }}>
            <div className="absolute inset-0 bg-neutral-300 rounded-[24px]"></div>
            <span className="absolute top-5 left-5 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">Patients</span>
            <div className="relative z-10 px-6 pb-6">
              <div className="flex flex-row gap-2 mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
              </div>
              <div className="text-lg font-semibold mb-2 text-neutral-900">Find a Nurse</div>
              <button className="rounded-full bg-white/80 px-3 py-2 text-base font-semibold text-neutral-700 shadow flex items-center">
                <ArrowRight />
              </button>
            </div>
          </div>
          {/* Contractor Card */}
          <div className="relative rounded-[24px] overflow-hidden min-w-[220px] shadow flex flex-col justify-end" style={{ height: "220px" }}>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=220&facepad=2" alt="contractor" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 rounded-[24px]"></div>
            <span className="absolute top-5 left-5 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">Nurses</span>
            <div className="relative z-10 px-6 pb-6">
              <div className="flex flex-row gap-2 mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
              </div>
              <div className="text-lg font-semibold text-white mb-2">Find a Patient</div>
              <button className="rounded-full bg-white/30 px-3 py-2 text-base font-semibold text-white shadow flex items-center">
                <ArrowRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Right cards carousel */}
      <div
        className="flex flex-col items-center justify-center bg-white px-0 py-10 min-h-0"
        style={{ width: containerWidth, overflow: "hidden" }}
      >
        {/* Cards */}
        <div
          className="flex flex-row gap-8 items-center transition-transform duration-300"
          style={{
            width: containerWidth,
            overflow: "hidden",
          }}
        >
          {visibleCards.map((card, idx) => {
            // For the last slide, show the last card fully and half of the previous one
            if (isLastSlide && idx === 0) {
              return (
                <div
                  key={startIdx + idx}
                  className="bg-neutral-300 rounded-2xl p-6 flex flex-col shadow relative"
                  style={{
                    height: "290px",
                    minWidth: `${cardWidth / 2}px`,
                    maxWidth: `${cardWidth / 2}px`,
                    opacity: 0.7,
                  }}
                >
                  <span className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    Get in touch <ArrowRight />
                  </span>
                  <img
                    src={card.img}
                    alt="avatar"
                    className="w-16 h-16 rounded-xl object-cover mt-8 mb-4"
                    style={{ marginLeft: 0 }}
                  />
                  <div className="flex flex-col items-start w-full">
                    <div className="text-base font-semibold mb-1 text-white">{card.name}</div>
                    <div className="text-xs text-white mb-2">{card.role}</div>
                  </div>
                  <a href="#" className="text-xs text-white underline mt-auto self-end">Read More.</a>
                </div>
              );
            }
            // For the last card, show it fully
            if (isLastSlide && idx === 1) {
              return (
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
                    style={{ marginLeft: 0 }}
                  />
                  <div className="flex flex-col items-start w-full">
                    <div className="text-base font-semibold mb-1 text-white">{card.name}</div>
                    <div className="text-xs text-white mb-2">{card.role}</div>
                  </div>
                  <a href="#" className="text-xs text-white underline mt-auto self-end">Read More.</a>
                </div>
              );
            }
            // For all other cards
            return (
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
                  style={{ marginLeft: 0 }}
                />
                <div className="flex flex-col items-start w-full">
                  <div className="text-base font-semibold mb-1 text-white">{card.name}</div>
                  <div className="text-xs text-white mb-2">{card.role}</div>
                </div>
                <a href="#" className="text-xs text-white underline mt-auto self-end">Read More.</a>
              </div>
            );
          })}
        </div>
        {/* Segmented toggler and arrows below carousel */}
        <div className="flex flex-row items-center justify-center w-full mt-6 gap-4">
          {/* Left arrow */}
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
          {/* Segmented toggler */}
          <div className="flex gap-2">
            {Array.from({ length: segments }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIdx(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === startIdx
                    ? "bg-red-500 w-6 h-1.5"
                    : "bg-neutral-300 w-3 h-1.5"
                }`}
                style={{
                  boxShadow: idx === startIdx ? "0 2px 8px rgba(0,0,0,0.10)" : undefined,
                  opacity: idx === startIdx ? 1 : 0.7,
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label={`Go to cards ${idx + 1}`}
              />
            ))}
          </div>
          {/* Right arrow */}
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