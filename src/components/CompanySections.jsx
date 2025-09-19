import React from "react";
import { Link } from "react-router-dom";
import SectionCardAbout from "./SectionCardAbout";

/**
 * CompanySections
 * - Three cards in order: Who We Are | Our Practice | Our Partners
 * - All CTAs point to /services#customer-support
 * - Responsive grid: 1 column (sm) -> 3 columns (md+)
 * - Fade-in + hover lift + smooth CTA hover transition
 */

export default function CompanySections() {
  return (
    <section
      className="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-10 rounded-[28px] shadow-xl"
      style={{
        background:
          "linear-gradient(90deg, rgba(245,246,250,0.55) 60%, rgba(220,221,225,0.43) 100%)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(200,200,210,0.18)",
      }}
    >
      {/* header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">About <span className="text-red-700">Prima</span></h2>
          <p className="text-sm text-neutral-700 mt-1">
            Partners, practice and who we are — summarized here.
          </p>
        </div>

        <div className="self-end md:self-auto">
          <Link
            to="/services#customer-support"
            className="inline-flex items-center rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black hover:text-white transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* grid of three cards: Who We Are | Our Practice | Our Partners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. Who We Are (first) */}
        <SectionCardAbout title="Who We Are" ctaText="Learn More" delay={0}>
          <p>
            Prima Healthcare is a licensed home health agency (KMPDB No: 020510) and a private company
            registered under the Companies Act, 2015 (PVT/2016/006999). We specialise in in-home clinical
            and support services delivered with compassion and clinical oversight.
          </p>

          <div className="mt-4 text-sm text-neutral-700">
            <div>Licence: KMPDB 020510</div>
            <div>Company reg: PVT/2016/006999</div>
          </div>
        </SectionCardAbout>

        {/* 2. Our Practice (center) */}
        <SectionCardAbout title="Our Practice" ctaText="Get Connected" delay={120}>
          <p>
            We deliver home-based healthcare and support in trusted residential facilities — bridging the gap
            between hospital and home. Through therapy partners, diagnostics and pharmacy networks we provide
            coordinated, clinically-sound care.
          </p>
          <p className="mt-3 text-sm text-neutral-600">
            Available services include long-term care, short-term rehabilitation, and equipment hire.
          </p>
        </SectionCardAbout>

        {/* 3. Our Partners (right) */}
        <SectionCardAbout title="Our Partners" ctaText="Work With Us" delay={240}>
          <p>
            We partner with leading insurance providers and hospitals across Kenya to make healthcare accessible,
            trusted and reliable.
          </p>

          <div className="mt-4 grid grid-cols-3 gap-3 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/2/28/AAR_Healthcare_logo.png"
              alt="AAR"
              className="h-10 md:h-12 object-contain mx-auto"
            />
            <img
              src="https://seeklogo.com/images/B/britam-logo-61A4A42D2A-seeklogo.com.png"
              alt="Britam"
              className="h-10 md:h-12 object-contain mx-auto"
            />
            <img
              src="https://seeklogo.com/images/U/uap-old-mutual-logo-45EC39F7D4-seeklogo.com.png"
              alt="UAP"
              className="h-10 md:h-12 object-contain mx-auto"
            />
          </div>
        </SectionCardAbout>
      </div>

      {/* Local animation CSS */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
