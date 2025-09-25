// src/components/Hero.jsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { X } from "lucide-react";

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
      <path d="M6 18L18 6" />
      <path d="M8 6h10v10" />
    </svg>
  );
}

/* Small, simple medical icons (kept minimal so they render reliably) */
function IconStethoscope({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 2v6a3 3 0 0 0 3 3h0" />
      <path d="M9 11v4a6 6 0 1 0 6 6v-5" />
      <circle cx="19" cy="7" r="2" />
    </svg>
  );
}
function IconBed({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 7h18" />
      <path d="M5 7v9" />
      <rect x="8" y="9" width="11" height="6" rx="1" />
      <path d="M21 14v4" />
    </svg>
  );
}
function IconHeartbeat({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12h3l2-4 2 8 3-6 2 4h4" />
      <path d="M20 6v2" />
    </svg>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  const firstButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);

  const openModal = (e) => {
    lastTriggerRef.current = e?.currentTarget || document.activeElement;
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setTimeout(() => lastTriggerRef.current?.focus?.(), 0);
  };

  // focus + scroll lock when modal open
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => firstButtonRef.current?.focus(), 10);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(t);
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Escape + tab trap
  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const goToServices = () => {
    closeModal();
    navigate("/services");
  };
  const goToCareers = () => {
    closeModal();
    navigate("/careers");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-900/90 to-neutral-800/80">
      {/* subtle decorative crosses in background (tonal, not distracting) */}
      <svg className="absolute inset-0 -z-10 w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <pattern id="p" width="120" height="120" patternUnits="userSpaceOnUse">
            <g transform="translate(60,60)" stroke="rgba(255,255,255,0.03)" strokeWidth="2">
              <path d="M-10 0 h20" />
              <path d="M0 -10 v20" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT: headline + copy + CTAs */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md">
              <span className="block">Karibu</span>
              <span className="block">
                <span className="text-red-600">Prima</span>{" "}
                <span className="text-white">Healthcare</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-200">
              Professional, compassionate home-health services backed by robust coordination tools.
              We match qualified nurses and caregivers to families, manage care plans and equipment,
              and provide reliable support so patients receive consistent, safe care at home.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-4">
              {/* Primary CTA: Get Started (opens modal) */}
              <button
                onClick={openModal}
                ref={firstButtonRef}
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold shadow-md transition"
                style={{ backgroundColor: "#cb1f1f", color: "#fff" }} // red
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#111827"; // black on hover
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#cb1f1f";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                Get Started
                <ArrowUpRight />
              </button>

              {/* Secondary CTA: Learn More */}
              <Link
                to="/services#customer-support"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-md border border-neutral-200 transition"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#111827";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#111827";
                }}
              >
                Learn More
                <ArrowUpRight className="text-current" />
              </Link>
            </div>
          </div>

          {/* RIGHT: medical-focused visual cluster (no phone) */}
          <div className="flex flex-col gap-6 items-center md:items-end">
            <div className="w-full max-w-sm md:max-w-md grid grid-cols-1 gap-4">
              {/* Card 1 */}
              <div className="flex items-center gap-4 bg-white/6 border border-white/6 rounded-2xl p-4 shadow-md">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600 text-white">
                  <IconStethoscope className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-white font-semibold">Home Nursing</div>
                  <div className="text-neutral-200 text-sm">Skilled nurses for top drawer care close to you.</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-4 bg-white/6 border border-white/6 rounded-2xl p-4 shadow-md">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600 text-white">
                  <IconBed className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-white font-semibold">Equipment Hire & Sales</div>
                  <div className="text-neutral-200 text-sm">Beds, mobility aids and home support equipment.</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center gap-4 bg-white/6 border border-white/6 rounded-2xl p-4 shadow-md">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600 text-white">
                  <IconHeartbeat className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-white font-semibold">Care Coordination</div>
                  <div className="text-neutral-200 text-sm">Care plans, scheduling and check-ups.</div>
                </div>
              </div>
            </div>

            {/* small band showing trust / contact */}
            <div className="mt-4 flex items-center gap-3 bg-white/5 border border-white/6 px-4 py-2 rounded-full shadow-sm">
              <div className="text-sm text-white/90 font-medium">Your trusted healthcare partner</div>
              <div className="h-8 w-px bg-white/10" />
              <Link
                to="/services#customer-support"
                className="text-sm px-3 py-1 rounded-full bg-white text-neutral-900 font-semibold hover:bg-black hover:text-white transition"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#111827";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#111827";
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal (unchanged behavior) */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-3 top-3 p-1 rounded-full hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-300"
            >
              <X className="w-5 h-5 text-neutral-700" />
            </button>

            <h3 className="text-xl font-bold text-neutral-900 mb-3">Get Started</h3>
            <p className="text-sm text-neutral-700 mb-6">
              Speak to our team and learn how Prima can support you on your healthcare journey.
            </p>

            <div className="flex gap-3">
              <button
                onClick={goToServices}
                className="flex-1 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow transition"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#111827";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#cb1f1f";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                Services
                <ArrowUpRight className="ml-2 text-white" />
              </button>

              <button
                onClick={goToCareers}
                className="flex-1 inline-flex items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-800 bg-white shadow transition"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#111827";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#111827";
                }}
              >
                Careers
                <ArrowUpRight className="ml-2 text-current" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
