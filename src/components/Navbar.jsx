import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
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

  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const goToServices = () => {
    closeModal();
    navigate("/services");
  };
  const goToCareers = () => {
    closeModal();
    navigate("/careers");
  };

  const navLinkClass = (path) =>
    `relative block px-3 py-2 rounded transition font-medium ${
      location.pathname === path
        ? "text-red-600 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-red-600"
        : "text-neutral-800 hover:text-red-600 hover:bg-red-50"
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-sm">
        <nav className="relative mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Prima Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center">
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

            <div className="mx-5 h-6 w-px bg-neutral-200" />

            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-black hover:text-white"
            >
              Get Started
              <ArrowUpRight className="text-white" />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center rounded-full bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-md hover:bg-black hover:text-white"
            >
              Get Started
              <ArrowUpRight className="text-white" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-8 h-8 flex items-center justify-center"
            >
              {/* Animate icons */}
              <Menu
                className={`absolute w-6 h-6 text-neutral-700 transform transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute w-6 h-6 text-neutral-700 transform transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } bg-white/95 backdrop-blur-md shadow-sm border-t`}
        >
          <div className="flex flex-col space-y-1 px-4 py-3">
            <Link
              to="/"
              className={navLinkClass("/")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={navLinkClass("/services")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/careers"
              className={navLinkClass("/careers")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/about"
              className={navLinkClass("/about")}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>
      </header>

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
              className="absolute right-3 top-3 p-1 rounded-full hover:bg-neutral-100 focus:outline-none"
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
                className="flex-1 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black hover:text-white"
              >
                Services
                <ArrowUpRight className="ml-2 text-white" />
              </button>

              <button
                onClick={goToCareers}
                className="flex-1 inline-flex items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-800 bg-white shadow hover:bg-neutral-50"
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
