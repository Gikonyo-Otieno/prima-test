// src/components/ChooseCarer.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* Arrow icon */
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

/* Data (placeholders you can change later) */
const ALL_CARDS = [
  {
    name: "Ava Patel",
    role: "Nurse — Mumbai, India",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    bio: "Experienced community nurse specialising in elderly care and wound management.",
    qualification: "RN (placeholder)",
    experience: "8 years (placeholder)",
    languages: "English, Hindi (placeholder)",
    availability: "Weekdays (placeholder)",
    location: "Nairobi (placeholder)",
  },
  {
    name: "Liam Smith",
    role: "Doctor — London, UK",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    bio: "General practitioner with 10+ years experience in home visits and chronic care.",
    qualification: "MBBS (placeholder)",
    experience: "12 years (placeholder)",
    languages: "English (placeholder)",
    availability: "Mon-Fri (placeholder)",
    location: "Nairobi (placeholder)",
  },
  {
    name: "Sophia Chen",
    role: "Therapist — Beijing, China",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Physiotherapist focused on post-op rehabilitation and mobility restoration.",
    qualification: "MSc Physio (placeholder)",
    experience: "6 years (placeholder)",
    languages: "English, Mandarin (placeholder)",
    availability: "Flexible (placeholder)",
    location: "Nairobi (placeholder)",
  },
  {
    name: "Noah Johnson",
    role: "Paramedic — Sydney, Australia",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Emergency response paramedic now offering home urgent care support.",
    qualification: "Paramedic Cert (placeholder)",
    experience: "10 years (placeholder)",
    languages: "English (placeholder)",
    availability: "On-call (placeholder)",
    location: "Nairobi (placeholder)",
  },
  {
    name: "Emma Müller",
    role: "Surgeon — Berlin, Germany",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    bio: "Specialist surgeon providing surgical follow-ups and consults.",
    qualification: "MD (placeholder)",
    experience: "15 years (placeholder)",
    languages: "English, German (placeholder)",
    availability: "By appointment (placeholder)",
    location: "Nairobi (placeholder)",
  },
  {
    name: "Lucas Rossi",
    role: "Caregiver — Rome, Italy",
    img: "https://randomuser.me/api/portraits/men/17.jpg",
    bio: "Experienced caregiver providing daily living assistance and companionship.",
    qualification: "Care Cert (placeholder)",
    experience: "7 years (placeholder)",
    languages: "English, Italian (placeholder)",
    availability: "Full-time (placeholder)",
    location: "Nairobi (placeholder)",
  },
  {
    name: "Mia Dubois",
    role: "Pediatrician — Paris, France",
    img: "https://randomuser.me/api/portraits/women/77.jpg",
    bio: "Pediatrician offering home visits and child health assessments.",
    qualification: "MD (placeholder)",
    experience: "9 years (placeholder)",
    languages: "English, French (placeholder)",
    availability: "Weekdays (placeholder)",
    location: "Nairobi (placeholder)",
  },
  {
    name: "Ethan Kim",
    role: "Radiologist — Seoul, South Korea",
    img: "https://randomuser.me/api/portraits/men/29.jpg",
    bio: "Radiology consultant available for remote results review and follow up planning.",
    qualification: "MD Radiology (placeholder)",
    experience: "11 years (placeholder)",
    languages: "English, Korean (placeholder)",
    availability: "Remote consults available (placeholder)",
    location: "Nairobi (placeholder)",
  },
  {
    name: "Olivia Garcia",
    role: "Dentist — Madrid, Spain",
    img: "https://randomuser.me/api/portraits/women/49.jpg",
    bio: "Dentist providing oral care and prosthetic consultations at home.",
    qualification: "DDS (placeholder)",
    experience: "8 years (placeholder)",
    languages: "English, Spanish (placeholder)",
    availability: "By appointment (placeholder)",
    location: "Nairobi (placeholder)",
  },
];

