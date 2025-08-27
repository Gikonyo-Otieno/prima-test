import { useState } from "react";

function ApplicationForm({ role }) {
  return (
    <form className="bg-white/80 rounded-xl shadow flex flex-col p-6 min-w-[320px] max-w-[360px] mx-1 transition-all duration-300 border border-neutral-200 text-left">
      <h3 className="text-lg font-bold text-neutral-900 mb-4">
        Apply to Become a {role}
      </h3>

      <label className="text-sm font-medium text-neutral-700 mb-1">Full Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="mb-3 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <label className="text-sm font-medium text-neutral-700 mb-1">Age</label>
      <input
        type="number"
        placeholder="Enter your age"
        className="mb-3 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <label className="text-sm font-medium text-neutral-700 mb-1">Sex</label>
      <select className="mb-3 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400">
        <option value="">Select</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other / Prefer not to say</option>
      </select>

      <label className="text-sm font-medium text-neutral-700 mb-1">Area of Expertise</label>
      <input
        type="text"
        placeholder="e.g. Elderly Care, Pediatrics"
        className="mb-3 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <label className="text-sm font-medium text-neutral-700 mb-1">Area of Interest</label>
      <input
        type="text"
        placeholder="e.g. Home Care, Community Health"
        className="mb-3 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <label className="text-sm font-medium text-neutral-700 mb-1">Contact Information</label>
      <input
        type="email"
        placeholder="Email Address"
        className="mb-3 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="mb-3 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <p className="text-xs text-neutral-500 mb-4">
        After submission, our recruitment team will review your application and contact you
        with next steps if selected.
      </p>

      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg text-sm shadow"
      >
        Submit Application
      </button>
    </form>
  );
}

export default function ApplicationPanel() {
  const [activeTab, setActiveTab] = useState("caregiver");

  const contentMap = {
    caregiver: {
      heading: "Join as a Caregiver",
      title: "Make a Difference in Someone’s Life",
      text: "Caregivers play a vital role in supporting patients with day-to-day needs and companionship. Submit your details below to apply.",
    },
    nurse: {
      heading: "Join as a Nurse",
      title: "Provide Skilled and Compassionate Care",
      text: "Our nurses are the backbone of patient care. Apply below and take the first step in making an impact in community and home-based healthcare.",
    },
  };

  const bgImageUrl =
    "https://images.unsplash.com/photo-1504814532849-927ffcf8fdf3?auto=format&fit=crop&w=1600&q=80"; // Replace with your own

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 rounded-[32px] overflow-hidden"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px) brightness(0.75)",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 rounded-[32px] bg-white/30 backdrop-blur-md"></div>

      {/* Foreground Content */}
      <div className="relative rounded-[32px] shadow-xl flex flex-col px-12 pt-8 pb-6"
        style={{
          border: "1px solid rgba(200,200,210,0.25)",
        }}
      >
        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-6">
          <button
            onClick={() => setActiveTab("caregiver")}
            className={`px-5 py-2 rounded-full font-semibold text-base shadow ${
              activeTab === "caregiver"
                ? "bg-neutral-200 text-neutral-900"
                : "text-neutral-700 font-medium"
            }`}
          >
            Become a Caregiver
          </button>
          <button
            onClick={() => setActiveTab("nurse")}
            className={`px-5 py-2 rounded-full font-semibold text-base shadow ${
              activeTab === "nurse"
                ? "bg-neutral-200 text-neutral-900"
                : "text-neutral-700 font-medium"
            }`}
          >
            Become a Nurse
          </button>
        </div>

        {/* 50/50 Layout */}
        <div className="flex flex-row gap-8 w-full">
          {/* Left: Forms */}
          <div className="w-1/2 flex flex-row justify-center items-start gap-[3px]">
            {activeTab === "caregiver" && <ApplicationForm role="Caregiver" />}
            {activeTab === "nurse" && <ApplicationForm role="Nurse" />}
          </div>

          {/* Right: Info */}
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
              Learn more about recruitment.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}