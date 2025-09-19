// src/components/CareerHero.jsx
import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* small up-right arrow */
function ArrowUpRight({ className = "" }) {
  return (
    <svg
      className={`w-4 h-4 ml-2 inline-block transform rotate-30 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 18L18 6"></path>
      <path d="M8 6h10v10"></path>
    </svg>
  );
}

export default function CareerHero() {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const popupRef = useRef(null);
  const firstBtnRef = useRef(null);

  const openGetStarted = () => setOpenPopup(true);
  const closeGetStarted = () => setOpenPopup(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeGetStarted(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!openPopup) return;
    const onPointer = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) closeGetStarted();
    };
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, [openPopup]);

  useEffect(() => {
    if (openPopup) {
      const t = setTimeout(() => firstBtnRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [openPopup]);

  const scrollToApplication = () => {
    closeGetStarted();
    const el = document.getElementById("ApplicationPanel") || document.querySelector("[data-application]");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate("/careers#application");
  };

  const handleLearnMore = () => {
    const el = document.getElementById("ApplicationPanel") || document.querySelector("[data-application]");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate("/careers#application");
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl"
          style={{ textShadow: "0 2px 18px rgba(0,0,0,0.28)", letterSpacing: "0.01em" }}
        >
          <span className="block">Start your Healthcare</span>
          <span className="block">journey Today.</span>
        </h1>

        <div className="w-24 h-1 bg-white/70 rounded-full mt-6 mb-6" />

        <p className="max-w-2xl text-white/90 text-sm md:text-base mb-8">
          Join Prima to provide compassionate care in homes and facilities across the country. See open roles or apply — we’ll walk you through the process.
        </p>


      </div>

  
    </section>
  );
}
