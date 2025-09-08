import React from "react";
import { Link } from "react-router-dom";   // ← import Link
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
  return (
    <header className="absolute inset-x-0 top-0 z-20 pointer-events-auto">
      <nav className="relative mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        {/* Left: logo (SVG from assets) */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Prima Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Centered nav + CTA */}
        <div
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center md:flex"
          aria-label="Primary"
        >
          <div className="flex items-center gap-5 text-lg text-neutral-950">
            <Link
              to="/"
              className="hover:bg-red-500 hover:text-white px-3 py-1 rounded transition"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="hover:bg-red-500 hover:text-white px-3 py-1 rounded transition"
            >
              Services
            </Link>
            <Link
              to="/careers"
              className="hover:bg-red-500 hover:text-white px-3 py-1 rounded transition"
            >
              Careers
            </Link>
            <Link
              to="/about"
              className="hover:bg-red-500 hover:text-white px-3 py-1 rounded transition"
            >
              About Us
            </Link>
          </div>

          <div className="mx-4 h-6 w-[1px] bg-white/30" aria-hidden="true"></div>

          <Link
            to="/get-started"
            className="inline-flex items-center rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Get Started
            <ArrowUpRight className="text-neutral-950" />
          </Link>
        </div>

        <div className="flex items-center justify-end">
          {/* Right side placeholder for mobile menu */}
        </div>
      </nav>
    </header>
  );
}