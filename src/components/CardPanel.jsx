import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";

/** WhatsApp icon SVG (inline for easy styling) */
function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12.07c0 4.97-4.03 9-9 9a8.9 8.9 0 01-3.82-.83L3 20l1.73-5.14A8.9 8.9 0 013 12.07C3 7.1 7.03 3.07 12 3.07s9 4.03 9 9z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.7 11.2c.2-.1 1.1-.6 1.3-.6.2 0 .4 0 .6.6.2.6.8 2.3 2 .8.8-1 1.1-1 .6-1.8-.3-.6-.6-.8-.8-.8-.3 0-.6-.1-1 .1-.4.2-.8.7-1.1 1.2-.2.4-.5.6-.8.6-.3 0-.5-.2-.8-.3-.4-.1-.8-.1-1.1-.1-.3 0-.6.3-.8.5-.2.2-.5.6-.4.9.1.3.6.9 1 1z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** InfoCard */
function InfoCard({ title, description, contact = null, compact = false, showLearnMore = true }) {
  const baseClasses =
    "bg-white/90 rounded-xl shadow flex flex-col items-center justify-between p-5 md:p-6 mx-1 border border-neutral-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg";
  const sizeClasses = compact
    ? "min-w-[140px] max-w-[180px] md:min-w-[220px] md:max-w-[260px]"
    : "min-w-[220px] max-w-[320px] md:min-w-[280px] md:max-w-[360px]";

  // contact: { email, phones: [phone1, phone2], wa }
  const email = contact?.email ?? "info@primahealthcare.co.ke";
  const phones = contact?.phones ?? ["+254 716 244 742", "+254 113 622 926"];
  const wa = contact?.wa ?? "254716244742";

  // helpers to produce tel: strings (strip formatting)
  const toTelHref = (p) => `tel:${p.replace(/[^\d+]/g, "")}`;
  const waHref = (n) => `https://wa.me/${n.replace(/[^\d+]/g, "")}`;

  return (
    <div
      className={`${baseClasses} ${sizeClasses}`}
      style={{ boxShadow: "0 6px 20px rgba(220,30,30,0.04)" }}
      role="group"
      aria-label={title}
    >
      <div className="w-full">
        <h3 className={`font-bold text-neutral-900 mb-3 ${compact ? "text-sm" : "text-lg"}`}>{title}</h3>

        <p className={`text-sm text-neutral-700 mb-4 ${compact ? "text-xs" : ""}`}>{description}</p>

        {/* SMALL SCREENS: show email + phones each on its own line, then WhatsApp icon */}
        <div className="block md:hidden mb-3 text-sm text-neutral-800 font-medium leading-relaxed text-center">
          <a
            href={`mailto:${email}`}
            className="block whitespace-nowrap mb-1 hover:text-red-600"
            aria-label={`Email ${email}`}
          >
            {email}
          </a>

          <a href={toTelHref(phones[0])} className="block whitespace-nowrap mb-1 hover:text-red-600">
            {phones[0]}
          </a>

          <a href={toTelHref(phones[1])} className="block whitespace-nowrap mb-2 hover:text-red-600">
            {phones[1]}
          </a>

          <a
            href={waHref(wa)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 justify-center"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="text-green-600" />
            <span className="font-semibold text-green-600 text-sm">Chat on WhatsApp</span>
          </a>
        </div>

        {/* MD+ screens: phones on one line with |, WhatsApp CTA below */}
        <div className="hidden md:flex flex-col items-center text-sm text-neutral-800 font-medium leading-relaxed mb-3">
          {/* Email (single line, clickable) */}
          <a href={`mailto:${email}`} className="text-neutral-800 hover:text-red-600 mb-2">
            {email}
          </a>

          {/* Phones inline with | */}
          <div className="flex items-center gap-3 mb-2">
            <a href={toTelHref(phones[0])} className="hover:text-red-600">
              {phones[0]}
            </a>
            <span className="text-neutral-400 select-none">|</span>
            <a href={toTelHref(phones[1])} className="hover:text-red-600">
              {phones[1]}
            </a>
          </div>

          {/* WhatsApp CTA below the phone line */}
          <a
            href={waHref(wa)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:opacity-90"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="text-green-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {showLearnMore && (
        <Link to="/services#customer-support" className="mt-2 text-red-600 underline font-semibold text-sm hover:text-red-700">
          Learn More...
        </Link>
      )}
    </div>
  );
}

/** CardPanel main */
export default function CardPanel() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("services");
  const panelRef = useRef(null);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => setAnimateKey((k) => k + 1), [activeTab]);

  useEffect(() => {
    if (location.hash === "#customer-support") {
      setActiveTab("support");
      requestAnimationFrame(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  const contactObj = {
    email: "info@primahealthcare.co.ke",
    phones: ["+254 716 244 742", "+254 113 622 926"],
    wa: "254716244742",
  };

  const contentMap = {
    services: { heading: "", title: "", text: "" }, // first tab: minimal per your request
    support: {
      heading: "We’re Here for You",
      title: "Reliable Customer Support Anytime",
      text: "Our support team is available to answer your questions, guide you through our services, and ensure you always feel heard.",
    },
    equipment: {
      heading: "Equip Your Care",
      title: "Medical Equipment for Sale & Hire",
      text: "Access a wide range of medical equipment available for purchase or rental to support your health needs at home or in care facilities.",
    },
  };

  const serviceCards = [
    {
      title: "Long Term Care",
      description:
        "Long term care delivered in the comfort of your home or at a trusted facility. Ongoing nursing, personal care and support tailored to long term needs.",
    },
    {
      title: "Short Term Care",
      description:
        "Short term, goal oriented care to support recovery after surgery, illness, or a hospital stay delivered at home or in partner facilities.",
    },
    {
      title: "Healthcare Services",
      description:
        "A broad range of clinical and support services including therapy, hospital coordination and care planning to keep you safe and supported.",
    },
  ];

  return (
    <section
      ref={panelRef}
      id="CardPanel"
      data-cardpanel
      className="relative w-full max-w-6xl rounded-[28px] shadow-xl flex flex-col px-4 md:px-12 pt-6 pb-8 mx-auto"
      style={{
        background: "linear-gradient(90deg, rgba(245,246,250,0.53) 60%, rgba(220,221,225,0.43) 100%)",
        backdropFilter: "blur(10px)",
        marginTop: "2rem",
        marginBottom: "2rem",
        border: "1px solid rgba(200,200,210,0.18)",
      }}
    >
      {/* Tabs */}
      <div className="flex justify-center gap-4 md:gap-8 mb-5 md:mb-6">
        <button
          onClick={() => setActiveTab("services")}
          className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base shadow ${
            activeTab === "services" ? "bg-neutral-200 text-neutral-900" : "text-neutral-700"
          }`}
        >
          Our Services
        </button>

        <button
          onClick={() => setActiveTab("support")}
          className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base shadow ${
            activeTab === "support" ? "bg-neutral-200 text-neutral-900" : "text-neutral-700"
          }`}
        >
          Customer Support
        </button>

        <button
          onClick={() => setActiveTab("equipment")}
          className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base shadow ${
            activeTab === "equipment" ? "bg-neutral-200 text-neutral-900" : "text-neutral-700"
          }`}
        >
          Medical Equipment
        </button>
      </div>

      {/* Content */}
      {activeTab === "services" ? (
        <div className="w-full flex justify-center">
          <div
            key={`service-cards-${animateKey}`}
            className="flex flex-col sm:flex-row items-stretch gap-4 md:gap-6 py-4 px-2 md:px-6"
            style={{ alignItems: "stretch" }}
          >
            {serviceCards.map((c, i) => (
              <div key={c.title} style={{ transitionDelay: `${i * 80}ms` }} className="opacity-0 translate-y-2 animate-fade-in-up">
                <InfoCard title={c.title} description={c.description} contact={contactObj} showLearnMore={true} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <InfoCard
              title={activeTab === "support" ? "Customer Support" : "Medical Equipment"}
              description={
                activeTab === "support"
                  ? "Get in touch with our support team anytime we’re here to answer your questions and guide you."
                  : "Contact us to buy or hire high quality medical equipment tailored to your care needs."
              }
              contact={contactObj}
              showLearnMore={activeTab !== "support"}
            />
          </div>

          <div className="md:w-1/2 w-full flex flex-col justify-start px-2 md:px-6">
            <div className="font-semibold text-neutral-900 mb-2 text-lg">{contentMap[activeTab].heading}</div>

            <div className="font-bold text-neutral-900 mb-3 text-2xl leading-tight">{contentMap[activeTab].title}</div>

            <p className="text-neutral-700 mb-4 text-sm">{contentMap[activeTab].text}</p>

            {activeTab === "equipment" && (
              <Link to="/services#customer-support" className="text-red-600 underline font-semibold text-sm hover:text-red-700">
                Learn More...
              </Link>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 420ms cubic-bezier(.2,.9,.2,1) forwards;
        }
      `}</style>
    </section>
  );
}
