import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// --- Team Card (Our Team stays the same) ---
function TeamCard({ name, location, role, img }) {
  return (
    <div className="bg-white/80 rounded-xl shadow flex flex-col items-center p-4 min-w-[180px] max-w-[180px] mx-1 transition-all duration-300 border border-neutral-200">
      <img src={img} alt={name} className="w-14 h-14 rounded-full object-cover mb-2" />
      <div className="text-sm font-semibold text-neutral-900 mb-1">{name}</div>
      <div className="text-xs text-neutral-500 mb-1">{location}</div>
      <div className="text-xs font-medium text-neutral-700 mb-2">{role}</div>
      <button className="mt-2 bg-neutral-100 px-2 py-1 rounded-full text-xs font-semibold text-neutral-700 flex items-center gap-1 shadow">
        <FaArrowUpRightFromSquare className="rotate-[30deg]" />
      </button>
    </div>
  );
}

// --- Info Card (Support + Equipment tabs) ---
function InfoCard({ title, description, contact }) {
  return (
    <div className="bg-white/80 rounded-xl shadow flex flex-col items-center justify-center p-6 min-w-[280px] max-w-[320px] mx-1 transition-all duration-300 border border-neutral-200 text-center">
      <h3 className="text-lg font-bold text-neutral-900 mb-3">{title}</h3>
      <p className="text-sm text-neutral-700 mb-4">{description}</p>
      <div className="text-sm text-neutral-800 font-medium">{contact}</div>
    </div>
  );
}

export default function CardPanel() {
  const [activeTab, setActiveTab] = useState("team");

  // right panel text for each tab
  const contentMap = {
    team: {
      heading: "Care close to you",
      title: "Streamline and Enhance your Healthcare Experience",
      text: "Meet our dedicated medical professionals who provide reliable and compassionate care whenever you need it.",
    },
    support: {
      heading: "We’re Here for You",
      title: "Reliable Customer Support Anytime",
      text: "Our support team is available to answer your questions, guide you through our services, and ensure you always feel heard.",
    },
    equipment: {
      heading: "Equip Your Care",
      title: "Medical Equipment for Sale & Hire",
      text: "Access a wide range of medical equipment — available for purchase or rental — to support your health needs at home or in care facilities.",
    },
  };

  return (
    <div
      className="relative w-full max-w-5xl rounded-[32px] shadow-xl flex flex-col px-12 pt-8 pb-6 mx-auto"
      style={{
        background: "linear-gradient(90deg, rgba(245,246,250,0.53) 60%, rgba(220,221,225,0.43) 100%)",
        backdropFilter: "blur(10px)",
        marginTop: "2rem",
        marginBottom: "2rem",
        border: "1px solid rgba(200,200,210,0.18)",
      }}
    >
      {/* Tabs */}
      <div className="flex justify-center gap-8 mb-6">
        <button
          onClick={() => setActiveTab("team")}
          className={`px-5 py-2 rounded-full font-semibold text-base shadow ${
            activeTab === "team"
              ? "bg-neutral-200 text-neutral-900"
              : "text-neutral-700 font-medium"
          }`}
        >
          Our Team
        </button>
        <button
          onClick={() => setActiveTab("support")}
          className={`px-5 py-2 rounded-full font-semibold text-base shadow ${
            activeTab === "support"
              ? "bg-neutral-200 text-neutral-900"
              : "text-neutral-700 font-medium"
          }`}
        >
          Customers Support
        </button>
        <button
          onClick={() => setActiveTab("equipment")}
          className={`px-5 py-2 rounded-full font-semibold text-base shadow ${
            activeTab === "equipment"
              ? "bg-neutral-200 text-neutral-900"
              : "text-neutral-700 font-medium"
          }`}
        >
          Medical Equipment
        </button>
      </div>

      {/* 50/50 Layout */}
      <div className="flex flex-row gap-8 w-full">
        {/* Left: content changes with tab */}
        <div className="w-1/2 flex flex-row justify-center items-start gap-[3px]">
          {activeTab === "team" && (
            <>
              <TeamCard
                name="Savannah Nguyen"
                location="Kenya"
                role="Resident Doctor"
                img="https://randomuser.me/api/portraits/men/32.jpg"
              />
              <TeamCard
                name="Esther Howard"
                location="Kenya"
                role="Lead Nurse"
                img="https://randomuser.me/api/portraits/women/44.jpg"
              />
              <TeamCard
                name="Darlene Robertson"
                location="Kenya"
                role="Lead Caregiver"
                img="https://randomuser.me/api/portraits/women/65.jpg"
              />
            </>
          )}
          {activeTab === "support" && (
            <InfoCard
              title="Customer Support"
              description="Get in touch with our support team anytime — we’re here to answer your questions and guide you."
              contact="📧 support@healthcare.com | ☎ +254 712 345 678"
            />
          )}
          {activeTab === "equipment" && (
            <InfoCard
              title="Medical Equipment"
              description="Contact us to buy or hire high-quality medical equipment tailored to your care needs."
              contact="📧 equipment@healthcare.com | ☎ +254 733 444 555"
            />
          )}
        </div>

        {/* Right: dynamic text */}
        <div className="w-1/2 flex flex-col justify-start px-6">
          <div className="font-semibold text-neutral-900 mb-2 text-lg">
            {contentMap[activeTab].heading}
          </div>
          <div className="font-bold text-neutral-900 mb-3 text-2xl leading-tight">
            {contentMap[activeTab].title}
          </div>
          <p className="text-neutral-700 mb-4 text-sm">
            {contentMap[activeTab].text}
          </p>
          <a
            href="#"
            className="text-red-600 underline font-semibold text-sm"
          >
            Learn More...
          </a>
        </div>
      </div>
    </div>
  );
}
