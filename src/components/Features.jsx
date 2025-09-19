import { useState } from "react";

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
        {
          name: "Floyd Miles",
          role: "Psychology Specialist",
          fade: "opacity-60",
        },
        {
          name: "Brooklyn Simmons",
          role: "Pediatric Nurse",
          fade: "opacity-80",
        },
        { name: "Eleanor Pena", role: "ICU Nurse.", fade: "opacity-90" },
        {
          name: "Savannah Nguyen",
          role: "Medical Assistant",
          fade: "opacity-100",
        },
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
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd2e?auto=format&fit=crop&w=600&q=80",
      alt: "Home medical care",
    },
    photoStyle: {
      maxWidth: "470px",
      minWidth: "370px",
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
      minWidth: "370px",
    },
  },
];

export default function Features() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <div className="w-full flex flex-col items-center">
      <section
        id="features"
        className="relative mx-auto max-w-6xl rounded-[32px] bg-white/70 backdrop-blur shadow-lg shadow-gray-400/30 ring-1 ring-black/5 flex flex-col justify-center overflow-hidden"
        style={{ marginTop: "1px", marginBottom: "8px" }}
      >
        {/* Top button */}
        <div className="w-full flex justify-between px-8 pt-8">
          <a href="/services#customer-support" className={slide.button.style}>
            {slide.button.text}
          </a>
        </div>

        {/* Pills or Photo */}
        <div
          className="flex flex-row items-end justify-between px-8 pb-8 w-full max-w-6xl mx-auto"
          style={{
            marginTop: "40px",
            minHeight: "260px",
            alignItems: "stretch",
          }}
        >
          {/* Left side: Text */}
          <div className="flex flex-col items-start justify-end min-w-[320px] max-w-lg z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 leading-tight">
              {slide.title}
            </h2>
            <p className="text-base md:text-lg text-neutral-700 max-w-md leading-relaxed">
              {slide.description}
            </p>
          </div>

          {/* Right side: Pills or Photo */}
          {slide.pillsSide ? (
            <div className="relative flex flex-col gap-y-3 items-end justify-end min-w-[320px]">
              {/* Background image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden -z-10">
                <img
                  src={slide.bgImage}
                  alt=""
                  className="object-cover h-full w-full"
                  style={{
                    filter: "brightness(0.9)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-white/80 via-white/60 to-transparent" />
              </div>

              {/* Pills */}
              {slide.pills.map((row, i) => (
                <div
                  key={i}
                  className="flex flex-row flex-nowrap justify-end gap-x-2 z-10"
                >
                  {row.map((pill) => (
                    <div
                      key={pill.name}
                      className={`flex flex-col items-start rounded-xl bg-white/90 px-4 py-2 shadow text-neutral-900 font-semibold text-xs min-w-[120px] transition-opacity duration-700 ${pill.fade}`}
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
              className="relative flex-1 flex items-stretch justify-end h-[260px]"
              style={
                slide.photoStyle
                  ? slide.photoStyle
                  : { maxWidth: "370px", minWidth: "320px" }
              }
            >
              <img
                src={slide.photo.src}
                alt={slide.photo.alt}
                className="object-cover rounded-2xl w-full h-full shadow-md"
                style={{
                  objectFit: "cover",
                  objectPosition: "center right",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-white/70 via-white/30 to-transparent rounded-2xl" />
            </div>
          )}
        </div>
      </section>

      {/* Carousel Navigation */}
      <div className="w-full max-w-6xl flex items-center justify-between px-8 mt-2">
        {/* Arrow Button (left) */}
        <div>
          {current > 0 ? (
            <button
              onClick={() => setCurrent(current - 1)}
              className="bg-neutral-200 rounded-full p-2 shadow hover:bg-neutral-300 transition flex items-center justify-center"
              aria-label="Previous"
            >
              <ArrowRight className="text-neutral-700" direction="left" />
            </button>
          ) : (
            <span className="inline-block w-[44px]"></span>
          )}
        </div>

        {/* Segmented Slider */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <div
                key={idx}
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
              />
            ))}
          </div>
        </div>

        {/* Arrow Button (right) */}
        <div>
          {current < slides.length - 1 ? (
            <button
              onClick={() => setCurrent(current + 1)}
              className="bg-neutral-900 rounded-full p-2 shadow hover:bg-neutral-800 transition flex items-center justify-center"
              aria-label="Next"
            >
              <ArrowRight className="text-white" direction="right" />
            </button>
          ) : (
            <span className="inline-block w-[44px]"></span>
          )}
        </div>
      </div>
    </div>
  );
}
