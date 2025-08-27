import FeatureCard from "./FeatureCard";

// const items = [
//   {
//     title: "Employee Management",
//     description: "Track and manage employee data with ease.",
//   },
//   {
//     title: "Performance Reviews",
//     description: "Conduct fair and transparent evaluations.",
//   },
//   {
//     title: "Onboarding",
//     description: "Streamline the onboarding process for new hires.",
//   },
// ];

function ArrowUpRight({ className = "" }) {
  // small up-right arrow using a simple SVG; rotated so it visually points upward-right
  return (
    <svg
      className={`w-4 h-4 ml-2 inline-block transform rotate-90 ${className}`}
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

export default function Features() {
  const row1 = [
    { name: "Floyd Miles", role: "SEO Specialist", fade: "opacity-60" },
    { name: "Brooklyn Simmons", role: "Barone LLC.", fade: "opacity-80" },
    { name: "Eleanor Pena", role: "Marketing Coord.", fade: "opacity-90" },
    { name: "Savannah Nguyen", role: "Medical Assistant", fade: "opacity-100" },
  ];
  const row2 = [
    { name: "Kristin Watson", role: "Acme Co.", fade: "opacity-60" },
    { name: "Ronald Richards", role: "Abstargo Ltd", fade: "opacity-80" },
    { name: "Esther Howard", role: "President of Sales", fade: "opacity-90" },
    { name: "Courtney Henry", role: "Biffco Enterprises Ltd.", fade: "opacity-100" },
  ];

  return (
    <section
      id="features"
      className="relative mx-auto max-w-6xl rounded-[32px] bg-neutral-200 p-0 shadow-lg shadow-gray-400/30 ring-1 ring-black/5 flex flex-col justify-center"
      style={{ marginTop: "1px", marginBottom: "8px" }} // reduced space between Hero and Features
    >
      {/* Soft background image/gradient */}
      <div className="absolute inset-0 -z-10 rounded-[32px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300 opacity-80" />
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20"
          viewBox="0 0 400 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="200" cy="100" rx="180" ry="80" fill="#e5e7eb" />
        </svg>
      </div>
      {/* Top buttons inside Features */}
      <div className="w-full flex justify-between px-8 pt-8">
        <button className="rounded-full bg-white/60 px-4 py-1 text-xs font-semibold text-neutral-700 shadow hover:bg-white/80 border border-neutral-300 backdrop-blur">
          Job Opportunities
        </button>
        <button className="rounded-full bg-white/60 px-4 py-1 text-xs font-semibold text-neutral-700 shadow hover:bg-white/80 border border-neutral-300 backdrop-blur">
          Choose from our best
          <ArrowUpRight className="text-neutral-950" />
        </button>
      </div>
      {/* Pills and text at 1px from bottom */}
      <div
        className="flex flex-row items-end justify-between px-8 pb-1 w-full max-w-6xl mx-auto"
        style={{ position: "relative", marginTop: "40px", marginBottom: "2rem" }} // increased space below by 2rem
      >
        {/* Left side: Text, bottom aligned */}
        <div className="flex flex-col items-start justify-end min-w-[320px] max-w-lg">
          <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2 leading-tight">
            Transform your <br />
            <span className="block mt-1 text-xl md:text-2xl font-bold">
              healthcare experience.
            </span>
          </h2>
          <p className="text-base md:text-lg text-neutral-700 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* Right side: Pills, 2 rows of 4, even closer to text */}
        <div className="flex flex-col gap-y-2 items-end justify-end min-w-[320px] max-w-none" style={{ marginLeft: "-8px" }}>
          {/* First row */}
          <div className="flex flex-row flex-nowrap justify-end gap-x-1">
            {row1.map((pill) => (
              <div
                key={pill.name}
                className={`flex items-center rounded-full bg-white px-4 py-2 shadow text-neutral-900 font-semibold text-xs min-w-[110px] max-w-[140px] transition-opacity duration-700 ${pill.fade}`}
              >
                {pill.name}
                <span className="ml-1 text-neutral-500 text-[10px]">{pill.role}</span>
              </div>
            ))}
          </div>
          {/* Second row */}
          <div className="flex flex-row flex-nowrap justify-end gap-x-1">
            {row2.map((pill) => (
              <div
                key={pill.name}
                className={`flex items-center rounded-full bg-white px-4 py-2 shadow text-neutral-900 font-semibold text-xs min-w-[110px] max-w-[140px] transition-opacity duration-700 ${pill.fade}`}
              >
                {pill.name}
                <span className="ml-1 text-neutral-500 text-[10px]">{pill.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}