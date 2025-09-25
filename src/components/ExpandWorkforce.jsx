// src/components/ExpandWorkforce.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

const CARDS = [
  {
    name: "Ava Patel",
    role: "Nurse — Mumbai, India",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    bio: "Experienced community nurse specialising in elderly care and wound management.",
    location: "Nairobi",
  },
  {
    name: "Liam Smith",
    role: "Doctor — London, UK",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    bio: "General practitioner with 10+ years experience in home visits and chronic care.",
    location: "Nairobi",
  },
  {
    name: "Sophia Chen",
    role: "Therapist — Beijing, China",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Physiotherapist focused on post-op rehabilitation and mobility restoration.",
    location: "Nairobi",
  },
  {
    name: "Noah Johnson",
    role: "Paramedic — Sydney, Australia",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Emergency response paramedic now offering home urgent care support.",
    location: "Nairobi",
  },
];

export default function ExpandWorkforce() {
  const [startIdx, setStartIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIdx = Math.max(CARDS.length - visibleCount, 0);

  // modal navigation + escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setSelectedCard(null);
      if (e.key === "ArrowRight" && selectedCard) {
        const idx = CARDS.findIndex((c) => c.name === selectedCard.name);
        if (idx < CARDS.length - 1) setSelectedCard(CARDS[idx + 1]);
      }
      if (e.key === "ArrowLeft" && selectedCard) {
        const idx = CARDS.findIndex((c) => c.name === selectedCard.name);
        if (idx > 0) setSelectedCard(CARDS[idx - 1]);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedCard]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col lg:flex-row gap-10">
      {/* LEFT */}
      <div className="lg:w-1/2 w-full flex flex-col justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-snug">
            Quickly find your <br /> medical partner
          </h2>
          <p className="mt-4 text-neutral-700 text-lg leading-relaxed">
            Whether you are a patient looking for trusted care, or a nurse seeking
            meaningful opportunities, our platform helps you connect with the right people —
            faster and more reliably.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Patients card */}
          <div className="relative rounded-2xl shadow bg-gradient-to-tr from-neutral-200 to-neutral-100 flex flex-col justify-end h-[240px] flex-1">
            <span className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">
              Patients
            </span>
            <div className="px-5 pb-5">
              <div className="flex -space-x-2 mb-3">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-9 h-9 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-9 h-9 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/65.jpg" className="w-9 h-9 rounded-full border-2 border-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-900">Find a Nurse</h3>
              <a
                href="/services#customer-support"
                className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow hover:bg-neutral-700 transition"
              >
                Find a Nurse Today <ArrowRight />
              </a>
            </div>
          </div>

          {/* Nurses card */}
          <div className="relative rounded-2xl shadow flex flex-col justify-end h-[240px] flex-1 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <span className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">
              Nurses
            </span>
            <div className="relative z-10 px-5 pb-5">
              <div className="flex -space-x-2 mb-3">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-9 h-9 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-9 h-9 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/65.jpg" className="w-9 h-9 rounded-full border-2 border-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Join Our Network</h3>
              <a
                href="/services#customer-support"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black transition"
              >
                Work With Us <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: carousel */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center">
        <div className="flex gap-6 overflow-hidden">
          {CARDS.slice(startIdx, startIdx + visibleCount).map((card) => (
            <button
              key={card.name}
              onClick={() => setSelectedCard(card)}
              className="bg-white rounded-xl border border-neutral-200 shadow-md hover:shadow-lg transition-all duration-200 p-5 flex flex-col justify-between h-[240px] min-w-[260px] max-w-[300px] flex-shrink-0 text-left"
            >
              <div className="flex items-center gap-4">
                <img src={card.img} alt={card.name} className="w-16 h-16 rounded-lg object-cover shadow-sm" />
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900">{card.name}</h4>
                  <p className="text-sm text-neutral-600">{card.role}</p>
                  <p className="text-xs text-neutral-500">{card.location}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-neutral-700 line-clamp-3">{card.bio}</p>
              <div className="mt-3 text-right text-sm text-red-600 font-semibold">Read more</div>
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center gap-4 justify-center">
          <button
            onClick={() => setStartIdx((i) => Math.max(i - 1, 0))}
            disabled={startIdx <= 0}
            className={`rounded-full p-2 shadow ${startIdx <= 0 ? "bg-neutral-200 text-neutral-400" : "bg-black text-white hover:bg-red-600"}`}
          >
            <ArrowRight direction="left" />
          </button>
          <div className="flex gap-2 items-center">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setStartIdx(i)}
                className={`rounded-full transition-all duration-300 ${i === startIdx ? "bg-red-600 w-6 h-1.5" : "bg-neutral-300 w-3 h-1.5"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setStartIdx((i) => Math.min(i + 1, maxIdx))}
            disabled={startIdx >= maxIdx}
            className={`rounded-full p-2 shadow ${startIdx >= maxIdx ? "bg-neutral-200 text-neutral-400" : "bg-black text-white hover:bg-red-600"}`}
          >
            <ArrowRight direction="right" />
          </button>
        </div>
      </div>

      {/* MODAL (same style as ChooseCarer) */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-3xl w-full flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: image */}
            <div className="md:w-1/3 w-full">
              <img
                src={selectedCard.img}
                alt={selectedCard.name}
                className="w-full h-60 md:h-full object-cover"
              />
            </div>

            {/* Right: content */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold">{selectedCard.name}</h3>
                <p className="text-sm text-neutral-600">{selectedCard.role}</p>
                <p className="text-xs text-neutral-500 mb-4">{selectedCard.location}</p>
                <p className="text-neutral-700 leading-relaxed">{selectedCard.bio}</p>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedCard(null)}
                  className="px-4 py-2 rounded-lg bg-neutral-200 text-neutral-800 hover:bg-neutral-300 transition"
                >
                  Close
                </button>
                <Link
                  to="/services#customer-support"
                  className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-black transition"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
