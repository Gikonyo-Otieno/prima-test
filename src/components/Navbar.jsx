import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();

  // modal + focus management (kept intact)
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
    // return focus to trigger after modal closes
    setTimeout(() => lastTriggerRef.current?.focus?.(), 0);
  };

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

  const goToServices = () => {
    closeModal();
    navigate("/services");
  };
  const goToCareers = () => {
    closeModal();
    navigate("/careers");
  };

  const navLinkClass = (path) =>
    `relative px-3 py-1 rounded transition font-medium ${
      location.pathname === path
        ? "text-red-600 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-red-600"
        : "text-neutral-800 hover:text-red-600 hover:bg-red-50"
    }`;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-sm"
        aria-hidden={false}
      >
        <nav className="relative mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Prima Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Centered nav (desktop) */}
          <div
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center"
            aria-label="Primary"
          >
            <div className="flex items-center gap-6 text-base">
              <Link to="/" className={navLinkClass("/")}>
                Home
              </Link>
              <Link to="/services" className={navLinkClass("/services")}>
                Services
              </Link>
              <Link to="/careers" className={navLinkClass("/careers")}>
                Careers
              </Link>
              <Link to="/about" className={navLinkClass("/about")}>
                About Us
              </Link>
            </div>

            <div className="mx-5 h-6 w-px bg-neutral-200" aria-hidden="true" />

            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              Get Started
              <ArrowUpRight className="text-white" />
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={openModal}
              className="md:hidden inline-flex items-center rounded-full bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-md hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              Get Started
              <ArrowUpRight className="text-white" />
            </button>
          </div>
        </nav>
      </header>

      {/* NOTE: The header is fixed and visually floats. If you want a tiny breathing
          room so page content doesn't sit directly under the nav, add `pt-[56px]`
          (or your measured nav height) to the element that wraps your page content.
          I am not modifying your carousel here. */}
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

            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              Get Started
            </h3>
            <p className="text-sm text-neutral-700 mb-6">
              Choose where you'd like to go next — learn more about our services
              or explore career opportunities with us.
            </p>

            <div className="flex gap-3">
              <button
                ref={firstButtonRef}
                onClick={goToServices}
                className="flex-1 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              >
                Services
                <ArrowUpRight className="ml-2 text-white" />
              </button>

              <button
                onClick={goToCareers}
                className="flex-1 inline-flex items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-800 bg-white shadow hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
              >
                Careers
                <ArrowUpRight className="ml-2 text-neutral-700" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
