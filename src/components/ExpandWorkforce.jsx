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
    <section className="w-screen h-screen flex flex-row bg-white font-sans overflow-hidden">
      {/* Main content */}
      <div className="flex-1 flex flex-col px-12 py-10 bg-white min-h-0 min-w-0">
        <h1 className="text-5xl font-bold mb-2 leading-tight tracking-tight" style={{ fontFamily: "inherit" }}>
          Quickly find your <br /> Medical partner.
        </h1>
        <p className="text-neutral-700 mb-8 text-base max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-row gap-8">
          {/* Employees Card */}
          <div className="relative rounded-[24px] overflow-hidden min-w-[220px] shadow flex flex-col justify-end bg-neutral-100" style={{ height: "220px" }}>
            <div className="absolute inset-0 bg-neutral-300 rounded-[24px]"></div>
            <span className="absolute top-5 left-5 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">Patients</span>
            <div className="relative z-10 px-6 pb-6">
              <div className="flex flex-row gap-2 mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
              </div>
              <div className="text-lg font-semibold mb-2 text-neutral-900">Find a Nurse</div>
              <button className="rounded-full bg-white/80 px-3 py-2 text-base font-semibold text-neutral-700 shadow flex items-center">
                <ArrowUpRight />
              </button>
            </div>
          </div>
          {/* Contractor Card */}
          <div className="relative rounded-[24px] overflow-hidden min-w-[220px] shadow flex flex-col justify-end" style={{ height: "220px" }}>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=220&facepad=2" alt="contractor" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 rounded-[24px]"></div>
            <span className="absolute top-5 left-5 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">Nurses</span>
            <div className="relative z-10 px-6 pb-6">
              <div className="flex flex-row gap-2 mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
              </div>
              <div className="text-lg font-semibold text-white mb-2">Find a Patient</div>
              <button className="rounded-full bg-white/30 px-3 py-2 text-base font-semibold text-white shadow flex items-center">
                <ArrowUpRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Right cards */}
      <div
        className="flex flex-row gap-8 items-center bg-white px-0 py-10 min-h-0 overflow-x-auto"
        style={{ width: "740px" }} // Shows 2.5 cards, adjust as needed
      >
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