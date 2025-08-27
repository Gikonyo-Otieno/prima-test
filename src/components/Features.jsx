import FeatureCard from "./FeatureCard";

// const items = [
//   {
//     title: "Employee Management",
//     description: "Track and manage employee data with ease.",
//   },
//   {
//     title: "Performance Reviews",
//     description: "Conduct fair and transparent evaluations.",
//   },
//   {
//     title: "Onboarding",
//     description: "Streamline the onboarding process for new hires.",
//   },
// ];
import { useState } from "react";

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

const slides = [
  {
    title: "Transform your healthcare experience.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pills: [
      [
        { name: "Floyd Miles", role: "SEO Specialist", fade: "opacity-60" },
        { name: "Brooklyn Simmons", role: "Barone LLC.", fade: "opacity-80" },
        { name: "Eleanor Pena", role: "Marketing Coord.", fade: "opacity-90" },
        { name: "Savannah Nguyen", role: "Medical Assistant", fade: "opacity-100" },
      ],
      [
        { name: "Kristin Watson", role: "Acme Co.", fade: "opacity-60" },
        { name: "Ronald Richards", role: "Abstargo Ltd", fade: "opacity-80" },
        { name: "Esther Howard", role: "President of Sales", fade: "opacity-90" },
        { name: "Courtney Henry", role: "Biffco Enterprises Ltd.", fade: "opacity-100" },
      ],
    ],
    button: {
      text: "Job Opportunities",
      style: "bg-white/60 px-4 py-1 text-xs font-semibold text-neutral-700 shadow hover:bg-white/80 border border-neutral-300 backdrop-blur rounded-full",
    },
    pillsSide: true,
    bgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Empower your HR team.",
    description: "Manage employee data, performance reviews, and onboarding with ease and efficiency.",
    pills: null,
    button: {
      text: "HR Dashboard",
      style: "bg-blue-500 px-4 py-1 text-xs font-semibold text-white shadow hover:bg-blue-600 border border-blue-700 backdrop-blur rounded-full",
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pills: null,
    button: {
      text: "Browse Equipment",
      style: "bg-green-500 px-4 py-1 text-xs font-semibold text-white shadow hover:bg-green-600 border border-green-700 backdrop-blur rounded-full",
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
        className="relative mx-auto max-w-6xl rounded-[32px] bg-neutral-200 p-0 shadow-lg shadow-gray-400/30 ring-1 ring-black/5 flex flex-col justify-center"
        style={{ marginTop: "1px", marginBottom: "8px" }}
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10 rounded-[32px] overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300 opacity-80" />
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-20"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="200" cy="100" rx="180" ry="80" fill="#e5e7eb" />
          </svg>
        </div>
        {/* Top button */}
        <div className="w-full flex justify-between px-8 pt-8">
          <button className={slide.button.style}>
            {slide.button.text}
          </button>
        </div>
        {/* Pills or Photo */}
        <div
          className="flex flex-row items-end justify-between px-8 pb-1 w-full max-w-6xl mx-auto"
          style={{
            position: "relative",
            marginTop: "40px",
            marginBottom: "2rem",
            minHeight: "260px",
            alignItems: "stretch",
          }}
        >
          {/* Left side: Text */}
          <div className="flex flex-col items-start justify-end min-w-[320px] max-w-lg z-10">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2 leading-tight">
              {slide.title}
            </h2>
            <p className="text-base md:text-lg text-neutral-700 max-w-md">
              {slide.description}
            </p>
          </div>
          {/* Right side: Pills or Photo */}
          {slide.pillsSide ? (
            <div className="relative flex flex-col gap-y-2 items-end justify-end min-w-[320px] max-w-none" style={{ marginLeft: "-8px" }}>
              {/* Image between text and pills */}
              <div
                className="absolute left-0 top-0 h-full w-full rounded-2xl overflow-hidden -z-10 flex items-center justify-end"
                style={{
                  pointerEvents: "none",
                }}
              >
                <img
                  src={slide.bgImage}
                  alt=""
                  className="object-cover h-full w-full"
                  style={{
                    objectPosition: "right center",
                    filter: "brightness(0.95)",
                  }}
                />
                {/* Fading effect overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to left, rgba(245,246,250,0.85) 55%, rgba(245,246,250,0.01) 100%)",
                  }}
                />
              </div>
              <div className="flex flex-row flex-nowrap justify-end gap-x-1 z-10">
                {slide.pills[0].map((pill) => (
                  <div
                    key={pill.name}
                    className={`flex items-center rounded-full bg-white px-4 py-2 shadow text-neutral-900 font-semibold text-xs min-w-[110px] max-w-[140px] transition-opacity duration-700 ${pill.fade}`}
                  >
                    {pill.name}
                    <span className="ml-1 text-neutral-500 text-[10px]">{pill.role}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-nowrap justify-end gap-x-1 z-10">
                {slide.pills[1].map((pill) => (
                  <div
                    key={pill.name}
                    className={`flex items-center rounded-full bg-white px-4 py-2 shadow text-neutral-900 font-semibold text-xs min-w-[110px] max-w-[140px] transition-opacity duration-700 ${pill.fade}`}
                  >
                    {pill.name}
                    <span className="ml-1 text-neutral-500 text-[10px]">{pill.role}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              className="relative flex-1 flex items-stretch justify-end h-[260px]"
              style={slide.photoStyle ? slide.photoStyle : { maxWidth: "370px", minWidth: "320px" }}
            >
              <img
                src={slide.photo.src}
                alt={slide.photo.alt}
                className="object-cover rounded-2xl w-full h-full"
                style={{
                  ...slide.photoStyle,
                  objectFit: "cover",
                  objectPosition: "center right",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
                  width: "100%",
                  height: "100%",
                }}
              />
              {/* Fading effect */}
              <div
                className="absolute top-0 right-0 h-full pointer-events-none"
                style={{
                  width: "60%",
                  background: "linear-gradient(to left, rgba(245,246,250,0.85) 60%, rgba(245,246,250,0.01) 100%)",
                  borderTopRightRadius: "1rem",
                  borderBottomRightRadius: "1rem",
                }}
              />
            </div>
          )}
        </div>
      </section>
      {/* Carousel Navigation & Segmented Slider */}
      <div className="w-full max-w-6xl flex items-center justify-between px-8 mt-2" style={{ minHeight: "40px" }}>
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
                    ? "bg-blue-500 w-3 h-0.5"
                    : "bg-neutral-300 w-1.5 h-0.5"
                }`}
                style={{
                  boxShadow: idx === current ? "0 2px 8px rgba(0,0,0,0.10)" : undefined,
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