// src/components/Hero.jsx
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

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background (warm smoky glow) */}
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

        {/* CTAs with angled up-right arrows */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Get Started
            <ArrowUpRight className="text-neutral-950" />
          </a>

          <a
            href="#learn-more"
            className="inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-md ring-1 ring-black/5 hover:bg-white"
          >
            Learn More
            <ArrowUpRight className="text-neutral-950" />
          </a>
        </div>
      </div>
    </section>
  );
}
