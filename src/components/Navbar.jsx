import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Logo from "../assets/Logo.svg";

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

export default function Navbar() {
  const navigate = useNavigate();

  // modal state + refs
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  const firstButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);

  // open modal and remember which element triggered it
  const openModal = (e) => {
    lastTriggerRef.current = e?.currentTarget || document.activeElement;
    setOpen(true);
  };

  // close modal and return focus to trigger
  const closeModal = () => {
    setOpen(false);
    // return focus to triggering element after modal closes
    setTimeout(() => lastTriggerRef.current?.focus?.(), 0);
  };

  // focus first actionable control & prevent body scroll while open
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
    return undefined;
  }, [open]);

  // keyboard handling: Escape to close, Tab trapping
  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
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

  // navigation helpers
  const goToServices = () => {
    closeModal();
    navigate("/services");
  };
  const goToCareers = () => {
    closeModal();
    navigate("/careers");
  };

  return (
    <header className="absolute inset-x-0 top-0 z-20 pointer-events-auto">
      <nav className="relative mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        {/* Left: logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Prima Logo" className="h-16 w-auto object-contain" />
          </Link>
        </div>

        {/* Centered nav + CTA (visible on md+) */}
        <div
          className="absolute left-1/2 top-[45%] hidden -translate-x-1/2 -translate-y-1/2 items-center md:flex"
          aria-label="Primary"
        >
          <div className="flex items-center gap-5 text-lg text-neutral-950">
            <Link to="/" className="hover:bg-red-500 hover:text-white px-3 py-1 rounded transition">
              Home
            </Link>
            <Link to="/services" className="hover:bg-red-500 hover:text-white px-3 py-1 rounded transition">
              Services
            </Link>
            <Link to="/careers" className="hover:bg-red-500 hover:text-white px-3 py-1 rounded transition">
              Careers
            </Link>
            <Link to="/about" className="hover:bg-red-500 hover:text-white px-3 py-1 rounded transition">
              About Us
            </Link>
          </div>

          <div className="mx-4 h-6 w-[1px] bg-white/30" aria-hidden="true" />

          {/* Desktop trigger */}
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Get Started
            <ArrowUpRight className="text-neutral-950" />
          </button>
        </div>

        {/* Right side: mobile trigger visible on small screens */}
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={openModal}
            className="md:hidden inline-flex items-center rounded-full bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Get Started"
          >
            Get Started
            <ArrowUpRight className="text-neutral-950" />
          </button>
        </div>
      </nav>

      {/* Modal overlay + card */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative transform transition-all duration-150"
            onClick={(e) => e.stopPropagation()}
            style={{ borderRadius: 12 }}
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
    </header>
  );
}
