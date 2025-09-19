import React from "react";
import { Link } from "react-router-dom";

export default function SectionCardAbout({
  title,
  children,
  ctaText = "Learn More",
  ctaHref = "/services#customer-support",
  delay = 0,
}) {
  return (
    <article
      role="group"
      aria-label={title}
      className="bg-white/80 rounded-xl transform transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg border border-neutral-200 p-6 flex flex-col justify-between"
      style={{
        opacity: 0,
        animation: `fadeInUp 420ms cubic-bezier(.2,.9,.2,1) forwards`,
        animationDelay: `${delay}ms`,
      }}
    >
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">{title}</h3>
        <div className="text-neutral-700 text-sm md:text-base leading-relaxed mb-6">{children}</div>
      </div>

      {ctaText && (
        <div className="mt-2">
          <Link
            to={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-red-700 px-5 py-2 text-sm font-semibold text-white shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300 hover:bg-black hover:text-white"
            aria-label={`${ctaText} - go to Customer Support`}
          >
            {ctaText}
          </Link>
        </div>
      )}
    </article>
  );
}
