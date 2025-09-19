import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroText() {
  const navigate = useNavigate();

  const [openPopup, setOpenPopup] = useState(false);
  const popupRef = useRef(null);
  const firstPopupBtnRef = useRef(null);

  const openGetStarted = () => setOpenPopup(true);
  const closeGetStarted = () => setOpenPopup(false);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeGetStarted();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // click outside to close
  useEffect(() => {
    if (!openPopup) return;
    const onPointer = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        closeGetStarted();
      }
    };
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, [openPopup]);

  // focus first popup button
  useEffect(() => {
    if (openPopup) {
      const t = setTimeout(() => firstPopupBtnRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [openPopup]);

  // Scroll to CardPanel if present on current page, otherwise navigate to /services#customer-support
  const handleLearnMore = () => {
    const el =
      document.getElementById("CardPanel") ||
      document.querySelector("[data-cardpanel]");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate("/services#customer-support");
  };

  const handleNavigateToServices = () => {
    closeGetStarted();
    const el =
      document.getElementById("CardPanel") ||
      document.querySelector("[data-cardpanel]");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate("/services");
  };

  const handleNavigateToCareers = () => {
    closeGetStarted();
    navigate("/careers");
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* content */}
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 md:py-36 flex flex-col items-center text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl animate-hero-fade-up"
          style={{
            textShadow: "0 2px 18px rgba(0,0,0,0.28)",
            letterSpacing: "0.01em",
          }}
        >
          <span className="block">The help you Need,</span>
          <span className="block">When you Need it.</span>
        </h1>

        <div className="w-20 md:w-24 h-1 bg-white/70 rounded-full mt-5 mb-6 animate-hero-fade-up" />

        <p
          className="max-w-2xl text-white/90 text-sm md:text-base mb-8 animate-hero-fade-up"
          style={{ animationDelay: "130ms" }}
        >
          Fast, compassionate care — at home or in trusted facilities. Book
          services, equipment or speak to our support team and we'll coordinate
          the rest.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 items-center z-10">
          <button
            onClick={openGetStarted}
            className="inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition transform hover:bg-black hover:text-white hover:scale-105 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(220,38,38,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 animate-hero-fade-up"
            aria-haspopup="dialog"
            aria-expanded={openPopup}
            style={{ animationDelay: "180ms" }}
          >
            Get Started
          </button>

          <button
            onClick={handleLearnMore}
            className="inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-md ring-1 ring-black/5 transition transform hover:bg-black hover:text-white hover:scale-105 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(220,38,38,0.18)] animate-hero-fade-up"
            style={{ animationDelay: "230ms" }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Get Started modal */}
      {openPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Get started dialog"
        >
          <div
            ref={popupRef}
            className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6 relative transform animate-modal-scale"
            style={{ borderRadius: 12 }}
          >
            <button
              onClick={closeGetStarted}
              className="absolute right-3 top-3 p-1 rounded-full hover:bg-neutral-100 focus:outline-none"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-neutral-700" />
            </button>

            <h3 className="text-lg font-bold text-neutral-900 mb-2">Get Started</h3>
            <p className="text-sm text-neutral-700 mb-4">
              Choose where you'd like to go next — explore our Services or Careers.
            </p>

            <div className="flex flex-col gap-3">
              <button
                ref={firstPopupBtnRef}
                onClick={handleNavigateToServices}
                className="w-full inline-flex items-center justify-center rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow transition transform hover:bg-black hover:text-white hover:scale-105 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(220,38,38,0.18)]"
              >
                Services
              </button>

              <button
                onClick={handleNavigateToCareers}
                className="w-full inline-flex items-center justify-center rounded-full bg-white border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-900 shadow transition transform hover:bg-black hover:text-white hover:scale-105 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(220,38,38,0.18)]"
              >
                Careers
              </button>
            </div>
          </div>
        </div>
      )}

      {/* local animation styles */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-fade-up {
          animation: heroFadeUp 420ms cubic-bezier(.2,.9,.2,1) forwards;
        }

        @keyframes modalScale {
          from { opacity: 0; transform: translateY(8px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-modal-scale {
          animation: modalScale 220ms cubic-bezier(.2,.9,.2,1) forwards;
        }
      `}</style>
    </section>
  );
}
