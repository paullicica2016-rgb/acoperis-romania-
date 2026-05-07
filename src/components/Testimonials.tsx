"use client";

import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    initials: "CP",
    name: "Cristian P.",
    when: "Acum 3 saptamani",
    text: "Au montat un acoperis nou la casa noastra. Lucrare impecabila, totul gata in 5 zile. Echipa serioasa si au lasat curat dupa ei.",
    rating: 5,
  },
  {
    initials: "IR",
    name: "Ioana R.",
    when: "Acum 2 luni",
    text: "Reparatie urgenta dupa furtuna — au venit a doua zi. Au schimbat tiglele sparte si au verificat tot acoperisul. Recomand!",
    rating: 5,
  },
  {
    initials: "AS",
    name: "Andrei S.",
    when: "Acum 1 saptamana",
    text: "Am inlocuit jgheaburile si am pus parazapezi. Pret corect, comunicare excelenta inainte si dupa lucrare.",
    rating: 5,
  },
  {
    initials: "BT",
    name: "Bogdan T.",
    when: "Acum 5 zile",
    text: "Echipa profesionista, materiale Bilka de calitate. Acoperisul arata extraordinar. Au dat garantie scrisa pe lucrare.",
    rating: 5,
  },
  {
    initials: "MD",
    name: "Mihai D.",
    when: "Acum 1 luna",
    text: "Renovare completa a acoperisului — sarpanta, invelitoare, jgheaburi. Totul executat la timp si la pretul anuntat.",
    rating: 5,
  },
  {
    initials: "EV",
    name: "Elena V.",
    when: "Acum 2 saptamani",
    text: "Mansardare cu izolatie si tigla metalica. Lucreaza curat, respecta termenele si comunica permanent cu clientul.",
    rating: 5,
  },
];

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.5 29.3 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 16.1 18.9 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.5 29.3 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 43.5c5.2 0 9.9-2 13.4-5.3l-6.2-5.2c-2 1.4-4.5 2.2-7.2 2.2-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.1 16.2 43.5 24 43.5z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.7l6.2 5.2c-.4.4 6.6-4.8 6.6-14.9 0-1.2-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = useCallback((dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 396;
    if (dir === "right" && el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      scroll("right");
    }, 4500);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [scroll]);

  const pauseAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };
  const resumeAutoplay = () => {
    autoplayRef.current = setInterval(() => scroll("right"), 4500);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el?.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[#0d1547] font-semibold text-sm tracking-[0.25em] mb-3 block">
            // RECENZII
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0d1547] mb-6">
            Ce spun <span className="text-gray-700">clientii</span>
          </h2>
          {/* Google rating badge */}
          <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
            <GoogleG className="w-5 h-5" />
            <span className="text-white font-bold">4.9</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/60 text-sm">· Google Reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white rounded-2xl p-7 border border-gray-200 shadow-sm snap-start shrink-0 w-[300px] sm:w-[360px] flex flex-col"
            >
              {/* Stars + decorative quote */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote
                  size={36}
                  className="text-[#0d1547] rotate-180 -mr-1 -mt-1"
                  strokeWidth={0}
                  fill="currentColor"
                />
              </div>

              <p className="text-gray-600 italic leading-relaxed mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0d1547] flex items-center justify-center text-white text-xs font-bold tracking-wider">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.when}</div>
                  </div>
                </div>
                <GoogleG className="w-5 h-5 opacity-70" />
              </div>
            </div>
          ))}
        </div>

        {/* Nav arrows below carousel */}
        <div className="flex justify-center gap-3 mt-8">
          <button
            aria-label="Recenzie anterioara"
            onClick={() => {
              scroll("left");
              pauseAutoplay();
              resumeAutoplay();
            }}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
              canScrollLeft
                ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                : "border-gray-200 text-gray-300"
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Recenzie urmatoare"
            onClick={() => {
              scroll("right");
              pauseAutoplay();
              resumeAutoplay();
            }}
            className="w-11 h-11 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
