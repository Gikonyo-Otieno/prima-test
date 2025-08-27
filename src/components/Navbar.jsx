// src/components/Navbar.jsx
import React from "react";


function ArrowUpRight({ className = "" }) {
  // small up-right arrow using a simple SVG; rotated so it visually points upward-right
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
      {/* diagonal line */}
      <path d="M6 18L18 6"></path>
      {/* small arrowhead */}
      <path d="M8 6h10v10"></path>
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 pointer-events-auto">
      <nav className="relative mx-auto max-w-7xl px-6 py-5">
        {/* Left: logo */}
        <div className="flex items-center">
          <a href="/" className="text-neutral-950 text-xl font-semibold tracking-wide">
            Prima
          </a>
        </div>

        {/* Centered nav + CTA (visible from md breakpoint) */}
        <div
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center md:flex"
          aria-label="Primary"
        >
          {/* Links group: slightly larger text, reduced gaps */}
          <div className="flex items-center gap-5 text-lg text-neutral-950">
            <a href="#home" className="hover:bg-black hover:text-white px-3 py-1 rounded transition">
              Home
            </a>
            <a href="#services" className="hover:bg-black hover:text-white px-3 py-1 rounded transition">
              Services  
            </a>
            <a href="#careers" className="hover:bg-black hover:text-white px-3 py-1 rounded transition">
              Careers 
            </a>
            <a href="#about" className="hover:bg-black hover:text-white px-3 py-1 rounded transition">
              About Us
            </a>
          </div>

          {/* Vertical separator */}
          <div
            className="mx-4 h-6 w-[1px] bg-white/30"
            aria-hidden="true"
          ></div>

          {/* CTA placed together with the links */}
          <a
            href="#get-started"
            className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Get Started
            <ArrowUpRight className="text-neutral-950" />
          </a>
        </div>

        {/* Right side (keeps space balanced on small screens) */}
        <div className="flex items-center justify-end">
          {/* Intentionally empty for layout balance on desktop; on small screens you can optionally place mobile menu/CTA here */}
        </div>
      </nav>
    </header>
  );
}
