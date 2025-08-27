import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function TeamCard({ name, location, role, img }) {
  return (
    <div className="bg-white/80 rounded-xl shadow flex flex-col items-center p-4 min-w-[180px] max-w-[180px] mx-1 transition-all duration-300 border border-neutral-200">
      <img src={img} alt={name} className="w-14 h-14 rounded-full object-cover mb-2" />
      <div className="text-sm font-semibold text-neutral-900 mb-1">{name}</div>
      <div className="text-xs text-neutral-500 mb-1">{location}</div>
      <div className="text-xs font-medium text-neutral-700 mb-2">{role}</div>
      <button className="mt-2 bg-neutral-100 px-2 py-1 rounded-full text-xs font-semibold text-neutral-700 flex items-center gap-1 shadow">
        <FaArrowUpRightFromSquare />
      </button>
    </div>
  );
}

export default function CardPanel() {
  return (
    <div
      className="relative w-full max-w-5xl rounded-[32px] shadow-xl flex flex-row items-start px-12 pt-8 pb-6 gap-8 mx-auto"
      style={{
        background: "linear-gradient(90deg, rgba(245,246,250,0.53) 60%, rgba(220,221,225,0.43) 100%)",
        backdropFilter: "blur(10px)",
        marginTop: "2rem",
        marginBottom: "2rem",
        minHeight: "320px",
        maxHeight: "370px",
        boxSizing: "border-box",
        border: "1px solid rgba(200,200,210,0.18)",
      }}
    >
      {/* Close button */}
      <button className="absolute top-6 left-6 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-neutral-500 shadow text-2xl">
        &times;
      </button>
      {/* Tabs */}
      <div className="absolute top-6 left-40 flex gap-8">
        <button className="bg-neutral-200 px-5 py-2 rounded-full font-semibold text-neutral-900 shadow text-base">
          Our best Team
        </button>
        <button className="text-neutral-700 font-medium text-base">Customers Support</button>
        <button className="text-neutral-700 font-medium text-base">Strategy Group</button>
      </div>
      {/* Team Cards */}
      <div className="flex flex-row gap-[3px] pt-20">
        <TeamCard
          name="Savannah Nguyen"
          location="Central African Republic"
          role="Sales Manager"
          img="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <TeamCard
          name="Esther Howard"
          location="Aland Islands"
          role="Work Assistant"
          img="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <TeamCard
          name="Darlene Robertson"
          location="Saint Barthelemy"
          role="Louis Vuitton"
          img="https://randomuser.me/api/portraits/women/65.jpg"
        />
      </div>
      {/* Right Panel */}
      <div
        className="flex flex-col justify-start pl-8 pr-8 pt-8 flex-1 min-w-[220px] max-w-[350px] box-border"
        style={{
          fontSize: "0.85rem",
          maxWidth: "370px",
          alignSelf: "flex-start",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div className="font-semibold text-neutral-900 mb-2" style={{ fontSize: "1rem" }}>
          To team together
        </div>
        <div
          className="font-bold text-neutral-900 mb-3 break-words"
          style={{ fontSize: "1.6rem", lineHeight: "1.1", wordBreak: "break-word" }}
        >
          Enhancing the Entire Employee <br /> and Team Impact Cycle
        </div>
        <p
          className="text-neutral-700 mb-4 max-w-full break-words"
          style={{ fontSize: "0.85rem", wordBreak: "break-word" }}
        >
          Lattice focuses on effective team collaboration and communication to enhance productivity and employee satisfaction.
        </p>
        <a
          href="#"
          className="text-blue-600 underline font-semibold"
          style={{ fontSize: "0.85rem" }}
        >
          Read More.
        </a>
      </div>
      {/* Settings button */}
      <button className="absolute top-6 right-6 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-neutral-500 shadow">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="10" r="8" />
          <path d="M10 6v4l2 2" />
        </svg>
      </button>
    </div>
  );
}
