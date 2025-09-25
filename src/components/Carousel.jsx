import React, { useEffect, useRef, useState } from "react";

/* === Arrow Component === */
function ArrowRight({ className = "", direction = "right" }) {
  return (
    <svg
      className={`w-4 h-4 ${className} ${direction === "left" ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14"></path>
      <path d="M13 6l6 6-6 6"></path>
    </svg>
  );
}

/* === Data === */
const details = {
  "Skilled Nursing Care": {
    image:
      "https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=1200&q=80",
    paragraphs: [
      "This is either residential live-in nursing care or general nursing support services.",
      "Our database of nurses provide palliative/hospice care, general nursing services and procedures (wound management, drug administration, injections and supervision of caregivers).",
      "We have qualified nurses in the fields of geriatric care, palliative nursing and oncology nursing.",
      "All our nurses are registered with the Kenyan Nursing Council and hold valid licences.",
    ],
  },
  "Medical Support Services": {
    image:
      "https://images.unsplash.com/photo-1580281657521-6b5b7d2cbf5e?w=1200&q=80",
    paragraphs: [
      "Through our strategic partnerships with medical providers in allied services e.g. physical therapists, diagnostic services, medical supply companies. Our services extend to provide our clients with all services and supplies that are required in their homes.",
      "This convenient service facilitates our clients who no longer need to navigate the complicated healthcare system on their own.",
      "Our clients also enjoy the added advantage of our setting up doctors appointments for them, we also set up specialised teams required for their care e.g. palliative care",
    ],
  },
  "Assisted Living": {
    image:
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1200&q=80",
    paragraphs: [
      "<strong>Care Giver Services</strong> all our assisted living caregivers are supervised by our staff nurse who issues careplans that guide daily care. Our caregivers are either trained or have had experience in caring for clients who suffer from dementia, alzheimers and other related issues e.g. loneliness and nutritional deficiencies.",
      "<strong>Medical Services Coordination</strong> most geriatrics will need medical oversight. We work very closely with each client’s primary medical doctor who guides the medical care of the clients. Daily reports are sent to the staff nurse to monitor and where necessary raise alerts to the primary doctor.",
    ],
  },
  "Respite Care": {
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
    paragraphs: [
      "A solution for families who need temporary support in the care of their loved one.",
      "Our Carers come in to give a helping hand when you are temporarily indisposed or need a break from your caregiving duties.",
      "We offer daily, weekly or monthly options.",
    ],
  },
  "Holiday and Travel": {
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
    paragraphs: [
      "With the new trend of multi-generational family travel, Prima offers support to tourists wishing to visit the coast or other parts of the country and have special needs.",
      "Services would involve equipment hire like wheelchairs, companion care, doctor visits and appointments. Services extend to both adults and children.",
    ],
  },
  "Recuperative Care": {
    image:
      "https://images.unsplash.com/photo-1588776814546-ec7d7e8c74de?w=1200&q=80",
    paragraphs: [
      "In conjunction with our accomodation partners, we offer care to those would like to be cared for in a homely environment while they recuperate from surgery or illness.",
      "With our partners who extend throughout the country, our team caters to all the medical support you would require.",
      "Our hospital referral partners provide the necessary support in case of any emergencies or if incidents occur.",
    ],
  },
  "Kwaheri Services": {
    image:
      "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?w=1200&q=80",
    paragraphs: [
      "For many of our clients, the end of life is a reality that they have to face. We offer compassionate end of life care in the comfort of your home. As well as support and care for loved ones through this difficult time.",
      "This becomes especially important for clients whose family may live away or who'd appreciate having all logistics handled for them.",
      "Our support extends to evacuation of the deceased, coordination with necessary authorities, autopsy and morgue services as well as final send off per the client's and family's wishes.",
    ],
  },
  "Equipment Sales & Hire": {
    image:
      "https://images.unsplash.com/photo-1583911860630-bc25d7d00f4b?w=1200&q=80",
    paragraphs: [
      "We offer a wide range of medical equipment for sale and hire to support your care needs at home or in care facilities.",
      "This includes mobility aids, hospital beds, and other essential equipment.",
      "Our team can help you select the right equipment and provide delivery and setup services.",
    ],
  },
};

function ProfileModal({ selectedTitle, onClose }) {
  if (!selectedTitle) return null;
  const c = details[selectedTitle];

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="mx-auto my-6 w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "90vh" }}
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-20 bg-white border-b p-4 flex items-center justify-between">
          <h3 className="text-lg md:text-xl font-bold text-neutral-900">
            {selectedTitle}
          </h3>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700"
          >
            Close
          </button>
        </div>

        {/* Scrollable body */}
        <div
          className="overflow-y-auto p-6"
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
        >
          <img
            src={c.image}
            alt={selectedTitle}
            className="w-full h-56 md:h-72 object-cover rounded-lg mb-4"
          />
          <div className="space-y-4 text-neutral-700 text-sm md:text-base leading-relaxed">
            {c.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExpandWorkforce() {
  const [selected, setSelected] = useState(null);
  const [current, setCurrent] = useState(0);
  const cardTitles = Object.keys(details);
  const scrollRef = useRef(null);

  const goTo = (index) => {
    if (index < 0) index = cardTitles.length - 1;
    if (index >= cardTitles.length) index = 0;
    setCurrent(index);
    const card = scrollRef.current?.children[index];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  return (
    <section className="px-4 md:px-8 py-10 max-w-6xl mx-auto pt-10"> {/* Padding-top for the section remains pt-10 */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Explore Our Services
      </h2>
      <p className="text-sm text-neutral-600 mb-6">
        Tap a card to open detailed info. The popup is scrollable on small screens.
      </p>

      {/* cards track */}
      <div
        ref={scrollRef}
        className="flex gap-6 pb-4 no-scrollbar"
        style={{
          WebkitOverflowScrolling: "touch",
          overflowX: "hidden",  // Ensures no horizontal scroll
          paddingTop: "10px",   // Added padding-top specifically to the cards container to ensure visibility
        }}
      >
        {cardTitles.map((title) => {
          const item = details[title];
          return (
            <article
              key={title}
              onClick={() => setSelected(title)}
              className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[30%] bg-white rounded-2xl shadow-sm p-5 flex flex-col justify-between cursor-pointer hover:shadow-lg hover:ring-1 hover:ring-red-400 hover:scale-[1.02] transition"
            >
              <img
                src={item.image}
                alt={title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="text-sm text-neutral-600 line-clamp-3 mt-2">
                {item.paragraphs[0].replace(/<[^>]+>/g, "")}
              </p>
              <div className="mt-4 text-right text-red-600 font-semibold">
                Learn more →
              </div>
            </article>
          );
        })}
      </div>

      {/* Carousel navigation */}
      <div className="w-full max-w-6xl flex items-center justify-between px-4 sm:px-6 md:px-8 mt-4">
        <div>
          <button
            onClick={() => goTo(current - 1)}
            className="bg-neutral-200 rounded-full p-2 shadow hover:bg-neutral-300 transition flex items-center justify-center"
            aria-label="Previous"
          >
            <ArrowRight className="text-neutral-700" direction="left" />
          </button>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="flex gap-2">
            {cardTitles.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === current
                    ? "bg-red-600 w-4 h-1.5"
                    : "bg-neutral-300 w-2 h-1"
                }`}
                style={{
                  boxShadow: idx === current ? "0 2px 8px rgba(0,0,0,0.10)" : undefined,
                  opacity: idx === current ? 1 : 0.7,
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div>
          <button
            onClick={() => goTo(current + 1)}
            className="bg-neutral-900 rounded-full p-2 shadow hover:bg-neutral-800 transition flex items-center justify-center"
            aria-label="Next"
          >
            <ArrowRight className="text-white" direction="right" />
          </button>
        </div>
      </div>

      {/* modal */}
      <ProfileModal
        selectedTitle={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
