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

  const visibleCount = 2.5;
  const cardWidth = 270;
  const gap = 32;
  const containerWidth = cardWidth * visibleCount + gap * (visibleCount - 1);

  const maxIdx = cards.length - Math.ceil(visibleCount);

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIdx((prev) => Math.min(prev + 1, maxIdx));
  };

  const visibleCards = cards.slice(startIdx, startIdx + Math.ceil(visibleCount) + 1);

  const segments = cards.length - Math.floor(visibleCount) + 1;

  return (
    <section className="w-screen h-screen flex flex-row bg-white font-sans overflow-hidden">
      {/* Left panel */}
      <div className="flex-1 flex flex-col px-12 py-10 bg-white min-h-0 min-w-0">
        <h1 className="text-5xl font-bold mb-4 leading-tight tracking-tight">
          Quickly find your <br /> medical partner.
        </h1>
        <p className="text-neutral-700 mb-10 text-base max-w-xl">
          Whether you are a patient looking for trusted care, or a nurse seeking
          meaningful opportunities, our platform helps you connect with the
          right people, faster and easier.
        </p>

        <div className="flex flex-row gap-8">
          {/* Patients card */}
          <div
            className="relative rounded-[24px] overflow-hidden min-w-[220px] shadow flex flex-col justify-end bg-gradient-to-tr from-neutral-200 to-neutral-100"
            style={{ height: "220px" }}
          >
            <span className="absolute top-5 left-5 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">
              Patients
            </span>
            <div className="relative z-10 px-6 pb-6">
              <div className="flex flex-row gap-2 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="avatar"
                  className="w-9 h-9 rounded-full"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="avatar"
                  className="w-9 h-9 rounded-full"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="avatar"
                  className="w-9 h-9 rounded-full"
                />
              </div>
              <div className="text-lg font-semibold mb-3 text-neutral-900">
                Find a Nurse
              </div>
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
          className="relative rounded-[24px] overflow-hidden min-w-[220px] shadow flex flex-col justify-end"
          style={{ height: "220px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=220&facepad=2"
            alt="nurse"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 rounded-[24px]"></div>
          <span className="absolute top-5 left-5 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">
            Nurses
          </span>
          <div className="relative z-10 px-6 pb-6">
            <div className="flex flex-row gap-2 mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar"
                className="w-9 h-9 rounded-full"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar"
                className="w-9 h-9 rounded-full"
              />
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="avatar"
                className="w-9 h-9 rounded-full"
              />
            </div>
            <div className="text-lg font-semibold text-white mb-3">
              Join Our Network
            </div>
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
              className="relative rounded-[24px] overflow-hidden min-w-[270px] max-w-[270px] shadow flex flex-col justify-end bg-gradient-to-tr from-neutral-200 to-neutral-100"
              style={{ height: "260px" }}
            >
              <span className="absolute top-5 left-5 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">
                Professional
              </span>
              <div className="relative z-10 px-6 pb-6">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <div className="text-lg font-semibold mb-1 text-neutral-900">
                  {card.name}
                </div>
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
                  idx === startIdx
                    ? "bg-red-500 w-6 h-1.5"
                    : "bg-neutral-300 w-3 h-1.5"
                }`}
                style={{
                  boxShadow:
                    idx === startIdx ? "0 2px 8px rgba(0,0,0,0.10)" : undefined,
                  opacity: idx === startIdx ? 1 : 0.7,
                }}
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
