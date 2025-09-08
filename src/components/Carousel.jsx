import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, X } from "lucide-react";

export default function Carousel() {
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

  const setsCount = 1000;
  const loopItems = Array(setsCount).fill(items).flat();

  const buttonRefs = useRef([]);
  const [buttonWidths, setButtonWidths] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const offsetRef = useRef(offset);

  // Popup state
  const [activeItem, setActiveItem] = useState(null);

  // Measure button widths
  useEffect(() => {
    setButtonWidths(
      buttonRefs.current.map((ref) => (ref ? ref.offsetWidth : 0))
    );
  }, [items]);

  const gap = 32;
  const oneSetWidth =
    buttonWidths.reduce((a, b) => a + b, 0) + gap * (items.length - 1);

  // Start in middle set
  useEffect(() => {
    if (buttonWidths.length === items.length && offset === 0) {
      const middleSet = Math.floor(setsCount / 2);
      setOffset(oneSetWidth * middleSet);
      offsetRef.current = oneSetWidth * middleSet;
    }
  }, [buttonWidths, oneSetWidth, offset, items.length, setsCount]);

  // Continuous scroll
  useEffect(() => {
    if (buttonWidths.length !== items.length) return;
    const speed = 5.2;
    let raf;
    const animate = () => {
      offsetRef.current += speed;
      if (offsetRef.current >= oneSetWidth * (setsCount - 2)) {
        setIsTransitioning(false);
        offsetRef.current = oneSetWidth * Math.floor(setsCount / 2);
        setOffset(offsetRef.current);
        setTimeout(() => setIsTransitioning(true), 0);
      } else {
        setOffset(offsetRef.current);
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [oneSetWidth, buttonWidths.length, items.length, setsCount]);

  // Manual scroll
  const scrollLeft = () => {
    offsetRef.current -= 80;
    if (offsetRef.current < oneSetWidth) {
      setIsTransitioning(false);
      offsetRef.current = oneSetWidth * Math.floor(setsCount / 2);
      setOffset(offsetRef.current);
      setTimeout(() => setIsTransitioning(true), 0);
    } else {
      setIsTransitioning(true);
      setOffset(offsetRef.current);
    }
  };
  const scrollRight = () => {
    offsetRef.current += 80;
    if (offsetRef.current >= oneSetWidth * (setsCount - 2)) {
      setIsTransitioning(false);
      offsetRef.current = oneSetWidth * Math.floor(setsCount / 2);
      setOffset(offsetRef.current);
      setTimeout(() => setIsTransitioning(true), 0);
    } else {
      setIsTransitioning(true);
      setOffset(offsetRef.current);
    }
  };

  return (
    <div
      className="carousel-container w-full flex items-center justify-between px-8 py-2"
      style={{ minHeight: "40px", paddingTop: "1rem" }}
    >
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="bg-neutral-200 rounded-full w-6 h-6 shadow hover:bg-neutral-300 transition flex items-center justify-center"
        aria-label="Previous"
      >
        <ChevronLeft className="text-neutral-700 w-3 h-3" />
      </button>

      {/* Scrolling Items */}
      <div className="flex-1 flex items-center justify-center relative w-[80%] overflow-hidden h-12">
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
            width: "max-content",
            transform: `translateX(-${offset}px)`,
            transition: isTransitioning ? "transform 0.1s linear" : "none",
          }}
        >
          {loopItems.map((item, idx) => (
            <button
              key={idx}
              ref={idx < items.length ? (el) => (buttonRefs.current[idx] = el) : null}
              onClick={() => setActiveItem(item)}
              className="flex items-center gap-2 whitespace-nowrap px-6 py-2 rounded-full font-medium text-base bg-white text-neutral-700 hover:bg-red-500 hover:text-white shadow transition-colors duration-200"
              style={{
                width: "auto",
                maxWidth: "100%",
              }}
            >
              {item}
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="bg-neutral-900 rounded-full w-6 h-6 shadow hover:bg-neutral-800 transition flex items-center justify-center"
        aria-label="Next"
      >
        <ChevronRight className="text-white w-3 h-3" />
      </button>

      {/* Popup Modal */}
      {activeItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] shadow-lg relative">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-neutral-200"
            >
              <X className="w-5 h-5 text-neutral-700" />
            </button>
            <h2 className="text-lg font-bold mb-3 text-neutral-900">{activeItem}</h2>
            <p className="text-sm text-neutral-600">
              Here you can add details, description, or extra content about{" "}
              <span className="font-semibold">{activeItem}</span>.  
              Replace this text with whatever info you want to display.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}