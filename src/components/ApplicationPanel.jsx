// src/components/ApplicationPanel.jsx
import React, { useEffect, useRef, useState } from "react";

function ApplicationForm({ role }) {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    gender: "",
    expertise: "",
    workHours: "",
    customHours: "",
    email: "",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const firstInputRef = useRef(null);

  useEffect(() => {
    // focus first input on mount
    firstInputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const buildMailto = () => {
    const to = "info@primahealthcare.co.ke";
    const subject = encodeURIComponent(`Application: ${role} — ${form.fullName || "Unnamed"}`);
    const bodyLines = [
      `Role: ${role}`,
      `Name: ${form.fullName}`,
      `Age: ${form.age}`,
      `Gender: ${form.gender}`,
      `Area of expertise: ${form.expertise}`,
      `Preferred hours: ${form.workHours}${form.workHours === "other" ? ` (${form.customHours})` : ""}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    return `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // basic validation (email + name + phone)
    if (!form.fullName || !form.email || !form.phone) {
      // show quick toast indicating required
      setShowToast("Please fill name, email & phone.");
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    setSubmitting(true);

    const mailto = buildMailto();
    // open mail client
    window.location.href = mailto;

    // show UI feedback
    setShowToast("Your email client should open now.");
    setSuccessMessage(true);

    // auto-hide toast + success after some time
    setTimeout(() => setShowToast(false), 4000);
    setTimeout(() => setSuccessMessage(false), 6000);

    // reset form fields (optional)
    setForm({
      fullName: "",
      age: "",
      gender: "",
      expertise: "",
      workHours: "",
      customHours: "",
      email: "",
      phone: "",
    });

    setSubmitting(false);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-[20px] shadow-md p-6 w-full max-w-full border border-neutral-200"
      >
        <h3 className="text-lg font-bold text-neutral-900 mb-4">Apply to Become a {role}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium text-neutral-700">Full Name</label>
            <input
              ref={firstInputRef}
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-700">Age</label>
            <input
              name="age"
              value={form.age}
              onChange={handleChange}
              type="number"
              className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your age"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-700">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="">Select</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other / Prefer not to say</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-700">Area of Expertise</label>
            <input
              name="expertise"
              value={form.expertise}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="e.g. Elderly Care, Pediatrics"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium text-neutral-700">Preferred Work Hours</label>
            <div className="flex gap-3 mt-1">
              <select
                name="workHours"
                value={form.workHours}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="">Select an option</option>
                <option value="fulltime">Full-time (24 hrs)</option>
                <option value="parttime">Part-time (12 hrs)</option>
                <option value="other">Other</option>
              </select>

              {form.workHours === "other" && (
                <input
                  name="customHours"
                  value={form.customHours}
                  onChange={handleChange}
                  placeholder="Preferred hours"
                  className="w-48 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-700">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-700">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              type="tel"
              className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="+254 7xx xxx xxx"
            />
          </div>
        </div>

        <p className="text-xs text-neutral-500 mt-4 mb-4">
          After clicking Submit, your email client will open so you can send the application to our inbox.
        </p>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-full bg-red-700 hover:bg-black hover:text-white text-white px-5 py-2 font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            {submitting ? "Opening email…" : "Submit Application"}
          </button>

          <button
            type="button"
            onClick={() => {
              // reset quickly
              setForm({
                fullName: "",
                age: "",
                gender: "",
                expertise: "",
                workHours: "",
                customHours: "",
                email: "",
                phone: "",
              });
            }}
            className="inline-flex items-center justify-center rounded-full bg-white border px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition"
          >
            Reset
          </button>
        </div>

        {/* Success message below form */}
        {successMessage && (
          <div className="mt-4 bg-green-50 border border-green-200 text-green-800 text-sm px-3 py-2 rounded-lg">
            ✅ Thank you — your application has been prepared. Please check your email client to send it.
          </div>
        )}
      </form>

      {/* Toast notification */}
      {showToast && (
        <div className="fixed right-6 bottom-6 z-50 bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg">
          {showToast}
        </div>
      )}
    </div>
  );
}

export default function ApplicationPanel() {
  const [activeTab, setActiveTab] = useState("caregiver");

  const contentMap = {
    caregiver: {
      heading: "Join as a Caregiver",
      title: "Make a Difference in Someone’s Life",
      text:
        "Caregivers play a vital role in supporting patients with day-to-day needs and companionship. Submit your details below to apply.",
    },
    nurse: {
      heading: "Join as a Nurse",
      title: "Provide Skilled and Compassionate Care",
      text:
        "Our nurses are the backbone of patient care. Apply below and take the first step in making an impact in community and home-based healthcare.",
    },
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8 px-4 md:px-0">
      <div
        className="relative rounded-[20px] overflow-hidden"
        style={{
          border: "1px solid rgba(200,200,210,0.25)",
        }}
      >
        {/* Background & overlay intentionally omitted for clarity / readability */}
        <div className="relative rounded-[20px] shadow-xl flex flex-col md:flex-row px-6 md:px-12 py-8 bg-white/6">
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Tabs */}
            <div className="flex gap-4 items-center mb-6">
              <button
                onClick={() => setActiveTab("caregiver")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === "caregiver"
                    ? "bg-red-700 text-white shadow"
                    : "bg-white text-neutral-700 border border-neutral-200"
                }`}
                aria-pressed={activeTab === "caregiver"}
              >
                Become a Caregiver
              </button>

              <button
                onClick={() => setActiveTab("nurse")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === "nurse"
                    ? "bg-red-700 text-white shadow"
                    : "bg-white text-neutral-700 border border-neutral-200"
                }`}
                aria-pressed={activeTab === "nurse"}
              >
                Become a Nurse
              </button>
            </div>

            <div className="w-full">
              <ApplicationForm role={activeTab === "nurse" ? "Nurse" : "Caregiver"} />
            </div>
          </div>

          {/* Right column (info) */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 flex flex-col justify-start">
            <div className="font-semibold text-neutral-900 mb-2 text-lg">
              {contentMap[activeTab].heading}
            </div>
            <div className="font-bold text-neutral-900 mb-3 text-2xl leading-tight">
              {contentMap[activeTab].title}
            </div>
            <p className="text-black mb-4 text-sm">{contentMap[activeTab].text}</p>

            <p className="text-sm text-black mb-2">
              For questions about recruitment contact:
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <a
                href="mailto:info@primahealthcare.co.ke"
                className="text-red-700 font-semibold underline text-sm"
              >
                info@primahealthcare.co.ke
              </a>

              <div className="hidden sm:block text-sm text-neutral-600">|</div>

              <div className="flex gap-3 items-center">
                <a className="text-sm text-black" href="tel:+254716244742">
                  +254 716 244 742
                </a>
                <span className="text-sm text-black">|</span>
                <a className="text-sm text-black" href="tel:+254113622926">
                  +254 113 622 926
                </a>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="/services#customer-support"
                className="inline-flex items-center rounded-full bg-white border px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition"
              >
                Learn more about recruitment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