export default function ChooseCarer() {
  // filteredCards = null => show ALL_CARDS
  const [filteredCards, setFilteredCards] = useState(null);
  const cards = filteredCards || ALL_CARDS;

  // refs & layout state
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const modalRef = useRef(null);

  const [positions, setPositions] = useState([]);
  const [visibleWidth, setVisibleWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);

  const [startIdx, setStartIdx] = useState(0);
  const [offset, setOffset] = useState(0);

  const [visibleCount, setVisibleCount] = useState(1);

  // search & modal
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCard, setActiveCard] = useState(null);

  // pointer drag data for swipe
  const pointerData = useRef({ downX: 0, dragging: false, lastX: 0 });

  // measure & responsive
  useEffect(() => {
    const measure = () => {
      const cw = containerRef.current?.clientWidth || 0;
      setVisibleWidth(cw);
      const tw = trackRef.current?.scrollWidth || 0;
      setTotalWidth(tw);

      const w = window.innerWidth;
      let vc = 1;
      if (w >= 1024) vc = 3;
      else if (w >= 768) vc = 2;
      else vc = 1;
      setVisibleCount(vc);

      const pos = cardRefs.current.map((el) => (el ? Math.round(el.offsetLeft) : 0));
      setPositions(pos);

      // keep start index valid
      setStartIdx((prev) => {
        const maxStart = Math.max(pos.length - vc, 0);
        return Math.max(0, Math.min(prev, maxStart));
      });
    };

    measure();
    const t = setTimeout(measure, 60);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [cards.length]);

  // snap offset when startIdx or positions change
  useEffect(() => {
    if (!positions.length) {
      setOffset(0);
      return;
    }
    const target = positions[startIdx] || 0;
    const maxOffset = Math.max(totalWidth - visibleWidth, 0);
    setOffset(Math.max(0, Math.min(target, maxOffset)));
  }, [startIdx, positions, totalWidth, visibleWidth]);

  // search handler
  const handleSearch = (ev) => {
    if (ev) ev.preventDefault?.();
    const q = (searchTerm || "").trim().toLowerCase();
    if (!q) {
      setFilteredCards(null);
      setStartIdx(0);
      return;
    }

    const matches = ALL_CARDS.filter(
      (c) => c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q)
    );

    if (matches.length === 1) {
      setFilteredCards(null);
      setActiveCard(matches[0]); // open modal for single match
    } else {
      setFilteredCards(matches);
      setStartIdx(0);
    }
  };

  const clearFilter = () => {
    setFilteredCards(null);
    setSearchTerm("");
    setStartIdx(0);
  };

  // open card modal (also closes filter so modal shows canonical card)
  const handleOpenCard = (card) => {
    setFilteredCards(null);
    setActiveCard(card);
  };

  // pagination / segments
  const segments = Math.max(cards.length - visibleCount + 1, 1);
  const leftDisabled = startIdx <= 0;
  const rightDisabled = startIdx >= segments - 1;
  const handlePrev = () => setStartIdx((s) => Math.max(0, s - 1));
  const handleNext = () => setStartIdx((s) => Math.min(s + 1, segments - 1));

  // pointer-based swipe (prev/next if threshold)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let pointerId = null;

    const getClientX = (e) =>
      e.clientX ?? (e.touches && e.touches[0] && e.touches[0].clientX) ?? 0;

    const onPointerDown = (e) => {
      const x = getClientX(e);
      pointerData.current.downX = x;
      pointerData.current.lastX = x;
      pointerData.current.dragging = true;
      pointerId = e.pointerId ?? null;
      try { el.setPointerCapture?.(pointerId); } catch (err) {}
    };

    const onPointerMove = (e) => {
      if (!pointerData.current.dragging) return;
      pointerData.current.lastX = getClientX(e);
      // We deliberately do NOT move the track live to keep behavior simple & robust.
    };

    const onPointerUp = (e) => {
      if (!pointerData.current.dragging) return;
      pointerData.current.dragging = false;
      const upX = getClientX(e);
      const dx = upX - pointerData.current.downX;
      const threshold = 50;
      if (dx > threshold) {
        handlePrev();
      } else if (dx < -threshold) {
        handleNext();
      }
      pointerId = null;
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    el.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positions, visibleCount, cards.length]);

  // modal close & accessibility
  useEffect(() => {
    if (!activeCard) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setActiveCard(null); };
    const onPointer = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setActiveCard(null);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
      document.body.style.overflow = prev;
    };
  }, [activeCard]);

  // reset refs when cards change
  useEffect(() => { cardRefs.current = []; }, [cards.length]);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT: Search */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Quickly find your medical partner
          </h2>
          <p className="text-neutral-700 mb-6 max-w-xl">
            Search by name, specialisation or city.
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); handleSearch(e); }}
            className="bg-neutral-50 rounded-2xl p-6 shadow-sm border border-neutral-200"
          >
            <label htmlFor="search" className="text-sm font-medium text-neutral-600 mb-2 block">
              Search for a Nurse, Caregiver or Specialist
            </label>

            <div className="flex gap-3 items-center mt-2">
              <input
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleSearch(e); }}
                type="text"
                placeholder="Type a name, role or city..."
                className="flex-1 px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-red-300 focus:outline-none"
                aria-label="Search carers"
              />

              <button
                type="submit"
                onClick={handleSearch}
                className="inline-flex items-center gap-2 rounded-xl bg-red-700 hover:bg-black text-white px-4 py-3 font-medium transition-colors duration-200"
                aria-label="Search"
              >
                Search
                <ArrowRight />
              </button>
            </div>

            <div className="flex gap-2 mt-3 items-center">
              <button
                type="button"
                onClick={clearFilter}
                className="text-sm text-neutral-600 underline"
              >
                Clear
              </button>
              <div className="text-xs text-neutral-500 ml-auto">{cards.length} result{cards.length !== 1 ? "s" : ""}</div>
            </div>
          </form>

          <div className="mt-6 text-sm text-neutral-600">
            Tip: Try full name for an exact match. 
          </div>
        </div>

        {/* RIGHT: Carousel */}
        <div className="md:w-1/2 w-full">
          <div ref={containerRef} className="relative overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 transition-transform duration-300"
              style={{
                transform: `translateX(-${offset}px)`,
                padding: "8px",
              }}
            >
              {cards.map((card, idx) => (
                <button
                  key={card.name + idx}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  onClick={() => handleOpenCard(card)}
                  className="bg-white/80 rounded-xl border border-neutral-200 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-red-200 transition-transform duration-200 p-5 text-left flex-shrink-0"
                  style={{
                    minWidth: 260,
                    maxWidth: 320,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                  aria-label={`Open profile for ${card.name}`}
                >
                  <div className="flex items-center gap-4 w-full">
                    <img src={card.img} alt={card.name} className="w-20 h-20 rounded-lg object-cover shadow-sm" />
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-neutral-900">{card.name}</div>
                      <div className="text-sm text-neutral-600 mt-1">{card.role}</div>
                      {card.location && <div className="text-xs text-neutral-500 mt-2">{card.location}</div>}
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-neutral-700 line-clamp-3">{card.bio}</p>

                  <div className="mt-auto w-full flex items-center justify-end">
                    <span className="text-sm text-red-600 font-semibold">Read more</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CONTROLS — moved below the cards so they don't overlay */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                disabled={leftDisabled}
                aria-label="Previous"
                className={`rounded-full p-2 bg-neutral-900 text-white shadow ${leftDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-neutral-700"}`}
              >
                <ArrowRight direction="left" />
              </button>

              <div className="flex gap-2 items-center px-2">
                {Array.from({ length: segments }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setStartIdx(i)}
                    className={`rounded-full transition-all duration-300 ${i === startIdx ? "bg-red-500 w-6 h-1.5" : "bg-neutral-300 w-3 h-1.5"}`}
                    aria-label={`Go to set ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={rightDisabled}
                aria-label="Next"
                className={`rounded-full p-2 bg-neutral-900 text-white shadow ${rightDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-neutral-700"}`}
              >
                <ArrowRight direction="right" />
              </button>
            </div>

            {/* small helper */}
            
          </div>
        </div>
      </div>

      {/* PROFILE MODAL */}
      {activeCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden relative"
            style={{ borderRadius: 12 }}
          >
            <button
              onClick={() => setActiveCard(null)}
              className="absolute right-3 top-3 p-1 rounded-full hover:bg-neutral-100 focus:outline-none"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left visual */}
              <div className="md:w-1/2 w-full p-6 flex items-center justify-center bg-white">
                <img src={activeCard.img} alt={activeCard.name} className="w-48 h-48 object-cover rounded-md shadow-md" />
              </div>

              {/* Right content */}
              <div className="md:w-1/2 w-full p-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{activeCard.name}</h3>
                <div className="text-sm text-neutral-600 mb-3">{activeCard.role}</div>

                <p className="text-sm text-neutral-700 mb-4">{activeCard.bio}</p>

                <div className="space-y-2 text-sm text-neutral-700 mb-6">
                  <div><strong>Qualification:</strong> {activeCard.qualification}</div>
                  <div><strong>Experience:</strong> {activeCard.experience}</div>
                  <div><strong>Languages:</strong> {activeCard.languages}</div>
                  <div><strong>Availability:</strong> {activeCard.availability}</div>
                  <div><strong>Location:</strong> {activeCard.location}</div>
                </div>

                <div className="flex gap-3">
                  <Link
                    to="/services#customer-support"
                    onClick={() => setActiveCard(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-red-700 hover:bg-black text-white px-4 py-2 text-sm font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight />
                  </Link>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Local utilities */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
