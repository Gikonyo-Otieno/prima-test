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
      <path d="M6 18L18 6"></path>
      <path d="M8 6h10v10"></path>
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

  // focus + body scroll lock
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

  // esc + tab trap
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
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-[520px] w-full bg-neutral-950">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute inset-0 bg-[radial-gradient(900px_360px_at_50%_-10%,rgba(255,136,51,0.35),transparent_65%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(700px_260px_at_20%_0%,rgba(255,94,0,0.28),transparent_65%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(700px_260px_at_80%_0%,rgba(255,140,0,0.20),transparent_65%)]"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-neutral-950 to-neutral-950"></div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-28 pb-28 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
          <span className="block">Karibu </span>
          <span className="text-red-700">Prima</span> healthcare
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-950">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Get Started
            <ArrowUpRight className="text-neutral-950" />
          </button>

          {/* <-- Updated Learn More: now navigates to the same place as Carousel's Learn More */}
          <Link
            to="/services#customer-support"
            className="inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-md ring-1 ring-black/5 hover:bg-white"
          >
            Learn More
            <ArrowUpRight className="text-neutral-950" />
          </Link>
        </div>
      </div>

      {/* Modal */}
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
              Choose where you'd like to go next — learn more about our services or explore career opportunities with us.
            </p>

            <div className="flex gap-3">
              <button
                ref={firstButtonRef}
                onClick={goToServices}
                className="flex-1 inline-flex items-center justify-center rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              >
                Services
                <ArrowUpRight className="ml-2 text-neutral-950" />
              </button>

              <button
                onClick={goToCareers}
                className="flex-1 inline-flex items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-800 bg-white shadow hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
              >
                Careers
                <ArrowUpRight className="ml-2 text-neutral-950" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
