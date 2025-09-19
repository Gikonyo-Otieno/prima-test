import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, X, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Carousel() {
  const navigate = useNavigate();

  const items = [
    "Skilled Nursing Care",
    "Medical Support Services",
    "Assisted Living",
    "Respite Care",
    "Holiday and Travel",
    "Recuperative Care",
    "Kwaheri Services",
    "Equipment Sales & Hire",
  ];

  const details = {
    "Skilled Nursing Care": {
      title: "Skilled Nursing Care",
      imageA:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=60",
      paragraphs: [
        "This is either residential live-in nursing care or general nursing support services.",
        "Our database of nurses provide palliative/hospice care, general nursing services and procedures (wound management, drug administration, injections and supervision of caregivers).",
        "We have qualified nurses in the fields of geriatric care, palliative nursing and oncology nursing.",
        "All our nurses are registered with the Kenyan Nursing Council and hold valid licences.",
      ],
    },
    "Medical Support Services": {
      title: "Medical Support Services",
      imageA:
        "https://images.unsplash.com/photo-1580281657521-6b5b7d2cbf5e?w=1200&q=60",
      paragraphs: [
        "Through our strategic partnerships with medical providers in allied services e.g. physical therapists, diagnostic services, medical supply companies. Our services extend to provide our clients with all services and supplies that are required in their homes.",
        "This convenient service facilitates our clients who no longer need to navigate the complicated healthcare system on their own.",
        "Our clients also enjoy the added advantage of our setting up doctors appointments for them, we also set up specialised teams required for their care e.g. palliative care",
      ],
    },
    "Assisted Living": {
      title: "Assisted Living",
      imageA:
        "https://images.unsplash.com/photo-1580281657521-6b5b7d2cbf5e?w=1200&q=60",
      paragraphs: [
        "<strong>Care Giver Services</strong> - all our assisted living caregivers are supervised by our staff nurse who issues careplans that guide daily care. Our caregivers are either trained or have had experience in caring for clients who suffer from dementia, alzheimers and other related issues e.g. loneliness and nutritional deficiencies",
        "<strong>Medical Services Coordination</strong> - most geriatrics will need medical oversight. We work very closely with each client’s primary medical doctor who guides the medical care of the clients. Daily reports are sent to the staff nurse to monitor and where necessary raise alerts to the primary doctor",
      ],
    },
    "Respite Care": {
      title: "Respite Care",
      imageA:
        "https://images.unsplash.com/photo-1580281657521-6b5b7d2cbf5e?w=1200&q=60",
      paragraphs: [
        "A solution for families who need temporary support in the care of their loved one.",
        "Our Carers come in to give a helping hand when you are temporarily indisposed or need a break from your caregiving duties.",
        "We offer daily, weekly or monthly options.",
      ],
    },
    "Holiday and Travel": {
      title: "Holiday and Travel",
      imageA:
        "https://images.unsplash.com/photo-1580281657521-6b5b7d2cbf5e?w=1200&q=60",
      paragraphs: [
        "With the new trend of multi-generational family travel, Prima offers support to tourists wishing to visit the coast or other parts of the country and have special needs.",
        "Services would involve equipment hire like wheelchairs, companion care, doctor visits and appointments. Services extend to both adults and children.",
      ],
    },
    "Recuperative Care": {
      title: "Recuperative Care",
      imageA:
        "https://images.unsplash.com/photo-1580281657521-6b5b7d2cbf5e?w=1200&q=60",
      paragraphs: [
        "In conjunction with our accomodation partners, we offer care to those would like to be cared for in a homely environment while they recuperate from surgery or illness.",
        "With our partners who extend throughout the country, our team caters to all the medical support you would require.",
        "Our hospital referral partners provide the necessary support in case of any emergencies or if incidents occur.",
      ],
    },
    "Kwaheri Services": {
      title: "Kwaheri Services",
      imageA:
        "https://images.unsplash.com/photo-1580281657521-6b5b7d2cbf5e?w=1200&q=60",
      paragraphs: [
        "For many of our clients, the end of life is a reality that they have to face. We offer compassionate end of life care in the comfort of your home. As well as support and care for loved ones through this difficult time.",
        "This becomes especially important for clients whose family may live away or who'd appreciate having all logistics handled for them.",
        "Our support extends to evacuation of the deceased, coordination with necessary authorities, autopsy and morgue services as well as final send off per the client's and family's wishes.",
      ],
    },
    "Equipment Sales & Hire": {
      title: "Equipment Sales & Hire",
      imageA:
        "https://images.unsplash.com/photo-1580281657521-6b5b7d2cbf5e?w=1200&q=60",
      paragraphs: [
        "We offer a wide range of medical equipment for sale and hire to support your care needs at home or in care facilities.",
        "This includes mobility aids, hospital beds, and other essential equipment.",
        "Our team can help you select the right equipment and provide delivery and setup services.",
      ],
    },
  };

  const buttonRefs = useRef([]);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [buttonWidths, setButtonWidths] = useState([]);
  const [positions, setPositions] = useState([]);
  const [visibleWidth, setVisibleWidth] = useState(0);

  const [offset, setOffset] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const modalRef = useRef(null);

  const gap = 32;

  useEffect(() => {
    const measure = () => {
      const widths = buttonRefs.current.map((ref) =>
        ref ? Math.round(ref.offsetWidth) : 0
      );
      setButtonWidths(widths);
      const pos = buttonRefs.current.map((ref) =>
        ref ? Math.round(ref.offsetLeft) : 0
      );
      setPositions(pos);
      if (containerRef.current)
        setVisibleWidth(Math.round(containerRef.current.clientWidth));
    };
    const t = setTimeout(measure, 0);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [items]);

  const totalWidth = trackRef.current
    ? Math.round(trackRef.current.scrollWidth)
    : buttonWidths.length
    ? buttonWidths.reduce((a, b) => a + b, 0) + gap * (items.length - 1)
    : 0;

  const maxOffset = Math.max(totalWidth - visibleWidth, 0);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  const getIndexFromOffset = (off) => {
    if (!positions.length) return 0;
    for (let i = positions.length - 1; i >= 0; i--) {
      if (positions[i] <= off + 1) return i;
    }
    return 0;
  };

  const scrollLeft = () => {
    const idx = getIndexFromOffset(offset);
    const newIdx = Math.max(idx - 1, 0);
    const target = clamp(positions[newIdx] || 0, 0, maxOffset);
    setOffset(target);
  };

  const scrollRight = () => {
    const idx = getIndexFromOffset(offset);
    const newIdx = Math.min(idx + 1, Math.max(0, items.length - 1));
    const target = clamp(positions[newIdx] || 0, 0, maxOffset);
    setOffset(target);
  };

  useEffect(() => {
    setOffset((prev) => clamp(prev, 0, maxOffset));
  }, [maxOffset]);

  const trackJustifyClass =
    totalWidth <= visibleWidth ? "justify-center" : "justify-start";

  useEffect(() => {
    if (activeItem) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [activeItem]);

  const getContent = (name) => {
    return details[name] || {
      title: name,
      imageA:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=60",
      paragraphs: ["Description coming soon."],
    };
  };

  const handleLearnMore = () => {
    setActiveItem(null);
    navigate("/services#customer-support");
  };

  const leftDisabled = getIndexFromOffset(offset) <= 0;
  const rightDisabled = positions.length
    ? positions[getIndexFromOffset(offset)] >= maxOffset
    : false;

  return (
    <div
      className="carousel-container w-full flex items-center justify-between px-8 py-2"
      style={{ minHeight: "40px", paddingTop: "1px" }}
    >
      <button
        type="button"
        onClick={scrollLeft}
        disabled={leftDisabled}
        className={`relative rounded-full w-6 h-6 shadow transition flex items-center justify-center ${
          leftDisabled
            ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
            : "bg-neutral-200 hover:bg-neutral-300"
        }`}
        aria-label="Previous"
      >
        <ChevronLeft className="w-3 h-3" />
      </button>

      <div
        ref={containerRef}
        className={`flex-1 flex items-center ${trackJustifyClass} relative w-[80%] overflow-hidden h-12 mx-4`}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-200 ease-out"
          style={{
            gap: `${gap}px`,
            width: "max-content",
            transform: `translateX(-${offset}px)`,
          }}
        >
          {items.map((item, idx) => (
            <button
              type="button"
              key={idx}
              ref={(el) => (buttonRefs.current[idx] = el)}
              onClick={() => setActiveItem(item)}
              className="inline-flex items-center justify-center h-full gap-2 whitespace-nowrap px-6 rounded-full font-medium text-base bg-white text-neutral-700 hover:bg-red-500 hover:text-white shadow transition-colors duration-200 cursor-pointer"
            >
              {item}
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollRight}
        disabled={rightDisabled}
        className={`relative rounded-full w-6 h-6 shadow transition flex items-center justify-center ${
          rightDisabled
            ? "bg-neutral-800/30 text-neutral-400 cursor-not-allowed"
            : "bg-neutral-900 hover:bg-neutral-800"
        }`}
        aria-label="Next"
      >
        <ChevronRight
          className={`w-3 h-3 ${rightDisabled ? "text-neutral-400" : "text-white"}`}
        />
      </button>

      {activeItem && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4"
          onClick={() => setActiveItem(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl relative w-full max-w-[880px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ borderRadius: "14px" }}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute right-4 top-4 p-1 rounded-full hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-300 z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-neutral-700" />
            </button>

            {(() => {
              const c = getContent(activeItem);
              return (
                <div className="flex flex-col md:flex-row">
                  {/* Left image only */}
                  <div className="relative md:w-1/2 w-full flex items-center justify-center bg-white p-6">
                    <div
                      className="absolute left-0 top-1/4 h-24 md:h-40 bg-red-600"
                      style={{ width: "38%", transform: "translateX(-20%)" }}
                      aria-hidden
                    />
                    <div className="relative z-10 w-[55%] md:w-[48%]">
                      <img
                        src={c.imageA}
                        alt={`${c.title} main`}
                        className="w-full h-[260px] md:h-[320px] object-cover rounded-sm shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Right column text */}
                  <div className="md:w-1/2 w-full p-8 flex flex-col justify-start">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-neutral-900">
                        {c.title}
                      </h2>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="h-2 w-28 bg-red-600 rounded-sm" />
                        <div className="h-2 w-6 bg-red-600 rounded-sm" />
                        <div className="h-2 w-6 bg-red-600 rounded-sm opacity-60" />
                        <div className="h-2 w-6 bg-red-600 rounded-sm opacity-40" />
                      </div>
                    </div>

                    <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed text-sm md:text-base">
                      {c.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={handleLearnMore}
                        className="inline-flex items-center rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                      >
                        Learn More
                        <ArrowUpRight className="text-neutral-950 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
