// src/components/SectionCard.jsx
import React from "react";

/**
 * Reusable section wrapper that matches the Careers-style background card:
 * - full-size background image (object-center)
 * - subtle dark overlay + blur
 * - inner white/translucent content panel for readable text
 *
 * Props:
 *  - bgImage: string (background image URL)
 *  - children: JSX (content placed inside inner panel)
 *  - className: optional extra classes for outer wrapper
 */
export default function SectionCard({ bgImage, children, className = "" }) {
  return (
    <section
      className={`relative w-[90%] max-w-6xl mx-auto my-12 rounded-3xl overflow-hidden shadow-xl ${className}`}
    >
      {/* background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* dark overlay + blur to keep content readable */}
        <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-md" />
      </div>

      {/* foreground content container (white translucent) */}
      <div className="relative z-10 px-8 py-10">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white/85 p-8 shadow-md">
          {children}
        </div>
      </div>
    </section>
  );
}