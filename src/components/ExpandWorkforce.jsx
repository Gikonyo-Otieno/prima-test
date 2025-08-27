import React from "react";

function ArrowUpRight({ className = "" }) {
  return (
    <svg
      className={`w-4 h-4 ml-1 inline-block ${className}`}
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

export default function ExpandWorkforce() {
  return (
    <section className="w-full flex flex-row bg-white min-h-[400px] font-sans">
      {/* Main content */}
      <div className="flex-1 flex flex-col px-12 py-10 bg-white">
        <h1 className="text-5xl font-bold mb-2 leading-tight tracking-tight" style={{ fontFamily: "inherit" }}>
          Quickly find your <br /> Medical partner.
        </h1>
        <p className="text-neutral-700 mb-8 text-base max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-row gap-6">
          {/* Nurses Card */}
          <div className="bg-neutral-100 rounded-2xl p-6 flex flex-col items-start min-w-[210px] shadow" style={{ height: "210px" }}>
            <span className="text-sm font-medium mb-2">Nurses</span>
            <div className="flex flex-row gap-1 mb-3">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-8 h-8 rounded-full" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-8 h-8 rounded-full" />
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="avatar" className="w-8 h-8 rounded-full" />
            </div>
            <div className="text-base font-semibold mb-1">Hire a Nurse</div>
            <button className="mt-auto rounded-full bg-white px-2 py-1 text-xs font-semibold text-neutral-700 shadow border border-neutral-300 flex items-center self-end">
              <ArrowUpRight />
            </button>
          </div>
          {/* Patient Card */}
          <div className="bg-neutral-300 rounded-2xl p-6 flex flex-col items-start min-w-[210px] shadow relative" style={{ height: "210px" }}>
            <span className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">Patient</span>
            <div className="mb-3 mt-2 self-center">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="avatar" className="w-16 h-16 rounded-xl object-cover" />
            </div>
            <div className="text-base font-semibold mb-1">Find a Patient</div>
            <button className="mt-auto rounded-full bg-black text-white px-2 py-1 text-xs font-semibold shadow flex items-center self-end">
              <ArrowUpRight />
            </button>
          </div>
          {/* Arrow Button */}
          <div className="flex flex-col justify-end items-center" style={{ height: "210px" }}>
            <button className="rounded-full bg-black text-white px-3 py-2 shadow">
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
      {/* Right cards */}
      <div className="flex flex-row gap-8 items-center bg-white px-0 py-10 min-w-[540px]">
        {/* Card 1 */}
        <div className="bg-neutral-300 rounded-2xl p-6 flex flex-col min-w-[270px] max-w-[270px] shadow relative" style={{ height: "290px" }}>
          <span className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            Meeting <ArrowUpRight />
          </span>
          <img
            src="https://randomuser.me/api/portraits/women/67.jpg"
            alt="avatar"
            className="w-32 h-32 rounded-xl object-cover mt-8 mb-4"
            style={{ marginLeft: 0 }}
          />
          <div className="flex flex-col items-start w-full">
            <div className="text-base font-semibold mb-1 text-white">Savannah Nguyen</div>
            <div className="text-xs text-white mb-2">CEO, Los Angeles, USA</div>
          </div>
          <a href="#" className="text-xs text-white underline mt-auto self-end">Read More.</a>
        </div>
        {/* Card 2 - Fully visible */}
        <div className="bg-neutral-300 rounded-2xl p-6 flex flex-col min-w-[270px] max-w-[270px] shadow relative" style={{ height: "290px" }}>
          <span className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            Meeting <ArrowUpRight />
          </span>
          <img
            src="https://randomuser.me/api/portraits/women/67.jpg"
            alt="avatar"
            className="w-32 h-32 rounded-xl object-cover mt-8 mb-4"
            style={{ marginLeft: 0 }}
          />
          <div className="flex flex-col items-start w-full">
            <div className="text-base font-semibold mb-1 text-white">Savannah Nguyen</div>
            <div className="text-xs text-white mb-2">CEO, Los Angeles, USA</div>
          </div>
          <a href="#" className="text-xs text-white underline mt-auto self-end">Read More.</a>
        </div>
        {/* Card 3 - Only half visible */}
        <div className="bg-neutral-300 rounded-2xl p-6 flex flex-col min-w-[270px] max-w-[270px] shadow relative" style={{ height: "290px" }}>
          <span className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            Meeting <ArrowUpRight />
          </span>
          <img
            src="https://randomuser.me/api/portraits/women/67.jpg"
            alt="avatar"
            className="w-32 h-32 rounded-xl object-cover mt-8 mb-4"
            style={{ marginLeft: 0 }}
          />
          <div className="flex flex-col items-start w-full">
            <div className="text-base font-semibold mb-1 text-white">Savannah Nguyen</div>
            <div className="text-xs text-white mb-2">CEO, Los Angeles, USA</div>
          </div>
          <a href="#" className="text-xs text-white underline mt-auto self-end">Read More.</a>
        </div>
      </div>
    </section>
  );
}