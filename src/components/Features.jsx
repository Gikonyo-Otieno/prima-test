import { useState, useEffect, useRef } from "react";

function ArrowRight({ className = "", direction = "right" }) {
  return (
    <svg
      className={`w-4 h-4 ${className} ${
        direction === "left" ? "rotate-180" : ""
      }`}
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

const slides = [
  {
    title: "Transform your healthcare experience.",
    description:
      "Personalized care plans designed to match your lifestyle and health needs — supported by our trusted caregivers and specialists.",
    pills: [
      [
        { name: "Floyd Miles", role: "Psychology Specialist", fade: "opacity-60" },
        { name: "Brooklyn Simmons", role: "Pediatric Nurse", fade: "opacity-80" },
        { name: "Eleanor Pena", role: "ICU Nurse.", fade: "opacity-90" },
        { name: "Savannah Nguyen", role: "Medical Assistant", fade: "opacity-100" },
      ],
      [
        { name: "Kristin Watson", role: "Trauma Nurse", fade: "opacity-60" },
        { name: "Ronald Richards", role: "Obstetrician", fade: "opacity-80" },
        { name: "Esther Howard", role: "Physiotherapist", fade: "opacity-90" },
        { name: "Courtney Henry", role: "General Practice", fade: "opacity-100" },
      ],
    ],
    button: {
      text: "Plan your care",
      style:
        "bg-red-600 text-white px-5 py-2 text-sm font-semibold shadow-md hover:bg-black hover:text-white rounded-full transition",
    },
    pillsSide: true,
    bgImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Start your caregiving journey",
    description:
      "We welcome caregivers to join our professional community. Work with us to provide compassionate care and grow your career.",
    pills: null,
    button: {
      text: "Become a caregiver",
      style:
        "bg-red-600 text-white px-5 py-2 text-sm font-semibold shadow-md hover:bg-black hover:text-white rounded-full transition",
    },
    pillsSide: false,
    photo: {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      alt: "Home medical care",
    },
    photoStyle: {
      maxWidth: "470px",
      minWidth: "280px",
    },
  },
  {
    title: "Looking for equipment?",
    description:
      "Find medical equipment that supports your health and independence — delivered and set up right in your home.",
    pills: null,
    button: {
      text: "Browse Equipment",
      style:
        "bg-red-600 text-white px-5 py-2 text-sm font-semibold shadow-md hover:bg-black hover:text-white rounded-full transition",
    },
    pillsSide: false,
    photo: {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      alt: "Medical equipment",
    },
    photoStyle: {
      maxWidth: "470px",
      minWidth: "280px",
    },
  },
];

export default function Features() {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const [fade, setFade] = useState(true);
  const slide = slides[current];

  // --- Swipe handlers ---
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setPaused(true);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && current < slides.length - 1) {
        goTo(current + 1);
      } else if (diff < 0 && current > 0) {
        goTo(current - 1);
      }
    }
    setTouchStartX(null);
    setPaused(false);
  };

  // --- Auto-slide ---
  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      goTo(current === slides.length - 1 ? 0 : current + 1);
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, [paused, current]);

  // --- Transition logic ---
  const goTo = (index) => {
    setFade(false); // trigger exit
    setTimeout(() => {
      setCurrent(index);
      setFade(true); // trigger enter
    }, 200);
    setPaused(true);
    setTimeout(() => setPaused(false), 1200);
  };

  return (
    <div
      className="w-full flex flex-col items-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <section
        id="features"
        className="relative mx-auto max-w-6xl rounded-[32px] bg-white/70 backdrop-blur shadow-lg shadow-gray-400/30 ring-1 ring-black/5 flex flex-col justify-center overflow-hidden"
        style={{ marginTop: "1px", marginBottom: "8px" }}
      >
        {/* Top button */}
        <div className="w-full flex justify-between px-4 sm:px-6 md:px-8 pt-6 md:pt-8">
          <a href="/services#customer-support" className={slide.button.style}>
            {slide.button.text}
          </a>
        </div>

        {/* Fade + slide transition wrapper */}
        <div
          className={`transition-all duration-700 ease-in-out transform ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
          }`}
          key={current} // ensures React re-renders per slide
        >
          {/* Slide body */}
          <div
            className="flex flex-col md:flex-row items-center md:items-end justify-between px-4 sm:px-6 md:px-8 pb-6 md:pb-8 w-full max-w-6xl mx-auto gap-6 md:gap-0"
            style={{ marginTop: "30px", minHeight: "260px" }}
          >
            {/* Left side: Text */}
            <div className="flex flex-col items-start justify-end min-w-[260px] max-w-lg z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 leading-tight">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-neutral-700 max-w-md leading-relaxed">
                {slide.description}
              </p>
            </div>

            {/* Right side */}
            {slide.pillsSide ? (
              <div className="relative flex flex-col gap-y-3 items-end justify-end w-full md:w-auto min-w-[260px]">
                <div className="absolute inset-0 rounded-2xl overflow-hidden -z-10">
                  <img
                    src={slide.bgImage}
                    alt=""
                    className="object-cover h-full w-full"
                    style={{ filter: "brightness(0.9)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-white/80 via-white/60 to-transparent" />
                </div>
                {slide.pills.map((row, i) => (
                  <div
                    key={i}
                    className="flex flex-row flex-wrap md:flex-nowrap justify-end gap-x-2 z-10"
                  >
                    {row.map((pill) => (
                      <div
                        key={pill.name}
                        className={`flex flex-col items-start rounded-xl bg-white/90 px-3 py-2 shadow text-neutral-900 font-semibold text-xs min-w-[100px] md:min-w-[120px] transition-opacity duration-700 ${pill.fade}`}
                      >
                        {pill.name}
                        <span className="text-neutral-500 text-[10px] font-normal">
                          {pill.role}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="relative flex-1 flex items-stretch justify-end w-full md:w-auto h-[220px] sm:h-[260px]"
                style={slide.photoStyle}
              >
                <img
                  src={slide.photo.src}
                  alt={slide.photo.alt}
                  className="object-cover rounded-2xl w-full h-full shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-white/70 via-white/30 to-transparent rounded-2xl" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Carousel navigation (unchanged) */}
      <div className="w-full max-w-6xl flex items-center justify-between px-4 sm:px-6 md:px-8 mt-2">
        <div>
          {current > 0 ? (
            <button
              onClick={() => goTo(current - 1)}
              className="bg-neutral-200 rounded-full p-2 shadow hover:bg-neutral-300 transition flex items-center justify-center"
              aria-label="Previous"
            >
              <ArrowRight className="text-neutral-700" direction="left" />
            </button>
          ) : (
            <span className="inline-block w-[44px]" />
          )}
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === current
                    ? "bg-red-600 w-4 h-1.5"
                    : "bg-neutral-300 w-2 h-1"
                }`}
                style={{
                  boxShadow:
                    idx === current ? "0 2px 8px rgba(0,0,0,0.10)" : undefined,
                  opacity: idx === current ? 1 : 0.7,
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div>
          {current < slides.length - 1 ? (
            <button
              onClick={() => goTo(current + 1)}
              className="bg-neutral-900 rounded-full p-2 shadow hover:bg-neutral-800 transition flex items-center justify-center"
              aria-label="Next"
            >
              <ArrowRight className="text-white" direction="right" />
            </button>
          ) : (
            <span className="inline-block w-[44px]" />
          )}
        </div>
      </div>
    </div>
  );
}
